import React from 'react';
import { Container, Grid } from '@mui/material'
import './Announcement.scss'
import SearchAnnouncement from './components/SearchAnnouncement'
import HotNews from './components/HotNews';
import DetailAnnouncement from './components/DetailAnnouncement';
function Announcement(props) {
    

    return (
        <Container style={{ marginTop: '40px' }} maxWidth={'xl'}>
            <Grid container spacing={2}>
                <Grid style={{ paddingLeft: '5px', paddingRight: '5px' }} sm={12} md={3}>
                    <SearchAnnouncement></SearchAnnouncement>
                    <HotNews></HotNews>
                </Grid>
                <Grid style={{ paddingLeft: '5px', paddingRight: '5px' }} sm={12} md={9}>
                    <DetailAnnouncement></DetailAnnouncement>
                </Grid> 
            </Grid>
        </Container>
    );
}

export default Announcement;