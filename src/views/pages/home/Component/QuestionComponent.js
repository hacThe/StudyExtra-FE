import React from 'react';
import { Avatar } from '@mui/material';
import Stack from '@mui/material/Stack';
import { deepOrange } from '@mui/material/colors';
import { AiTwotoneLike } from 'react-icons/ai'
import { FaCommentAlt } from 'react-icons/fa'
import '../Home.scss'

function QuestionComponent(props) {

    const handleClickPost = () => {
        console.log('click')
    }

    return (
        <div onClick={handleClickPost} style={{ margin: '10px', backgroundColor: 'white', borderRadius: '8px', cursor:'pointer',boxShadow: 'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px' }}>
            <Stack style={{ padding: '15px' }} alignItems="center" direction="row">
                <Avatar src={props.post.imgUrl ? props.post.imgUrl : null} style={{ width: '36px', height: '36px' }} sx={{ bgcolor: deepOrange[500] }}>TP</Avatar>
                <div style={{ fontSize: '18px', fontWeight: '600', paddingLeft: '10px' }}>{props.post.name}</div>
                <div style={{ paddingLeft: '50px', paddingRight: '20px', color: '#6E6E6E', display: 'flex' }}>
                    <AiTwotoneLike style={{ transform: 'translateY(-20%)', fontSize: '24px', paddingRight: '5px' }}></AiTwotoneLike>
                    <div>{props.post.comment.length}</div>
                </div>
                <div style={{ color: '#6E6E6E', display: 'flex' }}>
                    <FaCommentAlt style={{ transform: 'translateY(-15%)', fontSize: '20px', paddingRight: '5px' }}></FaCommentAlt>
                    <div style={{ transform: 'translateY(-8%)' }}>{props.post.react.length}</div>
                </div>
            </Stack>
            <div className='hidden-line' style={{ padding: '0 15px 40px 15px', fontSize: '14px' }}>{props.post.description}</div>
        </div>

    );
}

export default QuestionComponent;