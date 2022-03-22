import React, { useEffect, useState } from 'react';
import YourCourse from './component/YourCourse';
import WholeCourses from './component/WholeCourses';
import PaginationOutlined from './component/PaginationOutlined';
import ButtonGroupCustom from './component/ButtonGroupCustom';
import axios from 'axios'

function Courses(props) {
    const [typeCourse, setTypeCourse] = useState('all');
    const [courses, setCourses] = useState([]);
    const [coursesCurrent, setCoursesCurrent] = useState([]);
    //của trang khóa học của bạn
    const [currentPageInYourCourses, setCurrentPageInYourCourses] = useState(1);
    //của trang tatas cả khóa học
    const [currentPage, setCurrentPage] = useState(1);
    React.useEffect(async () => {
        await axios.get(`http://localhost:5000/api/courses/getAllCourses`)
            .then(res => {
                setCourses(res.data.data)
                setCoursesCurrent(res.data.data)
            }).catch(err => {
                console.log(err)
            })
    }, [])


    const onChangeCourses = (currentType) => {
        if (currentType == 'all') {
            setCoursesCurrent(courses);
            setCurrentPage(1);
        } else {
            setCurrentPage(1);
            let index = [];
            courses.map(course => {
                if (course.categogy == currentType) {
                    console.log(course)
                    index.push(course)
                }
            })
            setCoursesCurrent(index);
        }
        setTypeCourse(currentType);
    }


    return (
        <div className="courses">
            <h1 style={{ padding: '40px 20px', fontSize: '28px' }}>Khóa học của bạn</h1>
            <YourCourse currentPageInYourCourses={currentPageInYourCourses}  courses={courses}></YourCourse>
            <PaginationOutlined   setCurrentPageInYourCourses={setCurrentPageInYourCourses} index={courses.length}></PaginationOutlined>
            <h1 style={{ padding: '40px 20px', fontSize: '28px' }}>Toàn bộ khóa học</h1>
            <ButtonGroupCustom  typeCourse={typeCourse} onChangeCourses={onChangeCourses} setTypeCourse={setTypeCourse}></ButtonGroupCustom>
            <WholeCourses currentPage={currentPage} coursesCurrent={coursesCurrent}></WholeCourses>
            <PaginationOutlined setCurrentPage={setCurrentPage} index={coursesCurrent.length}></PaginationOutlined>
        </div>
    );
}

export default Courses;