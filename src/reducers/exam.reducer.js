import { examConstants } from "../constaint/exam.constants";

const initialState = {
    questions: [{
        title: "",
        answer: []
    }],
    isLoading: false,
    error: ""
}


export const exam = (state = initialState, action) => {
    switch(action.type) {
        case examConstants.GET_QUESTIONS_REQUEST:
            return {
                ...state,
                isLoading: true
            }

        case examConstants.GET_QUESTIONS_SUCCESS:
            return{
                ...state,
                questions: action.questions,
            }
        case examConstants.GET_QUESTIONS_FAILURE:
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
    switch(action.type) {
        case examConstants.POST_RESULT_REQUEST:
            return {
                ...state,
                isLoading: true
            }

        case examConstants.POST_RESULT_SUCCESS:
            return{
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