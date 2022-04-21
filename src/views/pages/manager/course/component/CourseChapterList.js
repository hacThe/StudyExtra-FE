import React, { useState } from "react";
import { GrAddCircle } from "react-icons/gr";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import { Outlet } from "react-router-dom";
import "./CourseChapterList.scss";

function CourseLessonTile({ lesson }) {
  return (
    <div className="course-lesson-tile display-flex justify-content-between">
      <div className="align-center">
        <svg
          style={{ marginRight: "12px" }}
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.5 3H4.5C2.84315 3 1.5 4.34315 1.5 6V12C1.5 13.6569 2.84315 15 4.5 15H13.5C15.1569 15 16.5 13.6569 16.5 12V6C16.5 4.34315 15.1569 3 13.5 3Z"
            stroke="#7B68EE"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M11.25 9L7.5 6.75V11.25L11.25 9Z"
            stroke="#7B68EE"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <span className="lesson-name">{`${lesson.index}. ${lesson.name}`}</span>
      </div>
      <span className="lesson-action display-flex">
        <div className="action-wrapper">
          <AiOutlineEdit size={"2.2rem"} />
        </div>
        <div className="action-wrapper">
          <AiOutlineDelete size={"2.2rem"} />
        </div>
      </span>
    </div>
  );
}

function CourseChapterTile({ chapter }) {
  const [visible, setvisible] = useState(true);

  function toogleLessonTile() {
    setvisible(!visible);
  }

  function addNewChappterOnClick(e) {
    e.stopPropagation();
    alert("action-button-onclick")
  }

  function editChappterOnClick(e) {
    e.stopPropagation();
    alert("action-button-onclick")
  }

  function deleteChappterOnClick(e) {
    e.stopPropagation();
    alert("action-button-onclick")
  }

  return (
    <div className="course-chappter-tile">
      <div
        onClick={toogleLessonTile}
        dataBefore={!visible ? "+" : "-"}
        className="chapter-toogle display-flex justify-content-between"
      >
        <p className="chapter-name">{`${1}. ${"This is chapter name"}`}</p>
        <div className="chappter-action display-flex">
          <div onClick={addNewChappterOnClick} className="action-wrapper">
            <GrAddCircle size={"2.2rem"} />
          </div>
          <div onClick={editChappterOnClick} className="action-wrapper">
            <AiOutlineEdit size={"2.2rem"} />
          </div>
          <div onClick={deleteChappterOnClick} className="action-wrapper">
            <AiOutlineDelete size={"2.2rem"} />
          </div>
        </div>
      </div>

      {visible &&
        chapter.lesson.map((lesson, index) => (
          <div
            className="lesson-tile-wrapper"
            key={`lesson-${lesson.id}-${index}`}
          >
            <CourseLessonTile lesson={lesson} />
          </div>
        ))}
    </div>
  );
}

function CourseChapterList(props) {
  const mockChapterList = [
    {
      id: 3,
      name: "Đây là tên của chương bài học, có thể ngắn hoặc rất rất dài",
      lesson: [
        {
          id: 12,
          name: "Đây là tên của bài học nè nha",
          index: 1,
          time: {
            h: 0,
            m: 35,
            s: 40,
          },
        },
        {
          id: 12,
          name: "Đây là tên của bài học nè nha",
          index: 2,
          time: {
            h: 0,
            m: 35,
            s: 40,
          },
        },
        {
          id: 12,
          name: "Đây là tên của bài học nè nha",
          index: 3,
          time: {
            h: 0,
            m: 35,
            s: 40,
          },
        },
      ],
    },

    {
      id: 3,
      name: "Đây là tên của chương bài học, có thể ngắn hoặc rất rất dài",
      lesson: [
        {
          id: 12,
          name: "Đây là tên của bài học nè nha",
          index: 1,
          time: {
            h: 0,
            m: 35,
            s: 40,
          },
        },
        {
          id: 12,
          name: "Đây là tên của bài học nè nha",
          index: 1,
          time: {
            h: 0,
            m: 35,
            s: 40,
          },
        },
        {
          id: 12,
          name: "Đây là tên của bài học nè nha",
          index: 1,
          time: {
            h: 0,
            m: 35,
            s: 40,
          },
        },
      ],
    },

    {
      id: 3,
      name: "Đây là tên của chương bài học, có thể ngắn hoặc rất rất dài",
      lesson: [
        {
          id: 12,
          name: "Đây là tên của bài học nè nha",
          index: 1,
          time: {
            h: 0,
            m: 35,
            s: 40,
          },
        },
        {
          id: 12,
          name: "Đây là tên của bài học nè nha",
          index: 1,
          time: {
            h: 0,
            m: 35,
            s: 40,
          },
        },
        {
          id: 12,
          name: "Đây là tên của bài học nè nha",
          index: 1,
          time: {
            h: 0,
            m: 35,
            s: 40,
          },
        },
      ],
    },
  ];

  return (
    <div className="course-chapter-list">
      {mockChapterList.map((chapter, index) => (
        <CourseChapterTile
          chapter={chapter}
          key={`chapter-${chapter.id}-${index}`}
        />
      ))}
    </div>
  );
}

export default CourseChapterList;
