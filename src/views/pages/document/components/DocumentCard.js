import React from 'react'
import '../scss/DocumentCard.scss'

import { GrDocumentPdf, GrView } from "react-icons/gr";

const DocumentCard = () => {
  return (
    <div className="card-body">
        <GrDocumentPdf className="document-type"></GrDocumentPdf>
        <span className="document-title">5 ĐỀ THI THỬ MỚI NHẤT CỦA THẦY VŨ NGỌC ANH</span>
        <div className="view-container">
            <GrView size={20} className="view-icon"></GrView>
            <div className="view-number">165</div>
        </div>
    </div>
  )
}

export default DocumentCard
