import { articleConstants } from "../constaint";

const initialState = {
    articles: [],
    isLoading: false,
    error: "",
};
   
export function article(state = initialState, action) {
    switch (action.type) {
        case articleConstants.GET_ARTICLE_REQUEST: 
            return {
                ...state,
                isLoading: true,
            };
        case articleConstants.GET_ARTICLE_SUCCESS:
            const articles = action.articles;
            return {
                ...state,
                isLoading: false,
                articles: articles.data
            };
        case articleConstants.GET_ARTICLE_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.error
            };

        default:
            return state;
    }
}