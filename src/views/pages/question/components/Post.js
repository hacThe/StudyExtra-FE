import React , {useState, useEffect} from 'react';
import { AiFillLike } from "react-icons/ai";
import { FaCommentAlt } from "react-icons/fa";
import CommentItem from './CommentItem';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import '../scss/Post.scss';

const Post = () => {
    const [isLiked, setLiked] = useState(false);
    const interactPost = () => {
        setLiked(!isLiked);
    }


    return (
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
                <Carousel className='carousel-slider picture-slider' showThumbs={false} style={{borderRadius: '20px'}} axis='horizontal'>
                    <div className='question-picture-container'>
                        <img className="question-picture"
                            height={500}
                            style={{
                                objectFit: "contain"
                            }}
                            src="https://gamek.mediacdn.vn/133514250583805952/2021/9/2/base64-1630595438805599368242.png"
                        ></img>
                    </div>
                    <div className='question-picture-container'>
                        <img className="question-picture"
                            height={500}
                            style={{
                                objectFit: "contain"
                            }}
                            src="https://cdn.tgdd.vn//GameApp/1395135//cach-choi-raiden-genshin-impact-thong-tin-guide-skill-moi-thumb-800x450.jpg"
                        ></img>
                    </div>
                    <div className='question-picture-container'>
                        <img className="question-picture"
                            height={500}
                            style={{
                                objectFit: "contain"
                            }}
                            src="https://i.pinimg.com/originals/73/a5/ac/73a5ac0e8495ee7f053a9b7fd0952631.jpg"
                        ></img>
                    </div>
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
                <CommentItem reply={true} image={true} userReply={false}/>
                <CommentItem reply={false} userReply={true}/>
            </div>
        </div>
    )
}

export default Post