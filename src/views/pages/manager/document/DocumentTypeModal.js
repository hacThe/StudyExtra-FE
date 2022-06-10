import React, { useState } from "react";
import './scss/DocumentTypeModal.scss';
import { useDispatch, useSelector } from "react-redux";
import {documentActions} from '../../../../actions/document.actions.js'
import { MdModeEdit } from "react-icons/md";
import { AiFillCloseCircle} from "react-icons/ai";
import { cookiesUtil } from "../../../../utilities";
import { showToast } from '../../../../actions/toast.action';


function DocumentTypeModal() {
    const dispatch = useDispatch();

    const closeModal = () => {
        dispatch(documentActions.changeModalStatus(false));
    }


    const [documentType, setDocumentType] = useState([]);

    const changeDocument = (documentObject) => {
        setDocumentType(documentType);
    }
    
    const changeDocumentAt = (index, value) => {
        var tempt = [];
        if(isEditting) return;
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
    }

    const changeAllDocument = () => {
        var tempt = [];
        for(var i = 0; i < documentType.length; i++)
        {
            tempt.push({
                type: documentType[i].type,
                active : true
            })
        }
        setDocumentType(tempt);
    }

    console.log(documentType);

    const handleClickType = (e, index) => {
        console.log("e", e.target.classList.value);
        if(e.target.classList.value != ''){
            console.log("Select");
            changeDocumentAt(index, true)
        }
    }

    const [isEditting, changeEditingStatus] = useState(false);
    const changeEditing = (value) => {
        changeEditingStatus(value);
    } 

    const documentTypes =
        useSelector((state) => {
            console.log({ state });
            return state.document.documentType;
        }) || [];

    useSelector((state) => {
        if(state.document.documentType.length != documentType.length){
            if(documentType.length == 0){
                var newVal = []; 
                for(var i  = 0 ; i < state.document.documentType.length; i++){
                    newVal.push({
                        id: state.document.documentType[i]._id,
                        name: state.document.documentType[i].name,
                        active: true,
                    })
                }
                setDocumentType(newVal)
            }
            else {
                var newVal = []; 
                for(var i  = 0 ; i < state.document.documentType.length; i++){
                    var isFound = false;
                    for(var j = 0; j < documentType.length; j++){
                        if(documentType[j]._id == state.document.documentType[i]._id){
                            newVal.push({
                                id: state.document.documentType[i]._id,
                                name: state.document.documentType[i].name,
                                active: documentType[j].active,
                            })
                            isFound = true;
                            break;
                        }
                    }
                    if(!isFound){
                        newVal.push({
                            id: state.document.documentType[i]._id,
                            name: state.document.documentType[i].name,
                            active: true,
                        })
                    }

                }
                setDocumentType(newVal)
            }
        }
        return ;
    })

    const addDocumentType = () => {
        const typeDocumentInput = document.querySelector('.input-document-type').value;
        if(typeDocumentInput == false || typeDocumentInput == '' || typeDocumentInput.length ==0 ){
            dispatch(showToast("fail","Bạn chưa nhập tên loại tài liệu"));
        }
        else {
            dispatch(documentActions.addNewDocumentType(typeDocumentInput));
            if(isEditting)
                dispatch(showToast("success","Chỉnh sửa loại tài liệu thành công!"));
            else 
                dispatch(showToast("success","Thêm loại tài liệu thành công!"));
            document.querySelector('.input-document-type').value = '';
        }
        
    }

    const addDocumentTypeID = (id) => {
        const typeDocumentInput = document.querySelector('.input-document-type').value;
        if(typeDocumentInput == false || typeDocumentInput == '' || typeDocumentInput.length ==0 ){
            dispatch(showToast("fail","Bạn chưa nhập tên loại tài liệu"));
        }
        else {
            dispatch(documentActions.addNewDocumentTypeID(typeDocumentInput, id));
            if(isEditting)
                dispatch(showToast("success","Chỉnh sửa loại tài liệu thành công!"));
            else 
                dispatch(showToast("success","Thêm loại tài liệu thành công!"));
            document.querySelector('.input-document-type').value = '';
        }
    }

    const deleteDocumentType = (typeID) => {
        console.log("TypeID", typeID);
        dispatch(documentActions.deleteDocumentType(typeID));
        dispatch(showToast("success","Xoá loại tài liệu thành công!"));
    }

    const [currentIdType,changeCurrentIDType] = useState("nothing");
    const changeCurrentType = (id, name) => {
        changeCurrentIDType(id);
        document.querySelector('.input-document-type').value = name
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
                        documentTypes.map((type, index)=>{
                            return (
                                <div 
                                    className= {
                                        index < documentType.length &&
                                        typeof documentType[index].active  != 'undefined' &&
                                        documentType[index].active 
                                        ? 'type-container active' : 'type-container '}
                                >
                                    <div className='type-name'>
                                        {type.name}
                                    </div>
                                    <div 
                                        className='edit-type'
                                        onClick={() => {
                                                changeEditingStatus(true)
                                                changeDocumentAt(index, false);
                                                if(!isEditting)
                                                    changeCurrentType(type._id, type.name)
                                            }
                                        }
                                    >
                                        <MdModeEdit size={16} />
                                    </div>
                                    <div 
                                        className='type-delete'
                                        onClick={() => {
                                            if(!isEditting)
                                                deleteDocumentType(type._id);
                                        }}
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
                    {
                        isEditting 
                        ?
                            <div className="editting-manager">
                                <button 
                                    className="button-save-type"
                                    onClick={() => {
                                            changeEditingStatus(false);
                                            changeAllDocument();
                                            // console.log("currentIdType", currentIdType);
                                            deleteDocumentType(currentIdType);
                                            addDocumentTypeID(currentIdType);
                                            document.querySelector('.input-document-type').value = "";
                                        }
                                    }
                                >
                                    Lưu 
                                </button>
                                <button 
                                    className="button-cancel-type"
                                    onClick={() => {
                                        changeEditingStatus(false);
                                        changeAllDocument();
                                        document.querySelector('.input-document-type').value = "";
                                    }
                                }
                                >
                                    Huỷ
                                </button>
                            </div> 
                            
                        : 
                            <button 
                                className="button-add-type"
                                onClick={() => {
                                    addDocumentType();
                                }}
                            >
                                Thêm 
                            </button>
                    }
                    
                </div>
            </div>
            
        </div>
    );
}

export default DocumentTypeModal;
