import { examConstants } from "../constaint/exam.constants";
import { examServices } from "../services/exam.services";

export const examAction = {
    getQuestions,
    postResultExam
};

function getQuestions(questionsID) {
    return (dispatch) => {
        dispatch(request())
        examServices.getQuestions(questionsID).then(
            questions => {
                console.log("data:", questions.data)
                dispatch(success(questions.data))
            },
            err => {
                dispatch(failure(err.toSring()))
                console.log('Lỗi' + err.toSring())
            }
        )
    }

    function request() {
        return { type: examConstants.GET_QUESTIONS_REQUEST };
    }
    function success(questions) {
        return { type: examConstants.GET_QUESTIONS_SUCCESS, questions: questions };
    }
    function failure(error) {
        return { type: examConstants.GET_QUESTIONS_FAILURE, error };
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