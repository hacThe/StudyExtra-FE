import React from 'react';
import '../scss/LessonOverall.scss';
import ChapterItem from './ChaperItem.js';
import Notion from './Notion';

const LessonOverall= () => {
    const [panel, setPanel] = React.useState(1);
    const changePanel = (event, newValue) => {
        setPanel(newValue);
        console.log("newValue", newValue)
    };
    return (
        <div className='lesson-overall-wrapper'>
            <p className="lesson-title">Đây là tên của khoá học</p>
            <div className='tab-panel'>
                <div className='panel-choosing'>
                    <div 
                        onClick={(e) => changePanel(e,1)} 
                        className={panel==1 ? 'panel-choose active' : 'panel-choose'}
                    >
                        Nội dung
                        <div className='active-bar content'>
                            
                        </div>
                    </div>
                    <div className='vertical-divider'>
                        
                    </div>
                    <div 
                        onClick={(e) => changePanel(e,2)} 
                        className={panel==2 ? 'panel-choose active' : 'panel-choose'}
                    >
                        Ghi chú
                        <div className='active-bar notion'>

                        </div>
                    </div>
                </div>
                <div className='horizontal-divider'>
                    
                </div>
                <div className='panel-container'>
                    <div className={panel==1 ? 'panel' : 'panel hide'}  >
                        <ChapterItem></ChapterItem>
                        <ChapterItem></ChapterItem>
                        <ChapterItem></ChapterItem>
                    </div>
                    <div className={panel==2 ? 'panel' : 'panel hide'}>
                        <Notion/>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default LessonOverall;