import React from 'react';
import '../scss/Notion.scss';
import { IoIosSave } from "react-icons/io";
import { MdDownload } from "react-icons/md";

const Notion= () => {
    return (
        <div className="notion-wrapper">
            <div className="notion-container">
                <div className="notion-controller">
                    <IoIosSave className='controller-icon' size={20}/>
                    <MdDownload className='controller-icon' size={20}/>
                </div>
                <textarea className='note-editing'>

                </textarea>
            </div>
        </div>
    )
}

export default Notion;