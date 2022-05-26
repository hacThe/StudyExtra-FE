import { examConstants } from "../constaint/exam.constants";
import { examServices } from "../services/exam.services";

export const examAction = {
    getAll,
    getOne,
    CheckExamRequirement,
    postResultExam
};

function getAll() {
    return (dispatch) => {
        dispatch(request());
        examServices.getExams().then(
            (exams)=>{
                dispatch(success(exams.data));
            },
            (error)=>{
                dispatch(failure(error))
            }
        )
    }

    function request() {
        return { type: examConstants.GET_EXAMS_REQUEST };
    }
    function success(exams) {
        return { type: examConstants.GET_EXAMS_SUCCESS, exams}
    }
    function failure(error) {
        return { type: examConstants.GET_EXAMS_FAILURE, error}
    }
}

function getOne(id) {
    return (dispatch) => {
        dispatch(request());
        examServices.getExam(id).then(
            (exam)=>{
                dispatch(success(exam.data));
            },
            (error)=>{
                dispatch(failure(error))
            }
        )
    }

    function request() {
        return { type: examConstants.GET_EXAM_REQUEST };
    }
    function success(exam) {
        return { type: examConstants.GET_EXAM_SUCCESS, exam}
    }
    function failure(error) {
        return { type: examConstants.GET_EXAM_FAILURE, error}
    }
}


function CheckExamRequirement(id) {
    return (dispatch) => {
        dispatch(request());
        examServices.CheckExamRequirement(id).then(
            (result)=>{
                dispatch(success());
            },
            (error)=>{
                dispatch(failure(error))
            }
        )
    }

    function request() {
        return { type: examConstants.CHECK_EXAM_REQUIREMENT_REQUEST };
    }
    function success() {
        return { type: examConstants.CHECK_EXAM_REQUIREMENT_SUCCESS}
    }
    function failure(error) {
        return { type: examConstants.CHECK_EXAM_REQUIREMENT_FAILURE, error}
    }
}

function postResultExam(examID, userAnswer) {
    return (dispatch) => {
        dispatch(request())
        examServices.postResultExam( examID, userAnswer).then(
            () => {
                dispatch(success())
            },
            error => {
                dispatch(failure(error))
            }
        )
    }

    function request() {
        return { type: examConstants.POST_RESULT_REQUEST };
    }
    function success() {
        return { type: examConstants.POST_RESULT_SUCCESS };
    }
    function failure(error) {
        return { type: examConstants.POST_RESULT_FAILURE, error };
    }
}