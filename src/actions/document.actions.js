import {documentConstants} from '../constaint/';

export const documentActions = {
    changePagination,
}

function changePagination(page){
    console.log("Page", page);
    return (dispatch)=>{ 
        dispatch(request())
        console.log("change pagination has called")
        function request() {
            return { type: documentConstants.CHANGE_PAGINATION_REQUEST };
        }
    }
}