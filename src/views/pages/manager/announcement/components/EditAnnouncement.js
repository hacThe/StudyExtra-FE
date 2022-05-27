import React, { useEffect } from 'react';
import './AddAnnouncement.scss'
import { BsArrow90DegLeft } from 'react-icons/bs'
import { AiFillFileAdd } from 'react-icons/ai'
import { Container, Grid } from '@mui/material'
import { useNavigate } from "react-router-dom";
import SunEditor, { buttonList } from 'suneditor-react'
import 'suneditor/dist/css/suneditor.min.css'; // Import Sun Editor's CSS File
import axios from 'axios'
import URL from '../../../../../services/api/config'
import { useParams } from 'react-router-dom'
import { AiFillDelete, AiFillSave } from 'react-icons/ai'
import { showToast, hideToast } from '../../../../../actions/toast.action'
import {useDispatch} from 'react-redux'
function EditAnnouncement(props) {
    const { slug } = useParams()
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const [content, setContent] = React.useState('');
    const [title, setTitle] = React.useState('');
    const [review, setReview] = React.useState('');

    useEffect(() => {
        const fetApi = async () => {
            await axios.get(URL.URL_GET_ANNOUNCEMENT + slug)
                .then(res => {
                    if (res.status == 200) {
                        console.log(res.data.data.content)
                        setContent(res.data.data.content)
                        setTitle(res.data.data.title)
                        setReview(`
                            <p><span style="font-size: 20px;color: #B94A48;"><strong>
                                ${res.data.data.title !== 0 ? res.data.data.title : "Không có"}
                            </strong></span></p>
                            <p><span style="font-size: 14px;"><em>
                                ${renderTime()}
                            </em></span></p>
                            ${res.data.data.content}
                        `)
                    } else {
                        console.log("Thất bại")
                    }

                })
                .catch(err => {
                    console.log("Thành công")
                })
        }
        fetApi()
    }, [])

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
        <p><span style="font-size: 20px;color: #B94A48;"><strong>
            ${e.target.value.length !== 0 ? e.target.value : "Không có"}
        </strong></span></p>
        <p><span style="font-size: 12px;"><em>
            ${renderTime()}
        </em></span></p>
        ${content}
        `)
    }

    const handleChange = (newContent) => {
        setContent(newContent)
        setReview(`
        <p><span style="font-size: 20px;color: #B94A48;"><strong>
            ${title }
        </strong></span></p>
        <p><span style="font-size: 14px;"><em>
            ${renderTime()}
        </em></span></p>
        ${newContent}
        `)
    }

    const handleUpdateAnnouncement = async () => {
        await axios.post(URL.URL_UPDATE_ANNOUNCEMENT, {
            slug,
            content,
            title
        }).then(res => {
            if (res.data.status == 200) {
                dispatch('success', 'Chỉnh sửa thông báo thành công!')
                navigate('/quan-ly/thong-bao-chung')
            }
        }).catch(err => {
            dispatch('fail', 'Chỉnh sửa thông báo thất bại!')
        })
    }

    const handleDeleteAnnouncement = async () => {
        await axios.post(URL.URL_DELETE_ANNOUNCEMENT, {
            slug,
        }).then(res => {
            if (res.data.status == 200) {
                dispatch('success', 'Xóa thông báo thành công!')
                navigate('/quan-ly/thong-bao-chung')
            }
        }).catch(err => {
            dispatch('fail', 'Xóa thông báo thất bại!')

        })
    }

    return (
        <div className='add-announcement'>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div onClick={() => { navigate('/quan-ly/thong-bao-chung') }} style={{ display: 'flex', color: ' #747474', cursor: 'pointer' }} >
                    <BsArrow90DegLeft fontSize={20} style={{ marginRight: '10px' }}></BsArrow90DegLeft>
                    <p style={{ lineHeight: '17px', fontSize: '14px' }}>Danh sách thông báo</p>
                </div>
                <div style={{ display: 'flex' }}>
                    <div className='btn-add' onClick={handleDeleteAnnouncement} style={{ display: 'flex', cursor: 'pointer' }} >
                        <AiFillDelete fontSize={20} style={{ marginRight: '10px' }}></AiFillDelete>
                        <p style={{ lineHeight: '17px', fontSize: '16px', fontWeight: '700' }}>Xóa thông báo</p>
                    </div>
                    <div className='btn-add' onClick={handleUpdateAnnouncement} style={{ display: 'flex', cursor: 'pointer' }} >
                        <AiFillSave fontSize={20} style={{ marginRight: '10px' }}></AiFillSave>
                        <p style={{ lineHeight: '17px', fontSize: '16px', fontWeight: '700' }}>Lưu thay đổi</p>
                    </div>
                </div>
            </div>
            <Grid style={{ marginTop: '20px', height: '90%', overflow: 'hidden' }} container spacing={2}>
                <Grid style={{ paddingLeft: '20px' }} sm={6}>
                    <div className='name'>
                        Tên thông báo
                    </div>
                    <input onChange={handleChangeTitle} defaultValue={title} style={{ fontSize: '14px' }} type='text'></input>
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
                                autoFocus={true}
                                setContents={content}
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
        </div>
    );
}

export default EditAnnouncement;