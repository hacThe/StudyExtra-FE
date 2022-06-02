import React, {useEffect, useState} from "react";
import { NavLink } from "react-router-dom";
import {Button, Grid} from '@mui/material';
import './scss/AddDocument.scss';
import { IoReturnUpBack } from "react-icons/io5";
import { BiHide, BiShow } from "react-icons/bi";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import DocumentTypeModal from './DocumentTypeModal.js';
import {documentActions} from '../../../../actions/document.actions.js'
import { showToast } from '../../../../actions/toast.action';


function AddDocument(props) {
    const dispatch = useDispatch();
    const isOpen =
        useSelector((state) => {
            return state.document.documentTypeOpen;
        }) || false;

    const changeModal = () => {
        dispatch(documentActions.changeModalStatus(!isOpen));
    }

    let isSetDocumentSelection = false;
    const [documentType, setDocumentType] = useState([]);

    const changeIndexValue = (index) => {
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
            console.log({ state });
            return state.document.documentType;
        }) || [];

    React.useEffect(async () => {
        await dispatch(documentActions.getAllDocumentType());
    }, []);

    // const check

    useSelector((state) => {
        // Khi mà thay đổi thì tính lại state các kiểu
        if(state.document.documentType.length != documentType.length){
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
    
    const getAllSelectedTypeID = () => {
        var res = [];
        for(var i = 0 ; i < documentType.length; i++){
            if(documentType[i].selected == true){
                res.push(documentType[i].id)
            }
        }
        return res;
    }

    const changeLink = (e) => {
        if(e.target.value.indexOf("https://") == -1){
            return;
        }
        document.querySelector('#iframe-document').setAttribute('src',e.target.value)
    }

    const addDocument = () => {
        // Check các điều kiện nhập
        if(document.querySelector('#document-title').value.length == 0){
            dispatch(showToast("fail","Bạn phải nhập thông tin tên tài liệu"));
            return;
        }
        else if(document.querySelector('#document-author').value.length == 0){
            dispatch(showToast("fail","Bạn phải nhập thông tin tên tác giả"));
            return;
        }
        else if(document.querySelector('#document-link').value.length == 0){
            dispatch(showToast("fail","Bạn phải nhập thông tin link tài liệu"));
            return;
        }
        const data = {
            name: document.querySelector('#document-title').value,
            typeID: getAllSelectedTypeID(),
            author: document.querySelector('#document-author').value,
            views: 0,
            link: document.querySelector('#document-link').value,
            isHidden: isHidden
        }
        dispatch(documentActions.addNewDocument(data));
        document.querySelector('.back-to-manage').click();
    }
    
    const [isHidden, setIsHidden] = useState(false);
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
                            <input type='text' className="text-info" id="document-title"/>
                        </div>
                        <div className="document-info-item">
                            <div className="title">
                                Tác giả
                            </div>
                            <input type='text' className="text-info" id="document-author"/>
                        </div>
                        <div className="document-info-item">
                            <div className="title">
                                Link
                            </div>
                            <input type='text' className="text-info" onChange={(e)=> {
                                    console.log("Đổi chi vậy", e.target.value);
                                    changeLink(e);
                                }}
                                id="document-link"
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
                                    {isHidden ? <BiShow size={24}/> :<BiHide size={24}/>}
                                </div>
                                <div 
                                    className={isHidden ? 'label' : 'label hidden'}
                                    onClick={()=>{
                                        setIsHidden(!isHidden);
                                    }}
                                >
                                    {isHidden ? <>Hiện tài liệu</> :<>Ẩn tài liệu</>}
                                </div>
                            </div>
                            <div className="manage-item">
                                <div className="icon">
                                    <MdOutlineDeleteOutline size={24}/>
                                </div>
                                <div 
                                    className='label'
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
                                className='manage-button add'
                                onClick = {() => {
                                    addDocument();
                                }}
                            >
                                Thêm
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

export default AddDocument;