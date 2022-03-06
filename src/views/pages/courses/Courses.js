import React from 'react';
import YourCourse from './component/YourCourse';
import WholeCourses from './component/WholeCourses';
import PaginationOutlined from './component/PaginationOutlined';
import ButtonGroupCustom from './component/ButtonGroupCustom';

function Courses(props) {
    return (
        <div style={{ marginLeft: '88px' }} className="courses">
            <h1 style={{padding:'40px 20px'}}>Khóa học của bạn</h1>
            <YourCourse></YourCourse>
            <PaginationOutlined></PaginationOutlined>
            <h1 style={{padding:'40px 20px'}}>Toàn bộ khóa học</h1>
            <ButtonGroupCustom></ButtonGroupCustom>
            <WholeCourses></WholeCourses>
            <PaginationOutlined></PaginationOutlined>
        </div>
    );
}

export default Courses;