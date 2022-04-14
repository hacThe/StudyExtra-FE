import React from 'react';
import { Container, Grid } from '@mui/material';
import { FiChevronsRight, FiShuffle } from "react-icons/fi";
function Notification(props) {
    return (
        <div >
            <Container maxWidth={false}>
                <Grid container spacing={0}>
                    <Grid md={12} sm={12} style={{ marginBottom: '24px', marginTop: '48px' }}>
                        <h1 style={{ fontSize: '28px', fontWeight: '700' }}>Thông báo</h1>
                    </Grid>
                    <Grid md={6} sm={6}>
                        <Container style={{ paddingLeft: '0',fontFamily: "'Montserrat', san-serif" }}>
                            <Grid container spacing={0}>
                                <Grid style={{ marginBottom: '15px' }} md={6} sm={6}>
                                    <p style={{ fontSize: '18px', fontWeight: '600' }}>Thông báo chung</p>
                                </Grid>
                                <Grid style={{ display: 'flex', justifyContent: 'end', alignItems: 'start' }} md={6} sm={6}>
                                    <a href="#" style={{ fontSize: '14px', textDecoration: 'none', color: '#7B68EE', fontWeight: '700', display: 'flex' }}>
                                        <div>Xem thêm</div>
                                        <FiChevronsRight style={{ paddingLeft: '5px', fontSize: '20px', transform: 'translateY(-10%)' }}></FiChevronsRight>
                                    </a>
                                </Grid>
                                <Grid style={{ display:'flex', marginBottom: '8px'}} md={12} sm={12}>
                                    <FiShuffle style={{ paddingRight: '10px', fontSize: '24px', transform: 'translateY(-12%)' }}></FiShuffle>
                                    <a href="#" style={{ fontSize: '16px', textDecoration: 'none', color: 'black' }}>Thông báo kế hoạch học tập HK2</a>
                                </Grid>
                                <Grid style={{ display:'flex', marginBottom: '8px'}} md={12} sm={12}>
                                    <FiShuffle style={{ paddingRight: '10px', fontSize: '24px', transform: 'translateY(-12%)' }}></FiShuffle>
                                    <a href="#" style={{ fontSize: '16px', textDecoration: 'none', color: 'black' }}>Thông báo kế hoạch học tập HK2</a>
                                </Grid>
                                <Grid style={{ display:'flex', marginBottom: '8px'}} md={12} sm={12}>
                                    <FiShuffle style={{ paddingRight: '10px', fontSize: '24px', transform: 'translateY(-12%)' }}></FiShuffle>
                                    <a href="#" style={{ fontSize: '16px', textDecoration: 'none', color: 'black' }}>Thông báo kế hoạch học tập HK2</a>
                                </Grid>
                                <Grid style={{ display:'flex', marginBottom: '8px'}} md={12} sm={12}>
                                    <FiShuffle style={{ paddingRight: '10px', fontSize: '24px', transform: 'translateY(-12%)' }}></FiShuffle>
                                    <a href="#" style={{ fontSize: '16px', textDecoration: 'none', color: 'black' }}>Thông báo kế hoạch học tập HK2</a>
                                </Grid>
                                
                            </Grid>
                        </Container>
                    </Grid>
                    <Grid md={6} sm={6}>
                        <Container style={{ borderLeft: '2px solid #C0C0C0' }}>
                            <Grid container spacing={0}>
                            <Grid style={{ marginBottom: '15px' }} md={6} sm={6}>
                                    <p style={{ fontSize: '18px', fontWeight: '600' }}>Thông báo của bạn</p>
                                </Grid>
                                <Grid style={{ display: 'flex', justifyContent: 'end', alignItems: 'start' }} md={6} sm={6}>
                                    <a href="#" style={{ fontSize: '14px', textDecoration: 'none', color: '#7B68EE', fontWeight: '700', display: 'flex' }}>
                                        <div>Xem thêm</div>
                                        <FiChevronsRight style={{ paddingLeft: '5px', fontSize: '20px', transform: 'translateY(-10%)' }}></FiChevronsRight>
                                    </a>
                                </Grid>
                                <Grid style={{ display:'flex', marginBottom: '8px'}} md={12} sm={12}>
                                    <FiShuffle style={{ paddingRight: '10px', fontSize: '24px', transform: 'translateY(-12%)' }}></FiShuffle>
                                    <a href="#" style={{ fontSize: '16px', textDecoration: 'none', color: 'black' }}>Thông báo kế hoạch học tập HK2</a>
                                </Grid>
                                <Grid style={{ display:'flex', marginBottom: '8px'}} md={12} sm={12}>
                                    <FiShuffle style={{ paddingRight: '10px', fontSize: '24px', transform: 'translateY(-12%)' }}></FiShuffle>
                                    <a href="#" style={{ fontSize: '16px', textDecoration: 'none', color: 'black' }}>Thông báo kế hoạch học tập HK2</a>
                                </Grid>
                                <Grid style={{ display:'flex', marginBottom: '8px'}} md={12} sm={12}>
                                    <FiShuffle style={{ paddingRight: '10px', fontSize: '24px', transform: 'translateY(-12%)' }}></FiShuffle>
                                    <a href="#" style={{ fontSize: '16px', textDecoration: 'none', color: 'black' }}>Thông báo kế hoạch học tập HK2</a>
                                </Grid>
                                <Grid style={{ display:'flex', marginBottom: '8px'}} md={12} sm={12}>
                                    <FiShuffle style={{ paddingRight: '10px', fontSize: '24px', transform: 'translateY(-12%)' }}></FiShuffle>
                                    <a href="#" style={{ fontSize: '16px', textDecoration: 'none', color: 'black' }}>Thông báo kế hoạch học tập HK2</a>
                                </Grid>
                            </Grid>
                        </Container>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}

export default Notification;