import React, { useEffect, useState } from "react";
import './scss/Document.scss';
import { Button, FormControl, Grid, InputLabel, MenuItem, Select} from '@mui/material';

import Pagination from './components/Pagination';
import DocumentCard from './components/DocumentCard';

import axios from 'axios';
import {documentActions} from '../../../actions/document.actions';
import { useDispatch, useSelector } from "react-redux";


function Document(){
    const dispatch = useDispatch();
    const types = ["Tất cả", "Lớp 10", "Lớp 11", "Lớp 12", "Luyện Thi", "Khác"];
    const [currentTypeSelect, setCurrentType] = useState(0);
    const changeType = (event, newValue) => {
        setCurrentType(newValue);
    };

    const filters = ["Mới nhất", "Cũ nhất", "Xem nhiều nhất", "Xem ít nhất"];
    
    // Xử lý pagination
    const documentItemLimit = 3;
    const [pagePagination, setPagePagination] = useState(0);
    const changePagePagination =  (newValue) => {
        setPagePagination(newValue);
    }

    const itemDisplayIndex =
        useSelector((state) => {
            return state.document.pagination - 1;
        }) || 0;


    React.useEffect(async () => {
        await dispatch(documentActions.getAllDocument());
        console.log("documents.length", documents.length);
        var documentLength = documents.length;
        var numberPage = Math.ceil(documentLength / documentItemLimit);
        if(documentLength % documentItemLimit == 0) numberPage--;
        changePagePagination(numberPage);
    }, []);
    
    const documents =
        useSelector((state) => {
            // console.log({ state });
            return state.document.documents;
        }) || [];

    console.log("documents vip", documents, documents.length);
    useSelector((state) => {
        console.log("all state", { state });
    })

    




    // dispatch(documentActions.changePagination(9))
    // var currentPage =
    //     useSelector((state) => {
    //         console.log("all state", { state });
    //         return state.document.pagination;
    //     }) || 0;
    // console.log("currentPage", currentPage);

    return (
        <div className="document-page-container">
            <div className="document-container">
                <div className="document-body">
                    <div className='document-option-container'>
                        {
                            types.map((type, index) => (
                                <Button 
                                    className= {currentTypeSelect == index ? 'button-option active':'button-option'}
                                    style={{textTransform: 'none'}}
                                    onClick={(e)=> changeType(e,index)}
                                >
                                    {type}
                                </Button>
                            ))
                        }
                    </div>
                    <div className='document-sorting'>
                        <div className='sorting-label'>Sắp xếp theo</div>
                        <select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label="Age"
                            className='sorting-control'
                        >
                            {
                                filters.map((filter, index)=>(
                                    <option className="sorting-item">{filter}</option>
                                ))
                            }
                        </select>
                    </div>
                    <div className="document-list">
                    {
                        documents == null ? (<div>Loading....</div>) :
                        documents.map((document, index) => (
                            (itemDisplayIndex*documentItemLimit <= index && index < itemDisplayIndex*documentItemLimit + documentItemLimit)
                            ? <DocumentCard name={document.name} views={document.views}/> : (null)
                        ))
                    } 
                    </div>
                    <div className='ranking-footer'>
                        <Pagination page={pagePagination}/>
                    </div>
                </div>
            </div>
        </div>
  )
}
export default Document;
