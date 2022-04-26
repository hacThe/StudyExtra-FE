import React from 'react';
import { Card, Divider, Pagination } from '@mui/material'
import { BsFillCaretRightFill } from 'react-icons/bs'
import '../Announcement.scss'

function PersonalNotice(props) {

    return (
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
    );
}

export default PersonalNotice;