import React, { useState } from "react";
import "../CourseDetail.scss";
import { Grid } from "@mui/material";

function CourseDetailLeftSide({ course }) {
  console.log({ course });

  function CourseChapterToogle({ index, chapter, showLesson }) {
    const [visible, setvisible] = useState(!!showLesson);

    function toogleLessonTile() {
      setvisible(!visible);
    }

    return (
      <div className="chapter-wrapper">
        <div
          onClick={toogleLessonTile}
          dataBefore={!visible ? "+" : "-"}
          className="chapter-toogle display-flex justify-content-between"
        >
          <span className="chapter-name">{`${index + 1}. ${
            chapter.name
          }`}</span>
          <span className="chapter-count">{`${
            chapter.lessons?.length || 0
          } bài học`}</span>
        </div>

        {visible && <CourseLessonTile lessons={chapter.lessons} />}
      </div>
    );
  }

  function CourseLessonTile({ lessons }) {
    return (
      <>
        <div className="lesson-list">
          {lessons.map((lesson) => {
            return (
              <div className="course-lesson-tile display-flex justify-content-between">
                <div className="align-center">
                  <svg
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
                <span className="lesson-time">{`${lesson.time}`}</span>
              </div>
            );
          })}
        </div>
      </>
    );
  }

  function CourseDetailCheckList({ list }) {
    return (
      <Grid container spacing={2}>
        {list.map((item) => {
          return <CheckListTile content={item} />;
        })}
      </Grid>
    );
  }

  function CheckListTile(props) {
    return (
      <Grid item xs={6}>
        <div className="check-list-tile">
          <div className="check-list-icon">
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M9 0.75C4.44375 0.75 0.75 4.44375 0.75 9C0.75 13.5562 4.44375 17.25 9 17.25C13.5562 17.25 17.25 13.5562 17.25 9C17.25 4.44375 13.5562 0.75 9 0.75ZM12.576 7.605C12.6418 7.52973 12.692 7.44205 12.7234 7.34713C12.7549 7.2522 12.7671 7.15194 12.7592 7.05224C12.7513 6.95254 12.7236 6.85542 12.6777 6.7666C12.6317 6.67777 12.5685 6.59903 12.4917 6.53501C12.4148 6.47098 12.326 6.42297 12.2303 6.3938C12.1347 6.36462 12.0341 6.35487 11.9347 6.36512C11.8352 6.37537 11.7388 6.40541 11.6511 6.45347C11.5634 6.50154 11.4862 6.56666 11.424 6.645L8.199 10.5142L6.53025 8.84475C6.3888 8.70813 6.19935 8.63254 6.0027 8.63424C5.80605 8.63595 5.61794 8.71483 5.47889 8.85389C5.33983 8.99294 5.26095 9.18105 5.25924 9.3777C5.25754 9.57435 5.33313 9.7638 5.46975 9.90525L7.71975 12.1553C7.79344 12.2289 7.88167 12.2864 7.97881 12.324C8.07595 12.3617 8.17987 12.3787 8.28395 12.374C8.38803 12.3693 8.48998 12.3429 8.58331 12.2966C8.67663 12.2503 8.75929 12.185 8.826 12.105L12.576 7.605Z"
                fill="#7B68EE"
              />
            </svg>
          </div>

          <div className="check-list-content">{props.content}</div>
        </div>
      </Grid>
    );
  }

  function CourseDescriptionSection() {
    return (
      <div className="course-description-section">
        <h1 className="course-name">{course.name}</h1>

        <p className="course-description">{course.description}</p>
      </div>
    );
  }

  function CourseOverviewSection() {
    return (
      <div className="course-overview-section">
        <h2 className="section-title">Tổng quan khóa học</h2>
        <CourseDetailCheckList list={course.contents}></CourseDetailCheckList>
      </div>
    );
  }

  function CourseQualified() {
    return (
      <div className="course-qualified">
        <h2 className="section-title">Yêu cầu trình độ</h2>

        <CourseDetailCheckList
          list={course.requirements}
        ></CourseDetailCheckList>
      </div>
    );
  }

  function CourseLessonSection({ chapters }) {
    return (
      <div className="course-lesson-section">
        <h2 className="section-title">Nội dung khóa học</h2>

        <p className="course-volume-description">
          {`${chapters.length} chương - 35 bài học - Thời lượng 150 giờ 39 phút`}
        </p>
        {chapters.map((item, index) => {
          return (
            <CourseChapterToogle
              index={index}
              chapter={item}
              showLesson={index === 0}
            />
          );
        })}
      </div>
    );
  }

  return (
    <div className="left-side-wrapper">
      <CourseDescriptionSection />

      <CourseOverviewSection />

      <CourseLessonSection chapters={course.chapters} />

      <CourseQualified />
    </div>
  );
}
export default CourseDetailLeftSide;
