import { postConstants } from "../constaint/post.contants";

const initialState = {
    posts: [],
    isLoading: false,
    error: ""
}


export const post = (state = initialState, action) => {
    switch(action.type) {
        case postConstants.GET_POST_REQUEST:
            return {
                ...state,
                isLoading: true
            }

        case postConstants.GET_POST_SUCCESS:
            
            return{
                ...state,
                posts: action.posts,
            }
        case postConstants.GET_POST_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.error
            }
        default:
            return state
    } 
} 