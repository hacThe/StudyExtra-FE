import React, { useState } from "react";
import BackToPageButton from "../../../../components/BackToPageButton";
import LeadingIconButton from "../../../../components/LeadingIconButton";
import { AiOutlineExport } from "react-icons/ai";
import CourseChapterList from "../component/CourseChapterList";
import { useSelector } from "react-redux";
function ChapterManager(props) {
  const course = useSelector((state) => state.course.course)
  const [chapterList, setChapterList] = useState(course.chapters || []);


  const handleAddChapterOnClick = ()=>{

  }
  return (
    <div className="manager-fa-ke-modal edit-course-wrapper">
      <div className="justify-content-between top-action-bar">
        <BackToPageButton content="Trở lại trang trước" />
        <div className="course-action align-center">
          <LeadingIconButton icon={<AiOutlineExport />} content="Xuất Excel" />
        </div>
      </div>

      <h1>NỘI DUNG KHÓA HỌC: {course.name}</h1>
      {
          course.chapters ? (
              <span style={{fontSize: "14px", margin: "12px 0", display: "inline-block"}}>Danh sách các chương của khóa học</span>
          ) : (
            <span style={{fontSize: "14px", margin: "12px 0", display: "inline-block"}}>Khóa học trống, vui lòng thêm chương mới</span>

          )
      }

      <CourseChapterList chapters={chapterList} setValues={setChapterList} />
      <div className="justify-content-between">
        <input style={{flex: '1', marginRight: "12px"}} type="text" id="newChapter" name="newChapter" />
        <p onClick={handleAddChapterOnClick} className="se-btn">
          Thêm
        </p>
      </div>
    </div>
  );
}

export default ChapterManager;
