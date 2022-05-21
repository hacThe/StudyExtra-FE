import React, { useState, useEffect } from "react";
import "./ExamListManager.scss";

import { GrDocumentExcel } from "react-icons/gr";
import DataTableComponent from "../../../../components/DataTableComponent";
import LeadingIconButton from "../../../../components/LeadingIconButton";
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import URL from '../../../../../services/api/config'
const columnDocs = [
  { field: "stt", headerName: "STT" },
  { field: "nameExam", headerName: "Tên bài thi", flex: 3 },
  { field: "typeCategory", headerName: "Phân loại", flex: 1 },
  { field: "quantity", headerName: 'Số câu', flex: 1 },
  { field: "time", headerName: "Thời gian", flex: 1 },
  { field: "createAt", headerName: "Ngày tạo", flex: 1 },
  { field: "questionPoint", minWidth: 200,headerName: "Số điểm mỗi câu", flex: 1 },
];


const ExamListManager = () => {
  const [rowDocs, setRowDocs] = useState([]);
  const navigate = useNavigate();
  var [filter, setFilter] = useState("");
  var changeFilter = (e) => {
    setFilter(e.target.value);
  };

  const renderTime = (time) => {
    let a = new Date(time)
    return a.getDate() + '/' + (a.getMonth() + 1) + '/' + a.getFullYear()
  }

  useEffect(() => {
    const fetchApi = async () => {
      await axios.get(URL.URL_GET_ALL_TEST_EXAM)
        .then(res => {
          console.log(res)
          setRowDocs(res.data.data.map((row, index) => {
            row.stt = index + 1;
            row.id = row._id;
            row.quantity = row.listQuestion.length
            row.createAt = renderTime(row.createdAt)
            return row;
          }))
        })
        .catch(err => {
          console.log('Thất bại')
        })
    }

    fetchApi()
  }, [])
  return (
    <div className=" manager-fa-ke-modal ExamListManager-wapper">
      <span className="se-btn" onClick={() => { navigate('/quan-ly/thi-thu/tao-moi') }}>Thêm bài thi</span>
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
            onRowClick={(e) => {
              console.log(e)
              navigate(`/quan-ly/thi-thu/chinh-sua/${e.row.id}`);
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
