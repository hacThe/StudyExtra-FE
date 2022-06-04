import React, { useEffect, useState } from 'react';
import { Container, Grid } from '@mui/material';
import { FiChevronsRight, FiShuffle } from "react-icons/fi";
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import URL from '../../../../services/api/config'

function Notification(props) {
    const navigate = useNavigate()
    const [listAnnouncement, setListAnnouncement] = useState([])
    useEffect(() => {
        const fetApi = async () => {
            await axios.get(URL.URL_GET_ALL_ANNOUNCEMENT)
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

    const renderTime = (time) => {
        let a = new Date(time)
        return ' - ' + a.getDate() + '/' + (a.getMonth() + 1) + '/' + a.getFullYear() + ' - ' + a.getHours() + ':' + a.getMinutes()
    }


    return (
        <div >
            <Container maxWidth={false}>
                <Grid container spacing={0}>
                    <Grid md={12} sm={12} style={{ marginBottom: '24px', marginTop: '48px' }}>
                        <h1 style={{ fontSize: '28px', fontWeight: '700' }}>Thông báo</h1>
                    </Grid>
                    <Grid md={12} sm={12}>
                            <Grid container spacing={0}>
                                <Grid style={{ marginBottom: '15px' }} md={6} sm={6}>
                                    <p style={{ fontSize: '18px', fontWeight: '600' }}>Thông báo chung</p>
                                </Grid>
                                <Grid style={{ display: 'flex', justifyContent: 'end', alignItems: 'start' }} md={6} sm={6}>
                                    <a onClick={(e) => { e.preventDefault(); navigate('/thong-bao') }} href="#" style={{ fontSize: '12px', textDecoration: 'none', color: '#7B68EE', fontWeight: '700', display: 'flex' }}>
                                        <div>Xem thêm</div>
                                        <FiChevronsRight style={{ paddingLeft: '5px', fontSize: '20px', transform: 'translateY(-10%)' }}></FiChevronsRight>
                                    </a>
                                </Grid>
                                {
                                    listAnnouncement.map((announcement, index) => {
                                        if (index < 4) {
                                            return (
                                                <Grid style={{ display: 'flex', marginBottom: '8px' }} md={12} sm={12}>
                                                    <FiShuffle style={{ paddingRight: '10px', fontSize: '24px', transform: 'translateY(-12%)' }}></FiShuffle>
                                                    <a href="#" onClick={() => { navigate(`/thong-bao/${announcement.slug}`) }} style={{ fontSize: '16px', textDecoration: 'none', color: 'black', fontWeight:'500' }}>{announcement.title}
                                                        <span style={{color: '#08c', fontWeight:'500', fontSize:'12px'}}>
                                                            {renderTime(announcement.updatedAt)}
                                                        </span>
                                                    </a>
                                                </Grid>
                                            )
                                        }
                                    })
                                }
                            </Grid>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}

export default Notification;