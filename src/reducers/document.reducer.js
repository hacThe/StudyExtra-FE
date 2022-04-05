import { documentConstants } from "../constaint";

const initialState = {
    pagination: 1,
    documents: [], 
    isLoading: false,
    error: "",
};
   
export function document(state = initialState, action) {
    console.log('dispatch from document.reducer');
    switch (action.type) {
        case documentConstants.CHANGE_PAGINATION_REQUEST:
            // console.log("action change page", action);
            var newState = {...state};
            // console.log("currentState", state);
            newState.pagination = action.page;
            // console.log("newState", newState);
            return newState;
        case documentConstants.GET_DOCUMENT_REQUEST: 
            return {
                ...state,
                isLoading: true,
            };
        case documentConstants.GET_DOCUMENT_SUCCESS:
            const documents = action.documents;
            // console.log("documents in redux switch", documents.data)
            return {
                ...state,
                isLoading: false,
                documents: documents.data
            };
        case documentConstants.GET_DOCUMENT_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.error
            };
        default:
            return state;
    }
}