import config from './api/config';
import { options, handleResponse } from '../helpers';
import { cookiesUtil } from '../utilities';
import ajaxHelper from './api';

export const documentService = {
    getAllDocument,
    getAllDocumentType,
    addNewDocumentType,
    deleteDocumentType
};

function getAllDocument() {
    return handleResponse(
        ajaxHelper.get(config.URL_GET_DOCUMENTS, {}, options())
    );
}

function getAllDocumentType() {
    return handleResponse(
        ajaxHelper.get(config.URL_TYPE_CATEGORY, {}, options())
    );
}

function addNewDocumentType(newName) {
    return handleResponse(
        ajaxHelper.post(config.URL_TYPE_CATEGORY, {name: newName}, options())
    );
}

function deleteDocumentType(id) {
    console.log("Vô được đây rồi, ID: ", id);
    return handleResponse(
        ajaxHelper.deleteFix(config.URL_TYPE_CATEGORY, {_id: id})
    );
}