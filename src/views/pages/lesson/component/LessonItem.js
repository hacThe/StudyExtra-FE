import React from 'react';
import '../scss/LessonItem.scss';
import { AiFillPlayCircle, AiFillCheckCircle } from "react-icons/ai";
const LessonItem= () => {
    return (
        <div className='lesson-item-wrapper'>
            <div className='icon-complete'>
                <AiFillCheckCircle size={20}/>
            </div>
            <div className='lesson-item-container'>
                <p className="tilte">
                    1. Tên bài học số 1 nè
                </p>
                <div className="lesson-detail">
                    <div className="play-icon">
                        <AiFillPlayCircle size={10}/>
                    </div>
                    <p className="lesson-time">10:40</p>
                </div>
            </div>
        </div>
        
    )
}

export default LessonItem;