import React, { useEffect, useState } from "react";
import { NavLink } from 'react-router-dom';
import { BsCheckCircleFill } from "react-icons/bs";
import { GiQueenCrown } from "react-icons/gi";
import { Container, Grid, Button, Card, Avatar } from '@mui/material';
import './ExamDetail.scss'

const ExamDetail = () => {

    const exam = {
        name: "Đây là tên của đề thi",
        shortDescription: "Đây là mô tả ngắn về khóa họcn ngắn thôi chứ không phải ngắn lắm, từ 100 đến 300 ký tự là oke, chiếm 8/12 col của content nha nghe hông, tức là cái cục bên kia chiếm 4 phần ó :3",
        content: "50 câu hỏi, 60 phút",
        require: ["Hello, đây là những gì khóa học đem lại nè",
            "Tầm 40 -  70 kí tự là oke, tối ưu là 60 ký tự",
            "Tầm 40 -  70 kí tự là oke, tối ưu là 60 ký tự, 60 ký tự là",
            "Chia làm 2 cột nha nha"
        ]
    }

    const LeaderCard = () => {
        return (
            <div className="list-card">
                <Card className="leader-card">
                    <div className="rank">1.</div>
                    <div className="avata_group">
                        <Avatar alt="Remy Sharp" src="https://vieclamthemonline.com/wp-content/uploads/2021/10/anh-blackpink-rose.jpg" />
                        <p>Leslie Alexander</p>
                    </div>
                    <div className="score">10</div>
                </Card>
            </div>
        )
    }

    return (
        <Container className="exam-detail">
            <Grid container spacing={2} className="exam-grid">
                <Grid item xs={12} md={7} lg={8} className="exam-detail_content">
                    <div className="exam-name">
                        <h5>{exam.name}</h5>
                        <p>{exam.shortDescription}</p>
                    </div>
                    <div className="exam-content">
                        <h5>Nội dung</h5>
                        <p>{exam.content}</p>
                    </div>
                    <div className="exam-require">
                        <h5>Yêu cầu trình độ</h5>
                        {exam.require.map((item, index) => (
                            <div className="require-group">
                                <p key={index}><BsCheckCircleFill></BsCheckCircleFill> {item}</p>
                            </div>
                        ))}
                    </div>
                </Grid>
                <Grid item xs={12} md={5} lg={4} className="leader-board_column">
                    <Button variant="contained" className="btn-contained">Vào thi</Button>
                    <div className="leader-board_group">
                        <h5><GiQueenCrown></GiQueenCrown> Leaderboard</h5>

                        {Array.from({ length: 5 }).map((_, idx) => (
                            <LeaderCard key={idx}/>
                        ))}
                    </div>
                </Grid>
            </Grid>
        </Container>
    )
}
export default ExamDetail;
