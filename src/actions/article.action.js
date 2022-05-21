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
            (article)=>{
                dispatch(success(article))
            },
            (error)=>{
                dispatch(failure(error.toString()))
                console.log({error})
            }
        )
        
        function request() {
            return { type: articleConstants.ADD_ARTICLE_REQUEST };
        }
        function success(article ) {
            return {type: articleConstants.ADD_ARTICLE_SUCCESS, article };
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
            (article)=>{
                dispatch(success(article))
            },
            (error)=>{
                dispatch(failure(error.toString()))
                console.log({error})
            }
        )
        
        function request() {
            return { type: articleConstants.EDIT_ARTICLE_REQUEST };
        }
        function success(article ) {
            return {type: articleConstants.EDIT_ARTICLE_SUCCESS, article };
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