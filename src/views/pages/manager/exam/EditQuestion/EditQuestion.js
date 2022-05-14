import React from "react";
import SingleQuestionForm from "../component/SingleQuestionForm";
import "./EditQuestion.scss"

function EditQuestion(props) {
  const mockQuestion = {
    index: 5,
    question: "Đây là câu hỏi",
    answers: ["Đây là câu trả lời 1", "Đây là câu trả lời 2", "Đây là câu trả lời 2", "Đây là câu trả lời 2"],
    correctAnswer: 0,
  };
  return (
    <div className="manager-fa-ke-modal edit-question-wrapper">
      <h1>Chỉnh sửa câu hỏi</h1>

      <SingleQuestionForm question={mockQuestion} />
    </div>
  );
}

export default EditQuestion;
