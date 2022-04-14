import React from 'react';
import { Grid, Button, Container } from '@mui/material';
import { AiFillFacebook, AiOutlineInstagram } from "react-icons/ai";
import './TheFooter.scss';
import { Link } from 'react-router-dom';
import { Box, padding } from '@mui/system';

const TheFooter = () => {
  return (
    <Box className='footer-container' sx={{ padding: { xs: '20px', md: '20px 88px' }}}>
      <Container maxWidth="xl">
        <Grid container spacing={2} className='footer'>
          <Grid item xs={12} md={12} lg={6} className='address'>
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

          <Grid item xs={12} md={6} lg={3} className='support'>
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


          <Grid item xs={12} md={6} lg={3} className='contact'>
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
              <Grid container className='input-group'  sx={{ width: { xs: '100%', sm: '70%', md: '100%' }}}>
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
    </Box>


  )
};

export default React.memo(TheFooter)
