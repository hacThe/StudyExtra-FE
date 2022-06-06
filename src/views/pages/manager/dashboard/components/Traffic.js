import { merge, now } from 'lodash';
import ReactApexChart from 'react-apexcharts';
// material
import { Card, CardHeader, Box, Container, Grid ,TextField } from '@mui/material';
//
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import BaseOptionChart from './BaseOptionChart';
import './Traffic.scss'
// ----------------------------------------------------------------------
import { useSelector, useDispatch } from 'react-redux';
import { BsDownload } from 'react-icons/bs'
import React, {useState, useEffect} from 'react';
import axios from 'axios'
import URL from '../../../../../services/api/config'


export default function Traffic() {
    let a = new Date()
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    let start = a.getDate() + '-' + monthNames[a.getMonth()]
    const [access, setAccess] = useState()
    const [typeDate, setTypeData] = React.useState([start, '', '', '', '', '', start]);
    const [growth, setGrowth] = React.useState(start + ' - ' + start)
    const [isShow, setIsShow] = useState(false)
    const [dateStart, setDateStart] = React.useState(new Date());
    const [valueShow, setValueShow] = useState([22, 3, 56, 2, 14, 15, 29])
    const [dateEnd, setDateEnd] = React.useState(new Date());
    const [dateStartReal, setDateStartReal] = React.useState(new Date())
    const [dateEndReal, setDateEndReal] = React.useState(new Date())

    useEffect(() => {
        const fetApi = async () => {
            await axios.get(URL.URL_GET_ALL_ACCESS)
                .then(res => {
                    setAccess(res.data.data)
                })
        }
        fetApi()
    }, [])

    var CHART_DATA = [
        {
            name: 'Lượt truy cập',
            type: 'area',
            data: valueShow
        },
        // {
        //     name: 'Số người dùng',
        //     type: 'area',
        //     data: [2, 33, 32, 2, 12, 72]
        // }
    ];


    const chartOptions = merge(BaseOptionChart(), {
        stroke: { width: [1, 2, 3] },
        plotOptions: { bar: { columnWidth: '11%', borderRadius: 4 } },
        fill: { type: ['gradient', 'gradient'] },
        xaxis: {
            categories: typeDate,
        },
        yaxis: {
            decimalsInFloat: 2
        },
        tooltip: {
            shared: true,
            intersect: false,
            y: {
                formatter: (y) => {
                    //   if (typeof y !== 'undefined') {
                    //     if(regulation == {})
                    //     {
                    //       return `${y.toFixed(0)} VNĐ`;
                    //     }
                    //     if (regulation.currency == 'vnd')
                    //       return `${y.toFixed(0)} VNĐ`;
                    //     else
                    //       return `${(y).toFixed(2)} $`;
                    //   }
                    return y.toFixed(0);
                }
            }
        }
    });


    const handleChangeDateStart = (newValue) => {
        setDateStart(newValue);
    };

    const handleChangeDateEnd = (newValue) => {
        setDateEnd(newValue);
    }

    const handleComform = () => {
        setDateEndReal(dateEnd)
        setDateStartReal(dateStart)
        setIsShow(false)
        setGrowth(dateStart.getDate() + ' ' + monthNames[dateEnd.getMonth()] + ' - ' + dateEnd.getDate() + ' ' + monthNames[dateEnd.getMonth()])
        handleShowDate()
    }

    const handleShowDate = () => {
        console.log(access)
        if (access.length >= 7) {
            setTypeData([dateStart.getDate() + '-' + monthNames[dateStart.getMonth()], '', '', '', '', '', dateEnd.getDate() + '-' + monthNames[dateEnd.getMonth()]])
        } 
    }

    const handleCancel = () => {
        setDateStart(dateStartReal)
        setDateEnd(dateEndReal)
        setIsShow(false)
    }


    return (
        <Container className='traffic' style={{ marginTop: '24px' }}>
            <Grid container spacing={2}>
                <div style={{ display: isShow ? 'flex' : 'none' }} onClick={() => { setIsShow(false) }} className='modal-layout'>
                    <div className='modal' onClick={(e) => { e.stopPropagation() }}>
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <DesktopDatePicker
                                label="Start"
                                inputFormat="MM/dd/yyyy"
                                style={{ marginTop: '15px' }}
                                value={dateStart}
                                onChange={handleChangeDateStart}
                                renderInput={(params) => <TextField {...params} />}
                            />
                            <DesktopDatePicker
                                label="End"
                                style={{ marginTop: '15px' }}
                                inputFormat="MM/dd/yyyy"
                                value={dateEnd}
                                onChange={handleChangeDateEnd}
                                renderInput={(params) => <TextField {...params} />}
                            />
                            <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                                <div onClick={handleComform} style={{ border: '1px solid var(--primary-color)', fontWeight: '600', fontSize: '13px', padding: '5px 10px', backgroundColor: 'var(--primary-color)', borderRadius: '4px', color: 'white' }}>Xác nhận</div>
                                <div onClick={handleCancel} style={{ border: '1px solid var(--primary-color)', fontWeight: '600', fontSize: '13px', padding: '5px 10px', backgroundColor: 'white', borderRadius: '4px', color: 'var(--primary-color)' }}>Hủy</div>
                            </div>
                        </LocalizationProvider>
                    </div>
                </div>
                <Grid item md={12}>
                    <Card>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <div style={{ display: 'flex', alignItems: 'end' }}>
                                <CardHeader style={{ fontWeight: '800' }} title="Traffic" subheader={growth} />
                                <div onClick={() => {setIsShow(true)}} className='btn-time'>Chọn khoảng thời gian</div>
                            </div>
                            <div style={{ display: 'flex', padding: '12px', alignItems: 'start' }}>
                            </div>
                        </div>
                        <Box sx={{ p: 3, pb: 1 }} dir="ltr">
                            <ReactApexChart type="line" series={CHART_DATA} options={chartOptions} height={364} />
                        </Box>
                    </Card>
                </Grid>
            </Grid>
        </Container>

    );
}
