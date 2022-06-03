import React, { useEffect, useState } from "react";
import "./scss/Document.scss";
import TableManagement from "./components/TableManagement.js";
import { GrDocumentExcel } from "react-icons/gr";
import { documentActions } from "../../../../actions/document.actions.js";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const columnDocs = [
  // {field: , headerName: , width: }
  { field: "stt", headerName: "STT" },
  { field: "name", headerName: "Tên tài liệu", width: 200 },
  { field: "author", headerName: "Tên tác giả", width: 120 },
  { field: "type", headerName: "Phân loại", width: 200 },
  { field: "view", headerName: "Số lượt xem" },
  { field: "time", headerName: "Thời gian", width: 120 },
  { field: "link", headerName: "Link", width: 240 },
  { field: "hide", headerName: "Chế độ xem", width: 240 },
];

const convertStringToReadableDate = (str) => {
  var res = "";
  if (str != null && str.length > 0) {
    str = str.substring(0, 10);
    var dettach = str.split("-");
    res = dettach[2] + "/" + dettach[1] + "/" + dettach[0];
  }
  return res;
};

function DocumentManage(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  var [filter, setFilter] = useState("");
  var changeFilter = (e) => {
    console.log("val input", e.target.value);
    setFilter(e.target.value);
  };

  React.useEffect(async () => {
    await dispatch(documentActions.getAllDocument());
    console.log("documents.length", documents.length);
  }, []);

  const documents =
    useSelector((state) => {
      console.log({ state });
      var doc = [];
      doc.push(...state.document.documents);
      return doc;
    }) || [];

  const convertDocumentToData = (document) => {
    var res = [];
    console.log(document);
    for (var i = 0; i < document.length; i++) {
      var temp = {
        id: document[i]._id,
        stt: i + 1,
        name: document[i].name,
        author: document[i].author,
        type: getTypeName(document[i].typeID),
        view: document[i].views,
        link: document[i].link
          ? document[i].link
          : "https://www.pinterest.com/",
        time: convertStringToReadableDate(document[i].createdAt),
        hide: document[i].isHidden ? "Đang ẩn" : "Đang hiện",
      };
      res.push(temp);
    }
    return res;
  };

  const getTypeName = (typeID) => {
    var res = "";
    for (var j = 0; j < typeID.length; j++) {
      for (var i = 0; i < documentTypes.length; i++) {
        if (documentTypes[i]._id == typeID[j]) {
          res += documentTypes[i].name + ",";
          break;
        }
      }
    }
    if (res.length > 1) {
      res = res.slice(0, -1);
    }
    return res;
  };

  React.useEffect(async () => {
    await dispatch(documentActions.getAllDocumentType());
  }, []);

  const documentTypes =
    useSelector((state) => {
      console.log({ state });
      return state.document.documentType;
    }) || [];

  return (
    <div className="manager-fa-ke-modal document-wrapper">
      <div className="table-container">
        <div className="table-header">
          <div className="heading">
            <div className="header">Danh sách tài liệu</div>
            <div className="export">
              <GrDocumentExcel size={24} />
              <p className="export-title">Xuất Excel</p>
            </div>
          </div>
          <div className="filter-container">
            <p className="filter-label">Nhập bất kỳ để tìm kiếm</p>
            <input
              className="filter-input"
              type="text"
              onChange={(e) => changeFilter(e)}
            ></input>
          </div>
        </div>
        <TableManagement
          columnDocs={columnDocs}
          rowDocs={convertDocumentToData(documents)}
          filter={filter}
        />
        <div className="document-manage">
          <NavLink to="/quan-ly/tai-lieu/them" className="add-document">
            Thêm
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default DocumentManage;
