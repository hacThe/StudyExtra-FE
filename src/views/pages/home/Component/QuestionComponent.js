import React from 'react';
import { Avatar } from '@mui/material';
import Stack from '@mui/material/Stack';
import { deepOrange } from '@mui/material/colors';
import { AiTwotoneLike } from 'react-icons/ai'
import { FaCommentAlt } from 'react-icons/fa'
import '../Home.scss'

function QuestionComponent(props) {
    return (
        <div style={{ margin: '10px', backgroundColor: 'white', borderRadius: '8px', boxShadow: 'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px' }}>
            <Stack style={{ padding: '15px' }} alignItems="center" direction="row">
                <Avatar style={{ width: '36px', height: '36px' }} sx={{ bgcolor: deepOrange[500] }}>TP</Avatar>
                <div style={{ fontSize: '18px', fontWeight: '600', paddingLeft: '10px' }}>Lương Thiện Phước</div>
                <div style={{ paddingLeft: '50px', paddingRight: '20px', color: '#6E6E6E', display: 'flex' }}>
                    <AiTwotoneLike style={{ transform: 'translateY(-20%)', fontSize: '24px', paddingRight: '5px' }}></AiTwotoneLike>
                    <div>26</div>
                </div>
                <div style={{ color: '#6E6E6E', display: 'flex' }}>
                    <FaCommentAlt style={{ transform: 'translateY(-15%)', fontSize: '20px', paddingRight: '5px' }}></FaCommentAlt>
                    <div style={{transform: 'translateY(-8%)' }}>26</div>
                </div>
            </Stack>
            <div className='hidden-line' style={{ padding: '0 15px 40px 15px', fontSize: '14px'}}>Mọi người có thể giúp em so sánh sự khác nhau giữa beautiful và handsome được không ạnhau giữa beautiful và handsome đượ</div>
        </div>
      
    );
}

export default QuestionComponent;