import React, { useState } from "react";
import BackToPageButton from "../../../../components/BackToPageButton";
import LeadingIconButton from "../../../../components/LeadingIconButton";
import "./CourseDetailManager.scss";
import { GrDocumentExcel } from "react-icons/gr";
import {
  AiOutlineExport,
  AiOutlineEdit,
  AiOutlineDelete,
} from "react-icons/ai";
import { BiHide } from "react-icons/bi";
import CourseDetailLeftSide from "../../../course/courseDetail/component/CourseDetailLeftSide";
import DataTableComponent from "../../../../components/DataTableComponent";
function CourseDetailManager(props) {
  const fields = [
    // {field: , headerName: , width: }
    { field: "stt", headerName: "STT" },
    { field: "username", headerName: "Username" },
    { field: "fullname", headerName: "Họ và tên", flex: 1, minWidth: 200 },
    { field: "birthday", headerName: "Ngày sinh", width: 150 },
    {
      field: "sex",
      headerName: "Giới tính",
      valueGetter: (params) => (params.sex === 0 ? "Nữ" : "Nam"),
    },
    { field: "email", headerName: "Email", flex: 1, minWidth: 300 },
    {
      field: "action",
      headerName: "Tùy chọn",
      minWidth: 100,
      renderCell: (params) => (
          <span
            className="delete-button-on-table"
            onClick={(e) => {
              e.stopPropagation()
              alert(JSON.stringify(params.row), null, 1);
            }}
          >
            <AiOutlineDelete size={20}/>
          </span>
      ),
    },
  ];
  const students = [
    {
      id: 1,
      stt: 1,
      username: "hacThe",
      fullname: "Dương Hiển Thế",
      birthday: "07/08/2009",
      sex: "1",
      email: "hienthe473@gmail.com",
    },
    {
      id: 2,
      stt: 2,
      username: "hacThe",
      fullname: "Dương Hiển Thế",
      birthday: "07/08/2009",
      sex: "1",
      email: "hienthe473@gmail.com",
    },

    {
      id: 3,
      stt: 3,
      username: "hacThe",
      fullname: "Dương Hiển Thế",
      birthday: "07/08/2009",
      sex: "1",
      email: "hienthe473@gmail.com",
    },

    {
      id: 4,
      stt: 4,
      username: "hacThe",
      fullname: "Dương Hiển Thế",
      birthday: "07/08/2009",
      sex: "1",
      email: "hienthe473@gmail.com",
    },

    {
      id: 5,
      stt: 5,
      username: "hacThe",
      fullname: "Dương Hiển Thế",
      birthday: "07/08/2009",
      sex: "1",
      email: "hienthe473@gmail.com",
    },

    {
      id: 6,
      stt: 6,
      username: "hacThe",
      fullname: "Dương Hiển Thế",
      birthday: "07/08/2009",
      sex: "1",
      email: "hienthe473@gmail.com",
    },

    {
      id: 7,
      stt: 7,
      username: "hacThe",
      fullname: "Dương Hiển Thế",
      birthday: "07/08/2009",
      sex: "1",
      email: "hienthe473@gmail.com",
    },

    {
      id: 8,
      stt: 8,
      username: "hacThe",
      fullname: "Dương Hiển Thế",
      birthday: "07/08/2009",
      sex: "1",
      email: "hienthe473@gmail.com",
    },

    {
      id: 9,
      stt: 9,
      username: "hacThe",
      fullname: "Dương Hiển Thế",
      birthday: "07/08/2009",
      sex: "1",
      email: "hienthe473@gmail.com",
    },

    {
      id: 10,
      stt: 10,
      username: "hacThe",
      fullname: "Dương Hiển Thế",
      birthday: "07/08/2009",
      sex: "1",
      email: "hienthe473@gmail.com",
    },
  ];

  const [filter, setFilter] = useState("");
  const changeFilter = (e) => {
    setFilter(e.target.value);
  };

  return (
    <div className="manager-fa-ke-modal course-detail-manager-wrapper">
      <div className="justify-content-between top-action-bar">
        <BackToPageButton content="Danh sách khóa học" />
        <div className="course-action align-center">
          <LeadingIconButton icon={<AiOutlineExport />} content="Xuất Excel" />
          <LeadingIconButton icon={<AiOutlineEdit />} content="Chỉnh sửa" />
          <LeadingIconButton icon={<BiHide />} content="Ẩn" />
          <LeadingIconButton icon={<AiOutlineDelete />} content="Xóa" />
        </div>
      </div>
      <CourseDetailLeftSide />

      <div className="student-in-course-table">
        <h1 className="mb-3" style={{ marginTop: "36px" }}>
          Danh sách học sinh tham gia khóa học
        </h1>
        <div className="table-container">
          <div className="table-header justify-content-between">
            <div className="filter-container">
              <p style={{fontSize: "1.4rem"}} className="filter-label">Nhập bất kỳ để tìm kiếm</p>
              <input
                className="filter-input"
                type="text"
                onChange={(e) => changeFilter(e)}
              ></input>
            </div>

            <LeadingIconButton
              icon={<GrDocumentExcel />}
              content={"Xuất Exel"}
            />
          </div>
          <DataTableComponent
            columnDocs={fields}
            rowDocs={students}
            filter={filter}
          />
        </div>
      </div>
    </div>
  );
}

export default CourseDetailManager;
