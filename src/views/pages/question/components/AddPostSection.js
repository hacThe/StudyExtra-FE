import React , {useEffect, useRef, useState, useImperativeHandle, forwardRef } from 'react';
import { useDispatch, useSelector } from "react-redux";
import '../scss/AddPostSection.scss';

import { articleActions } from '../../../../actions/article.action';
import { showToast, hideToast } from '../../../../actions/toast.action';

const AddPostSection = forwardRef((props, ref) => {
    const dispatch = useDispatch();
    

    
    const uploadPicture = async(e) => {
        const formData = new FormData();
        formData.append("file", e.target.files[0])
        formData.append("upload_preset", "phiroud");
        const sleep = ms => new Promise(res => setTimeout(res, ms));
        await sleep(1000);
        dispatch(articleActions.uploadArticlePicture(formData));
    }

    const removePicture = (link) => {
        dispatch(articleActions.removeSpecificPicture(link));
    }

    const pageRef = {
        postImageRef: useRef(null),
        postContent: useRef(null),
    }

    const [tempImageList, setTempImage] = useState([]);
    const addTempImage = (imgData) => {
        setTempImage([
            ...tempImageList,
            imgData,
        ])
    }

    const imgLinkRedux = useSelector(state =>{
        console.log("state nè:", state);
        return state.article.currentArticle.imgLink;
    })

    const userInfo = useSelector((state) => state.user.currentUser);
    console.log("userInfo", userInfo);


    const addArticle = () => {
        if(pageRef.postContent.current.value.length == 0) {
            dispatch(showToast( "fail", "Bài đăng chưa có nội dung!"));
            return;
        }
        const data = {
            userID: userInfo._id,
            content: pageRef.postContent.current.value,
            imgUrl: imgLinkRedux,
            comments: [],
        }
        dispatch(articleActions.addNewArticle(data));
        pageRef.postContent.current.value="";
        // console.log("props", props);
        // console.log("ref", ref) 
        ref.current.closeAddPost();  
        // dispatch(hideToast());
        dispatch(showToast( "success", "Thêm mục hỏi đáp thành công!"));
    }

    return (
        <div className="add-post-concrete">
            <div className="add-post-heading">
                <div className="user-info-container">
                    <img 
                        src={userInfo.avatar}
                        className='user-avatar'
                    />
                    <div className='user-name'>
                        {userInfo.name}
                    </div>
                </div>
            </div>
            <div className="add-post-body">
                <textarea 
                    className='post-content-input'
                    placeholder='Câu hỏi của bạn'
                    ref={pageRef.postContent}
                />
                <div className="image-displayer">
                    {
                        imgLinkRedux.map((value, index)=> {
                            return (
                                <div className="image-item-container">
                                    
                                    <img 
                                        src={value}
                                        className='image-item'
                                    />
                                    <div className="overlay">
                                        <div 
                                            className="button-delete"
                                            onClick={()=>{
                                                removePicture(value);
                                            }}
                                        >
                                            Xoá
                                        </div>
                                    </div>
                                </div>
                                
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
                        onChange={ async(e) => {
                            var tgt = e.target || window.event.srcElement;
                            var files = tgt.files;
                            console.log("files", files);
                            // FileReader support
                            if (FileReader && files && files.length) {
                                var fr = new FileReader();
                                const sleep = ms => new Promise(res => setTimeout(res, ms));
                                fr.onload = async() => {
                                    // document.querySelector('.product-current-upload-img').src = fr.result;
                                    console.log("fr.result", fr.result);
                                    addTempImage(fr.result);
                                    await sleep(2000);
                                    setTempImage([]);
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
                        addArticle();   
                    }}
                >
                    Đăng bài
                </button>
                
            </div>
        </div>
    )
})

export default AddPostSection