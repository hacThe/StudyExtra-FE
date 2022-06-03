import Reacts from "react";
import { Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import { GoChecklist } from 'react-icons/go';
import { FaUserCheck } from 'react-icons/fa';

function ExamCard(props) {

    return (
        <div>
            <Link to={'/luyen-de/' + props.ExamInfomation._id}>
                <Grid container spacing={2} className="exam-card">
                    <Grid item xs={2} md={1} className="icon-group">
                        <GoChecklist></GoChecklist>
                    </Grid>
                    <Grid item xs={8} md={9} className="card-content">
                        <h1>{props.ExamInfomation.name}</h1>
                        <p>Khóa học: {props.ExamInfomation.course} - Thời gian: {props.ExamInfomation.time} Phút</p>
                    </Grid>
                    <Grid item xs={2} className="views">
                        {props.ExamInfomation.attempt}
                        <FaUserCheck />
                    </Grid>
                </Grid>
            </Link>
        </div>
    )
};

export default ExamCard;