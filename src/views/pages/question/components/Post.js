import React , {useState, useEffect} from 'react';
import { useDispatch, useSelector } from "react-redux";
import { AiFillLike } from "react-icons/ai";
import { FaCommentAlt } from "react-icons/fa";
import CommentItem from './CommentItem';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import '../scss/Post.scss';
import { cookiesUtil } from '../../../../utilities';

const Post = ({post}) => {
    const [isLiked, setLiked] = useState(false);
    const interactPost = () => {
        setLiked(!isLiked);
    }
    console.log("post: ",post);
    useSelector((state) => {
        console.log({ state });
    })

    let user = cookiesUtil.getCurrentUserInfo();
    console.log("user", user);

    const calculateTime = (timeString) => {
        // console.log("timeString", timeString);
        const postTime = new Date(timeString);
        // console.log("calculating time", Math.abs(new Date() - postTime));
        var diff = Math.abs(new Date() - postTime);
        if(diff<1000*60){
            return ("Một phút trước");
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
        <div className="question-body">
            <div className="question-header">
                <img className="user-avatar"
                    src={post.userAvatar}
                ></img>
                <p className="user-name">
                    {post.name}
                </p>
                <p className="post-time">{calculateTime(post.createdAt)}</p>
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