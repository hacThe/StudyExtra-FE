import { examConstants } from "../constaint/exam.constants";

const initialState = {
    exams: [],
    exam: {},
    isLoading: false,
    error: ""
}
export const exam = (state = initialState, action) => {
    switch (action.type) {
        case examConstants.GET_EXAMS_REQUEST:
            return {
                ...state,
                isLoading: true
            }

        case examConstants.GET_EXAMS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                exams: action.exams,
            }
        case examConstants.GET_EXAMS_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.error
            }
        case examConstants.GET_EXAM_REQUEST:
            return {
                ...state,
                isLoading: true
            }

        case examConstants.GET_EXAM_SUCCESS:
            return {
                ...state,
                isLoading: false,
                exam: action.exam,
            }
        case examConstants.GET_EXAM_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.error
            }
        default:
            return state
    }
}



const initialStateTakeExam = {
    resultExam: {},
    isTaking: "init",// trạng thái có đang làm bài hay không
    isLoading: false,
    submited: false,
    error: ""
}
export const takeExam = (state = initialStateTakeExam, action) => {
    switch (action.type) {
        case examConstants.CHECK_EXAM_REQUIREMENT_REQUEST:
            return {
                ...state,
                isTaking: "init",
                isLoading: true,
                error: ""
            }
        case examConstants.CHECK_EXAM_REQUIREMENT_SUCCESS:
            return {
                ...state,
                isTaking: "taking",
                isLoading: false,
            }
        case examConstants.CHECK_EXAM_REQUIREMENT_FAILURE:
            return {
                ...state,
                isTaking: "notAccept",
                isLoading: false,
                error: action.error
            }
        case examConstants.POST_RESULT_REQUEST:
            return {
                ...state,
                submited: false,
                isTaking: false,
                isLoading: true
            }
        case examConstants.POST_RESULT_SUCCESS:
            return {
                ...state,
                isLoading: false,
            }
        case examConstants.POST_RESULT_FAILURE:
            return {
                ...state,
                isLoading: false,
                submited: true,
                error: action.error
            }
        case examConstants.GET_RESULT_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case examConstants.GET_RESULT_SUCCESS:
            return {
                isLoading: false,
                resultExam: action.result,
                ...state,
            }
        case examConstants.GET_RESULT_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.error
            }
        default:
            return state
    }
} 