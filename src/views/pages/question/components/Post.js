import React , {useState, useEffect} from 'react';
import { AiFillLike } from "react-icons/ai";
import { FaCommentAlt } from "react-icons/fa";
import CommentItem from './CommentItem';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import '../scss/Post.scss';

const Post = ({post}) => {
    const [isLiked, setLiked] = useState(false);
    const interactPost = () => {
        setLiked(!isLiked);
    }

    console.log(post);

    return (
        <div className="question-body">
            <div className="question-header">
                <img className="user-avatar"
                    src={post.userAvatar}
                ></img>
                <p className="user-name">Raiden Ei</p>
                <p className="post-time">3 phút trước</p>
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
                {
                    post.comment.map((comment) => {
                        return (<CommentItem comment={comment}/>)
                    })
                }
            </div>
        </div>
    )
}

export default Post