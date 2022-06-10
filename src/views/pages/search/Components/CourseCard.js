import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea, CardActions } from '@mui/material';
import { FaUserGraduate } from 'react-icons/fa';
import { MdOutlineAccessTimeFilled } from 'react-icons/md';
import { AiFillDollarCircle } from 'react-icons/ai'
import Stack from '@mui/material/Stack';
import { useNavigate } from 'react-router-dom';
const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);

export default function CourseCard(props) {
    const navigate = useNavigate()

    const handleClickCourses = () => {
        navigate(`/chi-tiet-khoa-hoc/${props.course.courseId}`)
    }

    return (
        <Card onClick={() => handleClickCourses()} style={{ margin: '10px' }} sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    alt="green iguana"
                    image={props.course.imgUrl}
                />
                <CardContent>
                    <Typography style={{ fontSize: '18px', fontWeight: '700', fontFamily: "'Montserrat', san-serif" }} gutterBottom variant="h5" component="div">
                        {props.course.name}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Stack style={{color:'#6E6E6E', marginLeft:'10px'}} direction="row" spacing={5}>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <FaUserGraduate style={{ paddingRight: '5px', transform: 'translateY(-8%)', fontSize: '18px' }}></FaUserGraduate>
                        <div style={{fontSize:'16px',fontFamily: "'Montserrat', san-serif"}}>{props.course.studentIds.length}</div>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <MdOutlineAccessTimeFilled style={{ paddingRight: '5px', transform: 'translateY(-15%)', fontSize: '22px' }}></MdOutlineAccessTimeFilled>
                        <div style={{fontSize:'16px',fontFamily: "'Montserrat', san-serif"}}>999</div>
                    </div>
                </Stack>
            </CardActions>
        </Card>
    );
}