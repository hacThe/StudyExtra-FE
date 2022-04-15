import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container } from "@mui/material";
import YourCourse from "./component/YourCourse";
import WholeCourses from "./component/WholeCourses";
import PaginationOutlined from "./component/PaginationOutlined";
import ButtonGroupCustom from "./component/ButtonGroupCustom";
import { courseAction } from "../../../actions/course.action";
import handleStringDocsToMultipleChoice from '../../../utilities/ConvertDocsToMultipleChoice.util'
//Import docs
import Docxtemplater from "docxtemplater";
import PizZip from 'pizzip'
function Courses(props) {
    const dispatch = useDispatch();
    const courses =
        useSelector((state) => {

            return state.course.courses;
        }) || [];
    const [typeCourse, setTypeCourse] = useState("all");
    const [coursesCurrent, setCoursesCurrent] = useState([]);


    // //của trang khóa học của bạn
    const [currentPageInYourCourses, setCurrentPageInYourCourses] = useState(1);
    //của trang tatas cả khóa học
    const [currentPage, setCurrentPage] = useState(1);

    React.useEffect(async () => {
        dispatch(courseAction.getAllCourse());
        setCoursesCurrent(courses)
    }, []);


    const onChangeCourses = (currentType) => {
        if (currentType == "all") {
            setCoursesCurrent(courses);
            setCurrentPage(1);
        } else {
            setCurrentPage(1);
            let index = [];
            courses.map((course) => {
                if (course.categogy == currentType) {
                    console.log(course);
                    index.push(course);
                }
            });
            setCoursesCurrent(index);
        }
        setTypeCourse(currentType);
    };

    //Import
    const showFile = async (e) => {
        e.preventDefault();
        const reader = new FileReader();
        reader.onload = async (e) => {
            const content = e.target.result;
            var doc = new Docxtemplater(new PizZip(content), { delimiters: { start: '12op1j2po1j2poj1po', end: 'op21j4po21jp4oj1op24j' } });
            var text = doc.getFullText();
            var list = handleStringDocsToMultipleChoice(text)
            if (!list) {
                return 'Sai định dạng'
            } else {
                console.log(list)
            }
        };
        reader.readAsBinaryString(e.target.files[0]);
    };

    
    return (
        <Container maxWidth={'xl'}>
            <div className="courses">
                <h1 style={{ padding: "40px 20px", fontSize: "28px" }}>
                    Khóa học của bạn
                </h1>
                <YourCourse
                    currentPageInYourCourses={currentPageInYourCourses}
                    courses={courses}
                ></YourCourse>
                <PaginationOutlined
                    setCurrentPageInYourCourses={setCurrentPageInYourCourses}
                    index={courses.length}
                ></PaginationOutlined>

                <h1 style={{ padding: '40px 20px', fontSize: '28px' }}>Toàn bộ khóa học</h1>
                <ButtonGroupCustom typeCourse={typeCourse} onChangeCourses={onChangeCourses} setTypeCourse={setTypeCourse}></ButtonGroupCustom>
                <WholeCourses currentPage={currentPage} coursesCurrent={coursesCurrent}></WholeCourses>
                <PaginationOutlined setCurrentPage={setCurrentPage} index={coursesCurrent.length}></PaginationOutlined>
                <input type="file" id="fileInput" onChange={(e) => showFile(e)} />
            </div>
        </Container>

    );
}

export default Courses;