import config from './api/config';
import { options, handleResponse } from '../helpers';
import { cookiesUtil } from '../utilities';
import ajaxHelper from './api';

export const articleService = {
    getAllArticle
};

function getAllArticle() {
    return handleResponse(
        ajaxHelper.get(config.URL_ARTICLE, {}, options())
    );
}