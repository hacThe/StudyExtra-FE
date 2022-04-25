import React, { useState } from "react";
import './scss/DocumentTypeModal.scss';
import { useDispatch, useSelector } from "react-redux";
import {documentActions} from '../../../../actions/document.actions.js'
import { MdModeEdit } from "react-icons/md";
import { AiFillCloseCircle} from "react-icons/ai";


function DocumentTypeModal() {
    const dispatch = useDispatch();

    const closeModal = () => {
        dispatch(documentActions.changeModalStatus(false));
    }


    const [documentType, setDocumentType] = useState([
        {
            type: "Lớp 10",
            active: false,
        },
        {
            type: "Lớp 11",
            active: false,
        },
        {
            type: "Lớp 12",
            active: false,
        },
        {
            type: "Anh văn giao tiếp",
            active: true,
        },
        {
            type: "Khác",
            active: false
        },
    ]);

    const changeDocument = (documentObject) => {
        setDocumentType(documentType);
    }
    
    const changeDocumentAt = (index, value) => {
        var tempt = [];
        for(var i = 0; i < documentType.length; i++)
        {
            if(i!=index)
            {
                tempt.push(documentType[i])
            }
            else {
                tempt.push({
                    type: documentType[i].type,
                    active : value
                })
            }
        }
        setDocumentType(tempt);
        console.log("tempt", tempt);
    }


    console.log(documentType);

    const handleClickType = (e, index) => {
        console.log("e", e.target.classList.value);
        if(e.target.classList.value != ''){
            console.log("Select");
            changeDocumentAt(index, true)
        }
    }
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
                        documentType.map((type, index)=>{
                            return (
                                <div 
                                    className= {type.active ? 'type-container active' : 'type-container '}
                                    onClick = {(e) => handleClickType(e, index)}
                                >
                                    <div className='type-name'>
                                        {type.type}
                                    </div>
                                    <div className='edit-type'>
                                        <MdModeEdit size={16} />
                                    </div>
                                    <div 
                                        className='type-delete'
                                        onClick={()=> changeDocumentAt(index, false)}
                                    >
                                        <AiFillCloseCircle size={16} />
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="insert-document-type">
                    <input type='text' className='input-document-type'>

                    </input>
                    <button className="button-add-type">
                        Thêm 
                    </button>
                </div>
            </div>
            
        </div>
    );
}

export default DocumentTypeModal;
