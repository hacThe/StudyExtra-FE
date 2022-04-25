import React, { useEffect, useState } from 'react';
import { Container, Grid, Card, Divider, Pagination } from '@mui/material'
import { BsSearch, BsFillCaretRightFill } from 'react-icons/bs'
import './Announcement.scss'
import axios from 'axios'
import { Link, NavLink } from "react-router-dom";


function GenarelAnnouncement(props) {
    const [listAnnouncement, setListAnnouncement] = useState([])
    useEffect(() => {
        const fetApi = async () => {
            await axios.get('http://localhost:5000/api/announcement/getAllAnnouncement')
                .then(res => {
                    console.log(res.data)
                    setListAnnouncement(res.data.data)
                })
                .catch(err => {
                    console.log(err)
                })
        }
        fetApi()
    }, [])

    return (
        <Container style={{ marginTop: '40px' }} maxWidth={'lg'}>
            <Grid container spacing={2}>
                <Grid style={{ paddingLeft: '5px', paddingRight: '5px' }} sm={3}>
                    <Card style={{ borderRadius: '8px', backgroundColor: '#fdfdfd', }}>
                        <div style={{ backgroundColor: '#fcfcfc', paddingTop: '15px', paddingBottom: '15px', fontFamily: "'Montserrat', san-serif", fontWeight: '600', textAlign: 'center', fontSize: '18px' }}>
                            TÌM KIẾM
                        </div>
                        <Divider></Divider>
                        <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '15px', paddingBottom: '15px' }}>
                            <div style={{ boxShadow: 'rgb(0 0 0 / 16%) 0px 1px 4px', display: 'flex', justifyContent: 'center', alignItems: 'center', border: '1px solid #00000024', borderRadius: '16px', padding: '10px 20px' }}>
                                <input style={{ outline: 'none', border: 'none', marginRight: '5px' }} type={'text'} placeholder='ABC XYZ'></input>
                                <BsSearch style={{ fontSize: '18px', cursor: 'pointer' }}></BsSearch>
                            </div>
                        </div>
                    </Card>
                    <Card style={{ borderRadius: '8px', backgroundColor: '#fdfdfd', marginTop: '20px' }}>
                        <div style={{ backgroundColor: '#fcfcfc', paddingTop: '15px', paddingBottom: '15px', fontFamily: "'Montserrat', san-serif", fontWeight: '600', textAlign: 'center', fontSize: '18px' }}>
                            TIN NỔI BẬT
                        </div>
                        <Divider></Divider>
                        <div style={{ marginTop: '15px', marginBottom: '15px' }}>
                            <div style={{ marginLeft: '10px', marginRight: '15px', marginBottom: '15px' }}>
                                <a href='#' className='notification-item' style={{ display: 'flex', justifyContent: 'center', textAlign: 'justify' }}>
                                    <p style={{ lineHeight: '20px' }}>
                                        <BsFillCaretRightFill style={{ fontSize: '10px', lineHeight: '16px' }}></BsFillCaretRightFill>
                                        Cuộc vui nào cũng phải có lúc tàn, kể từ hôm nay 22/04/2022
                                        <span className='notification-time' style={{ lineHeight: '16px' }}>- 08/04/2022 - 15:45</span>
                                    </p>
                                </a>
                            </div>
                            <div style={{ marginLeft: '10px', marginRight: '15px', marginBottom: '15px' }}>
                                <a href='#' className='notification-item' style={{ display: 'flex', justifyContent: 'center', textAlign: 'justify' }}>
                                    <p style={{ lineHeight: '20px' }}>
                                        <BsFillCaretRightFill style={{ fontSize: '10px', lineHeight: '16px' }}></BsFillCaretRightFill>
                                        Cuộc vui nào cũng phải có lúc tàn, kể từ hôm nay 22/04/2022
                                        <span className='notification-time' style={{ lineHeight: '16px' }}>- 08/04/2022 - 15:45</span>
                                    </p>
                                </a>
                            </div>
                            <div style={{ marginLeft: '10px', marginRight: '15px', marginBottom: '15px' }}>
                                <a href='#' className='notification-item' style={{ display: 'flex', justifyContent: 'center', textAlign: 'justify' }}>
                                    <p style={{ lineHeight: '20px' }}>
                                        <BsFillCaretRightFill style={{ fontSize: '10px', lineHeight: '16px' }}></BsFillCaretRightFill>
                                        Cuộc vui nào cũng phải có lúc tàn, kể từ hôm nay 22/04/2022
                                        <span className='notification-time' style={{ lineHeight: '16px' }}>- 08/04/2022 - 15:45</span>
                                    </p>
                                </a>
                            </div>
                            <div style={{ marginLeft: '10px', marginRight: '15px', marginBottom: '15px' }}>
                                <a href='#' className='notification-item' style={{ display: 'flex', justifyContent: 'center', textAlign: 'justify' }}>
                                    <p style={{ lineHeight: '20px' }}>
                                        <BsFillCaretRightFill style={{ fontSize: '10px', lineHeight: '16px' }}></BsFillCaretRightFill>
                                        Cuộc vui nào cũng phải có lúc tàn, kể từ hôm nay 22/04/2022
                                        <span className='notification-time' style={{ lineHeight: '16px' }}>- 08/04/2022 - 15:45</span>
                                    </p>
                                </a>
                            </div>
                        </div>
                    </Card>
                </Grid>
                <Grid style={{ paddingLeft: '5px', paddingRight: '5px' }} sm={9}>

                    {/* Thông báo cá nhân */}
                    <Card style={{ borderRadius: '8px', backgroundColor: '#fdfdfd', padding: '20px', marginBottom: '30px' }}>
                        <div style={{ color: '#0056e0', fontFamily: "'Montserrat', san-serif", fontSize: '16px', fontWeight: '600', marginBottom: '10px' }}>THÔNG BÁO CÁ NHÂN</div>
                        <Divider></Divider>
                        <div style={{ marginTop: '15px', marginBottom: '15px' }}>
                            <div style={{ marginLeft: '10px', marginRight: '15px', marginBottom: '15px' }}>
                                <a href='#' className='notification-item' style={{ display: 'flex', justifyContent: 'start  ', textAlign: 'justify' }}>
                                    <p style={{ lineHeight: '20px' }}>
                                        <BsFillCaretRightFill style={{ fontSize: '10px', lineHeight: '16px' }}></BsFillCaretRightFill>
                                        Cuộc vui nào cũng phải có lúc tàn, kể từ hôm nay 22/04/2022
                                        <span className='notification-time' style={{ lineHeight: '16px' }}>- 08/04/2022 - 15:45</span>
                                    </p>
                                </a>
                            </div>
                            <div style={{ marginLeft: '10px', marginRight: '15px', marginBottom: '15px' }}>
                                <a href='#' className='notification-item' style={{ display: 'flex', justifyContent: 'start  ', textAlign: 'justify' }}>
                                    <p style={{ lineHeight: '20px' }}>
                                        <BsFillCaretRightFill style={{ fontSize: '10px', lineHeight: '16px' }}></BsFillCaretRightFill>
                                        Cuộc vui nào cũng phải có lúc tàn, kể từ hôm nay 22/04/2022
                                        <span className='notification-time' style={{ lineHeight: '16px' }}>- 08/04/2022 - 15:45</span>
                                    </p>
                                </a>
                            </div>
                            <div style={{ marginLeft: '10px', marginRight: '15px', marginBottom: '15px' }}>
                                <a href='#' className='notification-item' style={{ display: 'flex', justifyContent: 'start  ', textAlign: 'justify' }}>
                                    <p style={{ lineHeight: '20px' }}>
                                        <BsFillCaretRightFill style={{ fontSize: '10px', lineHeight: '16px' }}></BsFillCaretRightFill>
                                        Cuộc vui nào cũng phải có lúc tàn, kể từ hôm nay 22/04/2022
                                        <span className='notification-time' style={{ lineHeight: '16px' }}>- 08/04/2022 - 15:45</span>
                                    </p>
                                </a>
                            </div>
                            <div style={{ marginLeft: '10px', marginRight: '15px', marginBottom: '15px' }}>
                                <a href='#' className='notification-item' style={{ display: 'flex', justifyContent: 'start  ', textAlign: 'justify' }}>
                                    <p style={{ lineHeight: '20px' }}>
                                        <BsFillCaretRightFill style={{ fontSize: '10px', lineHeight: '16px' }}></BsFillCaretRightFill>
                                        Cuộc vui nào cũng phải có lúc tàn, kể từ hôm nay 22/04/2022
                                        <span className='notification-time' style={{ lineHeight: '16px' }}>- 08/04/2022 - 15:45</span>
                                    </p>
                                </a>
                            </div>
                            <div style={{ marginLeft: '10px', marginRight: '15px', marginBottom: '15px' }}>
                                <a href='#' className='notification-item' style={{ display: 'flex', justifyContent: 'start  ', textAlign: 'justify' }}>
                                    <p style={{ lineHeight: '20px' }}>
                                        <BsFillCaretRightFill style={{ fontSize: '10px', lineHeight: '16px' }}></BsFillCaretRightFill>
                                        Cuộc vui nào cũng phải có lúc tàn, kể từ hôm nay 22/04/2022
                                        <span className='notification-time' style={{ lineHeight: '16px' }}>- 08/04/2022 - 15:45</span>
                                    </p>
                                </a>
                            </div>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <Pagination size='small' count={10} color="primary" />
                        </div>
                    </Card>


                    {/* Thông báo chung */}
                    <Card style={{ borderRadius: '8px', backgroundColor: '#fdfdfd', padding: '20px' }}>
                        <div style={{ color: '#0056e0', fontFamily: "'Montserrat', san-serif", fontSize: '16px', fontWeight: '600', marginBottom: '10px' }}>THÔNG BÁO CHUNG</div>
                        <Divider></Divider>
                        <div style={{ marginTop: '15px', marginBottom: '15px' }}>
                            {
                                listAnnouncement.map((item, index) => {
                                    return (
                                        <div style={{ marginLeft: '10px', marginRight: '15px', marginBottom: '15px' }}>
                                            <Link to={`${item.slug}`} className='notification-item' style={{ display: 'flex', justifyContent: 'start  ', textAlign: 'justify' }}>
                                                <p style={{ lineHeight: '20px' }}>
                                                    <BsFillCaretRightFill style={{ fontSize: '10px', lineHeight: '16px' }}></BsFillCaretRightFill>
                                                    {item.title}
                                                    <span className='notification-time' style={{ lineHeight: '16px', marginLeft:'5px' }}> - 08/04/2022 - 15:45</span>
                                                </p>
                                            </Link>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <Pagination size='small' count={10} color="primary" />
                        </div>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    );
}

export default GenarelAnnouncement;