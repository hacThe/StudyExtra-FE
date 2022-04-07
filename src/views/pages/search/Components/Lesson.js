import React, { useState, useEffect } from 'react';
import PaginationOutlined from './PaginationOutlined';
import { Container, Grid } from '@mui/material'
import LessonCard from './LessonCard';
function Lesson(props) {

    const [page, setPage] = useState(1);
    useEffect(() => {
        setPage(1)
    }, [props.exam])

    const setCurrentPage = (num) => {
        setPage(num)
    }
    return (
        <div style={{ marginTop: '10px' }}>
            <Container maxWidth={false} container spacing={2}>
                <Grid container spacing={2}>
                    {props.lesson.length !== 0 ? props.lesson.map((lesson, num) => {
                        if (num < page * 8 && num >= (page - 1) * 8) {
                            return (
                                <Grid md={3} sm={3}>
                                    <LessonCard key={num} lesson={lesson}></LessonCard>
                                </Grid>
                            )
                        }

                    })
                        :
                        <h1 style={{margin:'50px'}}>Không có kết quả tìm kiếm</h1>
                    }

                </Grid>
            </Container>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
            <PaginationOutlined setCurrentPage={setCurrentPage} page={page} index={props.lesson.length}></PaginationOutlined>
            </div>
        </div>
    );
}

export default Lesson;