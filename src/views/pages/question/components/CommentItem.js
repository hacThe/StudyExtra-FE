import React , {useState, useEffect} from 'react'
import '../scss/CommentItem.scss';
import { BsTriangleFill } from "react-icons/bs";
import { IoImageOutline , IoSend} from "react-icons/io5";
import { HiDotsHorizontal} from "react-icons/hi";
import { VscTriangleDown, VscTriangleUp } from "react-icons/vsc";

import Consts from '../ConstKey.js';

const CommentItem = ({comment}) => {
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

    // console.log("comment", comment);
    // console.log("comment.replyComment", comment.replyComment);

    const hideThisComment = () => {
        // Ở đây mình gọi redux các kiểu
        console.log('hide this comment');
        console.log('comment.isHide', comment.isHide)
    }

    

    return (
        <div className="comment-item">
            <div className="comment-heading">

                <img className="user-avatar"
                    src={comment.userAvatar}
                ></img>
                <div className="comment-container">
                    <p className="user-name">{comment.username}</p>
                    <div className="comment-content">
                        {comment.content}
                    </div>
                </div>
                <div className="comment-manage">
                    <HiDotsHorizontal size={14}/>
                    <div className="bridge">

                    </div>
                    <div className="comment-modal">
                        <div 
                            className="modal-item"
                            onClick={()=>hideThisComment()}
                        >
                            Ẩn

                        </div>
                        <div className="modal-item">
                            Xoá
                        </div>
                        <div className="modal-item">
                            Báo cáo
                        </div>
                        <div className="modal-item">
                            Chỉnh sửa
                        </div>
                    </div> 
                </div>
                
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
                <p className="interact-time">2 phút</p>
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
    )
}

export default CommentItem