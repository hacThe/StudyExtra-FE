import React, { useState } from "react";
import "./ExamListManager.scss";

import { GrDocumentExcel } from "react-icons/gr";
import DataTableComponent from "../../../../components/DataTableComponent";
import LeadingIconButton from "../../../../components/LeadingIconButton";
import { useNavigate } from "react-router-dom";

const columnDocs = [
  // {field: , headerName: , width: }
  { field: "stt", headerName: "STT" },
  { field: "name", headerName: "Tên bài thi", width: 300, flex: 1 },
  { field: "category", headerName: "Phân loại" },
  { field: "participants", headerName: "Số lượt tham gia", minWidth: 200 },
  { field: "createAt", headerName: "Ngày tạo" },
  { field: "typeOfUser", headerName: "Đối tượng", flex: 1 },
];

const RawrowDocs = [
  {
    id: 1,
    name: "Tên của bài thi nè nha",
    category: "Lớp 12",
    participants: 403,
    createAt: "11/12/2022",
    typeOfUser:
      "Học viên khóa học: Làm giàu không khó, chuyện khó mình bỏ qua, chuyện si đa mình giành lấy, chuyện ấy thì mình chưa làm bao giờ :))",
  },
  {
    id: 1,
    name: "Tên của bài thi nè nha",
    category: "Lớp 12",
    participants: 403,
    createAt: "11/12/2022",
    typeOfUser: "Tất cả",
  },
  {
    id: 1,
    name: "Tên của bài thi nè nha",
    category: "Lớp 12",
    participants: 403,
    createAt: "11/12/2022",
    typeOfUser: "Tất cả",
  },
  {
    id: 1,
    name: "Tên của bài thi nè nha",
    category: "Lớp 12",
    participants: 403,
    createAt: "11/12/2022",
    typeOfUser: "Tất cả",
  },
  {
    id: 1,
    name: "Tên của bài thi nè nha",
    category: "Lớp 12",
    participants: 403,
    createAt: "11/12/2022",
    typeOfUser: "Tất cả",
  },
  {
    id: 1,
    name: "Tên của bài thi nè nha",
    category: "Lớp 12",
    participants: 403,
    createAt: "11/12/2022",
    typeOfUser: "Tất cả",
  },
  {
    id: 1,
    name: "Tên của bài thi nè nha",
    category: "Lớp 12",
    participants: 403,
    createAt: "11/12/2022",
    typeOfUser: "Tất cả",
  },
  {
    id: 1,
    name: "Tên của bài thi nè nha",
    category: "Lớp 12",
    participants: 403,
    createAt: "11/12/2022",
    typeOfUser: "Tất cả",
  },
  {
    id: 1,
    name: "Tên của bài thi nè nha",
    category: "Lớp 12",
    participants: 403,
    createAt: "11/12/2022",
    typeOfUser: "Tất cả",
  },
  {
    id: 1,
    name: "Tên của bài thi nè nha",
    category: "Lớp 12",
    participants: 403,
    createAt: "11/12/2022",
    typeOfUser: "Tất cả",
  },
  {
    id: 1,
    name: "Tên của bài thi nè nha",
    category: "Lớp 12",
    participants: 403,
    createAt: "11/12/2022",
    typeOfUser: "Tất cả",
  },
  {
    id: 1,
    name: "Tên của bài thi nè nha",
    category: "Lớp 12",
    participants: 403,
    createAt: "11/12/2022",
    typeOfUser: "Tất cả",
  },
  {
    id: 1,
    name: "Tên của bài thi nè nha",
    category: "Lớp 12",
    participants: 403,
    createAt: "11/12/2022",
    typeOfUser: "Tất cả",
  },
  {
    id: 1,
    name: "Tên của bài thi nè nha",
    category: "Lớp 12",
    participants: 403,
    createAt: "11/12/2022",
    typeOfUser: "Tất cả",
  },
  {
    id: 1,
    name: "Tên của bài thi nè nha",
    category: "Lớp 12",
    participants: 403,
    createAt: "11/12/2022",
    typeOfUser: "Tất cả",
  },
  {
    id: 1,
    name: "Tên của bài thi nè nha",
    category: "Lớp 12",
    participants: 403,
    createAt: "11/12/2022",
    typeOfUser: "Tất cả",
  },
];

const rowDocs = RawrowDocs.map((row, index) => {
  row.stt = index + 1;
  row.id = index;
  return row;
});

const ExamListManager = () => {
  const navigate = useNavigate();
  var [filter, setFilter] = useState("");
  var changeFilter = (e) => {
    setFilter(e.target.value);
  };
  return (
    <div className=" manager-fa-ke-modal ExamListManager-wapper">
      <span className="se-btn">Thêm bài thi</span>
      <div className="ExamListManager-container">
        <div className="title">Quản lý bài thi</div>
        <div className="data-table-container">
          <div className="table-header">
            <div className="heading">
              <div className="header">Danh sách các bài thi</div>
              <LeadingIconButton
                icon={<GrDocumentExcel size={24} />}
                content={"Xuất Excel"}
              />
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
          <DataTableComponent
            onRowClick={() => {
              navigate(`/quan-ly/thi-thu/chinh-sua/:id`);
            }}
            columnDocs={columnDocs}
            rowDocs={rowDocs}
            filter={filter}
          />
        </div>
      </div>
    </div>
  );
};

export default ExamListManager;
