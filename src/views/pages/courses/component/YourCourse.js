import React from 'react';
import { Container, Grid } from '@mui/material';
import CardCourses from './CardCourses';

function YourCourses(props) {
    return (
        <div style={{ marginTop: '25px' }}>
            <Container maxWidth='false' container spacing={2}>
                <Grid container spacing={2}>
                    {props.courses.map((course, num) => {
                        if (num < props.currentPageInYourCourses * 8 && num >= (props.currentPageInYourCourses - 1) * 8) {
                            return (
                                <Grid md={3} sm={3}>
                                    <CardCourses course={course} isPayment={true}></CardCourses>
                                </Grid>
                            )
                        }
                    })}
                </Grid>
            </Container>
        </div>
    );
}

export default YourCourses;