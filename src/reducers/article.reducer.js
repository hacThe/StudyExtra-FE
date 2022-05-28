import { articleConstants } from "../constaint";

const initialState = {
    articles: [],
    isLoading: false,
    error: "",
    currentArticle:{
        imgLink: [],
    },
    editArticle:{
        imgLink: [],
    },
    bigComment:{
        imgLink: "",
    }
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
            var newArticles = action.articles.data;
            return {
                ...state,
                isLoading: false,
                articles: newArticles,
                currentArticle:{
                    imgLink: [],
                },
            };
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

        case articleConstants.UPLOAD_PICTURE_EDIT_POST_REQUEST:{
            return {
                ...state,
                isLoading: true,
            };
        }
        case articleConstants.UPLOAD_PICTURE_EDIT_POST_FAILURE:{
            return {
                ...state,
                isLoading: false,
                error: action.error
            };
        }
        case articleConstants.UPLOAD_PICTURE_EDIT_POST_SUCCESS:{
            console.log("action.dataLink.url", action.dataLink.url);
            var editArticleVal = state.editArticle;
            return {
                ...state,
                editArticle: {
                    ...editArticleVal,
                    imgLink:[
                        ...editArticleVal.imgLink,
                        action.dataLink.url
                    ] 
                }
            }
        }

        case articleConstants.REMOVE_PICTURE_EDIT_POST:{
            console.log("action.link", action.link);
            var editArticleVal = state.editArticle;
            var linkList = editArticleVal.imgLink;
            linkList = linkList.filter(item => item !== action.link);
            return {
                ...state,
                editArticle: {
                    ...editArticleVal,
                    imgLink: linkList,
                }
            }
        }

        case articleConstants.REMOVE_PICTURE_EDIT_POST:{
            console.log("action.link", action.link);
            var editArticleVal = state.editArticle;
            var linkList = editArticleVal.imgLink;
            linkList = linkList.filter(item => item !== action.link);
            return {
                ...state,
                editArticle: {
                    ...editArticleVal,
                    imgLink: linkList,
                }
            }
        }

        case articleConstants.SET_PICTURE_EDIT_POST:{
            var linkLists = action.data;
            console.log("linkLists: ", linkLists);
            // return state;
            return {
                ...state,
                editArticle: {
                    imgLink: linkLists,
                }
            }
        }

        case articleConstants.EDIT_ARTICLE_REQUEST:
        {
            return {
                ...state,
                isLoading: true,
            };
        }
        case articleConstants.EDIT_ARTICLE_FAILURE:{
            return {
                ...state,
                isLoading: false,
                error: action.error
            };
        }
        case articleConstants.EDIT_ARTICLE_SUCCESS:{
            var newArticles = action.articles.data;
            return {
                ...state,
                isLoading: false,
                articles: newArticles,
            };
        }

        case articleConstants.UPLOAD_BIG_COMMENT_IMAGE_REQUEST: {
            {
                return {
                    ...state,
                    isLoading: true,
                };
            }
        }

        case articleConstants.UPLOAD_BIG_COMMENT_IMAGE_FAILURE: {
            {
                return {
                    ...state,
                    isLoading: false,
                    error: action.error
                };
            }
        }

        case articleConstants.UPLOAD_BIG_COMMENT_IMAGE_SUCCESS: {
            {

                return {
                    ...state,
                    isLoading: false,
                    bigComment:{
                        imgLink: action.dataLink.url,
                    }
                };
            }
        }

        case articleConstants.ADD_BIG_COMMENT_REQUEST: {
            {
                return {
                    ...state,
                    isLoading: true,
                };
            }
        }

        case articleConstants.ADD_BIG_COMMENT_FAILURE: {
            {
                return {
                    ...state,
                    isLoading: false,
                    error: action.error
                };
            }
        }

        case articleConstants.ADD_BIG_COMMENT_SUCCESS: {
            {
                // console.log("action", action);
                var newArticles = action.articles.data;
                return {
                    ...state,
                    isLoading: false,
                    articles: newArticles,
                };
            }
        }

        case articleConstants.REMOVE_BIG_COMMENT_PICTURE: {
            return{
                ...state,
                bigComment:{
                    imgLink: "",
                }
            }
        }

        case articleConstants.DELETE_BIG_COMMENT_REQUEST: {
            {
                return {
                    ...state,
                    isLoading: true,
                };
            }
        }

        case articleConstants.DELETE_BIG_COMMENT_FAILURE: {
            {
                return {
                    ...state,
                    isLoading: false,
                    error: action.error
                };
            }
        }

        case articleConstants.DELETE_BIG_COMMENT_SUCCESS: {
            {
                // console.log("action", action);
                var newArticles = action.articles.data;
                return {
                    ...state,
                    isLoading: false,
                    articles: newArticles,
                };
            }
        }

        case articleConstants.HIDE_BIG_COMMENT_REQUEST: {
            {
                return {
                    ...state,
                    isLoading: true,
                };
            }
        }

        case articleConstants.HIDE_BIG_COMMENT_FAILURE: {
            {
                return {
                    ...state,
                    isLoading: false,
                    error: action.error
                };
            }
        }

        case articleConstants.HIDE_BIG_COMMENT_SUCCESS: {
            {
                // console.log("action", action);
                var newArticles = action.articles.data;
                return {
                    ...state,
                    isLoading: false,
                    articles: newArticles,
                };
            }
        }

        case articleConstants.SHOW_BIG_COMMENT_REQUEST: {
            {
                return {
                    ...state,
                    isLoading: true,
                };
            }
        }

        case articleConstants.SHOW_BIG_COMMENT_FAILURE: {
            {
                return {
                    ...state,
                    isLoading: false,
                    error: action.error
                };
            }
        }

        case articleConstants.SHOW_BIG_COMMENT_SUCCESS: {
            {
                // console.log("action", action);
                var newArticles = action.articles.data;
                return {
                    ...state,
                    isLoading: false,
                    articles: newArticles,
                };
            }
        }

        case articleConstants.LIKE_POST_REQUEST: {
            {
                return {
                    ...state,
                    isLoading: true,
                };
            }
        }

        case articleConstants.LIKE_POST_FAILURE: {
            {
                return {
                    ...state,
                    isLoading: false,
                    error: action.error
                };
            }
        }

        case articleConstants.LIKE_POST_SUCCESS: {
            {
                // console.log("action", action);
                var newArticles = action.articles.data;
                return {
                    ...state,
                    isLoading: false,
                    articles: newArticles,
                };
            }
        }

        case articleConstants.UNLIKE_POST_REQUEST: {
            {
                return {
                    ...state,
                    isLoading: true,
                };
            }
        }

        case articleConstants.UNLIKE_POST_FAILURE: {
            {
                return {
                    ...state,
                    isLoading: false,
                    error: action.error
                };
            }
        }

        case articleConstants.UNLIKE_POST_SUCCESS: {
            {
                // console.log("action", action);
                var newArticles = action.articles.data;
                return {
                    ...state,
                    isLoading: false,
                    articles: newArticles,
                };
            }
        }

        case articleConstants.LIKE_BIG_COMMENT_REQUEST: {
            {
                return {
                    ...state,
                    isLoading: true,
                };
            }
        }

        case articleConstants.LIKE_BIG_COMMENT_FAILURE: {
            {
                return {
                    ...state,
                    isLoading: false,
                    error: action.error
                };
            }
        }

        case articleConstants.LIKE_BIG_COMMENT_SUCCESS: {
            {
                // console.log("action", action);
                var newArticles = action.articles.data;
                return {
                    ...state,
                    isLoading: false,
                    articles: newArticles,
                };
            }
        }

        case articleConstants.UNLIKE_BIG_COMMENT_REQUEST: {
            {
                return {
                    ...state,
                    isLoading: true,
                };
            }
        }

        case articleConstants.UNLIKE_BIG_COMMENT_FAILURE: {
            {
                return {
                    ...state,
                    isLoading: false,
                    error: action.error
                };
            }
        }

        case articleConstants.UNLIKE_BIG_COMMENT_SUCCESS: {
            {
                // console.log("action", action);
                var newArticles = action.articles.data;
                return {
                    ...state,
                    isLoading: false,
                    articles: newArticles,
                };
            }
        }

        case articleConstants.ADD_REPLY_COMMENT_REQUEST: {
            {
                return {
                    ...state,
                    isLoading: true,
                };
            }
        }

        case articleConstants.ADD_REPLY_COMMENT_FAILURE: {
            {
                return {
                    ...state,
                    isLoading: false,
                    error: action.error
                };
            }
        }

        case articleConstants.ADD_REPLY_COMMENT_SUCCESS: {
            {
                // console.log("action", action);
                var newArticles = action.articles.data;
                return {
                    ...state,
                    isLoading: false,
                    articles: newArticles,
                };
            }
        }


        case articleConstants.DELETE_REPLY_COMMENT_REQUEST: {
            {
                return {
                    ...state,
                    isLoading: true,
                };
            }
        }

        case articleConstants.DELETE_REPLY_COMMENT_FAILURE: {
            {
                return {
                    ...state,
                    isLoading: false,
                    error: action.error
                };
            }
        }

        case articleConstants.DELETE_REPLY_COMMENT_SUCCESS: {
            {
                // console.log("action", action);
                var newArticles = action.articles.data;
                return {
                    ...state,
                    isLoading: false,
                    articles: newArticles,
                };
            }
        }

        case articleConstants.LIKE_REPLY_COMMENT_REQUEST: {
            {
                return {
                    ...state,
                    isLoading: true,
                };
            }
        }

        case articleConstants.LIKE_REPLY_COMMENT_FAILURE: {
            {
                return {
                    ...state,
                    isLoading: false,
                    error: action.error
                };
            }
        }

        case articleConstants.LIKE_REPLY_COMMENT_SUCCESS: {
            {
                // console.log("action", action);
                var newArticles = action.articles.data;
                return {
                    ...state,
                    isLoading: false,
                    articles: newArticles,
                };
            }
        }

        case articleConstants.UNLIKE_REPLY_COMMENT_REQUEST: {
            {
                return {
                    ...state,
                    isLoading: true,
                };
            }
        }

        case articleConstants.UNLIKE_REPLY_COMMENT_FAILURE: {
            {
                return {
                    ...state,
                    isLoading: false,
                    error: action.error
                };
            }
        }

        case articleConstants.UNLIKE_REPLY_COMMENT_SUCCESS: {
            {
                // console.log("action", action);
                var newArticles = action.articles.data;
                return {
                    ...state,
                    isLoading: false,
                    articles: newArticles,
                };
            }
        }
        case articleConstants.HIDE_REPLY_COMMENT_REQUEST: {
            {
                return {
                    ...state,
                    isLoading: true,
                };
            }
        }

        case articleConstants.HIDE_REPLY_COMMENT_FAILURE: {
            {
                return {
                    ...state,
                    isLoading: false,
                    error: action.error
                };
            }
        }

        case articleConstants.HIDE_REPLY_COMMENT_SUCCESS: {
            {
                // console.log("action", action);
                var newArticles = action.articles.data;
                return {
                    ...state,
                    isLoading: false,
                    articles: newArticles,
                };
            }
        }

        case articleConstants.SHOW_REPLY_COMMENT_REQUEST: {
            {
                return {
                    ...state,
                    isLoading: true,
                };
            }
        }

        case articleConstants.SHOW_REPLY_COMMENT_FAILURE: {
            {
                return {
                    ...state,
                    isLoading: false,
                    error: action.error
                };
            }
        }

        case articleConstants.SHOW_REPLY_COMMENT_SUCCESS: {
            {
                // console.log("action", action);
                var newArticles = action.articles.data;
                return {
                    ...state,
                    isLoading: false,
                    articles: newArticles,
                };
            }
        }

        case articleConstants.EDIT_BIG_COMMENT_REQUEST: {
            {
                return {
                    ...state,
                    isLoading: true,
                };
            }
        }

        case articleConstants.EDIT_BIG_COMMENT_FAILURE: {
            {
                return {
                    ...state,
                    isLoading: false,
                    error: action.error
                };
            }
        }

        case articleConstants.EDIT_BIG_COMMENT_SUCCESS: {
            {
                // console.log("action", action);
                var newArticles = action.articles.data;
                return {
                    ...state,
                    isLoading: false,
                    articles: newArticles,
                };
            }
        }

        case articleConstants.EDIT_REPLY_COMMENT_REQUEST: {
            {
                return {
                    ...state,
                    isLoading: true,
                };
            }
        }

        case articleConstants.EDIT_REPLY_COMMENT_FAILURE: {
            {
                return {
                    ...state,
                    isLoading: false,
                    error: action.error
                };
            }
        }

        case articleConstants.EDIT_REPLY_COMMENT_SUCCESS: {
            {
                // console.log("action", action);
                var newArticles = action.articles.data;
                return {
                    ...state,
                    isLoading: false,
                    articles: newArticles,
                };
            }
        }

        default:
            
            return state;
    }
}