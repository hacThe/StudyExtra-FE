import { plPL } from "@mui/x-data-grid";
import { articleConstants } from "../constaint";

const initialState = {
    articles: [],
    isLoading: false,
    error: "",
    currentArticle:{
        imgLink: [],
    },
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
        case articleConstants.UPLOAD_PICTURE_REQUEST:{
            return {
                ...state,
                isLoading: true,
            };
        }
        case articleConstants.UPLOAD_PICTURE_FAILURE:{
            return {
                ...state,
                isLoading: false,
                error: action.error
            };
        }
        case articleConstants.UPLOAD_PICTURE_SUCCESS:{
            console.log("action.dataLink.url", action.dataLink.url);
            var currentArticleVal = state.currentArticle;
            var newVal = {
                ...state,
                currentArticle: {
                    ...currentArticleVal,
                    imgLink:[
                        ...currentArticleVal.imgLink,
                        action.dataLink.url
                    ] 
                }
            };
            console.log("newVal", newVal);
            return {
                ...state,
                currentArticle: {
                    ...currentArticleVal,
                    imgLink:[
                        ...currentArticleVal.imgLink,
                        action.dataLink.url
                    ] 
                }
            }
        }
        default:
            return state;
    }
}