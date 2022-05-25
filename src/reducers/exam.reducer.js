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



const initialStateResultExam = {
    resultExam: {},
    isLoading: false,
    error: ""
}
export const resultExam = (state = initialStateResultExam, action) => {
    switch (action.type) {
        case examConstants.POST_RESULT_REQUEST:
            return {
                ...state,
                isLoading: true
            }

        case examConstants.POST_RESULT_SUCCESS:
            return {
                ...state,
                resultExam: action.resultExam,
            }
        case examConstants.POST_RESULT_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.error
            }
        default:
            return state
    }
} 