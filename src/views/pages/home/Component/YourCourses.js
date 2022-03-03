import { Container, Grid } from '@mui/material';
import React from 'react';
import SliderCourses from './SliderCourses';
function YourCourses(props) {
    return (
        <div style={{marginTop: '25px'}}>
            <Container container spacing={0}>
                <Grid container spacing={0}>
                    <Grid  md={12} sm={12}>
                        <h1 style={{ fontSize: '28px', fontWeight: '700' }}>Khóa học của bạn</h1>
                    </Grid>
                    <Grid md={12} sm={12}>
                        <SliderCourses></SliderCourses>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}

export default YourCourses;