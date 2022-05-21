import { examConstants } from "../constaint/exam.constants";

const initialState = {
    id: null,
    nameExam: '',
    time: 0,
    questionPoint: 0,
    listQuestion: [],
    typeCategory: ''
};

export const newExam = (state = initialState, action) => {
    switch (action.type) {
        case examConstants.EDIT_QUESTION:
            if (Number(action.newIndex) <= 0) {
                state.listQuestion.shift()
                state.listQuestion.unshift(action.question)
            } else {
                state.listQuestion.splice(Number(action.oldIndex - 1), 1)
                state.listQuestion.splice(Number(action.newIndex - 1), 0, action.question)
            }
            return {
                ...state,
            }
        case examConstants.SET_EDIT_EXAM:
            return {
                id: action.data._id,
                nameExam: action.data.nameExam,
                time: action.data.time,
                questionPoint: action.data.questionPoint,
                listQuestion: action.data.listQuestion,
                typeCategory: action.data.typeCategory,
            }
        case examConstants.RESET_EXAM:
            return {
                id: null,
                nameExam: '',
                time: 0,
                questionPoint: 0,
                listQuestion: [],
                typeCategory: ''
            }
        case examConstants.SET_TYPE_CATEGORY_EXAM:
            return {
                ...state,
                typeCategory: action.typeCategory
            }
        case examConstants.SET_NAME_EXAM:
            return {
                ...state,
                nameExam: action.nameExam,
            };
        case examConstants.SET_POINT_EXAM:
            return {
                ...state,
                questionPoint: Number(action.questionPoint),
            };
        case examConstants.SET_QUESTIONS_EXAM:
            return {
                ...state,
                listQuestion: action.listQuestion,
            };
        case examConstants.SET_TIME_EXAM:
            return {
                ...state,
                time: Number(action.timeExam),
            };
        case examConstants.ADD_NEW_QUESTION:

            if (Number(action.index) <= 0) {
                state.listQuestion.unshift(action.question)
            } else {
                state.listQuestion.splice(Number(action.index - 1), 0, action.question)
            }
            return {
                ...state,

            }
        default:
            return state;
    }
}
