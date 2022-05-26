import React , {useState, useEffect} from 'react'
import '../scss/CommentItem.scss';
import { useDispatch, useSelector } from "react-redux";
import { BsTriangleFill } from "react-icons/bs";
import { IoImageOutline , IoSend} from "react-icons/io5";
import { HiDotsHorizontal} from "react-icons/hi";
import { VscTriangleDown, VscTriangleUp } from "react-icons/vsc";

import Consts from '../ConstKey.js';
import { articleActions } from '../../../../actions/article.action';

const CommentItem = ({comment}) => {
    const dispatch = useDispatch();
    const [replyDisplay, setReplyDisplay] = useState(false);
    const changeReplyDisplay = () => {
        setReplyDisplay(!replyDisplay);
    } 

    const [isLiked, setIsLiked] = useState(false);
    const changeLiked = () => {
        setIsLiked(!isLiked);
    } 

    const [userReplyDisplay, setUserReplyDisplay] = useState(false);
    const changeUserReplyDisplay = () => {
        setUserReplyDisplay(!userReplyDisplay);
    }


    const [pressedKeys, setPressedKeys] = useState([]);
    useEffect(() => {
        const onKeyDown = ({key}) => {
            if (Consts.ALLOWED_KEYS.includes(key) && !pressedKeys.includes(key)) {
                setPressedKeys(previousPressedKeys => [...previousPressedKeys, key]);
                const currentActive = document.activeElement;
                if(currentActive.classList.contains('comment-box')){
                    console.log("Thêm comment vào cái list");
                    // Viết hàm thêm, tác động redux là ok
                }
            }
        }

        const onKeyUp = ({key}) => {
            if (Consts.ALLOWED_KEYS.includes(key)) {
                setPressedKeys(previousPressedKeys => previousPressedKeys.filter(k => k !== key));
            }
        }

        document.addEventListener('keydown', onKeyDown);
        document.addEventListener('keyup', onKeyUp);

        return () => {
            document.removeEventListener('keydown', onKeyDown);
            document.removeEventListener('keyup', onKeyUp);
        }
    }, []);   
    const userInfo = useSelector(state => state.authentication.user);

    const deleteComment = () => {
        var data = {
            postID: comment.postID,
            commentID: comment.commentID,
        }
        // console.log("dataToDelete: ", data);
        dispatch(articleActions.deleteBigComment(data));
        setIsOpenManageModal(!isOpenManageModal);   
    }


    const hideThisComment = () => {
        var data = {
            postID: comment.postID,
            commentID: comment.commentID,
        }
        // console.log("dataToHide: ", data);  
        dispatch(articleActions.hideBigComment(data));
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
        dispatch(articleActions.showBigComment(data));
        setIsOpenManageModal(!isOpenManageModal);   

    }

    console.log("comment", comment)

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

    return (
        <>
        {
            (comment.isHidden && 
                (!userInfo||userInfo._id != comment.userID)) ?(null):
            <div className="comment-item">
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
                    </div>
                    {
                        (!userInfo||userInfo._id != comment.userID) ? (null) : 
                            <div className="comment-manage">
                                <HiDotsHorizontal 
                                    size={14}
                                    className="open-modal"
                                    onClick={()=>{
                                        console.log("ACV");
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
                                                    onClick={()=>hideThisComment()}
                                                >
                                                    Ẩn    
                                                </div>
                                                : 
                                                <div 
                                                    className="modal-item"
                                                    onClick={()=>showThisComment()}
                                                >
                                                    Hiện   
                                                </div>
                                            }
                                            
                                            <div 
                                                className="modal-item"
                                                onClick={()=>{
                                                    // Check cấp độ hiện tại của cái cmt này trước, 
                                                    // sẽ thêm vào cái hàm refine comment
                                                    // console.log("comment", comment);
                                                    deleteComment();
                                                }}
                                            >
                                                Xoá
                                            </div>
                                            <div className="modal-item">
                                                Báo cáo
                                            </div>
                                            <div className="modal-item">
                                                Chỉnh sửa
                                            </div>
                                        </div> 
                                }
                                
                            </div>
                    }
                    
                    
                </div>
                
                <div className="comment-interact">
                    <p 
                        className={isLiked ?"interact-item like active" : "interact-item like"}s
                        onClick={(e) => changeLiked()}
                    >
                        Thích
                    </p>
                    <p 
                        className="interact-item rep" 
                        onClick = {(e) => changeUserReplyDisplay() }
                    >Phản hồi</p>
                    <p className="interact-time">{calculateTime(comment.time)}</p>
                </div>
                {
                    !comment.imgUrl ? (null) :
                    <img className="comment-image"
                        src={comment.imgUrl}
                    ></img>
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
                {
                    userReplyDisplay == false ? (null) :
                    <div className="user-reply-comment">
                        <img 
                            src="https://i.pinimg.com/originals/33/c2/20/33c220ed89693515fb07aecd51a26eda.jpg"
                            className='current-user-avatar'
                        ></img>
                        <input type="text" className="comment-box"></input>
                        <IoImageOutline size={28} className='add-image-icon'/>
                        <IoSend 
                            size={28} 
                            className='send-comment'
                            onClick={(e)=> {
                                console.log("e.target.parentNode", e.target.parentNode);
                            }}
                        ></IoSend>
                    </div>   
                } 
            </div>
        }
        </>
        
    )
}

export default CommentItem