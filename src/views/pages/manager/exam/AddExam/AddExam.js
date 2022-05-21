import React, {useEffect} from "react";
import SingleExamForm from "../component/SingleExamForm";
import BackToPageButton from "../../../../components/BackToPageButton";
import LeadingIconButton from "../../../../components/LeadingIconButton";
import { useRef } from "react";
import {
    AiFillFileAdd
} from "react-icons/ai";
import './AddExam.scss'
import {useSelector} from 'react-redux'
import axios from 'axios'
import URL from '../../../../../services/api/config'
import {useNavigate} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {resetExam} from '../../../../../actions/newExam.action'
function AddExam(props) {
    useEffect(() => {
        if (newExam.id) {
            dispatch(resetExam())
        }
    }, [])
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const newExam = useSelector(state => state.newExam)
    const handleAdd = () => {
        if (newExam.nameExam.length !== 0 && newExam.time > 0 && newExam.questionPoint && newExam.listQuestion.length > 1 && newExam.typeCategory !== '') {
            axios.post(URL.URL_ADD_NEW_EXAM, {
                ...newExam
            })
            .then(res => {
                if (res) {
                    navigate('/quan-ly/thi-thu')
                    dispatch(resetExam())
                }
                console.log('thành công')
            })
            .catch(err => {
                console.log('Error system')
            })
        } else {
            console.log('Nhập đầy đủ thông tin')
        }
        
    }

    return (
        <div className="manager-fa-ke-modal edit-exam-wrapper">
            <div className="justify-content-between top-action-bar">
                <BackToPageButton content="Trở lại trang trước" />
                <div onClick={handleAdd} className="course-action align-center">
                    <LeadingIconButton  icon={<AiFillFileAdd />} content="Thêm" />
                </div>
            </div>
            <SingleExamForm isAdd={true}/>
        </div>
    );
}

export default AddExam;