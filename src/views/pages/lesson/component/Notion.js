import React, { useEffect, useRef } from 'react';
import '../scss/Notion.scss';
import { IoIosSave } from "react-icons/io";
import { MdDownload } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { lessonActions } from '../../../../actions/lesson.action';

import { showToast } from '../../../../actions/toast.action';
const Notion= (props) => {
    const dispatch = useDispatch();
    console.log("propsNotion", props)
    const userInfo = useSelector((state) => state.user.currentUser);

    const currentCourse = useSelector((state) => {
        return state.lesson.currentCourse
    }) || {};


    console.log("currentCourse", currentCourse._id);
    const saveNote = async() => {
        if(noteRef.current.value.length==0) {
            dispatch(showToast('fail', "Không thể lưu ghi chú trống"))
        };

        // console.log(noteRef.current.value);
        const noteToSave = {
            userID: userInfo._id,
            lessonID: props.currentLesson._id,
            content: noteRef.current.value,
        }
        // console.log("noteToSave", noteToSave);
        dispatch(lessonActions.saveNote(noteToSave));
        dispatch(showToast('success', "Thêm ghi chú thành công"))
        dispatch(lessonActions.getCourseInfo(currentCourse.courseId));
    }

    const downloadTxtFile = () => {
        if(noteRef.current.value.length==0) {
            dispatch(showToast('fail', "Không thể tải ghi chú trống"))
        };
        const element = document.createElement("a");
        const file = new Blob([noteRef.current.value], {
          type: "text/plain"
        });
        element.href = URL.createObjectURL(file);
        element.download = props.currentLesson.name+".txt";
        document.body.appendChild(element);
        element.click();
        dispatch(showToast('success', "Tải ghi chú thành công"))
    };
    
    const noteRef = useRef(null);

    const getDefaultValue = () =>{
        var res = "";
        if(props.currentLesson.notes)
        for(let i = 0; i < props.currentLesson.notes.length; i++){
            if(props.currentLesson.notes[i].userID === userInfo._id){
                return props.currentLesson.notes[i].note;
            }
        }
        return res;
    }
    useEffect(() => {
        noteRef.current.value = getDefaultValue();
    })
    
    return (
        <div className="notion-wrapper">
            <div className="notion-container">
                <div className="notion-controller">
                    <IoIosSave className='controller-icon' size={20}
                        onClick={() => {
                            saveNote();
                        }}
                    />
                    <MdDownload className='controller-icon' size={20}
                        onClick={() => {
                            downloadTxtFile();
                        }}
                    />
                </div>
                <textarea className='note-editing' ref={noteRef}
                >

                </textarea>
            </div>
        </div>
    )
}

export default Notion;