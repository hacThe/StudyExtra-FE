import { plPL } from "@mui/x-data-grid";
import { act } from "@testing-library/react";
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
        case articleConstants.REMOVE_PICTURE:
            console.log("action.link", action.link);
            var currentArticleVal = state.currentArticle;
            var linkList = currentArticleVal.imgLink;
            linkList = linkList.filter(item => item !== action.link);
            return {
                ...state,
                currentArticle: {
                    ...currentArticleVal,
                    imgLink: linkList,
                }
        }
        
        case articleConstants.ADD_ARTICLE_REQUEST:
        {
            return {
                ...state,
                isLoading: true,
            };
        }
        case articleConstants.ADD_ARTICLE_FAILURE:{
            return {
                ...state,
                isLoading: false,
                error: action.error
            };
        }
        case articleConstants.ADD_ARTICLE_SUCCESS:{
            console.log("action",action);
            return {
                ...state,
                articles:[
                    ...state.articles,
                    action.article.data,
                ]
            }
        }

        case articleConstants.DELETE_ARTICLE_REQUEST:{
            return {
                ...state,
                isLoading: true,
            };
        }
        case articleConstants.DELETE_ARTICLE_FAILURE:{
            return {
                ...state,
                isLoading: false,
                error: action.error
            };
        }
        case articleConstants.DELETE_ARTICLE_SUCCESS:{
            const article = action.data.data;
            console.log("action.data.data",article);
            var oldArticleVal = state.articles;
            console.log("before filter", oldArticleVal);
            var newArticleVal = []; 
            for(var i = 0; i < oldArticleVal.length; i++){
                if(oldArticleVal[i]._id != article._id){
                    newArticleVal.push(oldArticleVal[i]);
                }
            }
            console.log("after filter", newArticleVal);
            return {
                ...state,
                articles: [
                    ...newArticleVal
                ],
                isLoading: false,
            };
        }
        default:
            return state;
    }
}