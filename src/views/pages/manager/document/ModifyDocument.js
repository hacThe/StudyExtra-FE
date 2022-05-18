import React, {useEffect, useState, useRef} from "react";
import { NavLink } from "react-router-dom";
import {Button, Grid} from '@mui/material';
import './scss/ModifyDocument.scss';
import { IoReturnUpBack } from "react-icons/io5";
import { BiHide } from "react-icons/bi";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import DocumentTypeModal from './DocumentTypeModal.js';
import {documentActions} from '../../../../actions/document.actions.js'
import {useParams} from 'react-router-dom';

function ModifyDocument(props) {
    const dispatch = useDispatch();
    const isOpen =
        useSelector((state) => {
            return state.document.documentTypeOpen;
        }) || false;

    const changeModal = () => {
        dispatch(documentActions.changeModalStatus(!isOpen));
    }

    const [isReload, setIsReload] = useState(false);
    const [documentType, setDocumentType] = useState([]);

    const changeIndexValue = (index) => {
        console.log("changeIndexValue", index);
        var newVal = [];
        for(let i = 0 ; i < documentType.length; i++){
            if(i==index)
            {
                newVal.push({
                    ...documentType[i],
                    selected: !documentType[i].selected,
                })
            }
            else {
                newVal.push(documentType[i]);
            }
        }
        setDocumentType(newVal);
    }
    const documentTypes =
        useSelector((state) => {
            // console.log({ state });
            return state.document.documentType;
        }) || [];

    React.useEffect(async () => {
        await dispatch(documentActions.getAllDocumentType());
    }, []);

    // const check

    
    
    const getAllSelectedTypeID = () => {
        var res = [];
        for(var i = 0 ; i < documentType.length; i++){
            if(documentType[i].selected == true){
                res.push(documentType[i].id)
            }
        }
        return res;
    }

    const changeLink = (value) => {
        if(typeof value == 'undefined'){
            document.querySelector('#iframe-document').setAttribute('src',"https://acb")
            return;
        }
        if(value.indexOf("https://") == -1){
            document.querySelector('#iframe-document').setAttribute('src',`https://${value}`)
            return;
        }
        document.querySelector('#iframe-document').setAttribute('src',value)
    }
    
    const currentDocumentData = useSelector((state) => {
        return state.document.currentEditingDoc;
    }) || [];
    
    var refList = {
        name: useRef(null),
    }
        
    const [val, setVal] = useState({
        name: currentDocumentData.name,
        author: currentDocumentData.author,
        link: currentDocumentData.link,
        typeID: currentDocumentData.typeID,
    })

    // console.log("val",val)
    const changeSpecVal = (value) => {
        var currentVal = val;
        currentVal = {
            ...currentVal,
            ...value,
        }
        setVal(currentVal);
    }

    const [isValidation, setValidation]= useState({
        name: false,
        author: false,
        link: false,
        typeID: false,
    });

    const changeSpecValidation = (value) => {
        var currentVal = isValidation;
        currentVal = {
            ...currentVal,
            ...value,
        }
        setValidation(currentVal);
    }

    var val1 = {
        name: currentDocumentData.name,
        author: currentDocumentData.author,
        link: currentDocumentData.link,
        typeID: currentDocumentData.typeID,
    } 
    // console.log("val1",val1);
    // document.querySelector('#document-title').defaultValue = currentDocumentData.name;

    const [isLoadInitType, setLoadInit] = useState(false);
    const loadInitialType = (ids) => {
        if(!isLoadInitType){
            if(documentType.length == 0){
                var documentTypeInit = [];
                for(var i = 0; i < documentTypes.length; i++){
                    documentTypeInit.push({
                        ...documentTypes,
                        selected: false,
                    });
                }
                setDocumentType(documentTypeInit);
            }
            ids.forEach((id, index) => {
                for(var i = 0; i < documentTypes.length; i++){
                    console.log("documentTypes[i]", documentTypes[i],"id", id);
                    if(documentTypes[i]._id == id){
                        console.log("Có bằng rồi")
                        changeIndexValue(index);
                        console.log("documentType",documentType)
                        break;
                    }
                }
            });
            setLoadInit(true);
        }
        
    }
    useEffect(()=>{
        changeLink(val1.link);
        console.log("currentDocumentData.typeID", currentDocumentData.typeID);
        loadInitialType();
    })
    useSelector((state) => {
        // Khi mà thay đổi thì tính lại state các kiểu
        if(!isLoadInitType || state.document.documentType.length != documentType.length){
            if(documentType.length == 0){
                var newVal = []; 
                for(var i  = 0 ; i < state.document.documentType.length; i++){
                    newVal.push({
                        id: state.document.documentType[i]._id,
                        name: state.document.documentType[i].name,
                        selected: false,
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
                                selected: documentType[j].selected,
                            })
                            isFound = true;
                            break;
                        }
                    }
                    if(!isFound){
                        newVal.push({
                            id: state.document.documentType[i]._id,
                            name: state.document.documentType[i].name,
                            selected: false,
                        })
                    }

                }
                setDocumentType(newVal)
            }
        }
        return ;
    })
    loadInitialType(currentDocumentData.typeID);
    return (
        <div>
            <div className="manager-fa-ke-modal add-document-wrapper">
                
                <Grid container className="add-document-container">
                    
                    <Grid item xs={12} md={5} lg={5} className='document-info-container'>
                        <NavLink to='/quan-ly/tai-lieu' className="back-to-manage">
                            <div className='icon'>
                                <IoReturnUpBack size={20}/>
                            </div>
                            <div className='title'>
                                Danh sách tài liệu
                            </div>
                        </NavLink>
                        <div className="document-info-item">
                            <div className="title">
                                Tên tài liệu
                            </div>
                            <input 
                                type='text' 
                                className="text-info" 
                                id="document-title"
                                value={isValidation.name ? val.name : val1.name}
                                onChange={(e)=>{
                                    changeSpecValidation({name: true})
                                    changeSpecVal({name: e.target.value})
                                    console.log("isValidation",isValidation);
                                }}
                            />
                        </div>
                        <div className="document-info-item">
                            <div className="title">
                                Tác giả
                            </div>
                            <input 
                                type='text' 
                                className="text-info" 
                                id="document-author"
                                value={isValidation.author ? val.author : val1.author}
                                onChange={(e)=>{
                                    changeSpecValidation({author: true})
                                    changeSpecVal({author: e.target.value})
                                    // console.log("isValidation",isValidation);

                                }}
                            />
                        </div>
                        <div className="document-info-item">
                            <div className="title">
                                Link
                            </div>
                            <input 
                                type='text' 
                                className="text-info" 
                                id="document-link"
                                value={isValidation.link ? val.link : val1.link}
                                onChange={(e)=>{
                                    changeSpecValidation({link: true});
                                    changeSpecVal({link: e.target.value});
                                    changeLink(e.target.value);
                                    // console.log("isValidation",isValidation);

                                }}
                            />
                        </div>
                        <div className='document-info-item'>
                            <div className='heading-container'>
                                <div className="title">
                                    Doanh mục
                                </div>
                                <span 
                                    className='document-type-manage'
                                    onClick={() => changeModal()}
                                >
                                    Quản lý doanh mục
                                </span>
                            </div>
                            <div className='document-select-type-container'>
                                {
                                    documentTypes.map((item, index)=>{
                                        return (
                                            <div 
                                                className={
                                                    index < documentType.length &&
                                                    typeof documentType[index].selected != 'undefined' && 
                                                    documentType[index].selected
                                                    ? 'document-type-item selected' 
                                                    :  'document-type-item' }
                                                onClick={(e) => {
                                                    changeIndexValue(index);  
                                                }}
                                            >
                                                {item.name}
                                            </div>
                                        );
                                    })
                                }
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={7} lg={7} className='document-frame-container'>
                        <div className='document-manage'>
                            <div className="manage-item">
                                <div className="icon">
                                    <BiHide size={24}/>
                                </div>
                                <div className='label'>Ẩn tài liệu</div>
                            </div>
                            <div className="manage-item">
                                <div className="icon">
                                    <MdOutlineDeleteOutline size={24}/>
                                </div>
                                <div className='label'>Xoá tài liệu</div>
                            </div>
                        </div>
                        <div className='iframe-container'>
                            <iframe 
                                src="" 
                                width="100%"
                                allow="autoplay"
                                className="iframe-concrete"
                                id="iframe-document"
                            >    
                            </iframe>
                        </div>
                        <div className="iframe-manage">
                        <Button 
                                variant="contained"
                                className='manage-button cancel'
                            >
                                Huỷ
                            </Button>
                            <Button 
                                variant="contained"
                                className='manage-button'
                            >
                                Xoá
                            </Button>
                        </div>
                    </Grid>
                </Grid>
            </div>
            {
                !isOpen ? null : <DocumentTypeModal/> 
            } 
        </div>
        
    );
}

export default ModifyDocument;