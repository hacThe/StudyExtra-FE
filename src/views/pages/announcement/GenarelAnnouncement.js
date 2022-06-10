import React, { useState } from 'react';
import { Container, Grid, Card, Divider, Pagination } from '@mui/material'
import './Announcement.scss'
import GeneralNotion from './components/GeneralNotion';
import Silder from '../home/Component/Slider'

function GenarelAnnouncement(props) {
    return (
        <Container style={{ marginTop: '40px' }} maxWidth={'xl'}>
            <Grid container spacing={2}>
                <Grid style={{ paddingLeft: '5px', paddingRight: '5px' }} sm={12} md={12}>
                    <div style={{ marginBottom: '15px' }}>
                        <Silder></Silder>
                    </div>
                    <div style={{ marginBottom: '15px' }}>
                        <GeneralNotion></GeneralNotion>
                    </div>
                </Grid>
            </Grid>
        </Container>
    );
}

export default GenarelAnnouncement;