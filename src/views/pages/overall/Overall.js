import React, { useState } from "react";
import "./scss/Overall.scss";

import TableManageMent from "./components/TableManagement";
import { AiOutlineExport } from "react-icons/ai";

const columnDocs = [
  // {field: , headerName: , width: }
  { field: "stt", headerName: "STT" },
  { field: "name", headerName: "Tên tài liệu", width: 300 },
  { field: "type", headerName: "Phân loại" },
  { field: "view", headerName: "Số lượt xem" },
  { field: "time", headerName: "Thời gian" },
  { field: "link", headerName: "Link" },
];

const rowDocs = [
  {
    id: 1,
    stt: 1,
    name: "Cách không làm mã vẫn có ăn",
    type: "Lớp 120",
    view: 1250,
    time: "15/12/2001",
    link: "bac.com",
  },
  {
    id: 2,
    stt: 2,
    name: "Cách không làm mã vẫn có ăn",
    type: "Lớp 12",
    view: 1250,
    time: "15/12/2001",
    link: "bac.com",
  },
  {
    id: 3,
    stt: 3,
    name: "Cách không làm mã vẫn có ăn hihi",
    type: "Lớp 12",
    view: 1250,
    time: "15/12/2001",
    link: "bac.com",
  },
  {
    id: 4,
    stt: 4,
    name: "Cách không làm mà vẫn có ăn",
    type: "Lớp 12",
    view: 1250,
    time: "15/12/2001",
    link: "bac.com",
  },
  {
    id: 5,
    stt: 5,
    name: "Cách không làm mã vẫn có ăn",
    type: "Lớp 12",
    view: 1250,
    time: "15/12/2001",
    link: "bac.com",
  },
  {
    id: 6,
    stt: 6,
    name: "Cách không làm mã vẫn có ăn",
    type: "Lớp 12",
    view: 1250,
    time: "15/12/2001",
    link: "bac.com",
  },
  {
    id: 7,
    stt: 7,
    name: "Cách không làm mã vẫn có ăn",
    type: "Lớp 12",
    view: 1250,
    time: "15/12/2001",
    link: "bac.com",
  },
  {
    id: 8,
    stt: 8,
    name: "Cách không làm mã vẫn có ăn",
    type: "Lớp 12",
    view: 1250,
    time: "15/12/2001",
    link: "bac.com",
  },
  {
    id: 9,
    stt: 9,
    name: "Cách không làm mã vẫn có ăn",
    type: "Lớp 12",
    view: 1250,
    time: "15/12/2001",
    link: "bac.com",
  },
  {
    id: 10,
    stt: 10,
    name: "Cách không làm mã vẫn có ăn",
    type: "Lớp 12",
    view: 1250,
    time: "15/12/2001",
    link: "bac.com",
  },
  {
    id: 11,
    stt: 11,
    name: "Cách không làm mã vẫn có ăn",
    type: "Lớp 12",
    view: 1250,
    time: "15/12/2001",
    link: "bac.com",
  },
  {
    id: 12,
    stt: 12,
    name: "Cách không làm mã vẫn có ăn",
    type: "Lớp 12",
    view: 1250,
    time: "15/12/2001",
    link: "bac.com",
  },
  {
    id: 13,
    stt: 13,
    name: "Cách không làm mã vẫn có ăn",
    type: "Lớp 12",
    view: 1250,
    time: "15/12/2001",
    link: "bac.com",
  },
  {
    id: 14,
    stt: 14,
    name: "Cách không làm mã vẫn có ăn",
    type: "Lớp 12",
    view: 1250,
    time: "15/12/2001",
    link: "bac.com",
  },
  {
    id: 15,
    stt: 15,
    name: "Cách không làm mã vẫn có ăn",
    type: "Lớp 12",
    view: 1250,
    time: "15/12/2001",
    link: "bac.com",
  },
  {
    id: 16,
    stt: 16,
    name: "Cách không làm mã vẫn có ăn",
    type: "Lớp 12",
    view: 1250,
    time: "15/12/2001",
    link: "bac.com",
  },
  {
    id: 17,
    stt: 17,
    name: "Cách không làm mã vẫn có ăn",
    type: "Lớp 12",
    view: 1250,
    time: "15/12/2001",
    link: "bac.com",
  },
  {
    id: 18,
    stt: 18,
    name: "Cách không làm mã vẫn có ăn",
    type: "Lớp 12",
    view: 1250,
    time: "15/12/2001",
    link: "bac.com",
  },
  {
    id: 19,
    stt: 19,
    name: "Cách không làm mã vẫn có ăn",
    type: "Lớp 12",
    view: 1250,
    time: "15/12/2001",
    link: "bac.com",
  },
];

const Overall = () => {
  var [filter, setFilter] = useState("hihi");
  var changeFilter = (e) => {
    setFilter(e.target.value);
  };
  return (
    <div className="overall-wapper">
      <div className="overall-container">
        <div className="title">Overall</div>
        <div className="table-container">
          <div className="table-header">
            <div className="heading">
              <div className="header">Danh sách tài liệu</div>
              <div className="export">
                <AiOutlineExport size={18} />
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
          <TableManageMent
            columnDocs={columnDocs}
            rowDocs={rowDocs}
            filter={filter}
          />
        </div>
      </div>
    </div>
  );
};

export default Overall;
