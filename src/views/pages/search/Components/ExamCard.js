import React, { useState } from 'react';
import '../Search.scss'
import { GrDocumentPdf } from 'react-icons/gr'
import { AiOutlineFolderView } from 'react-icons/ai'
import axios from 'axios';

function ExamCard(props) {
    const [view, setView] = useState(null)

    const handleClickRaiseView = async () => {
        await axios.post(
            `http://localhost:5000/api/search/raise-view-exam`,
            { name: props.exam.name, _id: props.exam._id, view: view ? view : props.exam.view }
        ).then(res => {
            console.log(res.data);
            if (res.data.status === 200) {
                setView(res.data.data.view)
            }
        })
    }
    return (
        <a onClick={handleClickRaiseView} className='custom-a' href={props.exam.link} target='_blank'>
            <div className='custom-exam'>
                <div style={{ display: 'flex', marginLeft: '15px' }}>
                    <GrDocumentPdf style={{ fontSize: '25px', marginRight: '25px' }}></GrDocumentPdf>
                    <div style={{ lineHeight: '30px' }}>{props.exam.name}</div>
                </div>
                <div style={{ display: 'flex', color: '#838383' }}>
                    <AiOutlineFolderView style={{ marginRight: '12px' }}></AiOutlineFolderView>
                    <div style={{ fontSize: '14px', marginRight: '20px' }}>{view ? view : props.exam.view}</div>
                </div>
            </div>
        </a>
    );
}

export default ExamCard;