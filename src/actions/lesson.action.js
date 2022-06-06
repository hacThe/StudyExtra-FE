import { lessonConstants } from '../constaint/';
import { lessonService } from '../services';

export const lessonActions = {
    getCourseInfo,
    changeSelectedLessonIndex,
    saveNote
}

function getCourseInfo(id){
    return (dispatch)=>{
        dispatch(request())

        lessonService.getCourseInfo(id).then(
            (course)=>{
                dispatch(success(course))
            },
            (error)=>{
                dispatch(failure(error.toString()))
                console.log({error})
            }
        )
        function request() {
            return { type: lessonConstants.GET_COURSE_BY_COURSE_ID_REQUEST };
        }
        function success(course) {
            return {type: lessonConstants.GET_COURSE_BY_COURSE_ID_SUCCESS, course };
        }
        function failure(error) {
            return { type: lessonConstants.GET_COURSE_BY_COURSE_ID_FAILURE, error };
        }
    }
}

function changeSelectedLessonIndex(selectedLesson) {
    return (dispatch) => { 
        dispatch(request())
        function request() {
            return { type: lessonConstants.CHANGE_SELECT_LESSON_INDEX , selectedLesson};
        }
    }
}

function saveNote(data){
    return (dispatch)=>{
        dispatch(request())

        lessonService.saveNotion(data).then(
            (data)=>{
                dispatch(success(data))
            },
            (error)=>{
                dispatch(failure(error.toString()))
                console.log({error})
            }
        )
        function request() {
            return { type: lessonConstants.SAVE_NOTION_REQUEST };
        }
        function success(data) {
            return {type: lessonConstants.SAVE_NOTION_SUCCESS, data };
        }
        function failure(error) {
            return { type: lessonConstants.SAVE_NOTION_FAILURE, error };
        }
    }
}

// function changeModalStatus(isOpen) {
//     return (dispatch) => { 
//         dispatch(request())
//         function request() {
//             return { type: documentConstants.CHANGE_MODAL_TYPE_OPEN , isOpen: isOpen};
//         }
//     }
// }

// function getDocumentByIDNew(id){
//     return (dispatch)=>{
//         dispatch(request())

//         documentService.getDocumentByIDNew(id).then(
//             (document)=>{
//                 dispatch(success(document))
//             },
//             (error)=>{
//                 dispatch(failure(error.toString()))
//                 console.log({error})
//             }
//         )
//         function request() {
//             return { type: documentConstants.GET_DOCUMENT_BY_ID_NEW_REQUEST };
//         }
//         function success(document ) {
//             return {type: documentConstants.GET_DOCUMENT_BY_ID_NEW_SUCCESS, document };
//         }
//         function failure(error) {
//             return { type: documentConstants.GET_DOCUMENT_BY_ID_NEW_FAILURE, error };
//         }
//     }
// }