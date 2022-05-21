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
                                    <FaCommentAlt size={20}/>
                                </div>
                                <p className="amount">
                                    {commentCount(post.comment)}
                                </p>
                            </div>
                        </div>
                        
                        <div className='divider'></div>
                        <div className="comment-section">
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