import ReactApexChart from 'react-apexcharts';
// material
import { Card, CardHeader, Box, Container, Grid } from '@mui/material';
import './UserChart.scss'
// ----------------------------------------------------------------------
import React, { useState, useEffect } from 'react';
import axios from 'axios'
import URL from '../../../../../services/api/config'
export default function UserChat() {
    const [users, setUsers] = useState([])
    const [male, setMale] = useState(0)
    const [listAge, setListAge] = useState([0, 0, 0, 0])
    useEffect(() => {

        const filterAge = (user) => {
            let underFifteen = 0
            let fifteenToEighteen = 0
            let eighteenToTwentyFive = 0
            let overTwentyFive = 0
            let currentYear = new Date()
            user.forEach(value => {
                let currentBirthday = new Date(value.birthday)
                if (currentYear.getFullYear() - currentBirthday.getFullYear() < 15) {
                    underFifteen++
                } else if (currentYear.getFullYear() - currentBirthday.getFullYear() >= 15 && currentYear.getFullYear() - currentBirthday.getFullYear() <= 18) {
                    fifteenToEighteen++
                } else if (currentYear.getFullYear() - currentBirthday.getFullYear() > 18 && currentYear.getFullYear() - currentBirthday.getFullYear() <= 25) {
                    eighteenToTwentyFive++
                } else {
                    overTwentyFive++
                }
            })

            setListAge([underFifteen, fifteenToEighteen, eighteenToTwentyFive, overTwentyFive])
        }

        const fetApi = async () => {
            await axios.get(URL.URL_GET_LIST_USER)
                .then(res => {
                    setUsers(res.data.data)
                    filterAge(res.data.data)
                    setMale(
                        res.data.data.reduce((total, value) => {
                            if (value.gender == 'nam') {
                                total++
                            }
                            return total
                        }, 0)
                    )
                })
        }
        fetApi()
    }, [])

    const chartOptions = {
        series: listAge,
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

        series: [Number(male), users.length - (Number(male))],
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
