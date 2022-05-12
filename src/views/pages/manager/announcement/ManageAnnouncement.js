import React from 'react';
import { Container, Grid } from '@mui/material'
import LeadingIconButton from '../../../components/LeadingIconButton'
import DataTableComponent from "../../../components/DataTableComponent";
import { GrDocumentExcel } from "react-icons/gr";
import './Announcement.scss'
import { useNavigate } from "react-router-dom";


const columnDocs = [
    // {field: , headerName: , width: }
    { field: "stt", headerName: "STT", flex: 1 },
    { field: "name", headerName: "Tiêu đề", width: 200, flex: 2 },
    { field: "userCreate", headerName: "Người tạo", width: 200, flex: 2 },
    { field: "timeCreate", headerName: "Ngày tạo", minWidth: 100, flex: 2 },
    { field: "content", headerName: "Nội dung", flex: 4 },
];

const RawrowDocs = [
    {
        id: 1,
        name: "Tên của bài thi nè nhaTên của bài thi nè nha",
        category: "Lớp 12",
        userCreate: "Lương Thiện Phước",
        timeCreate: "11/12/2022",
        content: "Học viên khóa học: Làm giàu không khó, chuyện khó mình bỏ qua, chuyện si đa mình giành lấy, chuyện ấy thì mình chưa làm bao giờ :))",
    },
    {
        id: 2,
        name: "Tên của bài thi nè nha",
        category: "Lớp 12",
        userCreate: "Lương Thiện Phước",
        timeCreate: "11/12/2022",
        content: "Học viên khóa học: Làm giàu không khó, chuyện khó mình bỏ qua, chuyện si đa mình giành lấy, chuyện ấy thì mình chưa làm bao giờ :))",
    },

]

const rowDocs = RawrowDocs.map((row, index) => {
    row.stt = index + 1;
    row.id = index;
    return row;
});


function ManageAnnouncement(props) {
    const navigate = useNavigate();
    const [filter, setFilter] = React.useState("");
    const changeFilter = (e) => {
        setFilter(e.target.value);
    };
    return (
        <Container className='announcement' >
            <div className='box-shadow'>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div className='title'>Danh sách thông báo</div>
                    <div className='btn-add-announce' onClick={() => {console.log("navigate nè"); navigate(`/quan-ly/thong-bao-chung/tao-moi`) }}>Thêm thông báo</div>
                </div>
                <div className="filter-container">
                    <p className="filter-label">Nhập bất kỳ để tìm kiếm</p>
                    <input
                        className="filter-input"
                        type="text"
                        onChange={(e) => changeFilter(e)}
                    ></input>
                </div>
                <div style={{ display: 'flex', justifyContent: 'end' }}>
                    <LeadingIconButton
                        icon={<GrDocumentExcel size={24} />}
                        content={"Xuất Excel"}
                    ></LeadingIconButton>
                </div>
                <div>
                    <DataTableComponent
                        onRowClick={() => {
                            navigate(`/quan-ly/thong-bao-chung/chinh-sua/:id`);
                        }}
                        columnDocs={columnDocs}
                        rowDocs={rowDocs}
                        filter={filter}
                    />
                </div>
            </div>
        </Container>
    );
}

export default ManageAnnouncement;