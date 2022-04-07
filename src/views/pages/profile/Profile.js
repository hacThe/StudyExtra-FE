import React, { useEffect, useState } from "react";
import { Grid, Container, Button, Avatar } from '@mui/material';
import { Link } from 'react-router-dom';
import { FiEdit } from "react-icons/fi";
import axios from "axios";
import './Profile.scss'

const Profile = () => {
 // const coursesID = ["622df8789b2c6b2273af2d69", "622dbcf49b2c6b2273af2d65", "622dc1009b2c6b2273af2d66"];
  const [courses, setCourses] = useState([]);
  useEffect(async () => {
      async function fetchData() {
         axios.get('http://localhost:5000/api/profiles/getUserCourses', {
          headers: {
            'Authorization': `token ${'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRhbnRoYW5oMDgwNSIsImlhdCI6MTY0NzQ5Njc2MywiZXhwIjoxNjUxMDk2NzYzfQ.pcvJVruadBTkZOTFwAfNg1m_Q6Sfky_S_spOxXRTYeo'}`
          }
        })
              .then(res => {
                setCourses(res.data.data)
              })
              .catch(err => {
                console.log(err)
              })
      }
      fetchData();
    }, []) 

  const InformList = [
    {
      name: "Họ và tên",
      value: "Nguyễn Tấn Thành"
    },
    {
      name: "ID",
      value: "IUSERV"
    },
    {
      name: "Ngày sinh",
      value: "15-04-2001"
    },
    {
      name: "Email",
      value: "tanthanhe@gmail.com"
    },
    {
      name: "Số điện thoại",
      value: "0912511015"
    },
    {
      name: "Số dư",
      value: "500 GEM"
    },
  ];

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
          <Grid item xs={12} md={8}>
            <Grid container>
              <Grid item xs={12} sm={6} className="information-list">
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
                  <Button variant="text" className="btn-text">Xem lịch sử giao dịch</Button>
                </div>
              </Grid>
              <Grid item xs={12} sm={6} className="list-course">
                <h5>Toàn bộ khóa học</h5>
                {courses.map((item, index) =>
                  <div key={index} className='course-item'>
                    <Link to=''>{item.name}</Link>
                  </div>
                )}
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={4} className="avatar-group">
            <div>
              <Avatar
                alt="Remy Sharp"
                src="https://res.cloudinary.com/tanthanh0805/image/upload/v1647218948/LuxyWine/rose_ng5wt5.jpg"
                sx={{ width: 345, height: 345 }}
              />
              <Button variant="contained" className="btn-contained">Thay đổi ảnh đại diện</Button>
            </div>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Profile;
