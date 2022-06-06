import { lessonConstants } from '../constaint/';
import { documentService } from '../services';

export const lessonActions = {
    
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