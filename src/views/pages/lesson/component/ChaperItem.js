import React from 'react';
import '../scss/ChapterItem.scss';
import LessonItem from './LessonItem';
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
const ChapterItem= () => {
    const [open, setOpen] = React.useState(false);
    const changeOpen = (event, newValue) => {
        setOpen(newValue);
        console.log("newValue", newValue)
    };
    return (
        <div className='chapter-item-wrapper'>
            <div className="chapter-item-container">
                <p className="chapter-title">Phần 1: Tên chương phần nè</p>
                <div className="chapter-detail">
                    0/2 | 33:02
                </div>
                <div className="chapter-open">
                    <IoIosArrowDown 
                        size={20}
                        onClick={(e) => changeOpen(e,true)}
                        className={!open ? '' : 'hide'}
                    />
                    <IoIosArrowUp 
                        size={20}
                        onClick={(e) => changeOpen(e,false)}
                        className={open ? '' : 'hide'}
                    />
                </div>
            </div>
            {/* Lesson item section */}
            <div 
                className={open ? 'lesson-items-container' : 'lesson-items-container hide'}
            >
                <LessonItem></LessonItem>
                <LessonItem></LessonItem>
            </div>
        </div>
        
    )
}

export default ChapterItem;