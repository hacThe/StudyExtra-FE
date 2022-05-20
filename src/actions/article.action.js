import {articleConstants} from '../constaint/';
import { articleService } from '../services';

export const articleActions = {
    getAllArticle,
    uploadArticlePicture,
    removeSpecificPicture
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

function removeSpecificPicture(link){
    return (dispatch)=>{
        dispatch(request())
        function request() {
            return { type: articleConstants.REMOVE_PICTURE, link};
        }
    }
}