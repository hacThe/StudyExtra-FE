import React from 'react';
import { Container, Grid } from '@mui/material';
import CardCourses from './CardCourses';

function WholeCourses(props) {
    return (
        <div style={{marginTop: '25px'}}>
            <Container maxWidth={false} container spacing={2}>
                <Grid container spacing={2}>
                    <Grid md={3} sm={3}>
                        <CardCourses></CardCourses>
                    </Grid>
                    <Grid md={3} sm={3}>
                        <CardCourses></CardCourses>
                    </Grid>
                    <Grid md={3} sm={3}>
                        <CardCourses></CardCourses>
                    </Grid>
                    <Grid md={3} sm={3}>
                        <CardCourses></CardCourses>
                    </Grid>
                    <Grid md={3} sm={3}>
                        <CardCourses></CardCourses>
                    </Grid>
                    <Grid md={3} sm={3}>
                        <CardCourses></CardCourses>
                    </Grid>
                    <Grid md={3} sm={3}>
                        <CardCourses></CardCourses>
                    </Grid>
                    <Grid md={3} sm={3}>
                        <CardCourses></CardCourses>
                    </Grid>
                    <Grid md={3} sm={3}>
                        <CardCourses></CardCourses>
                    </Grid>
                    <Grid md={3} sm={3}>
                        <CardCourses></CardCourses>
                    </Grid>
                    <Grid md={3} sm={3}>
                        <CardCourses></CardCourses>
                    </Grid>
                    <Grid md={3} sm={3}>
                        <CardCourses></CardCourses>
                    </Grid>
                    <Grid md={3} sm={3}>
                        <CardCourses></CardCourses>
                    </Grid>
                    <Grid md={3} sm={3}>
                        <CardCourses></CardCourses>
                    </Grid>
                    <Grid md={3} sm={3}>
                        <CardCourses></CardCourses>
                    </Grid>
                    <Grid md={3} sm={3}>
                        <CardCourses></CardCourses>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}

export default WholeCourses;