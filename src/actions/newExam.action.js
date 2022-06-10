import { examConstants } from "../constaint/exam.constants";

export const editQuestion = (oldIndex, question, newIndex) => {
    return (dispatch) => {
        dispatch({
            type: examConstants.EDIT_QUESTION,
            question,
            newIndex,
            oldIndex
        })
    }
}

export const setRequirement = (require) => {
    return (dispatch) => {
        dispatch({
            type: examConstants.SET_REQUIREMENT,
            require
        })
    }
}

export const deleteRequirement = (require) => {
    console.log('delete action')
    return (dispatch) => {
        dispatch({
            type: examConstants.DELETE_REQUIREMENT,
            require
        })
    }
}

export const setDescription = (description) => {
    return (dispatch) => {
        dispatch({
            type: examConstants.SET_DESCRIPTION_EXAM,
            description
        })
    }
}

export const setEditExam = (data) => {
    return (dispatch) => {
        dispatch({
            type: examConstants.SET_EDIT_EXAM,
            data
        })
    }
}

export function setNameExam(name) {
    return (dispatch) => {
        dispatch({
            type: examConstants.SET_NAME_EXAM,
            name
        })
    }
};

export function setTimeExam(timeExam) {
    return (dispatch) => {
        dispatch({
            type: examConstants.SET_TIME_EXAM,
            timeExam
        })
    }
};

export function setQuestionsExam(listQuestion) {
    return (dispatch) => {
        dispatch({
            type: examConstants.SET_QUESTIONS_EXAM,
            listQuestion
        })
    }
}

export function setPointExam(questionPoint) {
    return (dispatch) => {
        dispatch({
            type: examConstants.SET_POINT_EXAM,
            questionPoint,
        })
    }
}

export function addNewQuestion(index, question) {
    return (dispatch) => {
        dispatch({
            type: examConstants.ADD_NEW_QUESTION,
            question,
            index
        })
    }
}

export function setTypeCategory(typeCategory) {
    return (dispatch) => {
        dispatch({
            type: examConstants.SET_TYPE_CATEGORY_EXAM,
            typeCategory
        })
    }
}

export function resetExam() {
    return (dispatch) => {
        dispatch({
            type: examConstants.RESET_EXAM,
        })
    }
}