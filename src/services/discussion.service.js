import config from './api/config';
import { options, handleResponse } from '../helpers';
import { cookiesUtil } from '../utilities';
import ajaxHelper from './api';

export const discussionService = {
    getAllArticle, 
    addNewArticle,
    editArticle,
    deleteArticle,
    uploadArticlePicture,
    addBigCommentToArticle,
    deleteBigCommentOfArticle,
    hideBigCommentOfArticle,
    showBigCommentOfArticle,
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
    getPostInteractionList,
    getCommentInteractionList,
    getDiscussionByLessonID
};

function getDiscussionByLessonID(lessonID) {
    return handleResponse(
        ajaxHelper.get(config.URL_DISCUSSION +'/'+ lessonID, {}, options())
    );
}

function getAllArticle() {
    return handleResponse(
        ajaxHelper.get(config.URL_DISCUSSION, {}, options())
    );
}

function addNewArticle(data) {
    return handleResponse(
        ajaxHelper.post(config.URL_DISCUSSION, data, options())
    );
}

function editArticle(data) {
    return handleResponse(
        ajaxHelper.put(config.URL_DISCUSSION, data, options())
    );
}

function deleteArticle(id) {
    return handleResponse(
        ajaxHelper.deleteFix(config.URL_DISCUSSION, {_id: id})
    );
}

function uploadArticlePicture(data) {
    return handleResponse(
        ajaxHelper.post(config.URL_ARTICLE_PICTURE, data, {})
    );
}

function addBigCommentToArticle(data) {
    return handleResponse(
        ajaxHelper.post(config.URL_DISCUSSION + '/comment', data, {})
    );
}

function deleteBigCommentOfArticle(data) {
    return handleResponse(
        ajaxHelper.deleteFix(config.URL_DISCUSSION + '/comment', data, {})
    );
}

function hideBigCommentOfArticle(data) {
    return handleResponse(
        ajaxHelper.post(config.URL_DISCUSSION + '/comment/hide', data, {})
    );
}   

function showBigCommentOfArticle(data) {
    return handleResponse(
        ajaxHelper.post(config.URL_DISCUSSION + '/comment/show', data, {})
    );
}  

function likeArticle(data) {
    return handleResponse(
        ajaxHelper.post(config.URL_DISCUSSION + '/interaction', data, {})
    );
}  

function unLikeArticle(data) {
    return handleResponse(
        ajaxHelper.deleteFix(config.URL_DISCUSSION + '/interaction', data, {})
    );
}

function likeBigComment(data) {
    return handleResponse(
        ajaxHelper.post(config.URL_DISCUSSION + '/comment/interaction', data, {})
    );
}


function unlikeBigComment(data) {
    return handleResponse(
        ajaxHelper.deleteFix(config.URL_DISCUSSION + '/comment/interaction', data, {})
    );
}

function addReplyComment(data) {
    return handleResponse(
        ajaxHelper.post(config.URL_DISCUSSION + '/comment/reply', data, {})
    );
}

function deleteReplyComment(data) {
    return handleResponse(
        ajaxHelper.deleteFix(config.URL_DISCUSSION + '/comment/reply', data, {})
    );
}

function likeReplyComment(data) {
    return handleResponse(
        ajaxHelper.post(config.URL_DISCUSSION + '/comment/reply/interaction', data, {})
    );
}

function unlikeReplyComment(data) {
    return handleResponse(
        ajaxHelper.deleteFix(config.URL_DISCUSSION + '/comment/reply/interaction', data, {})
    );
}


function hideReplyComment(data) {
    return handleResponse(
        ajaxHelper.post(config.URL_DISCUSSION + '/comment/reply/hide', data, {})
    );
}

function showReplyComment(data) {
    return handleResponse(
        ajaxHelper.post(config.URL_DISCUSSION + '/comment/reply/show', data, {})
    );
}

function editBigComment(data) {
    return handleResponse(
        ajaxHelper.put(config.URL_DISCUSSION + '/comment', data, {})
    );
}

function editReplyComment(data) {
    return handleResponse(
        ajaxHelper.put(config.URL_DISCUSSION + '/comment/reply', data, {})
    );
}

function getPostInteractionList(data) {
    return handleResponse(
        ajaxHelper.post(config.URL_DISCUSSION + '/interaction-list', data, {})
    );
}

function getCommentInteractionList(data) {
    return handleResponse(
        ajaxHelper.post(config.URL_DISCUSSION + '/comment/interaction-list', data, {})
    );
}