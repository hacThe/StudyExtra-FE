import React from 'react';
import { Container, Grid } from '@mui/material';
import { FiChevronsRight, FiShuffle } from "react-icons/fi";
function Notification(props) {
    return (
        <div >
            <Container>
                <Grid container spacing={0}>
                    <Grid md={12} sm={12} style={{ marginBottom: '5px' }}>
                        <h1 style={{ fontSize: '28px', fontWeight: '700' }}>Thông báo</h1>
                    </Grid>
                    <Grid md={6} sm={6}>
                        <Container style={{ paddingLeft: '0' }}>
                            <Grid container spacing={0}>
                                <Grid md={6} sm={6}>
                                    <p style={{ fontSize: '18px', fontWeight: '700', paddingBottom:'0' }}>Thông báo chung</p>
                                </Grid>
                                <Grid style={{ justifyContent: 'end', display: 'flex', paddingTop: '5px' }} md={6} sm={6}>
                                    <a href="#" style={{ fontSize: '14px', textDecoration: 'none', color: '#7B68EE', fontWeight: '700' }}>
                                        Xem thêm
                                        <FiChevronsRight style={{ paddingLeft: '5px', fontSize: '20px', transform: 'translateY(-5%)' }}></FiChevronsRight>
                                    </a>
                                </Grid>
                                <Grid style={{ justifyContent: 'start', display: 'flex', paddingTop: '5px' }} md={12} sm={12}>
                                    <div>
                                        <FiShuffle style={{ paddingRight: '10px', fontSize: '24px', transform: 'translateY(-5%)' }}></FiShuffle>
                                        <a href="#" style={{ fontSize: '16px', textDecoration: 'none', color: 'black'  }}>Thông báo kế hoạch học tập HK2</a>
                                    </div>
                                </Grid>
                                <Grid style={{ justifyContent: 'start', display: 'flex', paddingTop: '5px' }} md={12} sm={12}>
                                    <div>
                                        <FiShuffle style={{ paddingRight: '10px', fontSize: '24px', transform: 'translateY(-5%)' }}></FiShuffle>
                                        <a href="#" style={{ fontSize: '16px', textDecoration: 'none', color: 'black'  }}>Thông báo kế hoạch học tập HK2</a>
                                    </div>
                                </Grid>
                                <Grid style={{ justifyContent: 'start', display: 'flex', paddingTop: '5px' }} md={12} sm={12}>
                                    <div>
                                        <FiShuffle style={{ paddingRight: '10px', fontSize: '24px', transform: 'translateY(-5%)' }}></FiShuffle>
                                        <a href="#" style={{ fontSize: '16px', textDecoration: 'none', color: 'black'  }}>Thông báo kế hoạch học tập HK2</a>
                                    </div>
                                </Grid>
                                <Grid style={{ justifyContent: 'start', display: 'flex', paddingTop: '5px' }} md={12} sm={12}>
                                    <div>
                                        <FiShuffle style={{ paddingRight: '10px', fontSize: '24px', transform: 'translateY(-5%)' }}></FiShuffle>
                                        <a href="#" style={{ fontSize: '16px', textDecoration: 'none', color: 'black'  }}>Thông báo kế hoạch học tập HK2</a>
                                    </div>
                                </Grid>
                            </Grid>
                        </Container>
                    </Grid>
                    <Grid md={6} sm={6}>
                        <Container style={{ borderLeft: '2px solid #C0C0C0' }}>
                            <Grid container spacing={0}>
                                <Grid md={6} sm={6}>
                                    <p style={{ fontSize: '18px', fontWeight: '700' , paddingBottom:'0' }}>Thông báo của bạn</p>
                                </Grid>
                                <Grid style={{ justifyContent: 'end', display: 'flex', paddingTop: '5px' }} md={6} sm={6}>
                                    <a href="#" style={{ fontSize: '14px', textDecoration: 'none', color: '#7B68EE', fontWeight: '700' }}>
                                        Xem thêm
                                        <FiChevronsRight style={{ paddingLeft: '5px', fontSize: '20px', transform: 'translateY(-5%)' }}></FiChevronsRight>
                                    </a>
                                </Grid>
                                <Grid style={{ justifyContent: 'start', display: 'flex', paddingTop: '5px' }} md={12} sm={12}>
                                    <div>
                                        <FiShuffle style={{ paddingRight: '10px', fontSize: '24px', transform: 'translateY(-5%)' }}></FiShuffle>
                                        <a href="#" style={{ fontSize: '16px', textDecoration: 'none', color: 'black' }}>Thông báo kế hoạch học tập HK2</a>
                                    </div>  
                                </Grid>
                                <Grid style={{ justifyContent: 'start', display: 'flex', paddingTop: '5px' }} md={12} sm={12}>
                                    <div>
                                        <FiShuffle style={{ paddingRight: '10px', fontSize: '24px', transform: 'translateY(-5%)' }}></FiShuffle>
                                        <a href="#" style={{ fontSize: '16px', textDecoration: 'none', color: 'black'  }}>Thông báo kế hoạch học tập HK2</a>
                                    </div>
                                </Grid>
                                <Grid style={{ justifyContent: 'start', display: 'flex', paddingTop: '5px' }} md={12} sm={12}>
                                    <div>
                                        <FiShuffle style={{ paddingRight: '10px', fontSize: '24px', transform: 'translateY(-5%)' }}></FiShuffle>
                                        <a href="#" style={{ fontSize: '16px', textDecoration: 'none', color: 'black'  }}>Thông báo kế hoạch học tập HK2</a>
                                    </div>
                                </Grid>
                                <Grid style={{ justifyContent: 'start', display: 'flex', paddingTop: '5px' }} md={12} sm={12}>
                                    <div>
                                        <FiShuffle style={{ paddingRight: '10px', fontSize: '24px', transform: 'translateY(-5%)' }}></FiShuffle>
                                        <a href="#" style={{ fontSize: '16px', textDecoration: 'none', color: 'black'  }}>Thông báo kế hoạch học tập HK2</a>
                                    </div>
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