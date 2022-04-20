import {documentConstants} from '../constaint/';
import { documentService } from '../services';

export const documentActions = {
    changePagination,
    getAllDocument,
    changeModalStatus
}

function changePagination(page){
    console.log("Page", page);
    return (dispatch)=>{ 
        dispatch(request())
        console.log("change pagination has called")
        function request() {
            return { type: documentConstants.CHANGE_PAGINATION_REQUEST , page: page};
        }
    }
}

function changeModalStatus(isOpen) {
    return (dispatch) => { 
        dispatch(request())
        function request() {
            return { type: documentConstants.CHANGE_MODAL_TYPE_OPEN , isOpen: isOpen};
        }
    }
}

function getAllDocument(){
    return (dispatch)=>{
        dispatch(request())
        // console.log("Course Action get all has called")

        documentService.getAllDocument().then(
            (documents)=>{
                dispatch(success(documents))
            },
            (error)=>{
                dispatch(failure(error.toString()))
                console.log({error})
            }
        )
        function request() {
            return { type: documentConstants.GET_DOCUMENT_REQUEST };
        }
        function success(documents ) {
            return {type: documentConstants.GET_DOCUMENT_SUCCESS, documents };
        }
        function failure(error) {
            return { type: documentConstants.GET_DOCUMENT_FAILURE, error };
        }
    }
}