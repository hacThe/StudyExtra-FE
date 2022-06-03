import React from 'react';
import { Container, Grid } from '@mui/material'
import './Announcement.scss'
import DetailAnnouncement from './components/DetailAnnouncement';
import Silder from '../home/Component/Slider'

function Announcement(props) {
    return (
        <Container style={{ marginTop: '40px' }} maxWidth={'xl'}>
            <Grid container spacing={2}>
                <Grid style={{ paddingLeft: '5px', paddingRight: '5px' }} sm={12} md={12}>
                    <div style={{ marginBottom: '20px' }}>
                        <Silder></Silder>
                    </div>  
                    <div style={{ marginBottom: '20px' }}>
                        <DetailAnnouncement></DetailAnnouncement>
                    </div>
                </Grid>
            </Grid>
        </Container>
    );
}

export default Announcement;