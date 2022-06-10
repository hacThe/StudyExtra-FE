import React, { useEffect } from "react";
import { Container, Grid } from "@mui/material";
import LeadingIconButton from "../../../components/LeadingIconButton";
import DataTableComponent from "../../../components/DataTableComponent";
import { AiOutlineExport } from "react-icons/ai";
import "./Announcement.scss";
import { useNavigate } from "react-router-dom";
import URL from "../../../../services/api/config";
import axios from "axios";
import { options } from "../../../../helpers";

const columnDocs = [
  // {field: , headerName: , width: }
  { field: "stt", headerName: "STT", flex: 1 },
  { field: "title", headerName: "Tiêu đề", width: 200, flex: 2 },
  { field: "userCreate", headerName: "Người tạo", width: 200, flex: 2 },
  { field: "timeCreate", headerName: "Ngày tạo", minWidth: 100, flex: 2 },
  { field: "content", headerName: "Nội dung", flex: 4 },
];

// const RawrowDocs = [
//     {
//         title: "Tên của bài thi nè nhaTên của bài thi nè nha",
//         userCreate: "Lương Thiện Phước",
//         timeCreate: "11/12/2022",
//         content: "Học viên khóa học: Làm giàu không khó, chuyện khó mình bỏ qua, chuyện si đa mình giành lấy, chuyện ấy thì mình chưa làm bao giờ :))",
//     },
//     {
//         title: "Tên của bài thi nè nha",
//         userCreate: "Lương Thiện Phước",
//         timeCreate: "11/12/2022",
//         content: "Học viên khóa học: Làm giàu không khó, chuyện khó mình bỏ qua, chuyện si đa mình giành lấy, chuyện ấy thì mình chưa làm bao giờ :))",
//     },

// ]

// const rowDocs = RawrowDocs.map((row, index) => {
//     row.stt = index + 1;
//     row.id = index;
//     return row;
// });

function ManageAnnouncement(props) {
  const [filter, setFilter] = React.useState("");
  const [listAnnouncement, setListAnnouncement] = React.useState([]);
  const [listAnnouncementFilter, setListAnnouncementFilter] = React.useState(
    []
  );
  const navigate = useNavigate();

  const changeFilter = (e) => {
    setFilter(e.target.value);
  };

  const renderTime = (time) => {
    let a = new Date(time);
    return a.getDate() + "/" + (a.getMonth() + 1) + "/" + a.getFullYear();
  };

  function convertToPlain(html) {
    // Create a new div element
    var tempDivElement = document.createElement("div");

    // Set the HTML content with the given value
    tempDivElement.innerHTML = html;

    // Retrieve the text property of the element
    return tempDivElement.textContent || tempDivElement.innerText || "";
  }

  useEffect(() => {
    async function fetchData() {
      await axios
        .get(URL.URL_GET_ALL_ANNOUNCEMENT, { ...options() })
        .then((res) => {
          console.log(res.data);
          if (res.data.data) {
            let array = [];
            res.data.data.map((announcement, index) => {
              array.push({
                stt: index + 1,
                id: index,
                slug: announcement.slug,
                title: announcement.title,
                userCreate: announcement.user.name,
                content: announcement.content.dangerouslySetInnerHTML,
                content: convertToPlain(announcement.content),
                timeCreate: renderTime(announcement.updatedAt),
              });
            });
            setListAnnouncement(array);
            setListAnnouncementFilter(array);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
    fetchData();
  }, []);
  return (
    <div className="manager-fa-ke-modal announcement">
      <div className="box-shadow">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div className="title">Danh sách thông báo</div>
          <div
            className="btn-add-announce"
            onClick={() => {
              console.log("navigate nè");
              navigate(`/quan-ly/thong-bao-chung/tao-moi`);
            }}
          >
            Thêm thông báo
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
        <div style={{ display: "flex", justifyContent: "end" }}>
          <LeadingIconButton
            icon={<AiOutlineExport size={18} />}
            content={"Xuất Excel"}
          ></LeadingIconButton>
        </div>
        <div>
          <DataTableComponent
            onRowClick={(e) => {
              navigate(`/quan-ly/thong-bao-chung/chinh-sua/${e.row.slug}`);
            }}
            columnDocs={columnDocs}
            rowDocs={listAnnouncement}
            filter={filter}
          />
        </div>
      </div>
    </div>
  );
}

export default ManageAnnouncement;
