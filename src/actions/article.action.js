import {articleConstants} from '../constaint/';
import { articleService } from '../services';

export const articleActions = {
    getAllArticle,
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