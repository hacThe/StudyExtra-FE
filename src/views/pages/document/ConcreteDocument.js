import React, { useEffect, useState } from "react";
import './scss/ConcreteDocument.scss';
import {documentActions} from '../../../actions/document.actions';
import { useDispatch, useSelector } from "react-redux";
import { IoReturnUpBack } from "react-icons/io5";


function ConcreteDocument(){
    const dispatch = useDispatch();
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
            return state.document.documents;
        }) || [];



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
