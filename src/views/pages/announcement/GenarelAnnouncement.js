import React, { useState } from 'react';
import { Container, Grid, Card, Divider, Pagination } from '@mui/material'
import './Announcement.scss'
import SearchAnnouncement from './components/SearchAnnouncement';
import HotNews from './components/HotNews';
import PersonalNotice from './components/PersonalNotice';
import { BsFillCaretRightFill } from 'react-icons/bs'
import GeneralNotion from './components/GeneralNotion';
import {useSelector} from 'react-redux'
import NoticeToLookFor from './components/NoticeToLookFor';
function GenarelAnnouncement(props) {
    return (
        <Container style={{ marginTop: '40px' }} maxWidth={'lg'}>
            <Grid container spacing={2}>
                <Grid style={{ paddingLeft: '5px', paddingRight: '5px' }} sm={12} md={3}>
                    <SearchAnnouncement></SearchAnnouncement>
                    <HotNews></HotNews>
                </Grid>
                <Grid style={{ paddingLeft: '5px', paddingRight: '5px' }} sm={12} md={9}>
                    {/* Thông báo tìm kiếm */}
                    <NoticeToLookFor></NoticeToLookFor>
                    {/* Thông báo cá nhân */}
                    <PersonalNotice></PersonalNotice>
                    {/* Thông báo chung */}
                    <GeneralNotion></GeneralNotion>
                </Grid>
            </Grid>
        </Container>
    );
}

export default GenarelAnnouncement;