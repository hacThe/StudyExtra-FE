import React, { useEffect, useState } from "react";
import './scss/Document.scss';
import { Button, FormControl, Grid, InputLabel, MenuItem, Select} from '@mui/material';
import DocumentCard from './components/DocumentCard';

import axios from 'axios';
import {documentActions} from '../../../actions/document.actions';
import { useDispatch, useSelector } from "react-redux";
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import { IoIosArrowBack, IoIosArrowForward} from "react-icons/io";


function Document(){
    const dispatch = useDispatch();
    const types = ["Tất cả", "Lớp 10", "Lớp 11", "Lớp 12", "Luyện Thi", "Khác"];
    const [currentTypeSelect, setCurrentType] = useState(0);
    const changeType = (event, newValue) => {
        setCurrentType(newValue);
    };

    const filters = ["Mới nhất", "Cũ nhất", "Xem nhiều nhất", "Xem ít nhất"];

    React.useEffect(async () => {
        await dispatch(documentActions.getAllDocument());
        console.log("documents.length", documents.length);
    }, []);
    
    const documents =
        useSelector((state) => {
            // console.log({ state });
            var doc = [];
            doc.push(...state.document.documents);
            doc.push(...state.document.documents);
            return doc;
        }) || [];

    console.log("documents vip", documents, documents.length);
    useSelector((state) => {
        console.log("all state", { state });
    })


    var maxItem = 10;
    const [page, setPage] = useState(1);
    useEffect(() => {
        setPage(1)
    }, 1)

    const setCurrentPage = (num) => {
        setPage(num)
    }
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
                        documents.length === 0 ? (null) : 
                            documents.map((val,index) => (
                                (index < page * maxItem && index >= (page-1) * maxItem) ? (
                                    <DocumentCard name={val.name} views={val.views}/>
                                ) : (null)
                            ))
                    }
                    </div>
                    <div className='ranking-footer'>
                        <Pagination
                            count={Math.ceil(documents.length/maxItem)}
                            renderItem={(item) => (
                                <PaginationItem
                                    components={{ 
                                        previous: IoIosArrowBack, 
                                        next:  IoIosArrowForward 
                                    }}
                                    {...item}
                                />
                            )}
                            onChange = {(e, page) => {
                                console.log("abc", page);
                                setCurrentPage(page)
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
  )
}
export default Document;
