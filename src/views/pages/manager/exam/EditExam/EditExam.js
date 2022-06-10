import React, { useEffect } from "react";
import SingleExamForm from "../component/SingleExamForm";
import BackToPageButton from "../../../../components/BackToPageButton";
import LeadingIconButton from "../../../../components/LeadingIconButton";
import { useParams } from 'react-router-dom'
import axios from 'axios'
import URL from '../../../../../services/api/config'
import {
  AiOutlineDelete, AiFillEdit
} from "react-icons/ai";
import { BiHide } from "react-icons/bi";
import './EditExam.scss'
import { useNavigate } from 'react-router-dom'
import { setEditExam, resetExam } from '../../../../../actions/newExam.action'
import { useDispatch, useSelector } from 'react-redux'
function EditExam(props) {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const newExam = useSelector(state => state.newExam)
  const { id } = useParams()
  useEffect(() => {
    const fetchApi = async () => {
      await axios.get(URL.URL_EDIT_TEST_EXAM + id)
        .then(res => {
          console.log(res.data.data)
          dispatch(setEditExam(res.data.data))
        })
        .catch(err => [
          console.log("Lỗi")
        ])
    }

    if(newExam.id !== id){
      fetchApi()
    }
    if (!newExam.id) {
      fetchApi()
    } 
  }, [])

  const handleDelete = async () => {
    await axios.post(URL.URL_DELETE_TEST_EXAM, { id })
      .then(res => {
        if (res) {
          navigate('/quan-ly/thi-thu')
          dispatch(resetExam())
        }
      })
      .catch(err => {
        console.log('Error sysem')
      })
  }

  const handleSave = async () => {
    await axios.post(URL.URL_SAVE_TEST_EXAM, { ...newExam })
      .then(res => {
        if (res) {
          navigate('/quan-ly/thi-thu')
          dispatch(resetExam())
        }
      })
      .catch(err => {
        console.log('Error sysem')
      })
  }

  return (
    <div className="manager-fa-ke-modal edit-exam-wrapper">
      <div className="justify-content-between top-action-bar">
        <BackToPageButton content="Trở lại trang trước" />
        <div className="course-action align-center">
          <LeadingIconButton onClick={handleDelete} icon={<AiOutlineDelete />} content="Xóa" />
          <LeadingIconButton onClick={handleSave} icon={<AiFillEdit />} content="Lưu" />
        </div>
      </div>
      <SingleExamForm isAdd={false} />
    </div>
  );
}

export default EditExam;
