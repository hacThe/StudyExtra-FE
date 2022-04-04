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

    // const [documents, setDocuments] = useState([]);
    // useEffect(async () => {
    //     async function fetchData() {
    //     await axios.get(`http://localhost:5000/api/document/`)
    //         .then(res => {
    //             setDocuments(res.data.data);
    //             console.log("document", documents);
    //         })
    //         .catch( (err) => {
    //             console.log("err", err)
    //         })
    //     }
    //     fetchData();
    // }, [])

    const documents =
        useSelector((state) => {
            console.log({ state });
            return state.document.documents;
        }) || [];

    console.log("documents vip", documents);

    useSelector((state) => {
        console.log("all state", { state });
    })

    React.useEffect(async () => {
        dispatch(documentActions.getAllDocument());
    }, []);


    
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
                        <Button className='button-option' style={{textTransform: 'none'}}>Tất cả</Button>
                        <Button className='button-option active' style={{textTransform: 'none'}}>Lớp 11</Button>
                        <Button className='button-option' style={{textTransform: 'none'}}>Lớp 10</Button>
                        <Button className='button-option' style={{textTransform: 'none'}}>Lớp 12</Button>
                        <Button className='button-option' style={{textTransform: 'none'}}>Luyện thi</Button>
                        <Button className='button-option' style={{textTransform: 'none'}}>Khác</Button>
                    </div>
                    <div className='document-sorting'>
                        <div className='sorting-label'>Sắp xếp theo</div>
                        <select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label="Age"
                            className='sorting-control'
                        >
                            <option className="sorting-item">Mới nhất</option>
                            <option className="sorting-item">Cũ nhất</option>
                            <option className="sorting-item">Xem nhiều nhất</option>
                        </select>
                    </div>
                    <div className="document-list">
                    {
                        documents == null ? (<div>Loading....</div>) :
                        documents.map((document) => (
                            <DocumentCard name={document.name} views={document.views}/>
                        ))
                    } 
                    </div>
                    <div className='ranking-footer'>
                        <Pagination page={3} />
                    </div>
                </div>
            </div>
        </div>
  )
}
export default Document;
