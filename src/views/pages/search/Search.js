import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import './Search.scss'
import GroupButton from "./Components/GroupButton";
import Exam from "./Components/Exam";
import Document from "./Components/Document";
import Lesson from "./Components/Lesson";
import Courses from "./Components/Courses";
import { searchAction } from '../../../actions/search.action'

const Search = () => {
    const dispatch = useDispatch()
    const [active, setActive] = useState('de-thi');
    const searchRedux = useSelector(state => state.search.search)
    const exams = useSelector(state => state.search.exams)
    const courses = useSelector(state=>state.search.courses)
    const handleClickChangeType = (type) => {
        setActive(type)
    }

    // const [exams, setExams] = useState([])
    // const [courses, setCourses] = useState([])
    useEffect(() => {
       
        const getData = async () => {
            dispatch(searchAction.getDataFromSearch(searchRedux))
            // axios.get(`http://localhost:5000/api/search/getSearchData?search=${searchRedux.search}`)
            //     .then(res => {
            //         setExams(res.data.exam)
            //         setCourses(res.data.course)
            //         console.log(res)
            //     })
            //     .catch(err => {
            //         console.log(err)
            //     })
        }
        getData();
    }, [searchRedux])

    useEffect(() => {
        dispatch(searchAction.getDataFromSearch(undefined))
        // axios.get(`http://localhost:5000/api/search/getSearchData?search=`)
        //     .then(res => {
        //         setExams(res.data.exam)
        //         setCourses(res.data.course)
        //         console.log(res)
        //     })
        //     .catch(err => {
        //         console.log(err)
        //     })
    }, [])


    const render = () => {
        switch (active) {
            case 'de-thi':
                return (<Exam exam={exams}></Exam>)
            case 'tai-lieu':
                return (<Document document={exams}></Document>)
            case 'bai-hoc':
                return (<Lesson lesson={courses}></Lesson>)
            case 'khoa-hoc':
                return (<Courses course={courses}></Courses>)
            default:
                return <Exam></Exam>
        }
    }

    return (
        <div className="search">
            {searchRedux.length !== 0 ? (
                <p style={{ fontSize: '28px', fontWeight: '700', fontFamily: "'Montserrat', san-serif" }}>
                    Kết quả tìm kiếm cho "<span style={{ color: '#7B68EE' }}>{searchRedux}</span>"
                </p>
            ) : null}
            <GroupButton active={active} handleClickChangeType={handleClickChangeType}></GroupButton>
            <div style={{ marginTop: '15px' }}>
                {
                    render()
                }
            </div>

        </div>
    )
}

export default Search