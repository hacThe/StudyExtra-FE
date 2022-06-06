import React from 'react';
import '../scss/LessonItem.scss';
import { AiFillPlayCircle, AiFillCheckCircle } from "react-icons/ai";
import { useDispatch, useSelector } from 'react-redux';
import { lessonActions } from '../../../../actions/lesson.action';
const LessonItem= (props) => {
    const dispatch = useDispatch();

    // console.log("props Lesson", props);

    const changeIndex= () => {
        const dataToChangeIndex = {
            chapterIndex: props.chapterIndex,
            lessonIndex: props.lessonIndex
        }
        // console.log("dataToChangeIndex",dataToChangeIndex);
        dispatch(lessonActions.changeSelectedLessonIndex(dataToChangeIndex));
        props.changeIndex(dataToChangeIndex);
    }

    const userSelectedLessonIndex = useSelector((state) => {
        return state.lesson.userSelectedLessonIndex;
    })

    return (
        <div 
            className={ 
                userSelectedLessonIndex.chapterIndex === props.chapterIndex &&
                userSelectedLessonIndex.lessonIndex === props.lessonIndex ?
                'lesson-item-wrapper active'
                :
                'lesson-item-wrapper'
            }
            onClick={()=> {
                changeIndex();
            }}
        >
            <div className='icon-complete'>
                <AiFillCheckCircle size={20}/>
            </div>
            <div className='lesson-item-container'>
                <p className="tilte">
                    {props.lessonIndex + 1}. {props.lesson.name}
                </p>
                <div className="lesson-detail">
                    <div className="play-icon">
                        <AiFillPlayCircle size={10}/>
                    </div>
                    <p className="lesson-time">10:00</p>
                </div>
            </div>
        </div>
        
    )
}

export default LessonItem;