import React from 'react';
import { Container, Grid, Paper, Box } from '@mui/material'
import './GeneralStatistics.scss'
import { styled } from '@mui/material/styles'

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

function GeneralStatistics(props) {
    return (
        <Container className='general-statistic'>
            <Grid container spacing={2}>
                <Grid item lg={3} md={6} xs={12}>
                    <div className='card-general-statistic' style={{ backgroundColor: '#1F1498' }}>
                        <p style={{ fontFamily: "'Montserrat', san-serif" }} className='card-general-statistic-data'>9860</p>
                        <p style={{ fontFamily: "'Montserrat', san-serif" }} className='card-general-statistic-description'>Người dùng đang hoạt động</p>
                    </div>
                </Grid>
                <Grid item lg={3} md={6} xs={12}>
                    <div className='card-general-statistic' style={{ backgroundColor: '#0060B9' }}>
                        <p style={{ fontFamily: "'Montserrat', san-serif" }} className='card-general-statistic-data'>656$</p>
                        <p style={{ fontFamily: "'Montserrat', san-serif" }} className='card-general-statistic-description'>Tổng danh thu</p>
                    </div>
                </Grid>
                <Grid item lg={3} md={6} xs={12}>
                    <div className='card-general-statistic' style={{ backgroundColor: '#DE9A27' }}>
                        <p style={{ fontFamily: "'Montserrat', san-serif" }} className='card-general-statistic-data'>50</p>
                        <p style={{ fontFamily: "'Montserrat', san-serif" }} className='card-general-statistic-description'>Khóa học</p>
                    </div>
                </Grid>
                <Grid item lg={3} md={6} xs={12}>
                    <div className='card-general-statistic' style={{ backgroundColor: '#7B68EE' }}>
                        <p style={{ fontFamily: "'Montserrat', san-serif" }} className='card-general-statistic-data'>4.5/5</p>
                        <p style={{ fontFamily: "'Montserrat', san-serif" }} className='card-general-statistic-description'>Trong tổng 2000 lượt đánh giá</p>
                    </div>
                </Grid>
            </Grid>
        </Container>
    );
}

export default GeneralStatistics;