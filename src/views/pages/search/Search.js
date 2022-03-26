import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import './Search.scss'
import GroupButton from "./Components/GroupButton";
import Exam from "./Components/Exam";
import Document from "./Components/Document";
import Lesson from "./Components/Lesson";
import Courses from "./Components/Courses";

const Search = () => {
    const [active, setActive] = useState('de-thi');
    const searchRedux = useSelector(state => state.search.search)
    const handleClickChangeType = (type) => {
        setActive(type)
    }



    const render = () => {
        switch (active) {
            case 'de-thi':
                return (<Exam></Exam>)
            case 'tai-lieu':
                return (<Document></Document>)
            case 'bai-hoc':
                return (<Lesson></Lesson>)
            case 'khoa-hoc':
                return (<Courses></Courses>)
            default:
                return <Exam></Exam>
        }
    }

    return (
        <div className="search">
            <p style={{ fontSize: '28px', fontWeight: '700', fontFamily: "'Montserrat', san-serif" }}>
                Kết quả tìm kiếm cho "<span style={{ color: '#7B68EE' }}>{searchRedux}</span>"
            </p>
            <GroupButton active={active} handleClickChangeType={handleClickChangeType}></GroupButton>
            {
                render()
            }
        </div>
    )
}

export default Search