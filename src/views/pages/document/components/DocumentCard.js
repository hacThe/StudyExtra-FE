import React from 'react'
import '../scss/DocumentCard.scss'

import { GrDocumentPdf, GrView } from "react-icons/gr";

const DocumentCard = ({name,views}) => {
  return (
    <div className="card-body">
        <GrDocumentPdf className="document-type"></GrDocumentPdf>
        <span className="document-title">{name}</span>
        <div className="view-container">
            <GrView size={20} className="view-icon"></GrView>
            <div className="view-number">{views}</div>
        </div>
    </div>
  )
}

export default DocumentCard
