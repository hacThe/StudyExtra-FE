import React, {useEffect, useState} from "react";
import { NavLink } from "react-router-dom";
import {Button, Grid} from '@mui/material';
import './scss/AddDocument.scss';
import { IoReturnUpBack } from "react-icons/io5";
import { BiHide } from "react-icons/bi";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import DocumentTypeModal from './DocumentTypeModal.js';
import {documentActions} from '../../../../actions/document.actions.js'


function AddDocument(props) {
    const documentTypes = ["Lớp 10", "Lớp 11", "Lớp 12", "Tất cả"];
    const dispatch = useDispatch();
    const isOpen =
        useSelector((state) => {
            return state.document.documentTypeOpen;
        }) || false;

    const changeModal = () => {
        dispatch(documentActions.changeModalStatus(!isOpen));
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
                            <input type='text' className="text-info"/>
                        </div>
                        <div className="document-info-item">
                            <div className="title">
                                Tác giả
                            </div>
                            <input type='text' className="text-info"/>
                        </div>
                        <div className="document-info-item">
                            <div className="title">
                                Link
                            </div>
                            <input type='text' className="text-info"/>
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
                            
                            <select name="cars" id="cars" className="selection-info">
                                {
                                    documentTypes.map((type)=> {
                                        return (<option value="type">{type}</option>)
                                    })
                                }
                            </select>
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
                                src="https://drive.google.com/file/d/1C33DHPgFjXcivBlWl4HTjv3-gGEauOVN/preview" 
                                width="100%"
                                allow="autoplay"
                                className="iframe-concrete"
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

export default AddDocument;