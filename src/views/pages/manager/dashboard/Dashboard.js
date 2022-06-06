import React from 'react';
import { Container, Grid } from '@mui/material'
import './Dashboard.scss'
import GeneralStatistics from './components/GeneralStatistics';
import UserChart from './components/UserChart';
import RevenueChart from './components/RevenueChart';


function Dashboard(props) {
    return (
        <Container className='dashboard' >
            <GeneralStatistics></GeneralStatistics>
            <UserChart></UserChart>
            <RevenueChart></RevenueChart>
        </Container>
    );
}

export default Dashboard;