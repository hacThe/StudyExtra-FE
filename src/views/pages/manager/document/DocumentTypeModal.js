import React from "react";
import './scss/DocumentTypeModal.scss';
import { useDispatch, useSelector } from "react-redux";
import {documentActions} from '../../../../actions/document.actions.js'

function DocumentTypeModal() {
    const dispatch = useDispatch();

    const closeModal = () => {
        dispatch(documentActions.changeModalStatus(false));
    }

    const documentTypes = ["Lớp 12", "Lớp 11", "Lớp 10"];

    return (
        <div className="overlay-modal">
            <div 
                className='not-modal'
                onClick={() => closeModal()}
            ></div>
            <div className="document-type-manager-modal">
                <div className="title">
                    Quản lý doanh mục
                </div>
                <div className="document-type-container">
                    {
                        documentTypes.map((type)=>{
                            return (<div>{type}</div>)
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default DocumentTypeModal;
