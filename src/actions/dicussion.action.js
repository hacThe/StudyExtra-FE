import { discussionConstants } from '../constaint/';
import { discussionService } from '../services';

export const discussionActions = {
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
    editBigComment,
    editReplyComment,
    openShowUserModal,
    closeShowUserModal,
    getPostInteractionList,
    getCommentInteractionList,
    getDiscussionByLessonID,
}

function getDiscussionByLessonID(id){
    return (dispatch)=>{
        dispatch(request())
        discussionService.getDiscussionByLessonID(id).then(
            (articles)=>{
                dispatch(success(articles))
            },
            (error)=>{
                dispatch(failure(error.toString()))
                console.log({error})
            }
        )
        
        function request() {
            return { type: discussionConstants.GET_ARTICLE_BY_LESSONID_REQUEST };
        }
        function success(articles ) {
            return {type: discussionConstants.GET_ARTICLE_BY_LESSONID_SUCCESS, articles };
        }
        function failure(error) {
            return { type: discussionConstants.GET_ARTICLE_BY_LESSONID_FAILURE, error };
        }
    }
}

function getAllArticle(){
    return (dispatch)=>{
        dispatch(request())
        discussionService.getAllArticle().then(
            (articles)=>{
                dispatch(success(articles))
            },
            (error)=>{
                dispatch(failure(error.toString()))
                console.log({error})
            }
        )
        
        function request() {
            return { type: discussionConstants.GET_ARTICLE_REQUEST };
        }
        function success(articles ) {
            return {type: discussionConstants.GET_ARTICLE_SUCCESS, articles };
        }
        function failure(error) {
            return { type: discussionConstants.GET_ARTICLE_FAILURE, error };
        }
    }
}

function addNewArticle(data){
    return (dispatch)=>{
        dispatch(request())
        discussionService.addNewArticle(data).then(
            (articles)=>{
                dispatch(success(articles))
            },
            (error)=>{
                dispatch(failure(error.toString()))
                console.log({error})
            }
        )
        
        function request() {
            return { type: discussionConstants.ADD_ARTICLE_REQUEST };
        }
        function success(articles ) {
            return {type: discussionConstants.ADD_ARTICLE_SUCCESS, articles };
        }
        function failure(error) {
            return { type: discussionConstants.ADD_ARTICLE_FAILURE, error };
        }
    }
}

function editArticle(data){
    return (dispatch)=>{
        dispatch(request())
        discussionService.editArticle(data).then(
            (articles)=>{
                dispatch(success(articles))
            },
            (error)=>{
                dispatch(failure(error.toString()))
                console.log({error})
            }
        )
        
        function request() {
            return { type: discussionConstants.EDIT_ARTICLE_REQUEST };
        }
        function success(articles) {
            return {type: discussionConstants.EDIT_ARTICLE_SUCCESS, articles };
        }
        function failure(error) {
            return { type: discussionConstants.EDIT_ARTICLE_FAILURE, error };
        }
    }
}

function deleteArticle(id){
    return (dispatch)=>{
        dispatch(request())
        discussionService.deleteArticle(id).then(
            (res)=>{
                dispatch(success(res))
            },
            (error)=>{
                dispatch(failure(error.toString()))
                console.log({error})
            }
        )
        function request() {
            return { type: discussionConstants.DELETE_ARTICLE_REQUEST };
        }
        function success(res) {
            return {type: discussionConstants.DELETE_ARTICLE_SUCCESS, data: res};
        }
        function failure(error) {
            return { type: discussionConstants.DELETE_ARTICLE_FAILURE, error };
        }
    }
}

function uploadArticlePicture(data){
    return (dispatch)=>{
        dispatch(request())
        discussionService.uploadArticlePicture(data).then(
            (dataLink)=>{
                dispatch(success(dataLink))
            },
            (error)=>{
                dispatch(failure(error.toString()))
                console.log({error})
            }
        )
        
        function request() {
            return { type: discussionConstants.UPLOAD_PICTURE_REQUEST };
        }
        function success(dataLink ) {
            return {type: discussionConstants.UPLOAD_PICTURE_SUCCESS, dataLink };
        }
        function failure(error) {
            return { type: discussionConstants.UPLOAD_PICTURE_FAILURE, error };
        }
    }
}

function uploadEditArticlePicture(data){
    return (dispatch)=>{
        dispatch(request())
        discussionService.uploadArticlePicture(data).then(
            (dataLink)=>{
                dispatch(success(dataLink))
            },
            (error)=>{
                dispatch(failure(error.toString()))
                console.log({error})
            }
        )
        
        function request() {
            return { type: discussionConstants.UPLOAD_PICTURE_EDIT_POST_REQUEST };
        }
        function success(dataLink ) {
            return { type: discussionConstants.UPLOAD_PICTURE_EDIT_POST_SUCCESS, dataLink };
        }
        function failure(error) {
            return { type: discussionConstants.UPLOAD_PICTURE_EDIT_POST_FAILURE, error };
        }
    }
}

function removeSpecificPicture(link){
    return (dispatch)=>{
        dispatch(request())
        function request() {
            return { type: discussionConstants.REMOVE_PICTURE, link};
        }
    }
}


function removeSpecificEditPicture(link){
    return (dispatch)=>{
        dispatch(request())
        function request() {
            return { type: discussionConstants.REMOVE_PICTURE_EDIT_POST, link};
        }
    }
}

function setEditPicture(data){
    return (dispatch)=>{
        dispatch(request())
        function request() {
            return { type: discussionConstants.SET_PICTURE_EDIT_POST, data: data};
        }
    }
}

function uploadBigCommentArticlePicture(data){
    return (dispatch)=>{
        dispatch(request())
        discussionService.uploadArticlePicture(data).then(
            (dataLink)=>{
                dispatch(success(dataLink))
            },
            (error)=>{
                dispatch(failure(error.toString()))
                console.log({error})
            }
        )
        
        function request() {
            return { type: discussionConstants.UPLOAD_BIG_COMMENT_IMAGE_REQUEST };
        }
        function success(dataLink ) {
            return { type: discussionConstants.UPLOAD_BIG_COMMENT_IMAGE_SUCCESS, dataLink };
        }
        function failure(error) {
            return { type: discussionConstants.UPLOAD_BIG_COMMENT_IMAGE_FAILURE, error };
        }
    }
}

function addBigComment(data) {
    return (dispatch)=>{
        dispatch(request())
        discussionService.addBigCommentToArticle(data).then(
            (articles)=>{
                dispatch(success(articles))
            },
            (error)=>{
                dispatch(failure(error.toString()))
                console.log({error})
            }
        )
        
        function request() {
            return { type: discussionConstants.ADD_BIG_COMMENT_REQUEST };
        }
        function success(articles ) {
            return {type: discussionConstants.ADD_BIG_COMMENT_SUCCESS, articles };
        }
        function failure(error) {
            return { type: discussionConstants.ADD_BIG_COMMENT_FAILURE, error };
        }
    }
}

function removeBigCommentPicture(){
    return (dispatch)=>{
        dispatch(request())
        function request() {
            return { type: discussionConstants.REMOVE_BIG_COMMENT_PICTURE};
        }
    }
}

function deleteBigComment(data) {
    return (dispatch)=>{
        dispatch(request())
        discussionService.deleteBigCommentOfArticle(data).then(
            (articles)=>{
                dispatch(success(articles))
            },
            (error)=>{
                dispatch(failure(error.toString()))
                console.log({error})
            }
        )
        
        function request() {
            return { type: discussionConstants.DELETE_BIG_COMMENT_REQUEST };
        }
        function success(articles ) {
            return {type: discussionConstants.DELETE_BIG_COMMENT_SUCCESS, articles };
        }
        function failure(error) {
            return { type: discussionConstants.DELETE_BIG_COMMENT_FAILURE, error };
        }
    }
}


function hideBigComment(data) {
    return (dispatch)=>{
        dispatch(request())
        discussionService.hideBigCommentOfArticle(data).then(
            (articles)=>{
                dispatch(success(articles))
            },
            (error)=>{
                dispatch(failure(error.toString()))
                console.log({error})
            }
        )
        
        function request() {
            return { type: discussionConstants.HIDE_BIG_COMMENT_REQUEST };
        }
        function success(articles ) {
            return {type: discussionConstants.HIDE_BIG_COMMENT_SUCCESS, articles };
        }
        function failure(error) {
            return { type: discussionConstants.HIDE_BIG_COMMENT_FAILURE, error };
        }
    }
}

function showBigComment(data) {
    return (dispatch)=>{
        dispatch(request())
        discussionService.showBigCommentOfArticle(data).then(
            (articles)=>{
                dispatch(success(articles))
            },
            (error)=>{
                dispatch(failure(error.toString()))
                console.log({error})
            }
        )
        
        function request() {
            return { type: discussionConstants.SHOW_BIG_COMMENT_REQUEST };
        }
        function success(articles ) {
            return {type: discussionConstants.SHOW_BIG_COMMENT_SUCCESS, articles };
        }
        function failure(error) {
            return { type: discussionConstants.SHOW_BIG_COMMENT_FAILURE, error };
        }
    }
}

function likeArticle(data){
    return (dispatch)=>{
        dispatch(request())
        discussionService.likeArticle(data).then(
            (articles)=>{
                dispatch(success(articles))
            },
            (error)=>{
                dispatch(failure(error.toString()))
                console.log({error})
            }
        )
        
        function request() {
            return { type: discussionConstants.UNLIKE_POST_REQUEST };
        }
        function success(articles ) {
            return {type: discussionConstants.UNLIKE_POST_SUCCESS, articles };
        }
        function failure(error) {
            return { type: discussionConstants.UNLIKE_POST_FAILURE, error };
        }
    }
}

function unLikeArticle(data){
    return (dispatch)=>{
        dispatch(request())
        discussionService.unLikeArticle(data).then(
            (articles)=>{
                dispatch(success(articles))
            },
            (error)=>{
                dispatch(failure(error.toString()))
                console.log({error})
            }
        )
        
        function request() {
            return { type: discussionConstants.LIKE_POST_REQUEST };
        }
        function success(articles ) {
            return {type: discussionConstants.LIKE_POST_SUCCESS, articles };
        }
        function failure(error) {
            return { type: discussionConstants.LIKE_POST_FAILURE, error };
        }
    }
}

function likeBigComment(data) {
    return (dispatch)=>{
        dispatch(request())
        discussionService.likeBigComment(data).then(
            (articles)=>{
                dispatch(success(articles))
            },
            (error)=>{
                dispatch(failure(error.toString()))
                console.log({error})
            }
        )
        
        function request() {
            return { type: discussionConstants.LIKE_BIG_COMMENT_REQUEST };
        }
        function success(articles ) {
            return {type: discussionConstants.LIKE_BIG_COMMENT_SUCCESS, articles };
        }
        function failure(error) {
            return { type: discussionConstants.LIKE_BIG_COMMENT_FAILURE, error };
        }
    }
}

function unlikeBigComment(data) {
    return (dispatch)=>{
        dispatch(request())
        discussionService.unlikeBigComment(data).then(
            (articles)=>{
                dispatch(success(articles))
            },
            (error)=>{
                dispatch(failure(error.toString()))
                console.log({error})
            }
        )
        
        function request() {
            return { type: discussionConstants.LIKE_BIG_COMMENT_REQUEST };
        }
        function success(articles ) {
            return {type: discussionConstants.LIKE_BIG_COMMENT_SUCCESS, articles };
        }
        function failure(error) {
            return { type: discussionConstants.LIKE_BIG_COMMENT_FAILURE, error };
        }
    }
}

function addReplyComment(data) {
    return (dispatch)=>{
        dispatch(request())
        discussionService.addReplyComment(data).then(
            (articles)=>{
                dispatch(success(articles))
            },
            (error)=>{
                dispatch(failure(error.toString()))
                console.log({error})
            }
        )
        
        function request() {
            return { type: discussionConstants.ADD_REPLY_COMMENT_REQUEST };
        }
        function success(articles ) {
            return {type: discussionConstants.ADD_REPLY_COMMENT_SUCCESS, articles };
        }
        function failure(error) {
            return { type: discussionConstants.ADD_REPLY_COMMENT_FAILURE, error };
        }
    }
}

function deleteReplyComment(data) {
    return (dispatch)=>{
        dispatch(request())
        discussionService.deleteReplyComment(data).then(
            (articles)=>{
                dispatch(success(articles))
            },
            (error)=>{
                dispatch(failure(error.toString()))
                console.log({error})
            }
        )
        
        function request() {
            return { type: discussionConstants.DELETE_REPLY_COMMENT_REQUEST };
        }
        function success(articles ) {
            return {type: discussionConstants.DELETE_REPLY_COMMENT_SUCCESS, articles };
        }
        function failure(error) {
            return { type: discussionConstants.DELETE_REPLY_COMMENT_FAILURE, error };
        }
    }
}

function likeReplyComment(data) {
    return (dispatch)=>{
        dispatch(request())
        discussionService.likeReplyComment(data).then(
            (articles)=>{
                dispatch(success(articles))
            },
            (error)=>{
                dispatch(failure(error.toString()))
                console.log({error})
            }
        )
        
        function request() {
            return { type: discussionConstants.LIKE_REPLY_COMMENT_REQUEST };
        }
        function success(articles ) {
            return {type: discussionConstants.LIKE_REPLY_COMMENT_SUCCESS, articles };
        }
        function failure(error) {
            return { type: discussionConstants.LIKE_REPLY_COMMENT_FAILURE, error };
        }
    }
}

function unlikeReplyComment(data) {
    return (dispatch)=>{
        dispatch(request())
        discussionService.unlikeReplyComment(data).then(
            (articles)=>{
                dispatch(success(articles))
            },
            (error)=>{
                dispatch(failure(error.toString()))
                console.log({error})
            }
        )
        
        function request() {
            return { type: discussionConstants.UNLIKE_REPLY_COMMENT_REQUEST };
        }
        function success(articles ) {
            return {type: discussionConstants.UNLIKE_REPLY_COMMENT_SUCCESS, articles };
        }
        function failure(error) {
            return { type: discussionConstants.UNLIKE_REPLY_COMMENT_FAILURE, error };
        }
    }
}

function hideReplyComment(data) {
    return (dispatch)=>{
        dispatch(request())
        discussionService.hideReplyComment(data).then(
            (articles)=>{
                dispatch(success(articles))
            },
            (error)=>{
                dispatch(failure(error.toString()))
                console.log({error})
            }
        )
        
        function request() {
            return { type: discussionConstants.HIDE_REPLY_COMMENT_REQUEST };
        }
        function success(articles ) {
            return {type: discussionConstants.HIDE_REPLY_COMMENT_SUCCESS, articles };
        }
        function failure(error) {
            return { type: discussionConstants.HIDE_REPLY_COMMENT_FAILURE, error };
        }
    }
}

function showReplyComment(data) {
    return (dispatch)=>{
        dispatch(request())
        discussionService.showReplyComment(data).then(
            (articles)=>{
                dispatch(success(articles))
            },
            (error)=>{
                dispatch(failure(error.toString()))
                console.log({error})
            }
        )
        
        function request() {
            return { type: discussionConstants.SHOW_REPLY_COMMENT_REQUEST };
        }
        function success(articles ) {
            return {type: discussionConstants.SHOW_REPLY_COMMENT_SUCCESS, articles };
        }
        function failure(error) {
            return { type: discussionConstants.SHOW_REPLY_COMMENT_FAILURE, error };
        }
    }
}


function editBigComment(data) {
    return (dispatch)=>{
        dispatch(request())
        discussionService.editBigComment(data).then(
            (articles)=>{
                dispatch(success(articles))
            },
            (error)=>{
                dispatch(failure(error.toString()))
                console.log({error})
            }
        )
        
        function request() {
            return { type: discussionConstants.EDIT_BIG_COMMENT_REQUEST };
        }
        function success(articles ) {
            return {type: discussionConstants.EDIT_BIG_COMMENT_SUCCESS, articles };
        }
        function failure(error) {
            return { type: discussionConstants.EDIT_BIG_COMMENT_FAILURE, error };
        }
    }
}


function editReplyComment(data) {
    return (dispatch)=>{
        dispatch(request())
        discussionService.editReplyComment(data).then(
            (articles)=>{
                dispatch(success(articles))
            },
            (error)=>{
                dispatch(failure(error.toString()))
                console.log({error})
            }
        )
        
        function request() {
            return { type: discussionConstants.EDIT_REPLY_COMMENT_REQUEST };
        }
        function success(articles ) {
            return {type: discussionConstants.EDIT_REPLY_COMMENT_SUCCESS, articles };
        }
        function failure(error) {
            return { type: discussionConstants.EDIT_REPLY_COMMENT_FAILURE, error };
        }
    }
}

function openShowUserModal() {
    return (dispatch) => {
        dispatch(request())
        
        function request() {
            return { type: discussionConstants.OPEN_MODAL_SHOW_USER};
        }
    }
}

function closeShowUserModal() {
    return (dispatch) => {
        dispatch(request())
        
        function request() {
            return { type: discussionConstants.CLOSE_MODAL_SHOW_USER};
        }
    }
}

function getPostInteractionList(data) {
    return (dispatch)=>{
        dispatch(request())
        discussionService.getPostInteractionList(data).then(
            (userList)=>{
                dispatch(success(userList))
            },
            (error)=>{
                dispatch(failure(error.toString()))
                console.log({error})
            }
        )
        
        function request() {
            return { type: discussionConstants.GET_POST_INTERACTION_LIST_REQUEST };
        }
        function success(userList ) {
            return {type: discussionConstants.GET_POST_INTERACTION_LIST_SUCCESS, userList };
        }
        function failure(error) {
            return { type: discussionConstants.GET_POST_INTERACTION_LIST_FAILURE, error };
        }
    }
}

function getCommentInteractionList(data) {
    return (dispatch)=>{
        dispatch(request())
        discussionService.getCommentInteractionList(data).then(
            (userList)=>{
                dispatch(success(userList))
            },
            (error)=>{
                dispatch(failure(error.toString()))
                console.log({error})
            }
        )
        
        function request() {
            return { type: discussionConstants.GET_COMMENT_INTERACTION_LIST_REQUEST };
        }
        function success(userList ) {
            return {type: discussionConstants.GET_COMMENT_INTERACTION_LIST_SUCCESS, userList };
        }
        function failure(error) {
            return { type: discussionConstants.GET_COMMENT_INTERACTION_LIST_FAILURE, error };
        }
    }
}
