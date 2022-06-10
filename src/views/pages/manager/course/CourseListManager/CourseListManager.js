import React, { useEffect, useState } from "react";
import "./CourseListManager.scss";

import { AiOutlineExport } from "react-icons/ai";
import DataTableComponent from "../../../../components/DataTableComponent";
import LeadingIconButton from "../../../../components/LeadingIconButton";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { courseAction } from "../../../../../actions/course.action";

const columnDocs = [
  // {field: , headerName: , width: }
  { field: "stt", headerName: "STT" },
  { field: "name", headerName: "Tên khóa học", width: 300, flex: 1 },
  { field: "category", headerName: "Phân loại" },
  { field: "lessons", headerName: "Số bài học" },
  { field: "attendee", headerName: "Số học sinh" },
  { field: "price", headerName: "Giá bán" },
  { field: "createdAt", headerName: "Ngày tạo", width: 300 },
];

const CourseListManager = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(courseAction.getAllCourse());
  }, []);
  const rawData = useSelector((state) => {
    console.log({ state });
    return state.course.courses;
  });

  const rowDocs = rawData.map((item, index) => {
    const temp = {};
    temp.id = item.courseId;
    temp.stt = index + 1;
    temp.name = item.name;
    temp.category = item.category;
    temp.lessons = 1000;
    temp.attendee = item.studentIds.length;
    temp.price = item.price;
    temp.createdAt = item.createdAt;
    return temp;
  });

  const navigate = useNavigate();
  var [filter, setFilter] = useState("");
  var changeFilter = (e) => {
    setFilter(e.target.value);
  };

  const editCourseHandleOnClick = (e) => {
    navigate(`/quan-ly/khoa-hoc/${e.id}`);
  };

  const addCourseHandleOnClick = () => {
    navigate("/quan-ly/khoa-hoc/tao-moi");
  };
  return (
    <div className=" manager-fa-ke-modal CourseListManager-wapper">
      <span onClick={addCourseHandleOnClick} className="se-btn">
        Thêm khóa học
      </span>
      <div className="CourseListManager-container">
        <div className="title">Quản lý khóa học</div>
        <div className="data-table-container">
          <div className="table-header">
            <div className="heading">
              <div className="header">Danh sách khóa học</div>
              <LeadingIconButton
                icon={<AiOutlineExport size={18} />}
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
            onRowClick={editCourseHandleOnClick}
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
