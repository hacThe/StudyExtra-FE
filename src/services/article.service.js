import config from './api/config';
import { options, handleResponse } from '../helpers';
import { cookiesUtil } from '../utilities';
import ajaxHelper from './api';

export const articleService = {
    getAllArticle, 
    addNewArticle,
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

function uploadArticlePicture(data) {
    return handleResponse(
        ajaxHelper.post(config.URL_ARTICLE_PICTURE, data, {})
    );
}


