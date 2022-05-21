import config from './api/config';
import { options, handleResponse } from '../helpers';
import { cookiesUtil } from '../utilities';
import ajaxHelper from './api';

export const articleService = {
    getAllArticle, 
    addNewArticle,
    deleteArticle,
    uploadArticlePicture,
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



