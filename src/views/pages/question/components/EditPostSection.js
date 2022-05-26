import React , {useEffect, useRef, useState, forwardRef, useImperativeHandle} from 'react';
import { useDispatch, useSelector } from "react-redux"; 
import { articleActions } from '../../../../actions/article.action';
import '../scss/EditPostSection.scss';

const EditPostSection = ({postInfo}, ref) => {
    console.log("postInfo", postInfo);

    const dispatch = useDispatch();
    const uploadPicture = async(e) => {
        const formData = new FormData();
        formData.append("file", e.target.files[0])
        formData.append("upload_preset", "phiroud");
        const sleep = ms => new Promise(res => setTimeout(res, ms));
        await sleep(1000);
        dispatch(articleActions.uploadEditArticlePicture(formData));
    }

    const removePicture = (link) => {
        dispatch(articleActions.removeSpecificEditPicture(link));
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

    const imgLinkEditRedux = useSelector(state =>{
        console.log("state nè:", state);
        return state.article.editArticle.imgLink;
    })

    const userInfo = useSelector(state => state.authentication.user);
    console.log("userInfo", userInfo);

    useImperativeHandle(ref, () => ({
        editArticle : () => {
            const data = {
                _id: postInfo._id,
                content: pageRef.postContent.current.value,
                imgUrl: imgLinkEditRedux,
            }
            dispatch(articleActions.editArticle(data));
            console.log("dataToEdit: ",data);
            // window.location.reload();
        },
    }));

    useEffect(()=>{
        pageRef.postContent.current.value = postInfo.contents; 
        dispatch(articleActions.setEditPicture(postInfo.imgUrl))
    },[])

    return (
        <div className="edit-post-concrete">
            <div className="edit-post-heading">
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
            <div className="edit-post-body">
                <textarea 
                    className='post-content-input'
                    placeholder='Câu hỏi của bạn'
                    ref={pageRef.postContent}
                />
                <div className="image-displayer">
                    {
                        imgLinkEditRedux.map((value, index)=> {
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
            </div>
        </div>
    )
}

export default forwardRef(EditPostSection)