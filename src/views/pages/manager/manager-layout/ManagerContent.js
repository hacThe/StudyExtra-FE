import React from 'react';
import { Outlet } from "react-router-dom";
import ManagerHeader from './ManagerHeader';
import ManagerSideBar from './ManagerSideBar';
import "./ManagerContent.scss"

function ManagerContent(props) {
    return (
        <div className='manager-wrapper'>
            <ManagerSideBar/>
            <div className="manager-content-wrapper">
                <ManagerHeader/>
                <Outlet/>
            </div>            
        </div>
    );
}

export default ManagerContent;