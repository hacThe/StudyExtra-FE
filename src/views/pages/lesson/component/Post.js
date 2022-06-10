import React , {useState, useEffect, useRef} from 'react';
import { useDispatch, useSelector } from "react-redux";
import CommentItem from './CommentItem';
import '../scss/Post.scss';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { FaCommentAlt } from "react-icons/fa";
import { IoImageOutline , IoSend} from "react-icons/io5";

// import { discussionActions } from '../../../../actions/article.action';
import { discussionActions } from '../../../../actions/dicussion.action';

import { showToast } from '../../../../actions/toast.action';

const Post = ({post}) => {
    const dispatch = useDispatch();

    const [isLiked, setLiked] = useState(false);
    const interactPost = () => {
        setLiked(!isLiked);
    }
    // console.log("post: ",post);


    const userInfo = useSelector((state) => state.user.currentUser);
    // console.log("userInfo", userInfo);

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
        // console.log("childRef", childRef);
        childRef.current.editArticle();    
    }


    // Add big comment
    const [userReplyDisplay, setUserReplyDisplay] = useState(true);
    const changeUserReplyDisplay = () => {
        setUserReplyDisplay(!userReplyDisplay);
    }

    const commentRef = useRef(null);
    const addBigComment = () => {
        // console.log("commentRef.current.value", commentRef.current.value);
        const data = {
            userID: userInfo._id,
            postID: post._id,
            content: commentRef.current.value,
            userTagID: "",
            imgUrl: bigCommentLink,
            type: "1",
            replyComment: [],
            time: new Date(),
        }
        commentRef.current.value="";
        dispatch(discussionActions.addBigComment(data));
        setUserReplyDisplay(!userReplyDisplay);
        dispatch(discussionActions.removeBigCommentPicture());
        dispatch(showToast("success", "Gửi bình luận thành công!")); 

    }

    const [currentCommnentImg, setCurrentCommnentImg] = useState("");

    const uploadPicture = async(e) => {

        const formData = new FormData();
        formData.append("file", e.target.files[0])
        formData.append("upload_preset", "phiroud");
        const sleep = ms => new Promise(res => setTimeout(res, ms));
        await sleep(1000);
        dispatch(discussionActions.uploadBigCommentArticlePicture(formData));
    }

    const bigCommentLink = useSelector(state => state.discussion.bigComment.imgLink);
    // console.log("bigCommentLink: ", bigCommentLink)

    const likePost = () => {
        var likePostData = {
            postID: post._id,
            userID: userInfo._id,
        }
        // console.log("likePostData", likePostData);
        dispatch(discussionActions.likeArticle(likePostData));
        dispatch(showToast("success", "Thích bài viết thành công!")); 

    }

    const unLikePost = () => {
        var unlikePostData = {
            postID: post._id,
            userID: userInfo._id,
        }
        // console.log("unlikePostData", unlikePostData);
        dispatch(discussionActions.unLikeArticle(unlikePostData));
        dispatch(showToast("success", "Bỏ thích bài viết thành công!")); 

    }

    console.log("post", post);
    
    // console.log("userInfo", userInfo);


    const showInteractionUserList = () => {
        dispatch(discussionActions.openShowUserModal());
        dispatch(discussionActions.getPostInteractionList({
            postID: post._id
        }))
    }
    
    return (
        
        <div className="question-body">
            <div>
                <div className="comment-section">
                    {
                        !userInfo ? (null) :
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
                                        dispatch(discussionActions.removeBigCommentPicture())  
                                        var tgt = e.target || window.event.srcElement;
                                        var files = tgt.files;
                                        // console.log("files", files);
                                        // FileReader support
                                        if (FileReader && files && files.length) {
                                            var fr = new FileReader();
                                            const sleep = ms => new Promise(res => setTimeout(res, ms));
                                            fr.onload = async() => {
                                                // document.querySelector('.big-comment-img-display').src = fr.result;
                                                // console.log("fr.result", fr.result);
                                                // addTempImage(fr.result);
                                                setCurrentCommnentImg(fr.result);
                                                await sleep(2000);
                                                setCurrentCommnentImg("");
                                            }
                                            fr.readAsDataURL(files[0]);
                                            uploadPicture(e);
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
                                {
                                    bigCommentLink=="" ? (null) :
                                    <div className='comment-link-container'>
                                        <img 
                                            src={bigCommentLink}
                                            className="big-comment-img-display">  
                                        </img>
                                        <div
                                            className='delete-reply-img-link'
                                            onClick={()=> {
                                                dispatch(discussionActions.removeBigCommentPicture())
                                            }}
                                        >
                                            Xoá ảnh
                                        </div>
                                    </div>
                                }
                            </div>
                        </div>   
                    } 
                    {
                        post.comment.map((comment) => {
                            return (
                                <CommentItem comment={comment} closeDisplay={() => setUserReplyDisplay(false)}
                                    openDisplay={() => setUserReplyDisplay(true)}
                                />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Post