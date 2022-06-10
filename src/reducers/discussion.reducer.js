import { discussionConstants } from "../constaint";

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
    },
    isShowModalUser: false,
    userList: [],
};
   
export function discussion(state = initialState, action) {
    switch (action.type) {
        case discussionConstants.GET_ARTICLE_REQUEST: 
            return {
                ...state,
                isLoading: true,
            };
        case discussionConstants.GET_ARTICLE_SUCCESS:
            const articles = action.articles;
            return {
                ...state,
                isLoading: false,
                articles: articles.data
            };
        case discussionConstants.GET_ARTICLE_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.error
            };
        case discussionConstants.UPLOAD_PICTURE_REQUEST:{
            return {
                ...state,
                isLoading: true,
            };
        }
        case discussionConstants.UPLOAD_PICTURE_FAILURE:{
            return {
                ...state,
                isLoading: false,
                error: action.error
            };
        }
        case discussionConstants.UPLOAD_PICTURE_SUCCESS:{
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
        case discussionConstants.REMOVE_PICTURE:
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
        
        case discussionConstants.ADD_ARTICLE_REQUEST:
        {
            return {
                ...state,
                isLoading: true,
            };
        }
        case discussionConstants.ADD_ARTICLE_FAILURE:{
            return {
                ...state,
                isLoading: false,
                error: action.error
            };
        }
        case discussionConstants.ADD_ARTICLE_SUCCESS:{
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

        case discussionConstants.DELETE_ARTICLE_REQUEST:{
            return {
                ...state,
                isLoading: true,
            };
        }
        case discussionConstants.DELETE_ARTICLE_FAILURE:{
            return {
                ...state,
                isLoading: false,
                error: action.error
            };
        }
        case discussionConstants.DELETE_ARTICLE_SUCCESS:{
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

        case discussionConstants.UPLOAD_PICTURE_EDIT_POST_REQUEST:{
            return {
                ...state,
                isLoading: true,
            };
        }
        case discussionConstants.UPLOAD_PICTURE_EDIT_POST_FAILURE:{
            return {
                ...state,
                isLoading: false,
                error: action.error
            };
        }
        case discussionConstants.UPLOAD_PICTURE_EDIT_POST_SUCCESS:{
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

        case discussionConstants.REMOVE_PICTURE_EDIT_POST:{
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

        case discussionConstants.REMOVE_PICTURE_EDIT_POST:{
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

        case discussionConstants.SET_PICTURE_EDIT_POST:{
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

        case discussionConstants.EDIT_ARTICLE_REQUEST:
        {
            return {
                ...state,
                isLoading: true,
            };
        }
        case discussionConstants.EDIT_ARTICLE_FAILURE:{
            return {
                ...state,
                isLoading: false,
                error: action.error
            };
        }
        case discussionConstants.EDIT_ARTICLE_SUCCESS:{
            var newArticles = action.articles.data;
            return {
                ...state,
                isLoading: false,
                articles: newArticles,
            };
        }

        case discussionConstants.UPLOAD_BIG_COMMENT_IMAGE_REQUEST: {
            {
                return {
                    ...state,
                    isLoading: true,
                };
            }
        }

        case discussionConstants.UPLOAD_BIG_COMMENT_IMAGE_FAILURE: {
            {
                return {
                    ...state,
                    isLoading: false,
                    error: action.error
                };
            }
        }

        case discussionConstants.UPLOAD_BIG_COMMENT_IMAGE_SUCCESS: {
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

        case discussionConstants.ADD_BIG_COMMENT_REQUEST: {
            {
                return {
                    ...state,
                    isLoading: true,
                };
            }
        }

        case discussionConstants.ADD_BIG_COMMENT_FAILURE: {
            {
                return {
                    ...state,
                    isLoading: false,
                    error: action.error
                };
            }
        }

        case discussionConstants.ADD_BIG_COMMENT_SUCCESS: {
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

        case discussionConstants.REMOVE_BIG_COMMENT_PICTURE: {
            return{
                ...state,
                bigComment:{
                    imgLink: "",
                }
            }
        }

        case discussionConstants.DELETE_BIG_COMMENT_REQUEST: {
            {
                return {
                    ...state,
                    isLoading: true,
                };
            }
        }

        case discussionConstants.DELETE_BIG_COMMENT_FAILURE: {
            {
                return {
                    ...state,
                    isLoading: false,
                    error: action.error
                };
            }
        }

        case discussionConstants.DELETE_BIG_COMMENT_SUCCESS: {
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

        case discussionConstants.HIDE_BIG_COMMENT_REQUEST: {
            {
                return {
                    ...state,
                    isLoading: true,
                };
            }
        }

        case discussionConstants.HIDE_BIG_COMMENT_FAILURE: {
            {
                return {
                    ...state,
                    isLoading: false,
                    error: action.error
                };
            }
        }

        case discussionConstants.HIDE_BIG_COMMENT_SUCCESS: {
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

        case discussionConstants.SHOW_BIG_COMMENT_REQUEST: {
            {
                return {
                    ...state,
                    isLoading: true,
                };
            }
        }

        case discussionConstants.SHOW_BIG_COMMENT_FAILURE: {
            {
                return {
                    ...state,
                    isLoading: false,
                    error: action.error
                };
            }
        }

        case discussionConstants.SHOW_BIG_COMMENT_SUCCESS: {
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

        case discussionConstants.LIKE_POST_REQUEST: {
            {
                return {
                    ...state,
                    isLoading: true,
                };
            }
        }

        case discussionConstants.LIKE_POST_FAILURE: {
            {
                return {
                    ...state,
                    isLoading: false,
                    error: action.error
                };
            }
        }

        case discussionConstants.LIKE_POST_SUCCESS: {
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

        case discussionConstants.UNLIKE_POST_REQUEST: {
            {
                return {
                    ...state,
                    isLoading: true,
                };
            }
        }

        case discussionConstants.UNLIKE_POST_FAILURE: {
            {
                return {
                    ...state,
                    isLoading: false,
                    error: action.error
                };
            }
        }

        case discussionConstants.UNLIKE_POST_SUCCESS: {
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

        case discussionConstants.LIKE_BIG_COMMENT_REQUEST: {
            {
                return {
                    ...state,
                    isLoading: true,
                };
            }
        }

        case discussionConstants.LIKE_BIG_COMMENT_FAILURE: {
            {
                return {
                    ...state,
                    isLoading: false,
                    error: action.error
                };
            }
        }

        case discussionConstants.LIKE_BIG_COMMENT_SUCCESS: {
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

        case discussionConstants.UNLIKE_BIG_COMMENT_REQUEST: {
            {
                return {
                    ...state,
                    isLoading: true,
                };
            }
        }

        case discussionConstants.UNLIKE_BIG_COMMENT_FAILURE: {
            {
                return {
                    ...state,
                    isLoading: false,
                    error: action.error
                };
            }
        }

        case discussionConstants.UNLIKE_BIG_COMMENT_SUCCESS: {
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

        case discussionConstants.ADD_REPLY_COMMENT_REQUEST: {
            {
                return {
                    ...state,
                    isLoading: true,
                };
            }
        }

        case discussionConstants.ADD_REPLY_COMMENT_FAILURE: {
            {
                return {
                    ...state,
                    isLoading: false,
                    error: action.error
                };
            }
        }

        case discussionConstants.ADD_REPLY_COMMENT_SUCCESS: {
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


        case discussionConstants.DELETE_REPLY_COMMENT_REQUEST: {
            {
                return {
                    ...state,
                    isLoading: true,
                };
            }
        }

        case discussionConstants.DELETE_REPLY_COMMENT_FAILURE: {
            {
                return {
                    ...state,
                    isLoading: false,
                    error: action.error
                };
            }
        }

        case discussionConstants.DELETE_REPLY_COMMENT_SUCCESS: {
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

        case discussionConstants.LIKE_REPLY_COMMENT_REQUEST: {
            {
                return {
                    ...state,
                    isLoading: true,
                };
            }
        }

        case discussionConstants.LIKE_REPLY_COMMENT_FAILURE: {
            {
                return {
                    ...state,
                    isLoading: false,
                    error: action.error
                };
            }
        }

        case discussionConstants.LIKE_REPLY_COMMENT_SUCCESS: {
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

        case discussionConstants.UNLIKE_REPLY_COMMENT_REQUEST: {
            {
                return {
                    ...state,
                    isLoading: true,
                };
            }
        }

        case discussionConstants.UNLIKE_REPLY_COMMENT_FAILURE: {
            {
                return {
                    ...state,
                    isLoading: false,
                    error: action.error
                };
            }
        }

        case discussionConstants.UNLIKE_REPLY_COMMENT_SUCCESS: {
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
        case discussionConstants.HIDE_REPLY_COMMENT_REQUEST: {
            {
                return {
                    ...state,
                    isLoading: true,
                };
            }
        }

        case discussionConstants.HIDE_REPLY_COMMENT_FAILURE: {
            {
                return {
                    ...state,
                    isLoading: false,
                    error: action.error
                };
            }
        }

        case discussionConstants.HIDE_REPLY_COMMENT_SUCCESS: {
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

        case discussionConstants.SHOW_REPLY_COMMENT_REQUEST: {
            {
                return {
                    ...state,
                    isLoading: true,
                };
            }
        }

        case discussionConstants.SHOW_REPLY_COMMENT_FAILURE: {
            {
                return {
                    ...state,
                    isLoading: false,
                    error: action.error
                };
            }
        }

        case discussionConstants.SHOW_REPLY_COMMENT_SUCCESS: {
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

        case discussionConstants.EDIT_BIG_COMMENT_REQUEST: {
            {
                return {
                    ...state,
                    isLoading: true,
                };
            }
        }

        case discussionConstants.EDIT_BIG_COMMENT_FAILURE: {
            {
                return {
                    ...state,
                    isLoading: false,
                    error: action.error
                };
            }
        }

        case discussionConstants.EDIT_BIG_COMMENT_SUCCESS: {
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

        case discussionConstants.EDIT_REPLY_COMMENT_REQUEST: {
            {
                return {
                    ...state,
                    isLoading: true,
                };
            }
        }

        case discussionConstants.EDIT_REPLY_COMMENT_FAILURE: {
            {
                return {
                    ...state,
                    isLoading: false,
                    error: action.error
                };
            }
        }

        case discussionConstants.EDIT_REPLY_COMMENT_SUCCESS: {
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

        case discussionConstants.OPEN_MODAL_SHOW_USER: {
            return {
                ...state,
                isShowModalUser: true,
            }
        }

        case discussionConstants.CLOSE_MODAL_SHOW_USER: {
            return {
                ...state,
                isShowModalUser: false,
            }
        }

        case discussionConstants.GET_POST_INTERACTION_LIST_REQUEST: {
            {
                return {
                    ...state,
                    isLoading: true,
                };
            }
        }

        case discussionConstants.GET_POST_INTERACTION_LIST_FAILURE: {
            {
                return {
                    ...state,
                    isLoading: false,
                    error: action.error
                };
            }
        }

        case discussionConstants.GET_POST_INTERACTION_LIST_SUCCESS: {
            {
                var userList = action.userList.result;
                return {
                    ...state,
                    isLoading: false,
                    userList: userList,
                };
            }
        }

        case discussionConstants.GET_COMMENT_INTERACTION_LIST_REQUEST: {
            {
                return {
                    ...state,
                    isLoading: true,
                };
            }
        }

        case discussionConstants.GET_COMMENT_INTERACTION_LIST_FAILURE: {
            {
                return {
                    ...state,
                    isLoading: false,
                    error: action.error
                };
            }
        }

        case discussionConstants.GET_COMMENT_INTERACTION_LIST_SUCCESS: {
            {
                var userList = action.userList.result;
                return {
                    ...state,
                    isLoading: false,
                    userList: userList,
                };
            }
        }

        default:
            
            return state;
    }
}