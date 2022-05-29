import React , {useState, useEffect, useRef} from 'react';
import { useDispatch, useSelector } from "react-redux";
import { articleActions } from '../../../../actions/article.action';
import { AiFillLike } from "react-icons/ai";
import '../scss/ShowUserModal.scss';
const ShowUserModal = () => {
    const dispatch = useDispatch();

    const userList = [
        {
            avatar: "https://i.pinimg.com/564x/d2/9b/57/d29b571273fb1a88a8b65d1d4b868e26.jpg",
            name: "Nguyễn Công Phi",
        },
        {
            avatar: "https://i.pinimg.com/564x/d2/9b/57/d29b571273fb1a88a8b65d1d4b868e26.jpg",
            name: "Nguyễn Công Phi",
        },
    ]

    return (
        <div
            className='overlay-modal'
        >
            <div 
                className='not-modal'
                onClick={() => {
                    dispatch(articleActions.closeShowUserModal())
                }}
            >

            </div>
            <div
                className="show-user-container"
            >
                <div
                    className="show-user-heading"
                >
                    <p className="title">
                        Người dùng đã thích bài viết
                    </p>
                    
                    <p className='like-count'>
                        <AiFillLike 
                            className='like-icon'
                            size={20}
                        />    
                        <p className='like-concrete'>
                            3
                        </p>
                    </p>
                </div>
                <div className='divider'></div>
                <div className='show-user-list'>
                    {
                        userList.map((val, index)=>{
                            return (
                                <div className="user-row">
                                    <img 
                                        src={val.avatar}
                                        className='user-avatar'
                                    ></img>
                                    <p className='user-name'>
                                        {val.name}
                                    </p>
                                </div>
                            )
                        })
                    }
                </div>

            </div>

        </div>
    )
}

export default ShowUserModal;