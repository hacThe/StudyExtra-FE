import React, { useEffect, useState } from "react";
import {
  Grid,
  Container,
  Button,
  Avatar,
  Modal,
  Box,
  Typography,
} from "@mui/material";
import { Link, Navigate, useParams } from "react-router-dom";
import { FiEdit } from "react-icons/fi";
import clsx from "clsx";
import { MdOutlinePhotoCamera } from "react-icons/md";
import {
  AiOutlineExport,
  AiOutlineLock,
  AiOutlineUnLock,
  AiOutlineDelete,
} from "react-icons/ai";
import axios from "axios";
import "./DetailUser.scss";
import TransactionTable from "./component/TransactionTable";
import { useDispatch, useSelector } from "react-redux";
import BackToPageButton from "./../../../components/BackToPageButton";
import { useNavigate } from "react-router-dom";
import LeadingIconButton from "../../../components/LeadingIconButton";
import { userActions } from "../../../../actions";
import DepositeGemModal from "./component/DepositeGemModal";
import { usersServices } from "../../../../services";

const DetailUser = () => {
  const userInfo = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const { id } = useParams();
  console.log(id, "id nè");
  const [exams, setExams] = useState([]);

  useEffect(() => {
    dispatch(userActions.getOne(id));
    usersServices.getUserExam(id).then((data) => {
      setExams(data.data);
    });
  }, []);

  const handleToogleLockState = () => {
    dispatch(userActions.toogleLockState(id));
  };

  const handleDeleteUserOnClick = () => {
    dispatch(
      userActions.delete(id, () => {
        navigate("/quan-ly/nguoi-dung");
      })
    );
  };
  const courses = [
    {
      name: "khóa học gì không biết nữa kkk",
    },
    {
      name: "Khóa học này cũng không biết luôn",
    },
  ];

  var [filter, setFilter] = useState("");
  var changeFilter = (e) => {
    setFilter(e.target.value);
  };

  const columnDocs = [
    // {field: , headerName: , width: }
    { field: "stt", headerName: "STT", width: 80 },
    { field: "thoigian", headerName: "Thời gian", width: 200 },
    {
      field: "thaydoi",
      headerName: "Thay đổi (GEM)",
      width: 150,
      cellClassName: (params) => {
        if (params.value == null) {
          return "";
        }
        return clsx("super-app", {
          negative: params.value < 0,
          positive: params.value > 0,
        });
      },
    },
    { field: "sodu", headerName: "Số dư (GEM)", width: 150 },
    { field: "ghichu", headerName: "Ghi chú", width: 200 },
  ];

  // const rowDocs = [
  //   {
  //     id: 1,
  //     stt: 1,
  //     thoigian: "12:12:00 16/04/2001",
  //     thaydoi: -500,
  //     sodu: 1250,
  //     ghichu: "không có gì để ghi chú",
  //   },
  //   {
  //     id: 2,
  //     stt: 2,
  //     thoigian: "12:12:00 16/04/2001",
  //     thaydoi: 500,
  //     sodu: 1250,
  //     ghichu: "không có gì để ghi chú",
  //   },
  //   {
  //     id: 3,
  //     stt: 3,
  //     thoigian: "12:12:00 16/04/2001",
  //     thaydoi: 500,
  //     sodu: 1250,
  //     ghichu: "không có gì để ghi chú",
  //   },
  //   {
  //     id: 4,
  //     stt: 4,
  //     thoigian: "12:12:00 16/04/2001",
  //     thaydoi: 500,
  //     sodu: 1250,
  //     ghichu: "không có gì để ghi chú",
  //   },
  //   {
  //     id: 5,
  //     stt: 5,
  //     thoigian: "12:12:00 16/04/2001",
  //     thaydoi: 500,
  //     sodu: 1250,
  //     ghichu: "không có gì để ghi chú",
  //   },
  //   {
  //     id: 6,
  //     stt: 6,
  //     thoigian: "12:12:00 16/04/2001",
  //     thaydoi: 500,
  //     sodu: 1250,
  //     ghichu: "không có gì để ghi chú",
  //   },
  //   {
  //     id: 7,
  //     stt: 7,
  //     thoigian: "12:12:00 16/04/2001",
  //     thaydoi: 500,
  //     sodu: 1250,
  //     ghichu: "không có gì để ghi chú",
  //   },
  //   {
  //     id: 8,
  //     stt: 8,
  //     thoigian: "12:12:00 16/04/2001",
  //     thaydoi: 500,
  //     sodu: 1250,
  //     ghichu: "không có gì để ghi chú",
  //   },
  //   {
  //     id: 9,
  //     stt: 9,
  //     thoigian: "12:12:00 16/04/2001",
  //     thaydoi: 500,
  //     sodu: 1250,
  //     ghichu: "không có gì để ghi chú",
  //   },
  //   {
  //     id: 10,
  //     stt: 10,
  //     thoigian: "12:12:00 16/04/2001",
  //     thaydoi: 500,
  //     sodu: 1250,
  //     ghichu: "không có gì để ghi chú",
  //   },
  //   {
  //     id: 11,
  //     stt: 11,
  //     thoigian: "12:12:00 16/04/2001",
  //     thaydoi: 500,
  //     sodu: 1250,
  //     ghichu: "không có gì để ghi chú",
  //   },
  //   {
  //     id: 12,
  //     stt: 12,
  //     thoigian: "12:12:00 16/04/2001",
  //     thaydoi: 500,
  //     sodu: 1250,
  //     ghichu: "không có gì để ghi chú",
  //   },
  //   {
  //     id: 13,
  //     stt: 13,
  //     thoigian: "12:12:00 16/04/2001",
  //     thaydoi: 500,
  //     sodu: 1250,
  //     ghichu: "không có gì để ghi chú",
  //   },
  // ];

  console.log(userInfo);
  const rowDocs = [];
  userInfo.transactions?.map((value, _index) => {
    const time = new Date(value.createdAt);
    rowDocs.push({
      id: _index + 1,
      stt: _index + 1,
      thoigian:
        time.getDate() +
        "-" +
        (time.getMonth() + 1) +
        "-" +
        time.getFullYear() +
        " __ " +
        time.getHours() +
        ":" +
        time.getMinutes(),
      thaydoi: value.type === "increase" ? value.amount : 0 - value.amount,
      sodu: value.balance,
      ghichu: value.note,
    });
  });
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(-1);
  };

  const [editGemModal, setEditGemModal] = useState(false);

  return (
    <>
      <Container className="manager-fa-ke-modal profile" maxWidth="xl">
        <DepositeGemModal
          open={editGemModal}
          handleClose={() => {
            setEditGemModal(false);
          }}
          user={userInfo}
        />
        <div className="justify-content-between">
          <BackToPageButton
            onClick={() => handleClick()}
            content="Danh sách người dùng"
          />
          <div className="align-center">
            <LeadingIconButton
              icon={<AiOutlineExport />}
              content={
                userInfo.role == "user" ? "Cấp quyền Admin" : "Xóa quyền Admin"
              }
            />
            <LeadingIconButton
              onClick={handleToogleLockState}
              icon={userInfo.isLock ? <AiOutlineLock /> : <AiOutlineLock />}
              content={userInfo.isLock ? "Mở khóa" : "Khóa tài khoản"}
            />
            <LeadingIconButton
              onClick={handleDeleteUserOnClick}
              icon={<AiOutlineDelete />}
              content="Xóa tài khoản"
            />
          </div>
        </div>

        <Grid container spacing={2} className="information-group">
          <Grid item xs={12} md={5} className="left-grid">
            <div className="avatar-group">
              {
                <Avatar
                  alt="Remy Sharp"
                  src={userInfo.avatar}
                  sx={{ width: 210, height: 210 }}
                />
              }
            </div>

            <Grid container>
              <Grid item xs={6}>
                <div className="inform-item">
                  <h5 className="name-inform">Họ và tên</h5>
                  <p className="value-inform">{userInfo.name}</p>
                </div>
              </Grid>
              <Grid item xs={6}>
                <div className="inform-item">
                  <h5 className="name-inform">ID</h5>
                  <p className="value-inform">{userInfo._id}</p>
                </div>
              </Grid>
            </Grid>

            <div className="inform-item">
              <h5 className="name-inform">Ngày sinh</h5>
              <p className="value-inform">{userInfo.birthday}</p>
            </div>

            <div className="inform-item">
              <h5 className="name-inform">Email</h5>
              <p className="value-inform">{userInfo.mail}</p>
            </div>

            <div className="inform-item">
              <h5 className="name-inform">Tên đăng nhập</h5>
              <p className="value-inform">{userInfo.username}</p>
            </div>

            <div className="inform-item">
              <h5 className="name-inform">Số điện thoại</h5>
              <p className="value-inform">{userInfo.phone}</p>
            </div>

            <div className="inform-item">
              <h5 className="name-inform">Số dư</h5>
              <p className="value-inform">{userInfo.gem}</p>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "left",
                flexWrap: "wrap",
              }}
            >
              <Button
                onClick={() => {
                  setEditGemModal(true);
                }}
                variant="contained"
                className="btn-contained"
              >
                Chỉnh sửa GEM
              </Button>
            </div>
          </Grid>
          <Grid item xs={12} md={7} className="right-grid">
            <Grid container className="courses-exams-group">
              <Grid item xs={12} lg={6} className="courses-list">
                <h5>Toàn bộ khóa học</h5>
                {courses.map((item, index) => (
                  <div key={index} className="course-item">
                    <Link to={"/chi-tiet-khoa-hoc/" + item.courseId}>
                      {item.name}
                    </Link>
                  </div>
                ))}
              </Grid>
              <Grid item xs={12} lg={6} className="exams-list">
                <h5>Cuộc thi đã tham gia</h5>
                {exams.map((item, index) => (
                  <div key={index} className="course-item">
                    <Link to={`/luyen-de/${item._id}`}>{item.name}</Link>
                  </div>
                ))}
              </Grid>
            </Grid>
            <div className="history-transaction_table">
              <h5>Lịch sử giao dịch</h5>
              <TransactionTable
                columnDocs={columnDocs}
                rowDocs={rowDocs}
                filter={filter}
              />
            </div>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default DetailUser;
