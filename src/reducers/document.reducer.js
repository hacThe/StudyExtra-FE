import { documentConstants } from "../constaint";

const initialState = {
    pagination: 1,
    documents: [], 
    isLoading: false,
    error: "",
    documentTypeOpen: false,
    documentType:[],
};
   
export function document(state = initialState, action) {
    // console.log("inside document redux")
    switch (action.type) {
        case documentConstants.CHANGE_PAGINATION_REQUEST:
            console.log("action change page", action);
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
        case documentConstants.CHANGE_MODAL_TYPE_OPEN:
            return {
                ...state,
                documentTypeOpen: action.isOpen
            }
        case documentConstants.GET_TYPE_DOCUMENT_FAILURE:{
            return {
                ...state,
                isLoading: false,
                error: action.error
            };
        }
        case documentConstants.GET_TYPE_DOCUMENT_REQUEST:{
            return {
                ...state,
                isLoading: true,
            };
        }
        case documentConstants.GET_TYPE_DOCUMENT_SUCCESS: {
            console.log('action', action.documentType.data)
            return {
                ...state,
                documentType: action.documentType.data,
            }
        }
        case documentConstants.ADD_NEW_TYPE_DOCUMENT_REQUEST:{
            return {
                ...state,
                isLoading: true,
            };
        }
        case documentConstants.ADD_NEW_TYPE_DOCUMENT_FAILURE:{
            return {
                ...state,
                isLoading: false,
                error: action.error
            };
        }
        case documentConstants.ADD_NEW_TYPE_DOCUMENT_SUCCESS:{
            // console.log('action nè, có vào đây không =)))', action.documentType.data)
            var newDocumentType = state.documentType;
            newDocumentType.push(action.documentType.data);
            return {
                ...state,
                documentType: newDocumentType,
            }
        }
        case documentConstants.DELETE_TYPE_DOCUMENT_REQUEST:{
            return {
                ...state,
                isLoading: true,
            };
        }
        case documentConstants.DELETE_TYPE_DOCUMENT_FAILURE:{
            return {
                ...state,
                isLoading: false,
                error: action.error
            };
        }
        case documentConstants.DELETE_TYPE_DOCUMENT_SUCCESS:{
            console.log("action.data.data", action.data.data);
            var newDocumentType = state.documentType;
            newDocumentType = newDocumentType.filter(function(item) {
                return item._id !== action.data.data._id
            })
            return {
                ...state,
                isLoading: true,
                documentType: newDocumentType,
            };
        }
        default:
            return state;
    }
}