import React, { useEffect, useState } from 'react';
import {  Card, Divider, Pagination } from '@mui/material'
import { BsFillCaretRightFill } from 'react-icons/bs'
import '../Announcement.scss'
import axios from 'axios'
import { Link } from "react-router-dom";

function GeneralNotion(props) {
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

    const renderTime = (time) => {
        let a = new Date(time)
        return '- ' + a.getDate() + '/' + (a.getMonth() + 1) + '/' + a.getFullYear() + ' - ' + a.getHours() + ':' + a.getMinutes()
    }

    return (
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
                                        <span className='notification-time' style={{ lineHeight: '16px', marginLeft: '5px' }}> {renderTime(item.createAt)}</span>
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
    );
}

export default GeneralNotion;