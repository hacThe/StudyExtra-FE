import React, { useEffect, useState } from "react";
import { AiOutlineExport } from "react-icons/ai";
import CourseChapterList from "../component/CourseChapterList";
import { useDispatch, useSelector } from "react-redux";
import BackToPageButton from "../../../../components/BackToPageButton";
import LeadingIconButton from "../../../../components/LeadingIconButton";
import ChapterFormModal from "./component/ChapterFormModal";
import { courseAction } from "../../../../../actions/course.action";
import { useParams } from "react-router-dom";
function ChapterManager(props) {
  const dispatch = useDispatch()
  const { id } = useParams()
  const course = useSelector((state) => state.course.course) || {};
  const [chapterList, setChapterList] = useState(course.chapters || []);
  const [addChapterForm, setAddChapterForm] = useState(false);
  const [editChapterForm, setEditChapterForm] = useState(false);
  const [currentChapter, setCurrentChapter] = useState();
  useEffect(() => {
    if (!course || !course.name) {
      console.log('get course nè')
      dispatch(courseAction.getOne(id));
    }
  }, []);
  const handleCloseModal = () =>{
    setAddChapterForm(false);
    setEditChapterForm(false)
  }


  function editChapterOnClick(chapter, index){
    setCurrentChapter({...chapter, index})
    setEditChapterForm(true)
  }

  const handleAddChapterOnClick = (values) => {
    dispatch(courseAction.addChapter({...values, id},course._id, handleCloseModal))
  };

  const handleEditChapterOnClick = (values) =>{
    dispatch(courseAction.editChapter({...values}, handleCloseModal))

  }


  
  return (
    <div className="manager-fa-ke-modal edit-course-wrapper">
      <ChapterFormModal
        open={addChapterForm}
        handleClose={() => {
          setAddChapterForm(false);
        }}
        course={course}
        editModal={false}
        chapter={{}}
        onSubmit={handleAddChapterOnClick}
      />
      <ChapterFormModal
        open={editChapterForm}
        handleClose={() => {
          setEditChapterForm(false);
        }}
        course={course}
        editModal={true}
        chapter={currentChapter}
        onSubmit={handleEditChapterOnClick}
      />
      <div className="justify-content-between top-action-bar">
        <BackToPageButton content="Trở lại trang trước" />
        <div className="course-action align-center">
          <LeadingIconButton icon={<AiOutlineExport />} content="Xuất Excel" />
        </div>
      </div>

      <h1>NỘI DUNG KHÓA HỌC: {course.name}</h1>
      {course.chapters.length > 0 ? (
        <span
          style={{
            fontSize: "14px",
            margin: "12px 0",
            display: "inline-block",
          }}
        >
          Danh sách các chương của khóa học
        </span>
      ) : (
        <span
          style={{
            fontSize: "14px",
            margin: "12px 0",
            display: "inline-block",
          }}
        >
          Khóa học trống, vui lòng thêm chương mới
        </span>
      )}

      <CourseChapterList editChapterOnClick={editChapterOnClick} chapters={course.chapters} setValues={setChapterList} />
      <button onClick={()=>{setAddChapterForm(true)}}>Thêm chương mới</button>
    </div>
  );
}

export default ChapterManager;
