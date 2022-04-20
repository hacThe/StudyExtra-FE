import React, { useState } from "react";
import "./CourseListManager.scss";

import { GrDocumentExcel } from "react-icons/gr";
import DataTableComponent from "../../../../components/DataTableComponent";
import LeadingIconButton from "../../../../components/LeadingIconButton";
import { useNavigate } from "react-router-dom";

const columnDocs = [
  // {field: , headerName: , width: }
  { field: "stt", headerName: "STT" },
  { field: "name", headerName: "Tên khóa học", width: 300, flex: 1 },
  { field: "category", headerName: "Phân loại" },
  { field: "lessons", headerName: "Số bài học" },
  { field: "attendee", headerName: "Số học sinh" },
  { field: "price", headerName: "Giá bán" },
  { field: "createAt", headerName: "Ngày tạo" },
];

const RawrowDocs = [
  {
    id: 1,
    name: "Tên của khóa học X nè nha, thử 1 cái tên dài dằn dặc xem sao nào",
    lessons: 30,
    attendee: 100,
    category: "Lớp 11",
    price: 600,
    createAt: "11/12/2021",
  },

  {
    id: 1,
    name: "Tên của khóa học X nè nha, thử 1 cái tên dài dằn dặc xem sao nào",
    lessons: 30,
    attendee: 100,
    category: "Lớp 11",
    price: 600,
    createAt: "11/12/2021",
  },

  {
    id: 1,
    name: "Tên của khóa học X nè nha, thử 1 cái tên dài dằn dặc xem sao nào",
    lessons: 30,
    attendee: 100,
    category: "Lớp 11",
    price: 600,
    createAt: "11/12/2021",
  },

  {
    id: 1,
    name: "Tên của khóa học X nè nha, thử 1 cái tên dài dằn dặc xem sao nào",
    lessons: 30,
    attendee: 100,
    category: "Lớp 11",
    price: 600,
    createAt: "11/12/2021",
  },

  {
    id: 1,
    name: "Tên của khóa học X nè nha, thử 1 cái tên dài dằn dặc xem sao nào",
    lessons: 30,
    attendee: 100,
    category: "Lớp 11",
    price: 600,
    createAt: "11/12/2021",
  },

  {
    id: 1,
    name: "Tên của khóa học X nè nha, thử 1 cái tên dài dằn dặc xem sao nào",
    lessons: 30,
    attendee: 100,
    category: "Lớp 11",
    price: 600,
    createAt: "11/12/2021",
  },

  {
    id: 1,
    name: "Tên của khóa học X nè nha, thử 1 cái tên dài dằn dặc xem sao nào",
    lessons: 30,
    attendee: 100,
    category: "Lớp 11",
    price: 600,
    createAt: "11/12/2021",
  },

  {
    id: 1,
    name: "Tên của khóa học X nè nha, thử 1 cái tên dài dằn dặc xem sao nào",
    lessons: 30,
    attendee: 100,
    category: "Lớp 11",
    price: 600,
    createAt: "11/12/2021",
  },

  {
    id: 1,
    name: "Tên của khóa học X nè nha, thử 1 cái tên dài dằn dặc xem sao nào",
    lessons: 30,
    attendee: 100,
    category: "Lớp 11",
    price: 600,
    createAt: "11/12/2021",
  },

  {
    id: 1,
    name: "Tên của khóa học X nè nha, thử 1 cái tên dài dằn dặc xem sao nào",
    lessons: 30,
    attendee: 100,
    category: "Lớp 11",
    price: 600,
    createAt: "11/12/2021",
  },

  {
    id: 1,
    name: "Tên của khóa học X nè nha, thử 1 cái tên dài dằn dặc xem sao nào",
    lessons: 30,
    attendee: 100,
    category: "Lớp 11",
    price: 600,
    createAt: "11/12/2021",
  },

  {
    id: 1,
    name: "Tên của khóa học X nè nha, thử 1 cái tên dài dằn dặc xem sao nào",
    lessons: 30,
    attendee: 100,
    category: "Lớp 11",
    price: 600,
    createAt: "11/12/2021",
  },

  {
    id: 1,
    name: "Tên của khóa học X nè nha, thử 1 cái tên dài dằn dặc xem sao nào",
    lessons: 30,
    attendee: 100,
    category: "Lớp 11",
    price: 600,
    createAt: "11/12/2021",
  },

  {
    id: 1,
    name: "Tên của khóa học X nè nha, thử 1 cái tên dài dằn dặc xem sao nào",
    lessons: 30,
    attendee: 100,
    category: "Lớp 11",
    price: 600,
    createAt: "11/12/2021",
  },

  {
    id: 1,
    name: "Tên của khóa học X nè nha, thử 1 cái tên dài dằn dặc xem sao nào",
    lessons: 30,
    attendee: 100,
    category: "Lớp 11",
    price: 600,
    createAt: "11/12/2021",
  },

  {
    id: 1,
    name: "Tên của khóa học X nè nha, thử 1 cái tên dài dằn dặc xem sao nào",
    lessons: 30,
    attendee: 100,
    category: "Lớp 11",
    price: 600,
    createAt: "11/12/2021",
  },

  {
    id: 1,
    name: "Tên của khóa học X nè nha, thử 1 cái tên dài dằn dặc xem sao nào",
    lessons: 30,
    attendee: 100,
    category: "Lớp 11",
    price: 600,
    createAt: "11/12/2021",
  },

  {
    id: 1,
    name: "Tên của khóa học X nè nha, thử 1 cái tên dài dằn dặc xem sao nào",
    lessons: 30,
    attendee: 100,
    category: "Lớp 11",
    price: 600,
    createAt: "11/12/2021",
  },
];

const rowDocs = RawrowDocs.map((row, index) => {
  row.stt = index + 1;
  row.id = index;
  return row;
});

const CourseListManager = () => {
    const navigate = useNavigate()
  var [filter, setFilter] = useState("");
  var changeFilter = (e) => {
    setFilter(e.target.value);
  };
  return (
    <div className=" manager-fa-ke-modal CourseListManager-wapper">
      <span className="se-btn">Thêm khóa học</span>
      <div className="CourseListManager-container">
        <div className="title">Quản lý khóa học</div>
        <div className="data-table-container">
          <div className="table-header">
            <div className="heading">
              <div className="header">Danh sách khóa học</div>
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
          onRowClick={()=>{
            navigate(`/quan-ly/khoa-hoc/id`)
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

export default CourseListManager;
