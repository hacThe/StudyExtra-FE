import React from 'react';
import { Container, Grid } from '@mui/material';
import CardCourses from './CardCourses';

function WholeCourses(props) {

    return (
        <div style={{ marginTop: '25px' }}>
            <Container maxWidth={false} container spacing={2}>
                <Grid container spacing={2}>
                    {props.coursesCurrent.map((course, num) => {
                        if (num < props.currentPage * 8 && num >= (props.currentPage - 1) * 8) {
                            return (
                                <Grid md={3} sm={3}>
                                    <CardCourses course={course}></CardCourses>
                                </Grid>
                            )
                        }
                    })}
                </Grid>
            </Container>
        </div>
    );
}

export default WholeCourses;