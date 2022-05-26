import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Grid } from '@mui/material'
import './Page404.scss'
const Page404 = () => {
  return (
    <div className='page404'>
      <Container maxWidth={'lg'}>
        <Grid container spacing={2} >
          <Grid style={{ height: '80vh' }}
            container
            direction="column"
            justifyContent="center"
            alignItems="center" sm={5}>
            <div >
              <div className='title'>404</div>
              <div className='line'></div>
              <div className='description'>
                Xin lỗi, trang của bạn tìm kiếm không tồn tại
              </div>
              <div>
                <div className='btn-back-home btn'>
                  <Link style={{ color: 'white' }} to={"/trang-chu"}>Về trang chủ</Link>
                </div>
                <div className='btn-contact btn'>
                  <Link style={{ color: 'var(--primary-color)' }} to={"/trang-chu"}>Liên hệ</Link>
                </div>

              </div>
            </div>
          </Grid>
          <Grid style={{ height: '80vh' }}
            container
            direction="row"
            justifyContent="center"
            alignItems="center" sm={7}>
            <img src='/background404.png' style={{ width: '100%' }} className='img'></img>
          </Grid>
        </Grid>
      </Container>

    </div>
  )
}

export default Page404
