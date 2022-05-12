import React from 'react';
import './AddAnnouncement.scss'
import { BsArrow90DegLeft } from 'react-icons/bs'
import { AiFillFileAdd } from 'react-icons/ai'
import { Container, Grid } from '@mui/material'
import { useNavigate } from "react-router-dom";
import SunEditor, { buttonList } from 'suneditor-react'
import 'suneditor/dist/css/suneditor.min.css'; // Import Sun Editor's CSS File



function AddAnnouncement(props) {
    const navigate = useNavigate();
    const [content, setContent] = React.useState('');
    const [title, setTitle] = React.useState('');
    const [review, setReview] = React.useState('');
    const renderTime = () => {
        let a = new Date()
        let day
        switch (a.getDay()) {
            case 0:
                day = 'CN'
                break;
            case 1:
                day = 'T2'
                break;
            case 2:
                day = 'T3'
                break;
            case 3:
                day = 'T4'
                break;
            case 4:
                day = 'T5'
                break;
            case 5:
                day = 'T6'
                break;
            case 6:
                day = 'T7'
                break;
            default:
                day = 'CN'
                break;
        }
        return day + ', ' + a.getDate() + '/' + (a.getMonth() + 1) + '/' + a.getFullYear() + ' - ' + a.getHours() + ':' + a.getMinutes()
    }
    const handleChangeTitle = (e) => {
        setTitle(e.target.value)
        setReview(`
        <p><span style="font-size: 20px;"><strong>
            ${e.target.value.length !== 0 ? e.target.value : "Không có"}
        </strong></span></p>
        <p><span style="font-size: 12px;"><em>
            ${renderTime()}
        </em></span></p>
        ${content}
        `)
        console.log(e.target.value)
    }

    const handleChange = (newContent) => {
        console.log(newContent)
        setContent(newContent)
        setReview(`
        <p><span style="font-size: 20px;"><strong>
            ${title.length !== 0 ? title : "Không có"}
        </strong></span></p>
        <p><span style="font-size: 14px;"><em>
            ${renderTime()}
        </em></span></p>
        ${newContent}
        `)
    }
    return (
        <div className='add-announcement'>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div onClick={() => { navigate(-1) }} style={{ display: 'flex', color: ' #747474', cursor: 'pointer' }} >
                    <BsArrow90DegLeft fontSize={20} style={{ marginRight: '10px' }}></BsArrow90DegLeft>
                    <p style={{ lineHeight: '17px', fontSize: '14px' }}>Danh sách thông báo</p>
                </div>
                <div className='btn-add' style={{ display: 'flex', cursor: 'pointer' }} >
                    <AiFillFileAdd fontSize={20} style={{ marginRight: '10px' }}></AiFillFileAdd>
                    <p style={{ lineHeight: '17px', fontSize: '16px', fontWeight: '700' }}>Thêm</p>
                </div>
            </div>
            <Container spacing={2} style={{ marginTop: '20px', height: '90%', overflow: 'hidden' }}>
                <Grid container spacing={2}>
                    <Grid sm={6}>
                        <div className='name'>
                            Tên thông báo
                        </div>
                        <input onChange={handleChangeTitle} type='text'></input>
                        <div className='name'>
                            Nội dung thông báo
                        </div>
                        <div style={{ paddingRight: '10px' }}>
                            <div className='create-content'>
                                <SunEditor
                                    setOptions={{
                                        buttonList: [
                                            ['undo', 'redo'],
                                            ['font', 'fontSize', 'formatBlock'],
                                            ['bold', 'underline', 'italic'],
                                            ['fontColor', 'hiliteColor', 'textStyle'],
                                            ['align', 'horizontalRule', 'list', 'lineHeight'],
                                        ]
                                    }}
                                    placeholder="Please type here..."
                                    defaultValue="<p>The editor's default value</p>"
                                    autoFocus={true}
                                    onChange={handleChange}
                                ></SunEditor>
                            </div>
                        </div>
                    </Grid>
                    <Grid sm={6}>
                        <div className='name'>
                            Xem trước
                        </div>
                        <div className='review-content'>
                            <SunEditor
                                disableToolbar={true}
                                hideToolbar={true}
                                disable={true}
                                setContents={review}
                            ></SunEditor>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}

export default AddAnnouncement;