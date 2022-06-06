import React , {useEffect} from 'react'
import {Grid} from '@mui/material'
import './scss/Lesson.scss';
import Credit from './component/Credit';
import CommentItem from '../overall/components/CommentItem';
import LessonOverall from './component/LessonOverall';
import useWindowDimensions from './functions/useWindowDimensions';
import ChapterItem from './component/ChaperItem.js';
import Notion from './component/Notion';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { lessonActions } from '../../../actions/lesson.action';
const Lesson = () => {
    const dispatch = useDispatch()
    const {id} = useParams()
    console.log(id);
    useEffect(()=>{
        // dispatch(courseAction.getLesson(id))
        dispatch(lessonActions.getCourseInfo(id));
    }, [])


    const { height, width } = useWindowDimensions();
    const [panel, setPanel] = React.useState(1);
    const changePanel = (event, newValue) => {
        setPanel(newValue);
        // console.log("newValue", newValue)
    };

    // useSelector((state) => {
    //     console.log("State nè", state);
    // })

    const currentCourse = useSelector((state) => {
        return state.lesson.currentCourse
    }) || {};

    return (
        <div className="lesson-wrapper">
            <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={12} lg={8} className="lesson-detail">
                    <div className='video-responsive'>
                        <iframe 
                            className="lesson-video" 
                            src="https://www.youtube.com/embed/zueyEdRZQlk" 
                            title="YouTube video player" 
                            allowFullScreen
                        ></iframe>
                    </div>
                    <div className='tab-panel'>
                        <div className='panel-choosing'>
                            <div 
                                onClick={(e) => changePanel(e,1)} 
                                className={panel==1 ? 'panel-choose active' : 'panel-choose'}
                            >
                                Tổng quan
                                <div className='active-bar overall'>

                                </div>
                            </div>
                            
                            <div className='vertical-divider'>
                                
                            </div>
                            <div 
                                onClick={(e) => changePanel(e,2)} 
                                className={panel==2 ? 'panel-choose active' : 'panel-choose'}
                            >
                                Tài liệu
                                <div className='active-bar document'>

                                </div>
                            </div>
                            {
                                (width > 920) ? (null) : (
                                    <div className='vertical-divider'>
                                            
                                    </div>
                                )
                            }
                            {
                                (width > 920) ? (null) : (
                                    <div 
                                        onClick={(e) => changePanel(e,3)} 
                                        className={panel==3 ? 'panel-choose divide active' : 'panel-choose divide'}
                                    >
                                        Nội dung
                                        <div className='active-bar content'>
                                            
                                        </div>
                                    </div>     
                                )
                            }
                            {
                                (width > 920) ? (null) : (
                                    <div className='vertical-divider'>
                                            
                                    </div>
                                )
                            }
                            {
                                (width > 920) ? (null) : (
                                    <div 
                                        onClick={(e) => changePanel(e,4)} 
                                        className={panel==4 ? 'panel-choose active' : 'panel-choose'}
                                    >
                                        Ghi chú
                                        <div className='active-bar notion'>

                                        </div>
                                    </div>
                                )
                            }
                        </div>
                        <div className='horizontal-divider'>
                            
                        </div>
                        <div className='panel-container'>
                            <div className={panel==1 ? 'panel' : 'panel hide'}  >
                                Đây là text về mô tả ngắn cho bài học, ngắn thôi chữ cũng cỡ 200 - 300 ký tự nha
                                
                                <div className="question-section">
                                    <div className="comment-count">35 hỏi đáp</div>
                                    <CommentItem reply={true} image={false} userReply={false}/>
                                    <CommentItem reply={false} image={true} userReply={true}/>
                                </div>
                                <div className="credit-wrapper">
                                    <Credit/>
                                </div>
                            </div>
                            <div className={panel==2 ? 'panel' : 'panel hide'}>
                                {/* Tổng hợp tài liệu liên quan đến bài học: https://www.facebook.com/hienthe.duong.5/ */}
                                <div className="credit-wrapper">
                                    <Credit/>
                                </div>
                            </div>
                            {
                                (width > 920) ? null : (
                                    <div className={panel==3 ? 'panel' : 'panel hide'}  >
                                        {   
                                            !currentCourse.chapters ? null:
                                            currentCourse.chapters.map((value, index, key) => {
                                                return(
                                                    <ChapterItem chapter={value} index={index} key={index}/>
                                                )
                                                
                                            })
                                        }
                                    </div>
                                ) 
                            }
                            {
                                (width > 920) ? null : (
                                    <div className={panel==4 ? 'panel' : 'panel hide'}>
                                        <Notion/>
                                    </div>
                                ) 
                            }
                            
                            
                        </div>
                    </div>
                </Grid>
                {
                    (width < 920) ? null : (
                        <Grid item xs={12} sm={12} md={12} lg={4} className="lesson-overall">
                            <LessonOverall/>
                        </Grid>
                    ) 
                }
                
            </Grid>
        </div>   
        
    )
}

export default Lesson