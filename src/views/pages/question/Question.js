import React from 'react';
import { Button, ButtonGroup, Grid } from '@mui/material';
import { GiLaurelCrown } from "react-icons/gi";
import './scss/Question.scss';
import { AiFillLike } from "react-icons/ai";
import { FaCommentAlt } from "react-icons/fa";
import CommentItem from './components/CommentItem';

const Question = () => {
  return (
    <div className="question-page-container">
        <div className="question-container">
            <div className="question-body">
                <div className="question-header">
                    <img className="user-avatar"
                        src="https://i.pinimg.com/474x/84/e0/08/84e008e416a5662ada45185058678ed7.jpg"
                        
                    ></img>
                    <p className="user-name">Raiden Ei</p>
                    <p className="post-time">3 phút trước</p>
                </div>
                <div className='question-detail'>
                    <p className="question-content">
                        Mọi người có thể giúp em so sánh sự khác nhau giữa beautiful và handsome được không ạ, quả là khó khăn đó nha hahaha đạy là câu hỏi ví dụ thoi
                    </p>
                    <img className="question-picture"
                        src="https://gamek.mediacdn.vn/133514250583805952/2021/9/2/base64-1630595438805599368242.png"
                    ></img>
                    <div className="picture-pagination">
                        <div className="tab active"></div>
                        <div className="tab"></div>
                        <div className="tab"></div>
                        <div className="tab"></div>
                    </div>
                </div>
                <div className="question-interact">
                    <div className="interact">
                        <div className="icon">
                            <AiFillLike size={24}/>
                        </div>
                        <p className="amount">26</p>
                    </div>
                    <div className="interact">
                        <div className="icon icon-2">
                            <FaCommentAlt size={20}/>
                        </div>
                        <p className="amount">62</p>
                    </div>
                </div>
                <div className='divider'></div>
                <div className="comment-section">
                    <CommentItem reply={true}/>
                    <CommentItem reply={false}/>
                </div>
            </div>
            
            <div className="question-body">
                <div className="question-header">
                    <img className="user-avatar"
                        src="https://i.pinimg.com/474x/84/e0/08/84e008e416a5662ada45185058678ed7.jpg"
                        
                    ></img>
                    <p className="user-name">Raiden Ei</p>
                    <p className="post-time">3 phút trước</p>
                </div>
                <div className='question-detail'>
                    <p className="question-content">
                        Mọi người có thể giúp em so sánh sự khác nhau giữa beautiful và handsome được không ạ, quả là khó khăn đó nha hahaha đạy là câu hỏi ví dụ thoi
                    </p>
                    <img className="question-picture"
                        src="https://gamek.mediacdn.vn/133514250583805952/2021/9/2/base64-1630595438805599368242.png"
                    ></img>
                    <div className="picture-pagination">
                        <div className="tab active"></div>
                        <div className="tab"></div>
                        <div className="tab"></div>
                        <div className="tab"></div>
                    </div>
                </div>
                <div className="question-interact">
                    <div className="interact">
                        <div className="icon">
                            <AiFillLike size={24}/>
                        </div>
                        <p className="amount">26</p>
                    </div>
                    <div className="interact">
                        <div className="icon icon-2">
                            <FaCommentAlt size={20}/>
                        </div>
                        <p className="amount">62</p>
                    </div>
                </div>
                <div className='divider'></div>
                <div className="comment-section">
                    <CommentItem reply={true}/>
                    <CommentItem reply={false}/>
                </div>
            </div>  
        </div>
        
    </div>
  )
}

export default Question
