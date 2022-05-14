import React from 'react';
import { Card, Divider } from '@mui/material'
import { BsSearch } from 'react-icons/bs'
import '../Announcement.scss'
import { getSearchAnnoucement } from '../../../../actions/searchAnnouncement.action'
import { useDispatch, useSelector } from 'react-redux'
function SearchAnnouncement(props) {
    const searchAnnouncement = useSelector(state => state.searchAnnouncement.search)
    const dispatch = useDispatch()
    const handleChangeInput = (e) => {
        dispatch(getSearchAnnoucement(e.target.value))
    }

    return (
        <Card style={{ borderRadius: '8px', backgroundColor: '#fdfdfd', }}>
            <div style={{ backgroundColor: '#fcfcfc', paddingTop: '15px', paddingBottom: '15px', fontFamily: "'Montserrat', san-serif", fontWeight: '600', textAlign: 'center', fontSize: '18px' }}>
                TÌM KIẾM
            </div>
            <Divider></Divider>
            <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '15px', paddingBottom: '15px' }}>
                <div style={{ boxShadow: 'rgb(0 0 0 / 16%) 0px 1px 4px', display: 'flex', justifyContent: 'center', alignItems: 'center', border: '1px solid #00000024', borderRadius: '16px', padding: '10px 20px' }}>
                    <input value={searchAnnouncement} onChange={handleChangeInput} style={{ outline: 'none', border: 'none', marginRight: '5px' }} type={'text'} placeholder='Tìm kiếm thông báo...'></input>
                    <BsSearch style={{ fontSize: '18px', cursor: 'pointer' }}></BsSearch>
                </div>
            </div>
        </Card>
    );
}

export default SearchAnnouncement;