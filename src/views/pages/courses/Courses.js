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

//Export docs
import handleExport from "../../../utilities/ExportDocs";


function Courses(props) {

    const user = useSelector(state => state.user)
    const dispatch = useDispatch();
    const courses =
        useSelector((state) => {
            return state.course.courses;
        }) || [];
    const [typeCourse, setTypeCourse] = useState("all");
    const [coursesCurrent, setCoursesCurrent] = useState(courses);

    // //của trang khóa học của bạn
    const [currentPageInYourCourses, setCurrentPageInYourCourses] = useState(1);
    //của trang tatas cả khóa học
    const [currentPage, setCurrentPage] = useState(1);

    React.useEffect(async () => {
        console.log(user)
        dispatch(courseAction.getAllCourse());
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
            console.log(list)
        };
        reader.readAsBinaryString(e.target.files[0]);
    };
    //Export

    const [mockDataExportDocs, isMock] = React.useState([
        {
            id: 1,
            name: 'Phuoc',
            class: 'KTPM 2019',
            weight: '64kg',
            height: '1m7'
        },
        {
            id: 2,
            name: 'Phi',
            class: 'KTPM 2019',
            weight: '64kg',
            height: '1m7'
        },
        {
            id: 3,
            name: 'Thế',
            class: 'KTPM 2019',
            weight: '64kg',
            height: '1m7'
        },
        {
            id: 4,
            name: 'Thành',
            class: 'KTPM 2019',
            weight: '64kg',
            height: '1m7'
        },
    ])



    return (
        <Container maxWidth={'xl'}>
            <div className="courses">
                <h1 style={{ padding: "40px 20px", fontSize: "28px" }}>
                    Khóa học của bạn
                </h1>
                <YourCourse
                    currentPageInYourCourses={currentPageInYourCourses}
                    courses={user.currentUser ? user.currentUser.courseID : []}
                ></YourCourse>
                <PaginationOutlined
                    setCurrentPageInYourCourses={setCurrentPageInYourCourses}
                    index={user.currentUser ? user.currentUser.courseID.length : 0}
                ></PaginationOutlined>
                <h1 style={{ padding: '40px 20px', fontSize: '28px' }}>Toàn bộ khóa học</h1>
                <ButtonGroupCustom
                    typeCourse={typeCourse}
                    onChangeCourses={onChangeCourses}
                    setTypeCourse={setTypeCourse}
                ></ButtonGroupCustom>
                <WholeCourses
                    currentPage={currentPage}
                    coursesCurrent={coursesCurrent}
                ></WholeCourses>
                <PaginationOutlined setCurrentPage={setCurrentPage} index={coursesCurrent.length}></PaginationOutlined>
                {/* <input type="file" id="fileInput" onChange={(e) => showFile(e)} /> */}
                {/* <div style={{ border: '1px solid black', padding: '10px', display: 'flex', borderRadius: '8px', width: 'fit-content', cursor: 'pointer' }} onClick={() => handleExport(mockDataExportDocs, 'user', 'MANAGE USER')}>Export excel</div> */}
            </div>
        </Container>

    );
}

export default Courses;