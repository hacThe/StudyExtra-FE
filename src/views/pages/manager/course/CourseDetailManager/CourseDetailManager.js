import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
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
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { courseAction } from "../../../../../actions/course.action";
import { appActions } from "../../../../../actions/app.action";
import { courseService } from "../../../../../services";
import { dateUltils } from "../../../../../utilities/date.ultil";
function CourseDetailManager(props) {
  const navigate = useNavigate();
  const fields = [
    // {field: , headerName: , width: }
    { field: "stt", headerName: "STT" },
    { field: "username", headerName: "Username" },
    { field: "name", headerName: "Họ và tên", flex: 1, minWidth: 200 },
    {
      field: "birthday",
      headerName: "Ngày sinh",
      width: 300,
      valueGetter: (params) =>
        dateUltils.fortmatToVietNameDay(params.row.birthday),
    },
    {
      field: "sex",
      headerName: "Giới tính",
      valueGetter: (params) => (params.row.gender === 0 ? "Nữ" : "Nam"),
    },
    { field: "mail", headerName: "Email", flex: 1, minWidth: 300 },
  ];
  const [students, setStudents] = useState([]);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [filter, setFilter] = useState("");
  const changeFilter = (e) => {
    setFilter(e.target.value);
  };
  const dispatch = useDispatch();
  const course = useSelector((state) => state.course.course);

  const { id } = useParams();
  useEffect(() => {
    console.log("ID nè: ", id);
    dispatch(courseAction.getOne(id));
    courseService.getStudents(id).then(
      (data) => {
        setStudents(
          data.data.map((item) => {
            item.id = item._id;
            return item;
          })
        );
      },
      (error) => {
        console.log({ error });
      }
    );
  }, []);
  console.log({ students });
  console.log("Course nè", course);

  const handleEditInfoOnClick = () => {
    navigate(`/quan-ly/khoa-hoc/chinh-sua/${id}`);
  };

  const handleEditContentOnClick = () => {
    navigate(`/quan-ly/khoa-hoc/chinh-sua-noi-dung/${id}`);
  };

  const handleToogleIsHideClick = () => {
    dispatch(courseAction.update(id, { isHide: !course.isHide }));
  };

  const handleDeleteCourse = () => {
    dispatch(
      appActions.openConfirmDialog(
        "Bạn có thực sự muốn xóa khóa học này?",
        () => {
          dispatch(courseAction._delete(course._id, navigate));
        }
      )
    );
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 500,
    padding: "48px",
    bgcolor: "background.paper",
    borderRadius: "10px",
    boxShadow: 24,
    p: 4,
  };

  return (
    <div className="manager-fa-ke-modal course-detail-manager-wrapper">
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <h1 style={{ textAlign: "center" }}>Thực hiện chỉnh sửa khóa học?</h1>
          <div className="space-between">
            <span
              onClick={handleEditInfoOnClick}
              style={{ fontWeight: "500", marginTop: "36px" }}
              className="se-btn"
            >
              Chỉnh sửa thông tin
            </span>
            <span
              onClick={handleEditContentOnClick}
              style={{ fontWeight: "500", marginTop: "8px" }}
              className="se-btn"
            >
              Chỉnh sửa nội dung
            </span>
            <span
              onClick={handleClose}
              style={{
                fontWeight: "500",
                marginTop: "8px",
                backgroundColor: "#FF6961",
              }}
              className="se-btn"
            >
              Hủy
            </span>
          </div>
        </Box>
      </Modal>
      <div className="justify-content-between top-action-bar">
        <BackToPageButton content="Danh sách khóa học" />
        <div className="course-action align-center">
          {/* <LeadingIconButton icon={<AiOutlineExport />} content="Xuất Excel" /> */}
          <LeadingIconButton
            onClick={handleOpen}
            icon={<AiOutlineEdit />}
            content="Chỉnh sửa"
          />
          <LeadingIconButton
            onClick={handleToogleIsHideClick}
            icon={<BiHide />}
            content={course.isHide ? "Hủy ẩn" : "Ẩn"}
          />
          <LeadingIconButton
            onClick={handleDeleteCourse}
            icon={<AiOutlineDelete />}
            content="Xóa"
          />
        </div>
      </div>
      <CourseDetailLeftSide course={course} />

      <div className="student-in-course-table">
        <h1 className="mb-3" style={{ marginTop: "36px" }}>
          Danh sách học sinh tham gia khóa học
        </h1>
        <div className="table-container">
          <div className="table-header justify-content-between">
            <div className="filter-container">
              <p style={{ fontSize: "1.4rem" }} className="filter-label">
                Nhập bất kỳ để tìm kiếm
              </p>
              <input
                className="filter-input"
                type="text"
                onChange={(e) => changeFilter(e)}
              ></input>
            </div>

            {/* <LeadingIconButton
              icon={<GrDocumentExcel />}
              content={"Xuất Excel"}
            /> */}
          </div>
          <DataTableComponent
            columnDocs={fields}
            rowDocs={students.map((item, index) => {
              item.stt = index + 1;
              return item;
            })}
            filter={filter}
          />
        </div>
      </div>
    </div>
  );
}

export default CourseDetailManager;
