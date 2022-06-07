import React , {useState, useEffect, useRef} from 'react'
import '../scss/CommentItem.scss';
import { useDispatch, useSelector } from "react-redux";
import { BsTriangleFill } from "react-icons/bs";
import { IoImageOutline , IoSend} from "react-icons/io5";
import { HiDotsHorizontal} from "react-icons/hi";
import { VscTriangleDown, VscTriangleUp } from "react-icons/vsc";

import { discussionActions } from '../../../../actions/dicussion.action';
import { AiFillLike } from "react-icons/ai";
import AjaxHelper from '../../../../services/api';
import config from '../../../../services/api/config';

const CommentItem = ({comment}) => {
    const dispatch = useDispatch();
    const [replyDisplay, setReplyDisplay] = useState(false);
    const changeReplyDisplay = () => {
        setReplyDisplay(!replyDisplay);
    } 
    


    const [userReplyDisplay, setUserReplyDisplay] = useState(false);
    const changeUserReplyDisplay = () => {
        setUserReplyDisplay(!userReplyDisplay);
    }



    const userInfo = useSelector((state) => state.user.currentUser);

    const deleteComment = () => {
        var data = {
            postID: comment.postID,
            commentID: comment.commentID,
        }
        // console.log("dataToDelete: ", data);
        dispatch(discussionActions.deleteBigComment(data));
        setIsOpenManageModal(!isOpenManageModal);   
    }


    const hideThisComment = () => {
        var data = {
            postID: comment.postID,
            commentID: comment.commentID,
        }
        // console.log("dataToHide: ", data);  
        dispatch(discussionActions.hideBigComment(data));
        setIsOpenManageModal(!isOpenManageModal);   

        // console.log("comment", comment.isHidden);s
    }

    const [isOpenManageModal, setIsOpenManageModal] = useState(false);

    const showThisComment = () => {
        var data = {
            postID: comment.postID,
            commentID: comment.commentID,
        }
        console.log("dataToShow: ", data);
        dispatch(discussionActions.showBigComment(data));
        setIsOpenManageModal(!isOpenManageModal);   

    }

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


    // Like bigcomment
    const likeBigComment = () => {
        var data = {
            postID: comment.postID,
            commentID: comment.commentID,
            userID: userInfo._id,
        }
        // console.log("data to like", data)''
        dispatch(discussionActions.likeBigComment(data));
    }

    // unlike bigcomment
    const unlikeBigComment = () => {
        var data = {
            postID: comment.postID,
            commentID: comment.commentID,
            userID: userInfo._id,
        }
        console.log("data to unlike", data);
        dispatch(discussionActions.unlikeBigComment(data));
    }

    // reply comment
    var commentItem = {
        replyText: useRef(null)
    }


    const sendReplyComment = () => {
        // console.log("Comment input",commentItem.replyText.current.value);
        console.log("comment", comment);
        var dataToSend = {
            postID: comment.postID,
            userID: userInfo._id,
            parrentComment: [...comment.parrentComment, comment.commentID],
            content: commentItem.replyText.current.value,
            userTagID: "",
            imgUrl: replyCommentLink,
            type: "1",
            replyComment: [],
            time: new Date(),
        }
        console.log("data to send", dataToSend);
        dispatch(discussionActions.addReplyComment(dataToSend));
        // reset cái nội dung hiện tại
        commentItem.replyText.current.value = "";
        changeUserReplyDisplay();
        setReplyCommentLink('');
    }
    const [replyCommentLink, setReplyCommentLink] = useState('');

    const [currentCommnentImg, setCurrentCommnentImg] = useState(''); 

    const uploadPicture = async(e) => {
        const formData = new FormData();
        formData.append("file", e.target.files[0])
        formData.append("upload_preset", "phiroud");
        const sleep = ms => new Promise(res => setTimeout(res, ms));
        await sleep(1000);
        const data = await AjaxHelper.post(config.URL_ARTICLE_PICTURE, formData, {});
        // console.log(data.data.url);
        setReplyCommentLink(data.data.url)
        // dispatch(discussionActions.uploadBigCommentArticlePicture(formData));
    }

    // Delete reply comment
    const deleteReplyComment = () => {
        var dataToDeleteReply = {
            postID: comment.postID,
            parrentComment: comment.parrentComment,
            commentID: comment.commentID
        }
        console.log("dataToDeleteReply", dataToDeleteReply);
        dispatch(discussionActions.deleteReplyComment(dataToDeleteReply));
        setIsOpenManageModal(false);
    }

    // Like reply comment
    const likeReplyComment = () => {
        console.log("comment", comment);
        const dataToLikeReply = {
            postID: comment.postID,
            parrentComment: comment.parrentComment,
            commentID: comment.commentID,
            userID: userInfo._id,
        }
        console.log("dataToLikeReply", dataToLikeReply);
        dispatch(discussionActions.likeReplyComment(dataToLikeReply));
    }

    const unlikeReplyComment = () => {
        console.log("comment", comment);
        const dataToUnLikeReply = {
            postID: comment.postID,
            parrentComment: comment.parrentComment,
            commentID: comment.commentID,
            userID: userInfo._id,
        }
        console.log("dataToUnLikeReply", dataToUnLikeReply);
        // dispatch(discussionActions.likeReplyComment(dataToUnLikeReply));
        dispatch(discussionActions.unlikeReplyComment(dataToUnLikeReply));
    }

    const hideReplyComment = () => {
        // console.log("comment", comment);
        const dataToHideReply = {
            postID: comment.postID,
            parrentComment: comment.parrentComment,
            commentID: comment.commentID,
            userID: userInfo._id,
        }
        // console.log("dataToHideReply", dataToHideReply);
        dispatch(discussionActions.hideReplyComment(dataToHideReply));
        setIsOpenManageModal(!isOpenManageModal);   

    }

    const showReplyComment = () => {
        // console.log("comment", comment);
        const dataToShowReply = {
            postID: comment.postID,
            parrentComment: comment.parrentComment,
            commentID: comment.commentID,
            userID: userInfo._id,
        }
        // console.log("dataToHideReply", dataToHideReply);
        dispatch(discussionActions.showReplyComment(dataToShowReply));
        setIsOpenManageModal(!isOpenManageModal);   

    }

    // Phần của chỉnh sửa post
    const [isEditting, setEditting] = useState(false);
    const editRef = useRef(null);

    const [currentEditImage, setCurrentEditImage] = useState("");
    const [editImageLink, setEditImageLink] = useState("");

    const uploadEditPicture = async(e) => {
        const formData = new FormData();
        formData.append("file", e.target.files[0])
        formData.append("upload_preset", "phiroud");
        const sleep = ms => new Promise(res => setTimeout(res, ms));
        await sleep(1000);
        const data = await AjaxHelper.post(config.URL_ARTICLE_PICTURE, formData, {});
        // console.log(data.data.url);
        setEditImageLink(data.data.url);
    }


    const editBigComment = () => {
        var dataToEdit = {
            content: editRef.current.value,
            imgUrl: editImageLink,
            commentID: comment.commentID,
            postID: comment.postID,
        }
        console.log("dataToEdit", dataToEdit);
        dispatch(discussionActions.editBigComment(dataToEdit));
        // Reset lại dữ liệu sau khi sửa
        setEditting(!isEditting);
        editRef.current.value='';
        setEditImageLink('');
    }


    const editReplyComment = () => {
        var dataToEditReply = {
            content: editRef.current.value,
            imgUrl: editImageLink,
            commentID: comment.commentID,
            postID: comment.postID,
            parrentComment: comment.parrentComment
        }
        // console.log("dataToEditReply", dataToEditReply);
        dispatch(discussionActions.editReplyComment(dataToEditReply));
        // Reset lại dữ liệu sau khi sửa
        setEditting(!isEditting);
        editRef.current.value='';
        setEditImageLink('');
    }

    const showInteractComment = () => {
        dispatch(discussionActions.openShowUserModal());
        var dataToSend = {
            postID: comment.postID,
            commentID: comment.commentID,
            parrentComment: comment.parrentComment
        }
        // console.log("dataToSend", dataToSend);
        dispatch(discussionActions.getCommentInteractionList(dataToSend)) 
    }

    let newIden = ((new Date() - new Date(2022, 1, 1))%10000).toString();

    return (
        <>
        {
            (comment.isHidden && 
                (!userInfo||userInfo._id != comment.userID)) ?(null):
            <div className="comment-item">
                {
                    !isEditting   
                    ?   // Hiển thị comment bình thường 
                        <div className="comment-heading">
                            <img 
                                className= {comment.isHidden ? "user-avatar gray-scale" : "user-avatar"}
                                src={comment.userAvatar}
                            ></img>
                            <div 
                                className= {comment.isHidden ? "comment-container gray-scale" : "comment-container"}
                            >
                                <p className="user-name">{comment.name}</p>
                                <div className="comment-content">
                                    {comment.content}
                                </div>
                                {
                                    comment.reactions && comment.reactions.length!=0 ?
                                        <div 
                                            className="comment-interaction"
                                            onClick={()=> {
                                                showInteractComment();
                                            }}
                                        >
                                            <AiFillLike  size={20} className='interact-icon'/>
                                            <p className='like-count'>{comment.reactions.length}</p>
                                        </div>
                                    : (null)
                                }
                                
                            </div>
                            {
                                (!userInfo||userInfo._id != comment.userID) ? (null) : 
                                    <div className="comment-manage">
                                        <HiDotsHorizontal 
                                            size={14}
                                            className="open-modal"
                                            onClick={()=>{
                                                // console.log("ACV");
                                                setIsOpenManageModal(!isOpenManageModal);   
                                            }}
                                        /> 
                                        {
                                            !isOpenManageModal ? (null) : 
                                                <div className="comment-modal">
                                                    {
                                                        !comment.isHidden ?
                                                        <div 
                                                            className="modal-item"
                                                            onClick={()=>{
                                                                if(comment.parrentComment.length==0){
                                                                    hideThisComment();
                                                                }
                                                                else {
                                                                    hideReplyComment();
                                                                }
                                                            }}
                                                        >
                                                            Ẩn    
                                                        </div>
                                                        : 
                                                        <div 
                                                            className="modal-item"
                                                            onClick={()=>{
                                                                if(comment.parrentComment.length==0){
                                                                    showThisComment();
                                                                }
                                                                else {
                                                                    showReplyComment();
                                                                }
                                                            }}
                                                        >
                                                            Hiện   
                                                        </div>
                                                    }
                                                    <div 
                                                        className="modal-item"
                                                        onClick={()=>{
                                                            // console.log("comment", comment);
                                                            // // 
                                                            if(comment.parrentC.lengthomment.length==0){
                                                                deleteComment();
                                                            }
                                                            else deleteReplyComment();
                                                            
                                                        }}
                                                    >
                                                        Xoá
                                                    </div>
                                                    <div className="modal-item">
                                                        Báo cáo
                                                    </div>
                                                    <div 
                                                        className="modal-item"
                                                        onClick = {() => {  
                                                            setEditting(!isEditting);
                                                            setIsOpenManageModal(false);
                                                            setEditImageLink(comment.imgUrl)
                                                        }}
                                                    >
                                                        Chỉnh sửa
                                                    </div>
                                                </div> 
                                        }
                                        
                                    </div>
                            }
                        </div>
                    :   
                        // Đây là phần chỉnh sửa comment
                        <div className="comment-editting">
                            <div className='comment-editting-heading'>
                                <img 
                                    src={userInfo.avatar}
                                    className='current-user-avatar'
                                ></img>

                                <input 
                                    type="text" 
                                    className="comment-box"
                                    ref={editRef}
                                    defaultValue={comment.content}
                                >
                                </input>

                                <label
                                    className="add-img-label"
                                    for="editting-image-input"
                                >
                                    <IoImageOutline size={28} className='add-image-icon'/>
                                </label>

                                <button
                                    className="button-edit-cancel"
                                    onClick={() => {
                                       setEditting(!isEditting);
                                       editRef.current.value='';
                                       setEditImageLink('');
                                    }}
                                >
                                    Huỷ
                                </button>
                                <button
                                    className="button-edit-confirm"
                                    onClick={() => {
                                        if(comment.parrentComment.length==0){
                                            editBigComment();
                                        }
                                        else {
                                            editReplyComment();
                                        }
                                    }}
                                >
                                    Lưu
                                </button>
                            </div>

                            <div className='big-comment-image'>
                                <input
                                    className='big-comment-image-add-hidden'
                                    type='file'
                                    id='editting-image-input'
                                    // ref={pageRef.postImageRef}
                                    onChange={ async(e) => {
                                        setEditImageLink("");
                                        var tgt = e.target || window.event.srcElement;
                                        var files = tgt.files;
                                        // console.log("files", files);
                                        // FileReader support
                                        if (FileReader && files && files.length) {
                                            var fr = new FileReader();
                                            const sleep = ms => new Promise(res => setTimeout(res, ms));
                                            fr.onload = async() => {
                                                setCurrentEditImage(fr.result);
                                                await sleep(2000);
                                                setCurrentEditImage("");
                                            }
                                            fr.readAsDataURL(files[0]);
                                            uploadEditPicture(e);
                                        }
                                    }}
                                />
                                {
                                    currentEditImage!="" 
                                    ?
                                        <div className="big-comment-img-display-temp-container">
                                            <img 
                                                src={currentEditImage}
                                                className="big-comment-img-display-temp">  
                                            </img>
                                        </div>
                                    : (null)
                                }   
                                {
                                    editImageLink=="" ? (null) :
                                    <div className='comment-link-container'>
                                        <img 
                                            src={editImageLink}
                                            className="big-comment-img-display">  
                                        </img>
                                        <div
                                            className='delete-reply-img-link'
                                            onClick={()=> {
                                                setEditImageLink("");
                                            }}
                                        >
                                            Xoá ảnh
                                        </div>
                                    </div>
                                }
                            </div>
                        </div>  
                }
                
                
                <div className="comment-interact">
                    {
                        comment.reactions && comment.reactions.includes(userInfo._id) ? 
                            <p 
                                className="interact-item like active"
                                onClick={
                                    (e) => {
                                        
                                        if(comment.parrentComment.length==0){
                                            unlikeBigComment();
                                        }
                                        else {
                                            unlikeReplyComment();
                                        }
                                    }
                                }
                            >
                                Bỏ thích
                            </p>
                        :
                            <p 
                                className="interact-item like"
                                onClick={
                                    (e) => { 
                                        if(comment.parrentComment.length==0){
                                            likeBigComment()
                                        }
                                        else {
                                            likeReplyComment();
                                        }
                                    }
                                }
                            >
                                Thích
                            </p>
                    }
                    
                    <p 
                        className="interact-item rep" 
                        onClick = {(e) => changeUserReplyDisplay() }
                    >
                        Phản hồi
                    </p>
                    <p className="interact-time">{calculateTime(comment.time)}</p>
                </div>
                {
                    isEditting || !comment.imgUrl ? (null) :
                    <img className="comment-image"
                        src={comment.imgUrl}
                    ></img>
                }
                {
                    userReplyDisplay == false ? (null) :
                    <div className="user-reply-comment">
                        <div className='user-reply-heading'>
                            <img 
                                src={userInfo.avatar}
                                className='current-user-avatar'
                            ></img>
                            <input 
                                type="text" 
                                className="comment-box"
                                ref={commentItem.replyText}
                            >
                            </input>
                            <label
                                className="add-img-label"
                                for={newIden}
                            >
                                <IoImageOutline size={28} className='add-image-icon'/>
                            </label>
                            <IoSend 
                                size={28} 
                                className='send-comment'
                                onClick={(e)=> {
                                    sendReplyComment();
                                }}
                            ></IoSend>
                        </div>
                        <div className='big-comment-image'>
                            <input
                                className='big-comment-image-add-hidden'
                                type='file'
                                id={newIden}
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
                                replyCommentLink=="" ? (null) :
                                <div className='comment-link-container'>
                                    <img 
                                        src={replyCommentLink}
                                        className="big-comment-img-display">  
                                    </img>
                                    <div
                                        className='delete-reply-img-link'
                                        onClick={()=> {
                                            setReplyCommentLink('');
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
                    !comment.replyComment || comment.replyComment.length == 0 ? (null) : 
                    <div className='reply'>
                        {
                            replyDisplay 
                            ? 
                                <div className="hide-answer">
                                    <p 
                                        className='title'
                                        onClick = {() => changeReplyDisplay()}
                                    >
                                        Ẩn câu trả lời
                                    </p> 
                                    <VscTriangleUp className="icon" size={10}/>
                                </div>
                            : 
                                <div className="hide-answer">
                                    <p 
                                        className='title'
                                        onClick = {() => changeReplyDisplay()}
                                    >
                                        Hiện câu trả lời
                                    </p> 
                                    <VscTriangleDown className="icon" size={10}/>
                                </div>

                        }
                        {
                            !replyDisplay || comment.replyComment.length == 0? (null) :
                                comment.replyComment.map((commentItem)=>{
                                    return (<CommentItem comment={commentItem}/>)
                                })
                        }
                    </div>
                }
                
            </div>
        }
        </>
        
    )
}

export default CommentItem