import React , {useState, useEffect} from 'react'
import '../scss/CommentItem.scss';
import { BsTriangleFill } from "react-icons/bs";
import { IoImageOutline } from "react-icons/io5";
import { HiDotsHorizontal} from "react-icons/hi";

import { VscTriangleDown, VscTriangleUp } from "react-icons/vsc";

const CommentItem = ({reply, image, userReply}) => {

    const [replyDisplay, setReplyDisplay] = useState(0);
    const changeReplyDisplay = () => {
        setReplyDisplay(!replyDisplay);
    } 

    return (
        <div className="comment-item">
            <div className="comment-heading">
                <img className="user-avatar"
                    src="https://img-9gag-fun.9cache.com/photo/axBB4pW_460s.jpg"
                ></img>
                <div className="comment-container">
                    <p className="user-name">Yae Miko</p>
                    <div className="comment-content">
                        Mình nghĩ là vậy đó, bạn tham khảo câu trả lời của mình nha
                    </div>
                </div>
                <div className="comment-manage">
                    <HiDotsHorizontal size={14}/>
                    <div className="bridge">

                    </div>
                    <div className="comment-modal">
                        <div className="modal-item">
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
                <p className="interact-item like active" >Thích</p>
                <p className="interact-item rep" >Phản hồi</p>
                <p className="interact-time">2 phút</p>
            </div>
            {
                image == false ? (null) :
                <img className="comment-image"
                    src="https://i.pinimg.com/564x/f1/9f/5d/f19f5dc827dbe910912846fe975f2b37.jpg"
                ></img>
            }
            {
                userReply == false ? (null) :
                <div className="user-reply-comment">
                    <img 
                        src="https://i.pinimg.com/originals/33/c2/20/33c220ed89693515fb07aecd51a26eda.jpg"
                        className='current-user-avatar'
                    ></img>
                    <input type="text" className="comment-box"></input>
                    <IoImageOutline size={28} className='add-image-icon'/>
                </div>
            }
            {
                reply== false ? (null) : 
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
                        !replyDisplay ? (null) : 
                            <div className="reply-comment">
                                <div className="side-divider"></div>
                                <CommentItem reply={false} image={false} userReply={true}/>
                            </div>
                    }
                    
                    
                </div>
            }
            
        </div>
    )
}

export default CommentItem