import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";

import './scss/Question.scss';
import Post from './components/Post.js';
import { articleActions } from '../../../actions/article.action';
import { FaCommentsDollar } from 'react-icons/fa';

const refineComments = (comments) => {
    var res = [];
    
    try{
        comments.forEach(cmt => {
            var tempt = {
                commentID: cmt.commentID,
                userID: cmt.userID,
                username: "Yae Miko Real",
                userAvatar: "https://img-9gag-fun.9cache.com/photo/axBB4pW_460s.jpg",
                content: cmt.content,
                userTagID: cmt.userTagID,
                userTagName: 'Raiden Ei',
                imgUrl: cmt.imgUrl,
                isHide: false,
            }
            if(cmt.replyComment || cmt.replyComment.length > 0)
                tempt.replyComment =  refineComments(cmt.replyComment);
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
    data.forEach(item => {
        var temp = {
            userID: item.userID,
            username: item.username,
            userAvatar: item.avatar,
            contents: item.content,
            imgUrl: item.imgUrl
        }
        var tempComment = refineComments(item.comments);
        temp.comment = tempComment;
        res.push(temp);
    });
    return res;
}

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
            console.log("state", state);
            return state.article.articles;
        }) || [];
    console.log("articles", articles)


    const userInfo = useSelector(state => state.authentication.user);
    console.log("userInfo", userInfo);

    const [imgList, setImageList] = useState([
        // "https://c.wallhere.com/photos/87/b3/Makise_Kurisu_Steins_Gate_anime-1250421.jpg!d",
        // "https://i.pinimg.com/474x/9f/45/28/9f4528ca270dd877228545f04200c58c.jpg",
        // "https://static.wikia.nocookie.net/steins-gate/images/5/50/KurisuMakise_animeprofile_%280%29.jpg/revision/latest?cb=20220212065513",
    ])

    const addNewImage = (imgLink) => {
        setImageList([
            ...imgList,
            imgLink,
        ])
    }

    const [tempImageList, setTempImage] = useState([]);
    const addTempImage = (imgData) => {
        setTempImage([
            ...tempImageList,
            imgData,
        ])
    }



    const [isOpenPost, setIsOpenPost] = useState(false);


    const pageRef = {
        postImageRef: useRef(null)
    }

    const uploadPicture = async(e) => {
        const formData = new FormData();
        formData.append("file", e.target.files[0])
        formData.append("upload_preset", "phiroud");
        dispatch(articleActions.uploadArticlePicture(formData));
    }

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
                        <div className="add-post-concrete">
                            <div className="add-post-heading">
                                {/* <div className="add-post-title">
                                    Tạo bài viết
                                </div> */}
                                {/* <div className='divider'>
    
                                </div> */}
                                <div className="user-info-container">
                                    <img 
                                        src="https://firebasestorage.googleapis.com/v0/b/se-img.appspot.com/o/file281556402_7443940532345703_1970040466900861195_n.jpg?alt=media&token=bbbcb3d0-6916-4d53-bed4-84c82bfde6c4"
                                        className='user-avatar'
                                    />
                                    <div className='user-name'>
                                        Nguyễn Công Phi
                                    </div>
                                </div>
                            </div>
                            <div className="add-post-body">
                                <textarea 
                                    className='post-content-input'
                                    placeholder='Câu hỏi của bạn'
                                />
                                <div className="image-displayer">
                                    {
                                        imgList.map((value, index)=> {
                                            return (
                                                <img 
                                                    src={value}
                                                    className='image-item'
                                                />
                                            );
                                        })
                                    }
                                    {
                                        tempImageList.map((value)=>{
                                            return (
                                                <div className='temp-image-container'>
                                                    <img 
                                                        src={value}
                                                        className='temp-image'
                                                    >

                                                    </img>
                                                </div>
                                                
                                            )
                                        })
                                    }
                                    <input
                                        className='post-image-add-hidden'
                                        type='file'
                                        id='post-image-input'
                                        ref={pageRef.postImageRef}
                                        onChange={(e)=>{
                                            var tgt = e.target || window.event.srcElement;
                                            var files = tgt.files;
                                            console.log("files", files);
                                            // FileReader support
                                            if (FileReader && files && files.length) {
                                                var fr = new FileReader();
                                                fr.onload = function () {
                                                    // document.querySelector('.product-current-upload-img').src = fr.result;
                                                    console.log("fr.result", fr.result);
                                                    addTempImage(fr.result);
                                                }
                                                fr.readAsDataURL(files[0]);
                                                uploadPicture(e);
                                            }
                                        }}
                                    />
                                    <label
                                        className='post-image-add'
                                        for='post-image-input'
                                        // onClick={()=>{
                                        //     console.log("pageRef.postImageRef", pageRef.postImageRef);
                                        // }}
                                    >
                                        Thêm ảnh
                                    </label>
                                    
                                </div>
                                <button
                                    className='post-adding-button'
                                    onClick={ () => {

                                    }}
                                >
                                    Đăng bài
                                </button>
                                
                            </div>
                        </div> 
                    }
                    
                        
                     
                    {
                        refineData(articles).map((item)=>{
                            console.log("item", item)
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