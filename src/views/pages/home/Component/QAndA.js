import { Container, Grid } from '@mui/material';
import React from 'react';
import {FiChevronsRight} from 'react-icons/fi'
import QuestionComponent from './QuestionComponent';
function QAndA(props) {
    return (
        <div style={{ marginTop: '25px' }}>
            <Container container spacing={0}>
                <Grid container spacing={0}>
                    <Grid md={12} sm={12}>
                        <h1 style={{ fontSize: '28px', fontWeight: '700' }}>Hỏi đáp</h1>
                    </Grid>
                    <Grid md={12} sm={12}>
                        <Container style={{paddingLeft:'0'}} container spacing={0}>
                            <Grid container spacing={0}>
                                <Grid md={6} sm={6}>
                                    <div style={{fontSize:'18px', fontWeight:'600'}}>Câu hỏi nổi bật</div>
                                </Grid>
                                <Grid style={{ justifyContent: 'end', display: 'flex', paddingTop: '5px' }} md={6} sm={6}>
                                    <a href="#" style={{ fontSize: '14px', textDecoration: 'none', color: '#7B68EE', fontWeight: '700' }}>
                                        Xem thêm
                                        <FiChevronsRight style={{ paddingLeft: '5px', fontSize: '20px', transform: 'translateY(-5%)' }}></FiChevronsRight>
                                    </a>
                                </Grid>
                            </Grid>
                        </Container>
                    </Grid>
                    <Grid md={6} sm={6}>
                        <QuestionComponent></QuestionComponent>
                    </Grid>
                    <Grid md={6} sm={6}>
                        <QuestionComponent></QuestionComponent>
                    </Grid>
                    <Grid md={6} sm={6}>
                        <QuestionComponent></QuestionComponent>
                    </Grid>
                    <Grid md={6} sm={6}>
                        <QuestionComponent></QuestionComponent>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}

export default QAndA;