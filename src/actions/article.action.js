import {articleConstants} from '../constaint/';
import { articleService } from '../services';

export const articleActions = {
    getAllArticle,
    addNewArticle,
    editArticle,
    deleteArticle,
    uploadArticlePicture,
    uploadEditArticlePicture,
    removeSpecificPicture,
    removeSpecificEditPicture,
    setEditPicture,
    uploadBigCommentArticlePicture,
    addBigComment,
    removeBigCommentPicture,
    deleteBigComment,
    hideBigComment,
    showBigComment,
    likeArticle,
    unLikeArticle,
    likeBigComment,
    unlikeBigComment,
    addReplyComment,
    deleteReplyComment,
    likeReplyComment,
    unlikeReplyComment,
    hideReplyComment,
    showReplyComment,
    editBigComment
}

function getAllArticle(){
    return (dispatch)=>{
        dispatch(request())
        articleService.getAllArticle().then(
            (articles)=>{
                dispatch(success(articles))
            },
            (error)=>{
                dispatch(failure(error.toString()))
                console.log({error})
            }
        )
        
        function request() {
            return { type: articleConstants.GET_ARTICLE_REQUEST };
        }
        function success(articles ) {
            return {type: articleConstants.GET_ARTICLE_SUCCESS, articles };
        }
        function failure(error) {
            return { type: articleConstants.GET_ARTICLE_FAILURE, error };
        }
    }
}

function addNewArticle(data){
    return (dispatch)=>{
        dispatch(request())
        articleService.addNewArticle(data).then(
            (articles)=>{
                dispatch(success(articles))
            },
            (error)=>{
                dispatch(failure(error.toString()))
                console.log({error})
            }
        )
        
        function request() {
            return { type: articleConstants.ADD_ARTICLE_REQUEST };
        }
        function success(articles ) {
            return {type: articleConstants.ADD_ARTICLE_SUCCESS, articles };
        }
        function failure(error) {
            return { type: articleConstants.ADD_ARTICLE_FAILURE, error };
        }
    }
}

function editArticle(data){
    return (dispatch)=>{
        dispatch(request())
        articleService.editArticle(data).then(
            (articles)=>{
                dispatch(success(articles))
            },
            (error)=>{
                dispatch(failure(error.toString()))
                console.log({error})
            }
        )
        
        function request() {
            return { type: articleConstants.EDIT_ARTICLE_REQUEST };
        }
        function success(articles) {
            return {type: articleConstants.EDIT_ARTICLE_SUCCESS, articles };
        }
        function failure(error) {
            return { type: articleConstants.EDIT_ARTICLE_FAILURE, error };
        }
    }
}

function deleteArticle(id){
    return (dispatch)=>{
        dispatch(request())
        articleService.deleteArticle(id).then(
            (res)=>{
                dispatch(success(res))
            },
            (error)=>{
                dispatch(failure(error.toString()))
                console.log({error})
            }
        )
        function request() {
            return { type: articleConstants.DELETE_ARTICLE_REQUEST };
        }
        function success(res) {
            return {type: articleConstants.DELETE_ARTICLE_SUCCESS, data: res};
        }
        function failure(error) {
            return { type: articleConstants.DELETE_ARTICLE_FAILURE, error };
        }
    }
}

function uploadArticlePicture(data){
    return (dispatch)=>{
        dispatch(request())
        articleService.uploadArticlePicture(data).then(
            (dataLink)=>{
                dispatch(success(dataLink))
            },
            (error)=>{
                dispatch(failure(error.toString()))
                console.log({error})
            }
        )
        
        function request() {
            return { type: articleConstants.UPLOAD_PICTURE_REQUEST };
        }
        function success(dataLink ) {
            return {type: articleConstants.UPLOAD_PICTURE_SUCCESS, dataLink };
        }
        function failure(error) {
            return { type: articleConstants.UPLOAD_PICTURE_FAILURE, error };
        }
    }
}

function uploadEditArticlePicture(data){
    return (dispatch)=>{
        dispatch(request())
        articleService.uploadArticlePicture(data).then(
            (dataLink)=>{
                dispatch(success(dataLink))
            },
            (error)=>{
                dispatch(failure(error.toString()))
                console.log({error})
            }
        )
        
        function request() {
            return { type: articleConstants.UPLOAD_PICTURE_EDIT_POST_REQUEST };
        }
        function success(dataLink ) {
            return { type: articleConstants.UPLOAD_PICTURE_EDIT_POST_SUCCESS, dataLink };
        }
        function failure(error) {
            return { type: articleConstants.UPLOAD_PICTURE_EDIT_POST_FAILURE, error };
        }
    }
}

function removeSpecificPicture(link){
    return (dispatch)=>{
        dispatch(request())
        function request() {
            return { type: articleConstants.REMOVE_PICTURE, link};
        }
    }
}


function removeSpecificEditPicture(link){
    return (dispatch)=>{
        dispatch(request())
        function request() {
            return { type: articleConstants.REMOVE_PICTURE_EDIT_POST, link};
        }
    }
}

function setEditPicture(data){
    return (dispatch)=>{
        dispatch(request())
        function request() {
            return { type: articleConstants.SET_PICTURE_EDIT_POST, data: data};
        }
    }
}

function uploadBigCommentArticlePicture(data){
    return (dispatch)=>{
        dispatch(request())
        articleService.uploadArticlePicture(data).then(
            (dataLink)=>{
                dispatch(success(dataLink))
            },
            (error)=>{
                dispatch(failure(error.toString()))
                console.log({error})
            }
        )
        
        function request() {
            return { type: articleConstants.UPLOAD_BIG_COMMENT_IMAGE_REQUEST };
        }
        function success(dataLink ) {
            return { type: articleConstants.UPLOAD_BIG_COMMENT_IMAGE_SUCCESS, dataLink };
        }
        function failure(error) {
            return { type: articleConstants.UPLOAD_BIG_COMMENT_IMAGE_FAILURE, error };
        }
    }
}

function addBigComment(data) {
    return (dispatch)=>{
        dispatch(request())
        articleService.addBigCommentToArticle(data).then(
            (articles)=>{
                dispatch(success(articles))
            },
            (error)=>{
                dispatch(failure(error.toString()))
                console.log({error})
            }
        )
        
        function request() {
            return { type: articleConstants.ADD_BIG_COMMENT_REQUEST };
        }
        function success(articles ) {
            return {type: articleConstants.ADD_BIG_COMMENT_SUCCESS, articles };
        }
        function failure(error) {
            return { type: articleConstants.ADD_BIG_COMMENT_FAILURE, error };
        }
    }
}

function removeBigCommentPicture(){
    return (dispatch)=>{
        dispatch(request())
        function request() {
            return { type: articleConstants.REMOVE_BIG_COMMENT_PICTURE};
        }
    }
}

function deleteBigComment(data) {
    return (dispatch)=>{
        dispatch(request())
        articleService.deleteBigCommentOfArticle(data).then(
            (articles)=>{
                dispatch(success(articles))
            },
            (error)=>{
                dispatch(failure(error.toString()))
                console.log({error})
            }
        )
        
        function request() {
            return { type: articleConstants.DELETE_BIG_COMMENT_REQUEST };
        }
        function success(articles ) {
            return {type: articleConstants.DELETE_BIG_COMMENT_SUCCESS, articles };
        }
        function failure(error) {
            return { type: articleConstants.DELETE_BIG_COMMENT_FAILURE, error };
        }
    }
}


function hideBigComment(data) {
    return (dispatch)=>{
        dispatch(request())
        articleService.hideBigCommentOfArticle(data).then(
            (articles)=>{
                dispatch(success(articles))
            },
            (error)=>{
                dispatch(failure(error.toString()))
                console.log({error})
            }
        )
        
        function request() {
            return { type: articleConstants.HIDE_BIG_COMMENT_REQUEST };
        }
        function success(articles ) {
            return {type: articleConstants.HIDE_BIG_COMMENT_SUCCESS, articles };
        }
        function failure(error) {
            return { type: articleConstants.HIDE_BIG_COMMENT_FAILURE, error };
        }
    }
}

function showBigComment(data) {
    return (dispatch)=>{
        dispatch(request())
        articleService.showBigCommentOfArticle(data).then(
            (articles)=>{
                dispatch(success(articles))
            },
            (error)=>{
                dispatch(failure(error.toString()))
                console.log({error})
            }
        )
        
        function request() {
            return { type: articleConstants.SHOW_BIG_COMMENT_REQUEST };
        }
        function success(articles ) {
            return {type: articleConstants.SHOW_BIG_COMMENT_SUCCESS, articles };
        }
        function failure(error) {
            return { type: articleConstants.SHOW_BIG_COMMENT_FAILURE, error };
        }
    }
}

function likeArticle(data){
    return (dispatch)=>{
        dispatch(request())
        articleService.likeArticle(data).then(
            (articles)=>{
                dispatch(success(articles))
            },
            (error)=>{
                dispatch(failure(error.toString()))
                console.log({error})
            }
        )
        
        function request() {
            return { type: articleConstants.UNLIKE_POST_REQUEST };
        }
        function success(articles ) {
            return {type: articleConstants.UNLIKE_POST_SUCCESS, articles };
        }
        function failure(error) {
            return { type: articleConstants.UNLIKE_POST_FAILURE, error };
        }
    }
}

function unLikeArticle(data){
    return (dispatch)=>{
        dispatch(request())
        articleService.unLikeArticle(data).then(
            (articles)=>{
                dispatch(success(articles))
            },
            (error)=>{
                dispatch(failure(error.toString()))
                console.log({error})
            }
        )
        
        function request() {
            return { type: articleConstants.LIKE_POST_REQUEST };
        }
        function success(articles ) {
            return {type: articleConstants.LIKE_POST_SUCCESS, articles };
        }
        function failure(error) {
            return { type: articleConstants.LIKE_POST_FAILURE, error };
        }
    }
}

function likeBigComment(data) {
    return (dispatch)=>{
        dispatch(request())
        articleService.likeBigComment(data).then(
            (articles)=>{
                dispatch(success(articles))
            },
            (error)=>{
                dispatch(failure(error.toString()))
                console.log({error})
            }
        )
        
        function request() {
            return { type: articleConstants.LIKE_BIG_COMMENT_REQUEST };
        }
        function success(articles ) {
            return {type: articleConstants.LIKE_BIG_COMMENT_SUCCESS, articles };
        }
        function failure(error) {
            return { type: articleConstants.LIKE_BIG_COMMENT_FAILURE, error };
        }
    }
}

function unlikeBigComment(data) {
    return (dispatch)=>{
        dispatch(request())
        articleService.unlikeBigComment(data).then(
            (articles)=>{
                dispatch(success(articles))
            },
            (error)=>{
                dispatch(failure(error.toString()))
                console.log({error})
            }
        )
        
        function request() {
            return { type: articleConstants.LIKE_BIG_COMMENT_REQUEST };
        }
        function success(articles ) {
            return {type: articleConstants.LIKE_BIG_COMMENT_SUCCESS, articles };
        }
        function failure(error) {
            return { type: articleConstants.LIKE_BIG_COMMENT_FAILURE, error };
        }
    }
}

function addReplyComment(data) {
    return (dispatch)=>{
        dispatch(request())
        articleService.addReplyComment(data).then(
            (articles)=>{
                dispatch(success(articles))
            },
            (error)=>{
                dispatch(failure(error.toString()))
                console.log({error})
            }
        )
        
        function request() {
            return { type: articleConstants.ADD_REPLY_COMMENT_REQUEST };
        }
        function success(articles ) {
            return {type: articleConstants.ADD_REPLY_COMMENT_SUCCESS, articles };
        }
        function failure(error) {
            return { type: articleConstants.ADD_REPLY_COMMENT_FAILURE, error };
        }
    }
}

function deleteReplyComment(data) {
    return (dispatch)=>{
        dispatch(request())
        articleService.deleteReplyComment(data).then(
            (articles)=>{
                dispatch(success(articles))
            },
            (error)=>{
                dispatch(failure(error.toString()))
                console.log({error})
            }
        )
        
        function request() {
            return { type: articleConstants.DELETE_REPLY_COMMENT_REQUEST };
        }
        function success(articles ) {
            return {type: articleConstants.DELETE_REPLY_COMMENT_SUCCESS, articles };
        }
        function failure(error) {
            return { type: articleConstants.DELETE_REPLY_COMMENT_FAILURE, error };
        }
    }
}

function likeReplyComment(data) {
    return (dispatch)=>{
        dispatch(request())
        articleService.likeReplyComment(data).then(
            (articles)=>{
                dispatch(success(articles))
            },
            (error)=>{
                dispatch(failure(error.toString()))
                console.log({error})
            }
        )
        
        function request() {
            return { type: articleConstants.LIKE_REPLY_COMMENT_REQUEST };
        }
        function success(articles ) {
            return {type: articleConstants.LIKE_REPLY_COMMENT_SUCCESS, articles };
        }
        function failure(error) {
            return { type: articleConstants.LIKE_REPLY_COMMENT_FAILURE, error };
        }
    }
}

function unlikeReplyComment(data) {
    return (dispatch)=>{
        dispatch(request())
        articleService.unlikeReplyComment(data).then(
            (articles)=>{
                dispatch(success(articles))
            },
            (error)=>{
                dispatch(failure(error.toString()))
                console.log({error})
            }
        )
        
        function request() {
            return { type: articleConstants.UNLIKE_REPLY_COMMENT_REQUEST };
        }
        function success(articles ) {
            return {type: articleConstants.UNLIKE_REPLY_COMMENT_SUCCESS, articles };
        }
        function failure(error) {
            return { type: articleConstants.UNLIKE_REPLY_COMMENT_FAILURE, error };
        }
    }
}

function hideReplyComment(data) {
    return (dispatch)=>{
        dispatch(request())
        articleService.hideReplyComment(data).then(
            (articles)=>{
                dispatch(success(articles))
            },
            (error)=>{
                dispatch(failure(error.toString()))
                console.log({error})
            }
        )
        
        function request() {
            return { type: articleConstants.HIDE_REPLY_COMMENT_REQUEST };
        }
        function success(articles ) {
            return {type: articleConstants.HIDE_REPLY_COMMENT_SUCCESS, articles };
        }
        function failure(error) {
            return { type: articleConstants.HIDE_REPLY_COMMENT_FAILURE, error };
        }
    }
}

function showReplyComment(data) {
    return (dispatch)=>{
        dispatch(request())
        articleService.showReplyComment(data).then(
            (articles)=>{
                dispatch(success(articles))
            },
            (error)=>{
                dispatch(failure(error.toString()))
                console.log({error})
            }
        )
        
        function request() {
            return { type: articleConstants.SHOW_REPLY_COMMENT_REQUEST };
        }
        function success(articles ) {
            return {type: articleConstants.SHOW_REPLY_COMMENT_SUCCESS, articles };
        }
        function failure(error) {
            return { type: articleConstants.SHOW_REPLY_COMMENT_FAILURE, error };
        }
    }
}


function editBigComment(data) {
    return (dispatch)=>{
        dispatch(request())
        articleService.editBigComment(data).then(
            (articles)=>{
                dispatch(success(articles))
            },
            (error)=>{
                dispatch(failure(error.toString()))
                console.log({error})
            }
        )
        
        function request() {
            return { type: articleConstants.EDIT_BIG_COMMENT_REQUEST };
        }
        function success(articles ) {
            return {type: articleConstants.EDIT_BIG_COMMENT_SUCCESS, articles };
        }
        function failure(error) {
            return { type: articleConstants.EDIT_BIG_COMMENT_FAILURE, error };
        }
    }
}