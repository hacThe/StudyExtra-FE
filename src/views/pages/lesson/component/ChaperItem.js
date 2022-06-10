import React from "react";
import "../scss/ChapterItem.scss";
import LessonItem from "./LessonItem";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
const ChapterItem = (props) => {
  const [open, setOpen] = React.useState(true);
  const changeOpen = (event, newValue) => {
    setOpen(newValue);
    // console.log("newValue", newValue)
  };
  // console.log("chapter props", props);
  return (
    <div className="chapter-item-wrapper">
      <div
        className="chapter-item-container"
        onClick={(e) => changeOpen(e, !open)}
      >
        <div className="wrapper">
          <p className="chapter-title">
            Phần {props.index + 1}: {props.chapter.name}
          </p>
          <div className="chapter-detail">
            {props.chapter.lessons ? props.chapter.lessons.length : 0} bài học
          </div>
        </div>
        <div className="chapter-open">
          <IoIosArrowDown
            size={20}
            onClick={(e) => changeOpen(e, true)}
            className={!open ? "" : "hide"}
          />
          <IoIosArrowUp
            size={20}
            onClick={(e) => changeOpen(e, false)}
            className={open ? "" : "hide"}
          />
        </div>
      </div>
      {/* Lesson item section */}
      <div
        className={
          open ? "lesson-items-container" : "lesson-items-container hide"
        }
      >
        {!props.chapter.lessons
          ? null
          : props.chapter.lessons.map((value, index) => {
              return (
                <LessonItem
                  chapterIndex={props.index}
                  lesson={value}
                  key={index}
                  lessonIndex={index}
                  changeIndex={props.changeIndex}
                />
              );
            })}
      </div>
    </div>
  );
};

export default ChapterItem;
