import React from 'react';
import { Card, Divider } from '@mui/material'
import { BsFillCaretRightFill } from 'react-icons/bs'
import '../Announcement.scss'

function HotNews(props) {
    return (
        <Card style={{ borderRadius: '8px', backgroundColor: '#fdfdfd', marginTop: '20px', marginBottom: '20px' }}>
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
    );
}

export default HotNews;