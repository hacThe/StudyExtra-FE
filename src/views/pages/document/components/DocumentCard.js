import React from "react";
import { useNavigate } from "react-router-dom";
import "../scss/DocumentCard.scss";

import { GrFormView } from "react-icons/gr";
import { BsFileEarmarkPdf } from "react-icons/bs";

const DocumentCard = ({ name, views, id, author }) => {
  const navigate = useNavigate();
  return (
    <div
      className="card-body"
      onClick={() => {
        navigate("/tai-lieu/" + id);
      }}
    >
      <BsFileEarmarkPdf
        color="red"
        size={30}
        className="document-type"
      ></BsFileEarmarkPdf>
      <div className="info-container">
        <p className="document-title-1">{name}</p>
        <p className="document-author">{author}</p>
      </div>
      <div className="view-container">
        <GrFormView color="grey" size={20} className="view-icon"></GrFormView>
        <div className="view-number">{views}</div>
      </div>
    </div>
  );
};

export default DocumentCard;
