import React, { useEffect, useState } from "react";
import './scss/ConcreteDocument.scss';
import {documentActions} from '../../../actions/document.actions';
import { useDispatch, useSelector } from "react-redux";
import { IoReturnUpBack } from "react-icons/io5";


function ConcreteDocument(){
    const dispatch = useDispatch();
    
    const documents = useSelector((state) => {return state.document.documents;}) || [];
    const documentTypes = useSelector((state) => {return state.document.documentType}) || [];
    
    var splitting = window.location.href.split('/');
    console.log("currentID", splitting[splitting.length - 1]);

    var currentID =  splitting[splitting.length - 1];
    const [currentDocument, setCurrentDocument] = useState(null);
    
    const getCurrentDocument = () => {
        console.log(documents.length);
        for(var i = 0 ; i < documents.length; i++){
            console.log(documents[i]._id, currentID);
            if(documents[i]._id == currentID){
                setCurrentDocument(documents[i]);
                console.log("document 1", documents[i]);
                return;
            }
        }

    }

    React.useEffect(async () => {
        await dispatch(documentActions.getAllDocument());
        await dispatch(documentActions.getAllDocumentType());
        const sleep = ms => new Promise(res => setTimeout(res, ms));
        await sleep(4000);
        getCurrentDocument();
    }, []);

    return (
        <div className="document-page-container">
            <div className="document-container">
                <div className="document-body">
                    <div className="back-to-list-document">
                        <IoReturnUpBack size={20} className='back-icon'/>
                        Về trang tài liệu
                    </div>
                    <div className="document-title">
                        Không làm mà đòi có ăn
                    </div>
                    <div className="document-information">
                        <div className="information-row">
                            <div className='document-author'>
                                Tác giả: Nguyễn Công Phi
                            </div>  
                            <div className='document-time'>
                                Ngày đăng: 20/11/2022 (2 ngày trước)
                            </div>
                        </div>
                        <div className="information-row-2">
                            <div className='document-type'>
                                Loại:
                            </div> 
                            <div className="document-type-container">
                                <div className="document-item">Lớp 10</div>
                                <div className="document-item">Lớp 11</div>
                                <div className="document-item">Lớp 12</div>
                            </div>
                        </div>
                    </div>
                    <div className='document-iframe'>
                        <iframe 
                            src="https://drive.google.com/file/d/1u4YIyuLOL2xr_SAf5z2NgiCyvQxOQseR/preview" 
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
