import { plPL } from "@mui/material/locale";
import { documentConstants } from "../constaint";

const initialState = {
    pagination: 1,
    documents: [], 
    isLoading: false,
    error: "",
    documentTypeOpen: false,
    documentType:[],
    currentEditingDoc:{},
    currentViewingDoc:{},
    isFlushed: true,
};
   
export function document(state = initialState, action) {
    switch (action.type) {
        case documentConstants.CHANGE_PAGINATION_REQUEST:
            var newState = {...state};
            newState.pagination = action.page;
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
        case documentConstants.DELETE_DOCUMENT_REQUEST:{
            return {
                ...state,
                isLoading: true,
            };
        }
        case documentConstants.DELETE_DOCUMENT_FAILURE:{
            return {
                ...state,
                isLoading: false,
                error: action.error
            };
        }
        case documentConstants.DELETE_DOCUMENT_SUCCESS:{
            var listDocumentDelete = Object.values(action.data.data);
            var newDocumentList = state.documents;
            try {
                for(var i = 0 ; i < listDocumentDelete.length; i++){
                    newDocumentList = newDocumentList.filter(function(item) {
                        return item._id !== listDocumentDelete[i]
                    })
                }
            }
            catch(e){
                console.log("e", e);
            }
            return {
                ...state,
                isLoading: false,
                documents: newDocumentList
            }
        }
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
        case documentConstants.GET_DOCUMENT_BY_ID_REQUEST:{
            return {
                ...state,
                isLoading: true,
            };
        }
        case documentConstants.GET_DOCUMENT_BY_ID_FAILURE:{
            return {
                ...state,
                isLoading: false,
                error: action.error
            };
        }
        case documentConstants.GET_DOCUMENT_BY_ID_SUCCESS:{
            // console.log("action.document.data vô đây rồi mà, cmn",action.document.data)
            return {
                ...state,
                isLoading: false,
                currentEditingDoc: action.document.data
            };
        }
        case documentConstants.GET_DOCUMENT_BY_ID_NEW_REQUEST:{
            return {
                ...state,
                isLoading: true,
            };
        }
        case documentConstants.GET_DOCUMENT_BY_ID_NEW_FAILURE:{
            return {
                ...state,
                isLoading: false,
                error: action.error
            };
        }
        case documentConstants.GET_DOCUMENT_BY_ID_NEW_SUCCESS:{
            // console.log("action.document.data vô đây rồi mà, cmn",action.document.data)
            return {
                ...state,
                isLoading: false,
                currentViewingDoc: action.document.data
            };
        }
        default:
            return state;
    }
}