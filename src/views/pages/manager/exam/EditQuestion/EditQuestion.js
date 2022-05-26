import React from "react";
import SingleQuestionForm from "./SingleQuestionForm";
import "./EditQuestion.scss"
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
function EditQuestion(props) {
  const { id } = useParams()
  const questionEdit = useSelector(state => state.newExam.listQuestion[Number(id)])
  console.log(questionEdit)
 
  return (
    <div className="manager-fa-ke-modal edit-question-wrapper">
      <h1>Chỉnh sửa câu hỏi</h1>

      <SingleQuestionForm index={Number(id) + 1} question={questionEdit} />
    </div>
  );
}

export default EditQuestion;
