import { merge, now } from 'lodash';
import ReactApexChart from 'react-apexcharts';
// material
import { Card, CardHeader, Box, Container, Grid } from '@mui/material';
import './UserChart.scss'
// ----------------------------------------------------------------------
import { useSelector, useDispatch } from 'react-redux';
import React from 'react';

export default function UserChat() {


    const chartOptions = {

        series: [44, 55, 41, 32],
        options: {
            chart: {
                width: 380,
                type: 'donut',
            },
            labels: ['Dưới 15', '15-8', '18-25', 'Trên 25'],
            plotOptions: {
                pie: {
                    startAngle: -90,
                    endAngle: 270
                }
            },
            dataLabels: {
                enabled: false
            },
            fill: {
                type: 'gradient',
            },
            legend: {
                formatter: function (val, opts) {
                    return val + " - " + opts.w.globals.series[opts.seriesIndex]
                }
            },
            responsive: [{
                breakpoint: 480,
                options: {
                    chart: {
                        width: 200
                    },
                    legend: {
                        position: 'bottom'
                    }
                }
            }]
        }

    }


    const chartOptionsGender = {

        series: [45, 55],
        options: {
            chart: {
                width: 380,
                type: 'donut',
            },
            labels: ['Nam', 'Nữ'],
            plotOptions: {
                pie: {
                    startAngle: -90,
                    endAngle: 270
                }
            },
            dataLabels: {
                enabled: false
            },
            fill: {
                type: 'gradient',
            },
            legend: {
                formatter: function (val, opts) {
                    return val + " - " + opts.w.globals.series[opts.seriesIndex]
                }
            },
            responsive: [{
                breakpoint: 480,
                options: {
                    chart: {
                        width: 200
                    },
                    legend: {
                        position: 'bottom'
                    }
                }
            }]
        }

    }


    return (
        <Container className='user-chart' style={{ marginTop: '24px' }}>
            <Grid container spacing={2}>
                <Grid item md={6}>
                    <Card>
                        <CardHeader style={{ fontWeight: '800' }} title="Độ tuổi người dùng" />
                        <Box sx={{ p: 3, pb: 1 }} dir="ltr">
                            <ReactApexChart type="donut" series={chartOptions.series} options={chartOptions.options} height={364} />
                        </Box>
                    </Card>
                </Grid>
                <Grid item md={6}>
                    <Card>
                        <CardHeader style={{ fontWeight: '800' }} title="Giới tính người dùng" />
                        <Box sx={{ p: 3, pb: 1 }} dir="ltr">
                            <ReactApexChart type="donut" series={chartOptionsGender.series} options={chartOptionsGender.options} height={364} />
                        </Box>
                    </Card>
                </Grid>
            </Grid>
        </Container>

    );
}
