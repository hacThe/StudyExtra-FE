import React from 'react';
import { Avatar } from '@mui/material';
import Stack from '@mui/material/Stack';
import { deepOrange } from '@mui/material/colors';
import { AiTwotoneLike } from 'react-icons/ai'
import { FaCommentAlt } from 'react-icons/fa'
import '../Home.scss'
import { useNavigate } from "react-router-dom";

function QuestionComponent(props) {
    const navigate = useNavigate();
    const handleClickPost = () => {
        navigate('/hoi-dap/' + props.article._id);
    }

    // Chỉnh sửa phần lấy nội dung của các post
    console.log("props.article",props.article);

    const countReplyComment = (replyComment) =>{
        var res = 0;
        for(var i = 0; i < replyComment.length; i++){
            res += countReplyComment(replyComment[i].replyComment) + 1;
        }        
        return res;
    }

    const commentCount = (comments) => {
        var res = 0;
        for(var i = 0; i < comments.length; i++){
            res += countReplyComment(comments[i].replyComment) + 1;
        }        
        return res;
    }

    
    return (
        <div onClick={handleClickPost} style={{ margin: '10px', backgroundColor: 'white', borderRadius: '8px', cursor:'pointer',boxShadow: 'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px' }}>
            <Stack style={{ padding: '15px' }} alignItems="center" direction="row">
                <Avatar src={props.article.avatar ? props.article.avatar : null} style={{ width: '36px', height: '36px' }} sx={{ bgcolor: deepOrange[500] }}></Avatar>
                <div style={{ fontSize: '18px', fontWeight: '600', paddingLeft: '10px' }}>{props.article.name}</div>
                <div style={{ paddingLeft: '50px', paddingRight: '20px', color: '#6E6E6E', display: 'flex' }}>
                    <AiTwotoneLike style={{ transform: 'translateY(-20%)', fontSize: '24px', paddingRight: '5px' }}></AiTwotoneLike>
                    <div>{props.article.reactions.length}</div>
                </div>
                <div style={{ color: '#6E6E6E', display: 'flex' }}>
                    <FaCommentAlt style={{ transform: 'translateY(-15%)', fontSize: '20px', paddingRight: '5px' }}></FaCommentAlt>
                    <div style={{ transform: 'translateY(-8%)' }}>{commentCount(props.article.comments)}</div>
                </div>
            </Stack>
            <div className='hidden-line' style={{ padding: '0 15px 40px 15px', fontSize: '14px' }}>{props.article.content}</div>
        </div>

    );
}

export default QuestionComponent;