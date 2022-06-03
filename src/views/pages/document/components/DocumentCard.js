import React from 'react'
import { useNavigate } from "react-router-dom";
import '../scss/DocumentCard.scss'

import { GrDocumentPdf, GrView } from "react-icons/gr";

const DocumentCard = ({name,views,id}) => {
  const navigate = useNavigate();
  return (
    <div 
        className="card-body"
        onClick={() => {
            navigate('/tai-lieu/' + id);
        }}
    >
        <GrDocumentPdf className="document-type"></GrDocumentPdf>
        <span className="document-title-1">{name}</span>
        <div className="view-container">
            <GrView size={20} className="view-icon"></GrView>
            <div className="view-number">{views}</div>
        </div>
    </div>
  )
}

export default DocumentCard
