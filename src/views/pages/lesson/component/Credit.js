import React from 'react'
import { AiFillHeart } from "react-icons/ai";
import '../scss/Credit.scss';
const Credit= () => {
    return (
        <div className="credit-container">
            < AiFillHeart size={20} className='credit-icon'/>
            <p className='label'>
                Extrastudy.com.vn
            </p>
            <p className='sologan'>
                SE from SE UIT with love
            </p>
        </div>
    )
}

export default Credit;