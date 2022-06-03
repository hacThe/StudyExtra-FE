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

    const filters = ["Cũ nhất", "Mới nhất", "Xem nhiều nhất", "Xem ít nhất"];
    const [currentFilterIndex, changeCurrentFilterIndex] = useState(0);



    React.useEffect(async () => {
        await dispatch(documentActions.getAllDocument());
        console.log("documents.length", documents.length);
    }, []);
    
    
    var documentWithFilter = [];
    const documents =
        useSelector((state) => {
            documentWithFilter = state.document.documents;
            // documentWithFilter.sort( 
                
            //     function(a, b){
            //         console.log("gọi lần n");
            //         return new Date(b.createdAt) - new Date(a.createdAt);
            //     }
            // )
            return state.document.documents;
        }) || [];
    // console.log("documentWithFilter", documentWithFilter);

    

    // console.log("documents vip", documents, documents.length);
    // useSelector((state) => {
    //     console.log("all state", { state });
    // })


    var maxItem = 10;
    const [page, setPage] = useState(1);
    useEffect(() => {
        setPage(1)
    }, 1)

    const setCurrentPage = (num) => {
        setPage(num)
    }


    const documentTypes =
        useSelector((state) => {
            return [
                {
                    _id: 'abc',
                    name: "Tất cả",
                },
                ...state.document.documentType,
            ];
        }) || [];

    React.useEffect(async () => {
        await dispatch(documentActions.getAllDocumentType());
    }, []);


    return (
        <div className="document-page-container">
            <div className="document-container">
                <div className="document-body">
                    <div className='document-option-container'>
                        {
                            documentTypes.map((type, index) => (
                                <Button 
                                    className= {currentTypeSelect == index ? 'button-option active':'button-option'}
                                    style={{textTransform: 'none'}}
                                    onClick={(e)=> changeType(e,index)}
                                >
                                    {type.name}
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
                            onChange={(e)=>{
                                console.log("a",e.target.value);
                                switch (e.target.value) {
                                    case "Mới nhất":
                                        console.log("documentWithFilter before sort", documentWithFilter);
                                        documentWithFilter.sort( 
                                            function(a, b){
                                                return new Date(b.createdAt) - new Date(a.createdAt);
                                            }
                                        )
                                        console.log("documentWithFilter after sort", documentWithFilter);
                                        break;
                                    case "Cũ nhất":
                                        console.log("documentWithFilter before sort", documentWithFilter);
                                        documentWithFilter.sort( 
                                            function(a, b){
                                                // console.log('date', new Date(b.createdAt) - new Date(a.createdAt))
                                                return new Date(a.createdAt) - new Date(b.createdAt);
                                            }
                                        )
                                        console.log("documentWithFilter after sort", documentWithFilter);
                                        break;  
                                    case "Xem nhiều nhất": 
                                        documentWithFilter.sort( 
                                            function(a, b){
                                                // console.log('date', new Date(b.createdAt) - new Date(a.createdAt))
                                                return new Date(b.views) - new Date(a.views);
                                            }
                                        )
                                        break;
                                    case "Xem ít nhất":
                                        documentWithFilter.sort( 
                                            function(a, b){
                                                // console.log('date', new Date(b.createdAt) - new Date(a.createdAt))
                                                return new Date(a.views) - new Date(b.views);
                                            }
                                        )
                                        break;      
                                    default:
                                        break;
                                }
                                changeCurrentFilterIndex(filters.indexOf(e.target.value));
                                
                            }}
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
                                (index < page * maxItem && index >= (page-1) * maxItem)
                                ?
                                    val.isHidden ? (null) :
                                    (typeof documentTypes[currentTypeSelect]!='undefined')&&documentTypes[currentTypeSelect]._id=='abc' ?
                                        (<DocumentCard name={val.name} views={val.views} id={val._id}/>)  
                                    :
                                        (val.typeID.includes(documentTypes[currentTypeSelect]._id) 
                                            ?(<DocumentCard name={val.name} views={val.views} id={val._id}/>)
                                            :(null)
                                        )
                                :
                                    (null)
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
