import React from 'react';
import PaginationOutlined from './PaginationOutlined';
import { Container, Grid } from '@mui/material'
import CourseCard from './CourseCard'


function Courses(props) {
    return (
        <div style={{ marginTop: '10px' }}>
            <Container maxWidth={false} container spacing={2}>
                <Grid container spacing={2}>
                    <Grid md={3} sm={3}>
                        <CourseCard></CourseCard>
                    </Grid>
                    <Grid md={3} sm={3}>
                        <CourseCard></CourseCard>
                    </Grid>
                    <Grid md={3} sm={3}>
                        <CourseCard></CourseCard>
                    </Grid>
                    <Grid md={3} sm={3}>
                        <CourseCard></CourseCard>
                    </Grid>
                    <Grid md={3} sm={3}>
                        <CourseCard></CourseCard>
                    </Grid>
                    <Grid md={3} sm={3}>
                        <CourseCard></CourseCard>
                    </Grid>
                    <Grid md={3} sm={3}>
                        <CourseCard></CourseCard>
                    </Grid>
                    <Grid md={3} sm={3}>
                        <CourseCard></CourseCard>
                    </Grid> 
                </Grid>
            </Container>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <PaginationOutlined></PaginationOutlined>
            </div>
        </div>
    );
}

export default Courses;