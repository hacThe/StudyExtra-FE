import React , {useState, useEffect, useRef} from 'react';
import { useDispatch, useSelector } from "react-redux";
import { AiFillLike } from "react-icons/ai";
import { FaCommentAlt } from "react-icons/fa";
import CommentItem from './CommentItem';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import '../scss/Post.scss';
import { FiMoreHorizontal } from "react-icons/fi";
import { articleActions } from '../../../../actions/article.action';
import EditPostSection from './EditPostSection';
import { IoImageOutline , IoSend} from "react-icons/io5";


const Post = ({post}) => {
    const dispatch = useDispatch();

    const [isLiked, setLiked] = useState(false);
    const interactPost = () => {
        setLiked(!isLiked);
    }
    console.log("post: ",post);
    useSelector((state) => {
        console.log({ state });
    })

    const userInfo = useSelector(state => state.authentication.user);
    console.log("userInfo", userInfo);

    const calculateTime = (timeString) => {
        // console.log("timeString", timeString);
        const postTime = new Date(timeString);
        // console.log("calculating time", Math.abs(new Date() - postTime));
        var diff = Math.abs(new Date() - postTime);
        if(diff<1000*60){
            return ("0 phút trước");
        }
        else if(diff<1000*60*60){
            return (Math.floor(diff/1000/60) +" phút trước");
        }
        else if(diff<1000*60*60*24){
            return(Math.floor(diff/1000/60/60) +" giờ trước");
        }
        else if(diff<1000*60*60*24*30) {
            return(Math.floor(diff/1000/60/60/24) +" ngày trước");
        }
        else if(diff<1000*60*60*24*365) {
            return(Math.floor(diff/1000/60/60/24/30) +" tháng trước");
        }
        else{
            return (Math.floor(diff/1000/60/60/24/365) +" năm trước")
        }
    }

    const [isOpenManageModal, setIsOpenManageModal] = useState(false);
    const [isEditPost, setIsEditPost] = useState(false);

    const childRef = useRef(null);

    const editPost = () => {
        console.log("childRef", childRef);
        childRef.current.editArticle();    
    }
    

    // Count comment
    const countReplyComment = (replyComment) =>{
        var res = 0;
        for(var i = 0; i < replyComment.length; i++){
            res += countReplyComment(replyComment[i].replyComment) + 1;
        }        
        return res;
    }

    const commentCount = (comments) => {
        console.log("comments", comments)
        var res = 0;
        for(var i = 0; i < comments.length; i++){
            res += countReplyComment(comments[i].replyComment) + 1;
        }        
        console.log("total", res);
        return res;
    }

    // Add big comment
    const [userReplyDisplay, setUserReplyDisplay] = useState(false);
    const changeUserReplyDisplay = () => {
        setUserReplyDisplay(!userReplyDisplay);
    }

    const commentRef = useRef(null);
    const addBigComment = () => {
        console.log("commentRef.current.value", commentRef.current.value);
        const data = {
            userID: userInfo._id,
            postID: post._id,
            content: commentRef.current.value,
            userTagID: "",
            imgUrl: "",
            type: "1",
            replyComment: [],
        }
    }

    const [currentCommnentImg, setCurrentCommnentImg] = useState("");


    return (
        
        <div className="question-body">
            {
                !isEditPost
                ?   <div>
                        <div className="question-header">
                            <div className='left-heading'>
                                <img className="user-avatar"
                                    src={post.userAvatar}
                                ></img>
                                <p className="user-name">
                                    {post.name}
                                </p>
                                <p className="post-time">{calculateTime(post.createdAt)}</p>
                            </div>
                            {
                                typeof userInfo == 'undefined' ||
                                (typeof userInfo != 'undefined' && userInfo._id != post.userID )
                                ? (null) :
                                <div className='right-heading'>
                                    <FiMoreHorizontal
                                        className='more-icon'
                                        size={24}
                                        onClick={()=>{
                                            setIsOpenManageModal(!isOpenManageModal);
                                        }}
                                    >
                                        
                                    </FiMoreHorizontal>
                                    {
                                        !isOpenManageModal ? (null) 
                                        :<div className="manage-modal">
                                            <div 
                                                className="modal-item"
                                                onClick={()=>{
                                                    setIsEditPost(!isEditPost);
                                                    setIsOpenManageModal(!isOpenManageModal);
                                                    
                                                }}
                                            >
                                                Chỉnh sửa
                                            </div>
                                            <div 
                                                className="modal-item"
                                                onClick={()=>{
                                                    dispatch(articleActions.deleteArticle(post._id))
                                                    setIsOpenManageModal(!isOpenManageModal);
                                                }}
                                            >
                                                Xoá
                                            </div>
                                            <div className="modal-item">
                                                Ẩn
                                            </div>
                                        </div>
                                    }
                                </div>
                            }   
                            
                            
                        </div>
                        <div className='question-detail'>
                            <p className="question-content">
                                {post.contents}
                            </p>
                            <Carousel className='carousel-slider picture-slider' showThumbs={false} style={{borderRadius: '20px'}} axis='horizontal'>
                                {
                                    post.imgUrl.map((imgUrl) =>{
                                        return (
                                            <div className='question-picture-container'>
                                                <img className="question-picture"
                                                    height={500}
                                                    style={{
                                                        objectFit: "contain"
                                                    }}
                                                    src={imgUrl}
                                                ></img>
                                            </div>
                                        )
                                    })
                                } 
                            </Carousel>
                            <div className="picture-pagination">
                                <div className="tab active"></div>
                                <div className="tab"></div>
                                <div className="tab"></div>
                                <div className="tab"></div>
                            </div>
                        </div>
                        <div className="question-interact">
                            <div className="interact">
                                <div 
                                    className="icon"
                                    onClick={()=> interactPost()}
                                >
                                    <AiFillLike 
                                        className={isLiked?'liked':'nolike'}
                                        size={24}
                                    />
                                </div>
                                <p className="amount">0</p>
                            </div>
                            <div className="interact">
                                <div className="icon icon-2">
                                    <FaCommentAlt 
                                        size={20}
                                        onClick={()=>{
                                            setUserReplyDisplay(!userReplyDisplay);
                                        }}
                                    />
                                </div>
                                <p className="amount">
                                    {commentCount(post.comment)}
                                </p>
                            </div>
                        </div>
                        
                        <div className='divider'></div>
                        <div className="comment-section">
                            {
                                userReplyDisplay == false || !userInfo ? (null) :
                                <div className="user-reply-comment">
                                    <div className='user-reply-heading'>
                                        <img 
                                            src={userInfo.avatar}
                                            className='current-user-avatar'
                                        ></img>
                                        <input 
                                            type="text" 
                                            className="comment-box"
                                            ref={commentRef}
                                        >
                                        </input>
                                        <label
                                            className="add-img-label"
                                            for="big-comment-image-input"
                                        >
                                            <IoImageOutline size={28} className='add-image-icon'/>
                                        </label>
                                        <IoSend 
                                            size={28} 
                                            className='send-comment'
                                            onClick={(e)=> {
                                                addBigComment();
                                            }}
                                        ></IoSend>
                                    </div>
                                    <div className='big-comment-image'>
                                        <input
                                            className='big-comment-image-add-hidden'
                                            type='file'
                                            id='big-comment-image-input'
                                            // ref={pageRef.postImageRef}
                                            onChange={ async(e) => {
                                                var tgt = e.target || window.event.srcElement;
                                                var files = tgt.files;
                                                console.log("files", files);
                                                // FileReader support
                                                if (FileReader && files && files.length) {
                                                    var fr = new FileReader();
                                                    const sleep = ms => new Promise(res => setTimeout(res, ms));
                                                    fr.onload = async() => {
                                                        // document.querySelector('.big-comment-img-display').src = fr.result;
                                                        console.log("fr.result", fr.result);
                                                        // addTempImage(fr.result);
                                                        // await sleep(2000);
                                                        // setTempImage([]);
                                                        setCurrentCommnentImg(fr.result);
                                                    }
                                                    fr.readAsDataURL(files[0]);
                                                    // uploadPicture(e);
                                                }
                                            }}
                                        />
                                        {
                                            currentCommnentImg!="" 
                                            ?
                                                <div className="big-comment-img-display-temp-container">
                                                    <img 
                                                        src={currentCommnentImg}
                                                        className="big-comment-img-display-temp">  
                                                    </img>
                                                </div>
                                            : (null)
                                        }
                                        {/* <label
                                            className='post-image-add'
                                            for='post-image-input'
                                            // onClick={()=>{
                                            //     console.log("pageRef.postImageRef", pageRef.postImageRef);
                                            // }}
                                        >
                                            Thêm ảnh
                                        </label> */}
                                    </div>
                                </div>   
                            } 
                            {
                                post.comment.map((comment) => {
                                    return (<CommentItem comment={comment}/>)
                                })
                            }
                        </div>
                    </div>
                :   <div>
                        <EditPostSection
                            postInfo={post}
                            ref={childRef}
                        />
                        <button
                            className="edit-confirm-button"
                            onClick={()=>{
                                editPost();
                                setIsEditPost(!isEditPost);
                            }}
                        >
                            Xác nhận
                        </button>
                    </div>
            }
        </div>
    )
}

export default Post