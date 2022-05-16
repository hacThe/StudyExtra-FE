import React, { useEffect, useState } from "react";
import { Grid, Container, Button, Avatar, Modal, Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { FiEdit } from "react-icons/fi";
import clsx from 'clsx';
import { MdOutlinePhotoCamera } from "react-icons/md"
import axios from "axios";
import './Profile.scss';
import TransactionTable from './component/TransactionTable';
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "./../../../actions/user.actions";
import { storage } from "../../../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
const Profile = () => {
  const dispatch = useDispatch()
  const UserInfo = useSelector(state => state.authentication.user);
  const courses = useSelector(state => state.userCourses.courses.data) || [];
  //const [avatar, setAvatar] = useState(UserInfo.avatar);

  console.log("state: ", useSelector(state => state));
  console.log("user: ", UserInfo);


  useEffect(() => {
    dispatch(userActions.getUserCourses());
  }, [])



  const InformList = [
    {
      name: "Họ và tên",
      value: UserInfo.name
    },
    {
      name: "ID",
      value: UserInfo.username
    },
    {
      name: "Ngày sinh",
      value: UserInfo.birthday?.split('T')[0]
    },
    {
      name: "Email",
      value: UserInfo.mail
    },
    {
      name: "Số điện thoại",
      value: UserInfo.phone
    },
    {
      name: "Số dư",
      value: UserInfo.gem + " GEM"
    },
  ];

  var [filter, setFilter] = useState('');
  var changeFilter = (e) => {
    setFilter(e.target.value);
  }

  const columnDocs = [
    // {field: , headerName: , width: }
    { field: 'stt', headerName: "STT", width: 80 },
    { field: 'thoigian', headerName: "Thời gian", width: 200 },
    {
      field: 'thaydoi', headerName: "Thay đổi (GEM)", width: 150,
      cellClassName: (params) => {
        if (params.value == null) {
          return '';
        }
        return clsx('super-app', {
          negative: params.value < 0,
          positive: params.value > 0,
        });
      }
    },
    { field: 'sodu', headerName: "Số dư (GEM)", width: 150 },
    { field: 'ghichu', headerName: "Ghi chú", width: 200 }
  ]

  const rowDocs = [
    { id: 1, stt: 1, thoigian: "12:12:00 16/04/2001", thaydoi: -500, sodu: 1250, ghichu: 'không có gì để ghi chú' },
    { id: 2, stt: 2, thoigian: "12:12:00 16/04/2001", thaydoi: 500, sodu: 1250, ghichu: 'không có gì để ghi chú' },
    { id: 3, stt: 3, thoigian: "12:12:00 16/04/2001", thaydoi: 500, sodu: 1250, ghichu: 'không có gì để ghi chú' },
    { id: 4, stt: 4, thoigian: "12:12:00 16/04/2001", thaydoi: 500, sodu: 1250, ghichu: 'không có gì để ghi chú' },
    { id: 5, stt: 5, thoigian: "12:12:00 16/04/2001", thaydoi: 500, sodu: 1250, ghichu: 'không có gì để ghi chú' },
    { id: 6, stt: 6, thoigian: "12:12:00 16/04/2001", thaydoi: 500, sodu: 1250, ghichu: 'không có gì để ghi chú' },
    { id: 7, stt: 7, thoigian: "12:12:00 16/04/2001", thaydoi: 500, sodu: 1250, ghichu: 'không có gì để ghi chú' },
    { id: 8, stt: 8, thoigian: "12:12:00 16/04/2001", thaydoi: 500, sodu: 1250, ghichu: 'không có gì để ghi chú' },
    { id: 9, stt: 9, thoigian: "12:12:00 16/04/2001", thaydoi: 500, sodu: 1250, ghichu: 'không có gì để ghi chú' },
    { id: 10, stt: 10, thoigian: "12:12:00 16/04/2001", thaydoi: 500, sodu: 1250, ghichu: 'không có gì để ghi chú' },
    { id: 11, stt: 11, thoigian: "12:12:00 16/04/2001", thaydoi: 500, sodu: 1250, ghichu: 'không có gì để ghi chú' },
    { id: 12, stt: 12, thoigian: "12:12:00 16/04/2001", thaydoi: 500, sodu: 1250, ghichu: 'không có gì để ghi chú' },
    { id: 13, stt: 13, thoigian: "12:12:00 16/04/2001", thaydoi: 500, sodu: 1250, ghichu: 'không có gì để ghi chú' }
  ]



  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "50rem",
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  function UploadModal() {
    const [open, setOpen] = React.useState(false);
    const [upProg, setUpProg] = useState(0);
    const [imgUrl, setImgUrl] = useState(UserInfo.avatar);
    const [file, setFile] = useState(null);

    const handleOpen = () => setOpen(true);
    const handleClose = (event, reason) => {
      if (reason !== 'backdropClick') {
        setOpen(false)
      }
    }

    const styleBtnCancle = {
      textTransform: "none", background: "#D83333", fontSize: "1.3rem", fontFamily: "Montserrat"
    }
    const styleBtnSubmit = {
      textTransform: "none", fontSize: "1.3rem", fontFamily: "Montserrat"
    }
    const handleChange = e => {
      setFile(e.target.files[0]) ;
      const fileSelected = e.target.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setImgUrl(reader.result);
      };
      if (fileSelected.type.match(/image.*/)) {
        reader.readAsDataURL(fileSelected);
      } else {
        alert("File is not an image");
      }
    }
    const uploadImg = (imgSelected) => {
      if(!imgSelected.type.match(/image*/)){
        alert("File is not an image");
        return;
      }
      console.log("Upload ");
      const storageRef = ref(storage, `file${imgSelected.name}`);
      const uploadTask = uploadBytesResumable(storageRef, imgSelected);

      uploadTask.on("state_changed", (snapshot) => {
        const prog = Math.round(snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setUpProg(prog);
      },
        (err) => { console.log(err) },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((URL) => {
            console.log("url: ", URL);
            //setImgUrl(URL);
            dispatch(userActions.uploadAvatar(URL));
          }
          )
        }
      )
    }

    const handleUpload = ()=>{
      uploadImg(file);
    }
    return (
      <>
        <Button className="btn-changeAvt" onClick={() => handleOpen()}> <MdOutlinePhotoCamera></MdOutlinePhotoCamera> </Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <h1>Uploaded: {upProg}</h1>
            <Typography id="modal-modal-description" style={{ display: "flex", justifyContent: "center", marginTop: "2rem" }}>
              <img src={imgUrl} style={{ height: "40rem", width: "40rem", objectFit: "contain" }}></img>
            </Typography>
            <Typography id="modal-modal-description" style={{ display: "flex", justifyContent: "space-around", marginTop: "2rem" }}>
              <Button variant="contained" style={styleBtnCancle} onClick={() => handleClose()}>Hủy</Button>
              <input type="file" onChange={handleChange}/>
              <Button variant="contained" onClick={() => handleUpload()}>Cập nhập ảnh</Button>
            </Typography>
          </Box>
        </Modal>
      </>
    );
  }

  return (
    <>
      <Container className='profile' maxWidth="xl">
        <div className="title-profile">
          <h1>Hồ sơ học viên</h1>
          <button variant="outlined">
            <FiEdit />
            Chỉnh sửa
          </button>
        </div>

        <Grid container spacing={2} className="information-group">
          <Grid item xs={12} md={5} className="left-grid">
            <div className="avatar-group">
              {<Avatar
                alt="Remy Sharp"
                src={UserInfo.avatar}
                sx={{ width: 300, height: 300 }}
              />}
              <UploadModal></UploadModal>
            </div>

            <Grid container>
              <Grid item xs={6}>
                <div className="inform-item">
                  <h5 className="name-inform">{InformList[0].name}</h5>
                  <p className="value-inform">{InformList[0].value}</p>
                </div>
              </Grid>
              <Grid item xs={6}>
                <div className="inform-item">
                  <h5 className="name-inform">{InformList[1].name}</h5>
                  <p className="value-inform">{InformList[1].value}</p>
                </div>
              </Grid>
            </Grid>
            {InformList.slice(2).map((item, index) =>
              <div className="inform-item" key={index}>
                <h5 className="name-inform">{item.name}</h5>
                <p className="value-inform">{item.value}</p>
              </div>
            )}
            <div style={{
              display: "flex",
              justifyContent: "left",
              flexWrap: "wrap"
            }}>
              <Button variant="contained" className="btn-contained">Nạp tiền vào tài khoản</Button>
            </div>
          </Grid>
          <Grid item xs={12} md={7} className="right-grid">
            <Grid container className="courses-exams-group">
              <Grid item xs={12} lg={6} className="courses-list">
                <h5>Toàn bộ khóa học</h5>
                {courses.map((item, index) =>
                  <div key={index} className='course-item'>
                    <Link to=''>{item.name}</Link>
                  </div>
                )}
              </Grid>
              <Grid item xs={12} lg={6} className="exams-list">
                <h5>Cuộc thi đã tham gia</h5>
                {courses.map((item, index) =>
                  <div key={index} className='course-item'>
                    <Link to=''>{item.name}</Link>
                  </div>
                )}
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

export default Profile;
