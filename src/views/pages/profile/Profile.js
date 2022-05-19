import React, { useEffect, useState } from "react";
import { Grid, Container, Button, Avatar } from '@mui/material';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import './Profile.scss';
import TransactionTable from './component/TransactionTable';
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "./../../../actions/user.actions";
import { UploadModal } from "./component/UpLoadAvatarModal";
import { EditModal } from "./component/EditProfileModal";
import { DepositModal } from "./component/DepositModal";
import { ResetPasswordModal } from "./component/ResetPasswordModal";
import { usersServices } from "../../../services";

const Profile = () => {
  const dispatch = useDispatch()
  const UserInfo = useSelector(state => state.authentication.user);
  const courses = useSelector(state => state.userData.courses.data) || [];
  const transaction = useSelector(state => state.userData.transaction.data) || [];
  console.log("transaction: ", transaction);//////////
  //const [avatar, setAvatar] = useState(UserInfo.avatar);

  console.log("state: ", useSelector(state => state));
  console.log("user: ", UserInfo);


  useEffect(() => {
    dispatch(userActions.getUserCourses());
    dispatch(userActions.getUserTransaction());
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
      value: new Date(UserInfo.birthday).getDate() + "-" + (new Date(UserInfo.birthday).getMonth() + 1) + "-" + new Date(UserInfo.birthday).getFullYear(),
    },
    {
      name: "Giới tính",
      value: UserInfo.gender,
    },
    {
      name: "Email",
      value: UserInfo.mail,
      verified: UserInfo.emailVerified
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

  /*  const rowDocs = [
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
   ] */
  const rowDocs = [];
  transaction.map((value, _index) => {
    const time = new Date(value.createdAt);
    rowDocs.push({
      id: _index + 1,
      stt: _index + 1,
      thoigian: time.getDate() + '-' + (time.getMonth()+1) + '-' + time.getFullYear() + " __ " + time.getHours() + ":" + time.getMinutes(),
      thaydoi: value.type === 'deposit' ? value.amount : 0 - value.amount,
      sodu: value.balance,
      ghichu: value.note
    })
  })

  const [passOpen, setPassOpen] = useState(false);

  function resendVerifyEmail(){
    usersServices.resendVerifyEmail().then((data)=>{
      alert("Link xác nhận đã được gửi tới email của bạn ");
    },
    (error)=>{
      alert(error);
    })
  }


  return (
    <>
      <Container className='profile' maxWidth="xl">
        <div className="title-profile">
          <h1>Hồ sơ học viên</h1>
          <EditModal user={UserInfo} setPassOpen = {setPassOpen}/>
        </div>
        {passOpen && <ResetPasswordModal isOpen= {passOpen} setPassOpen = {setPassOpen}/>}


        <Grid container spacing={2} className="information-group">
          <Grid item xs={12} md={5} className="left-grid">
            <div className="avatar-group">
              {<Avatar
                alt="Remy Sharp"
                src={UserInfo.avatar}
                sx={{ width: 300, height: 300 }}
              />}
              <UploadModal avatar={UserInfo.avatar}></UploadModal>
            </div>
            <Grid container>
              {InformList.slice(0, 4).map((item, index) =>
                <Grid item xs={6} key={index}>
                  <div className="inform-item">
                    <h5 className="name-inform">{item.name}</h5>
                    <p className="value-inform">{item.value}</p>
                  </div>
                </Grid>
              )}
            </Grid>
            {InformList.slice(4).map((item, index) =>
              <div className="inform-item" key={index}>
                <h5 className="name-inform">{item.name}</h5>
                {item.name === "Email" && !item.verified ?
                  <div className="email-item">
                    <p className="value-inform">{item.value}</p>
                    <button onClick={resendVerifyEmail}>Verify</button>
                  </div>
                  : <p className="value-inform">{item.value}</p>}
              </div>
            )}
            <DepositModal />
          </Grid>
          <Grid item xs={12} md={7} className="right-grid">
            <Grid container className="courses-exams-group">
              <Grid item xs={12} lg={6} className="courses-list">
                <h5>Toàn bộ khóa học</h5>
                {courses.map((item, index) =>
                  <div key={index} className='course-item'>
                    <Link to={'/chi-tiet-khoa-hoc/' + item.courseId} >{item.name}</Link>
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
