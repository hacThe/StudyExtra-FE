import config from './api/config';
import { options, handleResponse } from '../helpers';
import { cookiesUtil } from '../utilities';
import ajaxHelper from './api';

export const articleService = {
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
    showReplyComment
};

function getAllArticle() {
    return handleResponse(
        ajaxHelper.get(config.URL_ARTICLE, {}, options())
    );
}

function addNewArticle(data) {
    return handleResponse(
        ajaxHelper.post(config.URL_ARTICLE, data, options())
    );
}

function editArticle(data) {
    return handleResponse(
        ajaxHelper.put(config.URL_ARTICLE, data, options())
    );
}

function deleteArticle(id) {
    return handleResponse(
        ajaxHelper.deleteFix(config.URL_ARTICLE, {_id: id})
    );
}

function uploadArticlePicture(data) {
    return handleResponse(
        ajaxHelper.post(config.URL_ARTICLE_PICTURE, data, {})
    );
}

function addBigCommentToArticle(data) {
    return handleResponse(
        ajaxHelper.post(config.URL_ARTICLE + '/comment', data, {})
    );
}

function deleteBigCommentOfArticle(data) {
    return handleResponse(
        ajaxHelper.deleteFix(config.URL_ARTICLE + '/comment', data, {})
    );
}

function hideBigCommentOfArticle(data) {
    return handleResponse(
        ajaxHelper.post(config.URL_ARTICLE + '/comment/hide', data, {})
    );
}   

function showBigCommentOfArticle(data) {
    return handleResponse(
        ajaxHelper.post(config.URL_ARTICLE + '/comment/show', data, {})
    );
}  

function likeArticle(data) {
    return handleResponse(
        ajaxHelper.post(config.URL_ARTICLE + '/interaction', data, {})
    );
}  

function unLikeArticle(data) {
    return handleResponse(
        ajaxHelper.deleteFix(config.URL_ARTICLE + '/interaction', data, {})
    );
}

function likeBigComment(data) {
    return handleResponse(
        ajaxHelper.post(config.URL_ARTICLE + '/comment/interaction', data, {})
    );
}


function unlikeBigComment(data) {
    return handleResponse(
        ajaxHelper.deleteFix(config.URL_ARTICLE + '/comment/interaction', data, {})
    );
}

function addReplyComment(data) {
    return handleResponse(
        ajaxHelper.post(config.URL_ARTICLE + '/comment/reply', data, {})
    );
}

function deleteReplyComment(data) {
    return handleResponse(
        ajaxHelper.deleteFix(config.URL_ARTICLE + '/comment/reply', data, {})
    );
}

function likeReplyComment(data) {
    return handleResponse(
        ajaxHelper.post(config.URL_ARTICLE + '/comment/reply/interaction', data, {})
    );
}

function unlikeReplyComment(data) {
    return handleResponse(
        ajaxHelper.deleteFix(config.URL_ARTICLE + '/comment/reply/interaction', data, {})
    );
}


function hideReplyComment(data) {
    return handleResponse(
        ajaxHelper.post(config.URL_ARTICLE + '/comment/reply/hide', data, {})
    );
}

function showReplyComment(data) {
    return handleResponse(
        ajaxHelper.post(config.URL_ARTICLE + '/comment/reply/show', data, {})
    );
}