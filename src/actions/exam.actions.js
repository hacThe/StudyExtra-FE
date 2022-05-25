import { examConstants } from "../constaint/exam.constants";
import { examServices } from "../services/exam.services";

export const examAction = {
    getAll,
    getOne,
    postResultExam
};

function getAll() {
    return (dispatch) => {
        dispatch(request());
        examServices.getExams().then(
            (exams)=>{
                dispatch(success(exams.data));
            },
            (err)=>{
                dispatch(failure(err))
            }
        )
    }

    function request() {
        return { type: examConstants.GET_EXAMS_REQUEST };
    }
    function success(exams) {
        return { type: examConstants.GET_EXAMS_SUCCESS, exams}
    }
    function failure(err) {
        return { type: examConstants.GET_EXAMS_FAILURE, err}
    }
}

function getOne(id) {
    return (dispatch) => {
        dispatch(request());
        examServices.getExam(id).then(
            (exam)=>{
                dispatch(success(exam.data));
            },
            (err)=>{
                dispatch(failure(err))
            }
        )
    }

    function request() {
        return { type: examConstants.GET_EXAM_REQUEST };
    }
    function success(exam) {
        return { type: examConstants.GET_EXAM_SUCCESS, exam}
    }
    function failure(err) {
        return { type: examConstants.GET_EXAM_FAILURE, err}
    }
}

function postResultExam(questionsID, examID, userAnswer) {
    return (dispatch) => {
        dispatch(request())
        examServices.postResultExam(questionsID, examID, userAnswer).then(
            resultExam => {
                console.log("dataaaa result exam:", resultExam)
                dispatch(success(resultExam))
            },
            err => {
                dispatch(failure(err.toSring()))
                console.log('Lỗi' + err.toSring())
            }
        )
    }

    function request() {
        return { type: examConstants.POST_RESULT_REQUEST };
    }
    function success(resultExam) {
        return { type: examConstants.POST_RESULT_SUCCESS, resultExam: resultExam };
    }
    function failure(error) {
        return { type: examConstants.POST_RESULT_FAILURE, error };
    }
}