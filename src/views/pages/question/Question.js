import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";

import './scss/Question.scss';
import Post from './components/Post.js';
import { articleActions } from '../../../actions/article.action';
import { FaCommentsDollar } from 'react-icons/fa';
import AddPostSection from './components/AddPostSection';
import { IoTerminal } from 'react-icons/io5';

const refineComments = (comments, postID) => {
    var res = [];
    console.log("comments", comments);
    try{
        comments.forEach(cmt => {
            console.log("cmt", cmt);
            var tempt = {
                postID: postID,
                commentID: cmt.commentID || cmt._id,
                userID: cmt.userID,
                username: cmt.username,
                name: cmt.name,
                userAvatar: cmt.userAvatar,
                content: cmt.content,
                userTagID: cmt.userTagID || "",
                userTagName: 'Raiden Ei',
                imgUrl: cmt.imgUrl,
                isHidden: cmt.isHidden,
            }
            if(cmt.replyComment && cmt.replyComment.length > 0)
                tempt.replyComment =  refineComments(cmt.replyComment, postID);
            else tempt.replyComment = [];
            res.push(tempt);
        });
    }
    catch(e){
        console.log("error", e);
        console.log("comments", comments);
    }
    
    // var tempt ={};
    return res;
}

const refineData = (data) => {
    var res = [];
    data.slice().reverse().forEach(item => {
        // console.log("item to refine", item)
        var temp = {
            _id: item._id,
            userID: item.userID,
            username: item.username,
            userAvatar: item.avatar,
            contents: item.content,
            imgUrl: item.imgUrl,
            name: item.name,
            createdAt: item.createdAt,
            reactions: item.reactions
        }
        var tempComment = refineComments(item.comments,item._id );
        temp.comment = tempComment;
        res.push(temp);
    });
    return res;
}
// Fake data
const posts = [
    {
        userID: 'abc',
        username: 'Raiden Shogun',
        userAvatar: 'https://i.pinimg.com/474x/84/e0/08/84e008e416a5662ada45185058678ed7.jpg',
        contents : "Mọi người có thể giúp em so sánh sự khác nhau giữa beautiful và handsome được không ạ, quả là khó khăn đó nha hahaha đạy là câu hỏi ví dụ thoi",
        imgUrl: [
            "https://gamek.mediacdn.vn/133514250583805952/2021/9/2/base64-1630595438805599368242.png",
            "https://cdn.tgdd.vn//GameApp/1395135//cach-choi-raiden-genshin-impact-thong-tin-guide-skill-moi-thumb-800x450.jpg",
            "https://i.pinimg.com/originals/73/a5/ac/73a5ac0e8495ee7f053a9b7fd0952631.jpg",
        ],
        comment: [
            {
                userID: 'bcv',
                username: "Yae Miko Real",
                userAvatar: "https://img-9gag-fun.9cache.com/photo/axBB4pW_460s.jpg",
                content: "Mình nghĩ là vậy đó, bạn tham khảo câu trả lời của mình nhaada dadadadadadad dâdq",
                userTagID: '',
                userTagName: 'Raiden Ei',
                imgUrl: "https://i.pinimg.com/564x/f1/9f/5d/f19f5dc827dbe910912846fe975f2b37.jpg",
                isHide: false,
                replyComment: [
                    {
                        userID: 'bcv',
                        username: "Raiden Ei",
                        userAvatar: 'https://i.pinimg.com/474x/84/e0/08/84e008e416a5662ada45185058678ed7.jpg',
                        content: "Con mẹ bạn",
                        userTagID: '',
                        userTagName: 'Yae Miko',
                        replyComment: [],
                        imgUrl: '',
                        isHide: false,
                    }
                ]
            }
        ]
    }
]
const Question = () => {



    // Get real data
    const dispatch = useDispatch();
    React.useEffect(async () => {
        await dispatch(articleActions.getAllArticle());
    }, []);

    const articles =
        useSelector((state) => {
            // console.log("state", state);
            return state.article.articles;
        }) || [];
    // console.log("articles", articles)


    const userInfo = useSelector(state => state.authentication.user);
    // console.log("userInfo", userInfo);

    const [isOpenPost, setIsOpenPost] = useState(false);

    
    return (    
        <div className="question-page-container">
            <div className="question-container">
                <div className="add-post-section">
                    <div className="add-post-overall">
                        <div className="add-post-header">
                            <img 
                                src="https://firebasestorage.googleapis.com/v0/b/se-img.appspot.com/o/file281556402_7443940532345703_1970040466900861195_n.jpg?alt=media&token=bbbcb3d0-6916-4d53-bed4-84c82bfde6c4"
                                className='user-avatar'
                            />
                            <div
                                className='user-question'
                            >
                                Nguyễn Công Phi ơi, bạn có câu hỏi hay thắc mắc gì không?
                            </div>
                            
                        </div>                        
                        <button 
                            className = "button-add-post"
                            onClick = {()=> {
                                setIsOpenPost(!isOpenPost)
                            }}
                        >
                            {!isOpenPost ? <>Thêm bài đăng</> : <>Huỷ</>}
                        </button>
                    </div>
                    {
                        !isOpenPost ? (null) :
                        <AddPostSection/>
                    }
                    {
                        refineData(articles).map((item)=>{
                            return (
                                <Post 
                                    post = {item}
                                />
                            );
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Question