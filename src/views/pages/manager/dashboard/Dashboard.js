import React from 'react';
import { Container, Grid } from '@mui/material'
import './Dashboard.scss'
import GeneralStatistics from './components/GeneralStatistics';
import Traffic from './components/Traffic';
import UserChart from './components/UserChart';
import RevenueChart from './components/RevenueChart';


function Dashboard(props) {
    return (
        <Container className='dashboard' maxWidth='xl'>
            <GeneralStatistics></GeneralStatistics>
            <Traffic></Traffic>
            <UserChart></UserChart>
            <RevenueChart></RevenueChart>
        </Container>
    );
}

export default Dashboard;