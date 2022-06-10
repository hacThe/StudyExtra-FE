import { documentConstants } from "../constaint/";
import { documentService } from "../services";

export const documentActions = {
  changePagination,
  getAllDocument,
  addNewDocument,
  getDocumentByID,
  editDocument,
  deleteMultiDocuments,
  changeModalStatus,
  getAllDocumentType,
  addNewDocumentType,
  deleteDocumentType,
  getDocumentByIDNew,
  increasingDocumentView,
  addNewDocumentTypeID,
};

function changePagination(page) {
  console.log("Page", page);
  return (dispatch) => {
    dispatch(request());
    console.log("change pagination has called");
    function request() {
      return { type: documentConstants.CHANGE_PAGINATION_REQUEST, page: page };
    }
  };
}

function changeModalStatus(isOpen) {
  return (dispatch) => {
    dispatch(request());
    function request() {
      return { type: documentConstants.CHANGE_MODAL_TYPE_OPEN, isOpen: isOpen };
    }
  };
}

function getDocumentByIDNew(id) {
  return (dispatch) => {
    dispatch(request());

    documentService.getDocumentByIDNew(id).then(
      (document) => {
        dispatch(success(document));
      },
      (error) => {
        dispatch(failure(error.toString()));
        console.log({ error });
      }
    );
    function request() {
      return { type: documentConstants.GET_DOCUMENT_BY_ID_NEW_REQUEST };
    }
    function success(document) {
      return {
        type: documentConstants.GET_DOCUMENT_BY_ID_NEW_SUCCESS,
        document,
      };
    }
    function failure(error) {
      return { type: documentConstants.GET_DOCUMENT_BY_ID_NEW_FAILURE, error };
    }
  };
}

function getDocumentByID(id) {
  return (dispatch) => {
    dispatch(request());

    documentService.getDocumentbyID(id).then(
      (document) => {
        dispatch(success(document));
      },
      (error) => {
        dispatch(failure(error.toString()));
        console.log({ error });
      }
    );
    function request() {
      return { type: documentConstants.GET_DOCUMENT_BY_ID_REQUEST };
    }
    function success(document) {
      return { type: documentConstants.GET_DOCUMENT_BY_ID_SUCCESS, document };
    }
    function failure(error) {
      return { type: documentConstants.GET_DOCUMENT_BY_ID_FAILURE, error };
    }
  };
}

function getAllDocument() {
  return (dispatch) => {
    dispatch(request());
    // console.log("Course Action get all has called")

    documentService.getAllDocument().then(
      (documents) => {
        dispatch(success(documents));
      },
      (error) => {
        dispatch(failure(error.toString()));
        console.log({ error });
      }
    );
    function request() {
      return { type: documentConstants.GET_DOCUMENT_REQUEST };
    }
    function success(documents) {
      return { type: documentConstants.GET_DOCUMENT_SUCCESS, documents };
    }
    function failure(error) {
      return { type: documentConstants.GET_DOCUMENT_FAILURE, error };
    }
  };
}

function addNewDocument(data, callback) {
  return (dispatch) => {
    dispatch(request());
    // console.log("Course Action get all has called")
    documentService.addNewDocument(data).then(
      (data) => {
        dispatch(success(data));
        if (callback instanceof Function) {
          callback();
        }
      },
      (error) => {
        dispatch(failure(error.toString()));
        console.log({ error });
      }
    );
    function request() {
      return { type: documentConstants.ADD_NEW_DOCUMENT_REQUEST };
    }
    function success(data) {
      return { type: documentConstants.ADD_NEW_DOCUMENT_SUCCESS, data };
    }
    function failure(error) {
      return { type: documentConstants.ADD_NEW_DOCUMENT_FAILURE, error };
    }
  };
}

function editDocument(data) {
  return (dispatch) => {
    dispatch(request());
    // console.log("Course Action get all has called")
    documentService.editDocument(data).then(
      (data) => {
        dispatch(success(data));
      },
      (error) => {
        dispatch(failure(error.toString()));
        console.log({ error });
      }
    );
    function request() {
      return { type: documentConstants.EDIT_DOCUMENT_REQUEST };
    }
    function success(data) {
      return { type: documentConstants.EDIT_DOCUMENT_SUCCESS, data };
    }
    function failure(error) {
      return { type: documentConstants.EDIT_DOCUMENT_FAILURE, error };
    }
  };
}

function deleteMultiDocuments(data) {
  return (dispatch) => {
    dispatch(request());
    documentService.deleteDocuments(data).then(
      (res) => {
        dispatch(success(res));
      },
      (error) => {
        dispatch(failure(error.toString()));
        console.log({ error });
      }
    );
    function request() {
      return { type: documentConstants.DELETE_DOCUMENT_REQUEST };
    }
    function success(res) {
      return { type: documentConstants.DELETE_DOCUMENT_SUCCESS, data: data };
    }
    function failure(error) {
      return { type: documentConstants.DELETE_DOCUMENT_FAILURE, error };
    }
  };
}

function getAllDocumentType() {
  return (dispatch) => {
    dispatch(request());
    // console.log("Course Action get all has called")

    documentService.getAllDocumentType().then(
      (documentType) => {
        dispatch(success(documentType));
      },
      (error) => {
        dispatch(failure(error.toString()));
        console.log({ error });
      }
    );
    function request() {
      return { type: documentConstants.GET_TYPE_DOCUMENT_REQUEST };
    }
    function success(documentType) {
      return {
        type: documentConstants.GET_TYPE_DOCUMENT_SUCCESS,
        documentType,
      };
    }
    function failure(error) {
      return { type: documentConstants.GET_TYPE_DOCUMENT_FAILURE, error };
    }
  };
}

function addNewDocumentType(newName) {
  return (dispatch) => {
    dispatch(request());
    // console.log("Course Action get all has called")

    documentService.addNewDocumentType(newName).then(
      (documentType) => {
        dispatch(success(documentType));
      },
      (error) => {
        dispatch(failure(error.toString()));
        console.log({ error });
      }
    );
    function request() {
      return { type: documentConstants.ADD_NEW_TYPE_DOCUMENT_REQUEST };
    }
    function success(documentType) {
      return {
        type: documentConstants.ADD_NEW_TYPE_DOCUMENT_SUCCESS,
        documentType,
      };
    }
    function failure(error) {
      return { type: documentConstants.ADD_NEW_TYPE_DOCUMENT_FAILURE, error };
    }
  };
}

function deleteDocumentType(id) {
  return (dispatch) => {
    dispatch(request());
    documentService.deleteDocumentType(id).then(
      (res) => {
        dispatch(success(res));
      },
      (error) => {
        dispatch(failure(error.toString()));
        console.log({ error });
      }
    );
    function request() {
      return { type: documentConstants.DELETE_TYPE_DOCUMENT_REQUEST };
    }
    function success(res) {
      return {
        type: documentConstants.DELETE_TYPE_DOCUMENT_SUCCESS,
        data: res,
      };
    }
    function failure(error) {
      return { type: documentConstants.DELETE_TYPE_DOCUMENT_FAILURE, error };
    }
  };
}

function addNewDocumentTypeID(newName, id) {
  return (dispatch) => {
    dispatch(request());
    // console.log("Course Action get all has called")

    documentService.addNewDocumentTypeID(newName, id).then(
      (documentType) => {
        dispatch(success(documentType));
      },
      (error) => {
        dispatch(failure(error.toString()));
        console.log({ error });
      }
    );
    function request() {
      return { type: documentConstants.ADD_NEW_TYPE_DOCUMENT_REQUEST };
    }
    function success(documentType) {
      return {
        type: documentConstants.ADD_NEW_TYPE_DOCUMENT_SUCCESS,
        documentType,
      };
    }
    function failure(error) {
      return { type: documentConstants.ADD_NEW_TYPE_DOCUMENT_FAILURE, error };
    }
  };
}

function increasingDocumentView(id) {
  return (dispatch) => {
    documentService.increasingDocumentView(id);
  };
}
