import React , {useState, useEffect, useRef} from 'react';
import { useDispatch, useSelector } from "react-redux";
import { articleActions } from '../../../../actions/article.action';
import { AiFillLike } from "react-icons/ai";
import '../scss/ShowUserModal.scss';
const ShowUserModal = () => {
    const dispatch = useDispatch();

    const userList = useSelector((state)=>{
        return state.article.userList;
    })
    
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
                        Người dùng đã thích
                    </p>
                    
                    <p className='like-count'>
                        <AiFillLike 
                            className='like-icon'
                            size={20}
                        />    
                        <p className='like-concrete'>
                            {userList.length}
                        </p>
                    </p>
                </div>
                <div className='divider'></div>
                <div className='show-user-list'>
                    {
                        userList.length != 0 ? userList.map((val, index)=>{
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
                        :
                        <div className='no-user'>
                            Chưa có người dùng nào thích nội dung
                        </div>
                    }
                </div>

            </div>

        </div>
    )
}

export default ShowUserModal;