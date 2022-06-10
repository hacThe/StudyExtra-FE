import React from 'react';
import BackToPageButton from '../../../../components/BackToPageButton';
import SingleQuestionForm from '../component/SingleQuestionForm';
import './AddQuestion.scss'
function AddQuestion(props) {
    return (
        <div className="manager-fa-ke-modal add-question-wrapper">
             <BackToPageButton content="Trở lại trang trước" />
             <h1>Thêm câu hỏi</h1>
             <SingleQuestionForm/>
        </div>
    );
}

export default AddQuestion;