import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";

import './scss/Question.scss';
import Post from './components/Post.js';
import { articleActions } from '../../../actions/article.action';


const Question = () => {

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

    // Get real data
    const dispatch = useDispatch();
    React.useEffect(async () => {
        await dispatch(articleActions.getAllArticle());
    }, []);

    const articles =
        useSelector((state) => {
            console.log({ state });
            return state;
        }) || [];

    return (
        <div>
            <div className="question-page-container">
                <div className="question-container">
                    {
                        posts.map((post)=>{
                            return (<Post post={post}/>);
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Question