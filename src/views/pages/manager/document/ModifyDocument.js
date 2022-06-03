import React, {useEffect, useState, useRef} from "react";
import { NavLink } from "react-router-dom";
import {Button, Grid} from '@mui/material';
import './scss/ModifyDocument.scss';
import { IoReturnUpBack } from "react-icons/io5";
import { BiHide,BiShow } from "react-icons/bi";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import DocumentTypeModal from './DocumentTypeModal.js';
import {documentActions} from '../../../../actions/document.actions.js'
import {useParams} from 'react-router-dom';
import { showToast } from '../../../../actions/toast.action';

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
        if(!isValidation.typeID){
            for(var i = 0; i < val1.typeID.length; i++){
                res.push(val1.typeID[i]);
            }
        }
        else {
            for(var i = 0 ; i < documentType.length; i++){
                if(documentType[i].selected == true){
                    res.push(documentType[i]._id)
                }
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
        isHidden: currentDocumentData.isHidden
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
        isHidden: false,
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
        id: currentDocumentData._id,
        name: currentDocumentData.name,
        author: currentDocumentData.author,
        link: currentDocumentData.link,
        typeID: currentDocumentData.typeID,
        isHidden: currentDocumentData.isHidden,
    } 
    console.log("val1",val1, currentDocumentData);
    // document.querySelector('#document-title').defaultValue = currentDocumentData.name;

    const [isLoadInitType, setLoadInit] = useState(false);
    const initType = () => {
        console.log("Tạo cái list ban đầu");
        console.log("documentTypes", documentTypes);
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
    }

    const loadInitialType = (ids) => {
        if(!isLoadInitType){
            var documentTypeInit = [];
            for(var i = 0; i < documentTypes.length; i++){
                documentTypeInit.push({
                    ...documentTypes[i],
                    selected: false,
                });
            }
            ids.forEach((id, index) => {
                for(var i = 0; i < documentTypes.length; i++){
                    if(documentTypes[i]._id == id){
                        documentTypeInit[index].selected = true;
                        break;
                    }
                }
            });
            setDocumentType(documentTypeInit);
            setLoadInit(true);
        }
    }

    const [isLoadLink, setLoadLink] = useState(false);

    useEffect(()=>{
        // initType();
        if(!isLoadLink){
            changeLink(val1.link);
            setLoadLink(true);
        }
            
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

    const findinVal1 = (id) => {
        for(var i = 0; i < val1.typeID.length; i++){
            if(val1.typeID[i] == id){
                console.log(true);
                return true;
            }
        }
        console.log(false, id);
        return false;
    }

    loadInitialType(currentDocumentData.typeID);

    const editDocument = async() => {
        var checkValidation = false;
        for(var i = 0; i < Object.values(isValidation).length; i++){
            if(Object.values(isValidation)[i] == true){
                checkValidation = true;
            }
        }
        if(checkValidation == false) {
            dispatch(showToast("fail","Bạn chưa thay đổi trường nào, không thể lưu!"));
            return;
        }
        var name = isValidation.name ? val.name : val1.name;
        var author = isValidation.author ? val.author : val1.author;
        var link = isValidation.link ? val.link : val1.link;
        if(name.length == 0){
            dispatch(showToast("fail","Bạn phải nhập thông tin tên tài liệu"));
            return;
        }
        else if(author.length == 0){
            dispatch(showToast("fail","Bạn phải nhập thông tin tên tác giả"));
            return;
        }
        else if(link.length == 0){
            dispatch(showToast("fail","Bạn phải nhập thông tin link tài liệu"));
            return;
        }

        const data = {
            _id: val1.id,
            name: isValidation.name ? val.name : val1.name,
            typeID: isValidation.typeID ? getAllSelectedTypeID() : val1.typeID,
            link: isValidation.link ? val.link : val1.link,
            author: isValidation.author ? val.author : val1.author,
            isHidden: isValidation.isHidden ? val.isHidden : val1.isHidden,
        }
        console.log("data", data);
        await dispatch(documentActions.editDocument(data));
        dispatch(showToast("success","Chỉnh sửa tài liệu thành công!"));
        document.querySelector('.back-to-manage').click();
    }

    const cancel = () => { 
        document.querySelector('.back-to-manage').click();
    }

    const deleteDocument = () => {
        console.log("val1.id", val1.id);
        dispatch(documentActions.deleteMultiDocuments({data:[val1.id]}));
        document.querySelector('.back-to-manage').click();
    }


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
                                                    isValidation.typeID 
                                                    ?(index < documentType.length &&
                                                        typeof documentType[index].selected != 'undefined' && 
                                                        documentType[index].selected
                                                        ? 'document-type-item selected' 
                                                        :  'document-type-item') 
                                                    : (findinVal1(documentTypes[index]._id)
                                                        ? 'document-type-item selected' 
                                                        :  'document-type-item') 
                                                    }
                                                onClick={(e) => {
                                                    if(!isValidation.typeID){
                                                        var documentTypeTemp = documentType;
                                                        for( var j = 0; j < documentTypeTemp.length; j++){
                                                            documentTypeTemp[j].selected = false;
                                                        } 
                                                        for(var i = 0; i < val1.typeID.length; i++){
                                                            for( var j = 0; j < documentTypeTemp.length; j++){
                                                                console.log(documentTypeTemp[j]._id, val1.typeID[i]);
                                                                if(documentTypeTemp[j]._id == val1.typeID[i]){
                                                                    documentTypeTemp[j].selected = true;
                                                                    break;
                                                                }
                                                            } 
                                                        }
                                                        console.log("documentTypeTemp", documentTypeTemp)
                                                        setDocumentType(documentTypeTemp);
                                                    }
                                                    changeIndexValue(index); 
                                                    changeSpecValidation({typeID: true}) 
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
                                    {
                                        isValidation.isHidden 
                                            ? !val.isHidden ? <BiHide size={24}/> : <BiShow size={24}/>
                                            : !val1.isHidden ? <BiHide size={24}/> : <BiShow size={24}/>   
                                    }
                                </div>
                                <div 
                                    className=
                                        {
                                            isValidation.isHidden 
                                                ? val.isHidden ? 'label' : 'label hidden'
                                                : val1.isHidden ? 'label' : 'label hidden'    
                                        }
                                    onClick={()=> {
                                        if(!isValidation.isHidden){
                                            changeSpecVal({isHidden: !val1.isHidden});
                                            changeSpecValidation({isHidden: true});
                                        }
                                        else {
                                            changeSpecVal({isHidden: !val.isHidden});
                                        }
                                    }}
                                >
                                    {
                                        isValidation.isHidden 
                                            ? val.isHidden ? <>Hiện tài liệu</> : <>Ẩn tài liệu</>
                                            : val1.isHidden ? <>Hiện tài liệu</> : <>Ẩn tài liệu</>    
                                    }
                                </div>
                            </div>
                            <div className="manage-item">
                                <div className="icon">
                                    <MdOutlineDeleteOutline size={24}/>
                                </div>
                                <div 
                                    className='label'
                                    onClick = {() => {
                                        deleteDocument();
                                    }}
                                >
                                    Xoá tài liệu
                                </div>
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
                                onClick = {()=>{
                                    cancel();
                                }}
                            >
                                Huỷ
                            </Button>
                            <Button 
                                variant="contained"
                                className='manage-button'
                                onClick={() => {
                                    editDocument();
                                }}
                            >
                                Lưu
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