import config from './api/config';
import { options, handleResponse } from '../helpers';
import ajaxHelper from './api';

export const lessonService = {
    getCourseInfo
};

function getCourseInfo() {
    return handleResponse(
        ajaxHelper.get(config.URL_GET_DOCUMENTS, {}, options())
    );
}

function getAllDocument() {
    return handleResponse(
        ajaxHelper.get(config.URL_GET_DOCUMENTS, {}, options())
    );
}

function getDocumentByIDNew(id) {
    return handleResponse(
        ajaxHelper.get(config.URL_GET_DOCUMENTS + '/' + id, {} , options())
    );
}

function addNewDocument(data) {
    return handleResponse(
        ajaxHelper.post(config.URL_GET_DOCUMENTS,{...data}, options())
    );
}

function getDocumentbyID(id) {
    return handleResponse(
        ajaxHelper.get(config.URL_GET_DOCUMENTS, {id: id}, options())
    );
}

function editDocument(data){
    return handleResponse(
        ajaxHelper.put(config.URL_GET_DOCUMENTS, {...data})
    );
}

function deleteDocuments(data) {
    return handleResponse(
        ajaxHelper.deleteFix(config.URL_GET_DOCUMENTS, {...data})
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
    return handleResponse(
        ajaxHelper.deleteFix(config.URL_TYPE_CATEGORY, {_id: id})
    );
}

function increasingDocumentView(id) {
    return handleResponse(
        ajaxHelper.post(config.URL_GET_DOCUMENTS + '/increasing-view', {_id: id})
    );
}

