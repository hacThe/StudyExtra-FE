import React, { useEffect, useState } from "react";
import './scss/ConcreteDocument.scss';
import {documentActions} from '../../../actions/document.actions';
import { useDispatch, useSelector } from "react-redux";
import { IoReturnUpBack } from "react-icons/io5";
import { useNavigate } from "react-router-dom";


function ConcreteDocument(){
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // useSelector((state)=>{
    //     console.log("state", state)
    // })
    const documentTypes = useSelector((state) => {return state.document.documentType}) || [];
    
    var splitting = window.location.href.split('/');
    // console.log("currentID", splitting[splitting.length - 1]);

    var currentID =  splitting[splitting.length - 1];
    const currentDocument = useSelector((state) => {return state.document.currentViewingDoc}) || [];
    // console.log("currentDocument", currentDocument);
    
    React.useEffect(async () => {
        dispatch(documentActions.getAllDocumentType());
        dispatch(documentActions.getDocumentByIDNew(currentID));
        dispatch(documentActions.increasingDocumentView(currentID));
    }, []);

    const convertStringToReadableDate = (str) => {
        var res = "";
        if(str!=null && str.length > 0){
            str = str.substring(0, 10);
            var dettach = str.split('-');
            res = dettach[2] + '/' + dettach[1] + '/' + dettach[0];
        }
        return res;
    }

    const calculateTime = (timeString) => {
        // console.log("timeString", timeString);
        const postTime = new Date(timeString);
        // console.log("calculating time", Math.abs(new Date() - postTime));
        var diff = Math.abs(new Date() - postTime);
        if(diff<1000*60){
            return ("0 phút trước");
        }
        else if(diff<1000*60*60){
            return (Math.floor(diff/1000/60) +" phút trước");
        }
        else if(diff<1000*60*60*24){
            return(Math.floor(diff/1000/60/60) +" giờ trước");
        }
        else if(diff<1000*60*60*24*30) {
            return(Math.floor(diff/1000/60/60/24) +" ngày trước");
        }
        else if(diff<1000*60*60*24*365) {
            return(Math.floor(diff/1000/60/60/24/30) +" tháng trước");
        }
        else{
            return (Math.floor(diff/1000/60/60/24/365) +" năm trước")
        }
    }



    return (
        <div className="document-page-container">
            <div className="document-container">
                <div className="document-body">
                    <div 
                        className="back-to-list-document"
                        onClick = {() => {
                            navigate('/tai-lieu');
                        }}
                    >
                        <IoReturnUpBack size={20} className='back-icon'/>
                        Về trang tài liệu
                    </div>
                    <div className="document-title">
                        {currentDocument.name}
                    </div>
                    <div className="document-information">
                        <div className="information-row">
                            <div className='document-author'>
                                Tác giả: {currentDocument.author}
                            </div>  
                            <div className='document-time'>
                                Ngày đăng: {convertStringToReadableDate(currentDocument.updatedAt)} 
                                ({currentDocument.updatedAt ? calculateTime(currentDocument.updatedAt) : "?"})
                            </div>
                        </div>
                        <div className="information-row-2">
                            <div className='document-type'>
                                Loại:
                            </div> 
                            <div className="document-type-container">
                                {
                                    documentTypes.map((value, index, key) => {
                                        if(currentDocument.typeID && currentDocument.typeID.includes(value._id))
                                        return (
                                            <div className="document-item">{value.name}</div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                    <div className='document-iframe'>
                        <iframe 
                            src={currentDocument.link && currentDocument.link.indexOf('https:')!=-1 ? currentDocument.link : "https://" + "notfound"} 
                            width="100%"
                            allow="autoplay"
                            className="iframe-concrete"
                            id="iframe-document"
                        >    
                        </iframe>
                    </div>
                </div>
            </div>
        </div>
  )
}
export default ConcreteDocument;
