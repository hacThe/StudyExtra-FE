import React from 'react'
import '../scss/CommentItem.scss';

import { BsTriangleFill } from "react-icons/bs";

const CommentItem = ({reply}) => {
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
        </div>
        
        <div className="comment-interact">
            <p className="interact-item like active" >Thích</p>
            <p className="interact-item rep" >Phản hồi</p>
            <p className="interact-time">2 phút</p>
        </div>
        {
            reply== false ? (null) : 
            <div className='reply'>
                <div className="hide-answer">
                   <p className='title'>Ẩn câu trả lời</p> 
                   <BsTriangleFill className="icon" size={6}/>
                </div>
                <div className="reply-comment">
                    <div className="side-divider"></div>
                    <CommentItem reply={false}/>
                    
                </div>
                
            </div>
        }
        
    </div>
  )
}

export default CommentItem