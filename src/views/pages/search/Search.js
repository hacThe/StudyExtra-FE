import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container } from "react-bootstrap";
import "./Search.scss";
import GroupButton from "./Components/GroupButton";
import Exam from "./Components/Exam";
import Document from "./Components/Document";
import Lesson from "./Components/Lesson";
import Courses from "./Components/Courses";
import { searchAction } from "../../../actions/search.action";

const Search = () => {
  const dispatch = useDispatch();
  const [active, setActive] = useState("de-thi");
  const searchRedux = useSelector((state) => state.search.search);
  const exams = useSelector((state) => state.search.exams) || [];
  const courses = useSelector((state) => state.search.courses) || [];

  const handleClickChangeType = (type) => {
    setActive(type);
  };

  useEffect(() => {
    const getData = async () => {
      dispatch(searchAction.getDataFromSearch(searchRedux));
      // axios.get(`http://localhost:5000/api/search/getSearchData?search=${searchRedux.search}`)
      //     .then(res => {
      //         setExams(res.data.exam)
      //         setCourses(res.data.course)
      //         console.log(res)
      //     })
      //     .catch(err => {
      //         console.log(err)
      //     })
    };
    getData();
  }, [searchRedux, dispatch]);

  useEffect(() => {
    // dispatch(searchAction.getDataFromSearch(undefined))
  }, []);

  const render = () => {
    switch (active) {
      case "de-thi":
        return <Exam exam={exams}></Exam>;
      case "tai-lieu":
        return <Document document={exams}></Document>;
      //   case "bai-hoc":
      //     return <Lesson lesson={courses}></Lesson>;
      case "khoa-hoc":
        return <Courses course={courses}></Courses>;
      default:
        return <Exam exam={exams}></Exam>;
    }
  };

  return (
    <Container maxWidth={"xl"}>
      <div className="search">
        {searchRedux.length !== 0 ? (
          <p
            style={{
              fontSize: "24px",
              fontWeight: "600",
              fontFamily: "'Montserrat', san-serif",
            }}
          >
            Kết quả tìm kiếm cho "
            <span style={{ color: "#7B68EE" }}>{searchRedux}</span>"
          </p>
        ) : null}
        <GroupButton
          active={active}
          handleClickChangeType={handleClickChangeType}
        ></GroupButton>
        <div style={{ marginTop: "15px" }}>{render()}</div>
      </div>
      <div
        className=""
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <img
          style={{ borderRadius: "10px", margin: "auto", marginBottom: "48px" }}
          src="./img/banner.png"
          width="80%"
          alt=""
        />
      </div>
    </Container>
  );
};

export default Search;
