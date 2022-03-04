import React from 'react';
import { Grid, Button, Container } from '@mui/material';
import { AiFillFacebook, AiOutlineInstagram } from "react-icons/ai";
import './TheFooter.scss';
import { Link } from 'react-router-dom';
import { Box } from '@mui/system';

const TheFooter = () => {
  return (
    <div style={{
      padding: "0px 88px"
    }}>
      <Container>
        <Grid container spacing={2} className='footer'>
          <Grid item xs={12} md={6} className='address'>
            <>
              <h1>Extra Study</h1>
              <p style={
                {
                  fontWeight: 'bold'
                }
              }>Trung tâm anh ngữ: SE-Anh văn siêu cấp</p>
              <p>Địa chỉ: 29 Đường số 8, P. Bình Hưng Hòa A, Q. Bình Tân, TP.HCM</p>
              <p>Số điện thoại: 0386 39 7579 - 090236 4049</p>
            </>
          </Grid>

          <Grid item xs={12} md={3} className='support'>
            <>
              <p style={
                {
                  fontFamily: 'Montserrat',
                  fontWeight: '500',
                  fontSize: '14px',
                  lineHeight: '17px'
                }
              }>
                HỖ TRỢ KHÁCH HÀNG</p>
              <Link to='/'><p>Chính sách và quy định chung</p></Link>
              <Link to='/'><p>Điều khoản và bảo mật</p></Link>
              <Link to='/'><p>Chính sách thanh toán</p></Link>
              <Link to='/'><p>Về Extra Study</p></Link>
            </>
          </Grid>


          <Grid xs={12} md={3} className='contact'>
            <>
              <h5>Hotline: 0334.696.473</h5>
              <p style={
                {
                  fontWeight: 'bold',
                }
              }>
                Theo dõi chúng tôi:
                <a href='/'>
                  <AiFillFacebook />
                </a>
                <a href='/'>
                  <AiOutlineInstagram />
                </a>
              </p>
              <p>Nhập email để đăng ký nhận những thông tin khuyến mãi đến từ Extra Study</p>
              <Grid container className='input-group'>
                <Grid item xs={9}>
                  <input className='input-text'></input>
                </Grid>
                <Grid item xs={3} sx={{ display: "flex", justifyContent: "end" }}>
                  <Button variant="contained" className='btn-send'>Gửi</Button>
                </Grid>
              </Grid>
            </>
          </Grid>
        </Grid>
      </Container>
    </div>


  )
};

export default React.memo(TheFooter)
