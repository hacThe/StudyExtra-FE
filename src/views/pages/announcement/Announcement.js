import React, { useEffect, useState , useRef} from 'react';
import { Container, Grid, Card, Divider } from '@mui/material'
import { BsSearch, BsFillCaretRightFill } from 'react-icons/bs'
import './Announcement.scss'
import { useParams } from 'react-router-dom'

import axios from 'axios'
function Announcement(props) {
    const { slug } = useParams()
    const refContent = useRef()
    const [announcement, setAnnouncement] = useState({})
    useEffect(() => { 
        const fetApi = async () => {
            await axios.get(`http://localhost:5000/api/announcement/${slug}`)
                .then(res => {
                    setAnnouncement(res.data.data)
                    refContent.current.innerHTML = res.data.data.content
                })
                .catch(err => {
                    console.log(err)
                })
        }
        fetApi()
    }, [])
    return (
        <Container style={{ marginTop: '40px' }} maxWidth={'xl'}>
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
                    <Card style={{ borderRadius: '8px', backgroundColor: '#fdfdfd', padding: '20px' }}>
                        <div style={{ fontFamily: "'Montserrat', san-serif", fontSize: '19px', color: '#B94A48', fontWeight: '500', lineHeight: '23px' }}>
                            {announcement.title ? announcement.title: "Không có" }
                        </div>
                        <div style={{ fontFamily: "'Montserrat', san-serif", fontStyle: 'italic', color: '#666', fontSize: '12px', margin: '10px 0' }}>
                            T4, 20/04/2022 - 11:17
                        </div>
                        <div ref={refContent} className='content'>
                            <p>etxxt1</p>
                            <p>etxxt2</p>
                            <p>etxxt3</p>
                            <p>etxxt4</p>
                        </div>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    );
}

export default Announcement;