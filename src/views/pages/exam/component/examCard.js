import React, { useEffect, useState } from "react";
import { Grid } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { GoChecklist } from 'react-icons/go';
import { FaUserCheck } from 'react-icons/fa';

function ExamCard() {
    const ExamInfomation =
    {
        name: "5 Dề thi thử mới nhất của thầy Thành Phi Phước dsfds sdfsd sfdsf sfdfs sdfdsf sdfsfds sfdsf sdfds",
        course: "Chung",
        time: "30p",
        views: 165
    }

    return (
        <div>
            <Grid container spacing={1} className="exam-card">
                <Grid item xs={2} className="icon-group">
                    <GoChecklist></GoChecklist>
                </Grid>
                <Grid item xs={8} className="card-content">
                    <h1>{ExamInfomation.name}</h1>
                    <p>Khóa học: {ExamInfomation.course} - Thời gian: {ExamInfomation.time}</p>
                </Grid>
                <Grid item xs={2} className="views">
                    <FaUserCheck></FaUserCheck>
                    {ExamInfomation.views}
                </Grid>
            </Grid>
        </div>
    )
};

export default ExamCard;