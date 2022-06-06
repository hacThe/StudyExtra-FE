import { lessonConstants } from "../constaint";

const initialState = {
    isLoading: false,
    error: {},
    currentCourse: {},
    userCurrentLessonIndex: {
        chapterIndex: 0,
        lessonIndex: 0,
    },
    userSelectedLessonIndex: {
        chapterIndex: 0,
        lessonIndex: 0
    },
};
   
export function lesson(state = initialState, action) {
    switch (action.type) {
        case lessonConstants.GET_COURSE_BY_COURSE_ID_REQUEST: 
            return {
                ...state,
                isLoading: true,
            };
        case lessonConstants.GET_COURSE_BY_COURSE_ID_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.error
            };
        case lessonConstants.GET_COURSE_BY_COURSE_ID_SUCCESS:
            // console.log("action", action);
            return {
                ...state,
                isLoading: false,
                currentCourse: action.course.currentCourseChapter,
            }
        
        // case documentConstants.CHANGE_PAGINATION_REQUEST:
        //     var newState = {...state};
        //     newState.pagination = action.page;
        //     return newState;
        // case documentConstants.GET_DOCUMENT_REQUEST: 
        //     return {
        //         ...state,
        //         isLoading: true,
        //     };
        // case documentConstants.GET_DOCUMENT_SUCCESS:
        //     const documents = action.documents;
        //     // console.log("documents in redux switch", documents.data)
        //     return {
        //         ...state,
        //         isLoading: false,
        //         documents: documents.data
        //     };
        // case documentConstants.GET_DOCUMENT_FAILURE:
        //     return {
        //         ...state,
        //         isLoading: false,
        //         error: action.error
        //     };
        // case documentConstants.DELETE_DOCUMENT_REQUEST:{
        //     return {
        //         ...state,
        //         isLoading: true,
        //     };
        // }
        // case documentConstants.DELETE_DOCUMENT_FAILURE:{
        //     return {
        //         ...state,
        //         isLoading: false,
        //         error: action.error
        //     };
        // }
        // case documentConstants.DELETE_DOCUMENT_SUCCESS:{
        //     var listDocumentDelete = Object.values(action.data.data);
        //     var newDocumentList = state.documents;
        //     try {
        //         for(var i = 0 ; i < listDocumentDelete.length; i++){
        //             newDocumentList = newDocumentList.filter(function(item) {
        //                 return item._id !== listDocumentDelete[i]
        //             })
        //         }
        //     }
        //     catch(e){
        //         console.log("e", e);
        //     }
        //     return {
        //         ...state,
        //         isLoading: false,
        //         documents: newDocumentList
        //     }
        // }
        // case documentConstants.CHANGE_MODAL_TYPE_OPEN:
        //     return {
        //         ...state,
        //         documentTypeOpen: action.isOpen
        // }
        // case documentConstants.GET_TYPE_DOCUMENT_FAILURE:{
        //     return {
        //         ...state,
        //         isLoading: false,
        //         error: action.error
        //     };
        // }
        default:
            return state;
    }
}