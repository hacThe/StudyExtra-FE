import React, { useEffect, useState } from "react";
import { AiOutlineExport } from "react-icons/ai";
import CourseChapterList from "../component/CourseChapterList";
import { useDispatch, useSelector } from "react-redux";
import BackToPageButton from "../../../../components/BackToPageButton";
import LeadingIconButton from "../../../../components/LeadingIconButton";
import ChapterFormModal from "./component/ChapterFormModal";
import { courseAction } from "../../../../../actions/course.action";
import { useNavigate, useParams } from "react-router-dom";
import AddLessonModal from "./component/AddLessonModal";
import EditLessonModal from "./component/EditLessonModal";
function ChapterManager(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  const course = useSelector((state) => state.course.course) || {};
  const [chapterList, setChapterList] = useState(course.chapters || []);
  const [addChapterForm, setAddChapterForm] = useState(false);
  const [editChapterForm, setEditChapterForm] = useState(false);
  const [addLessonForm, setAddLessonForm] = useState(false);
  const [editLessonForm, setEditLessonForm] = useState(false);
  const [currentChapter, setCurrentChapter] = useState();
  const [currentLesson, setCurrentLesson] = useState();
  useEffect(() => {
    if (!course || !course.name) {
      console.log("get course nè");
      dispatch(courseAction.getOne(id));
    }
  }, []);
  const handleCloseModal = () => {
    setAddChapterForm(false);
    setEditChapterForm(false);
    setAddLessonForm(false);
    setEditLessonForm(false);
  };

  function editChapterOnClick(chapter, index) {
    setCurrentChapter({ ...chapter, index });
    setEditChapterForm(true);
  }

  const AddLessonOnClick = (chapter, index) => {
    console.log({ chapter, index }, "add onclick truyền lên nè");
    setCurrentChapter({ ...chapter, index });
    setAddLessonForm(true);
  };

  const EditLessonOnClick = (lesson, chapter, index) => {
    console.log({lesson, chapter, index }, "add onclick truyền lên nè");
    setCurrentChapter({ ...chapter, index });
    setCurrentLesson(lesson)
    setEditLessonForm(true);
  };


  const handleAddChapterOnClick = (values) => {
    dispatch(
      courseAction.addChapter({ ...values, id }, course._id, handleCloseModal)
    );
  };

  const handleEditChapterOnClick = (values) => {
    dispatch(courseAction.editChapter({ ...values }, handleCloseModal));
  };

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

      {addLessonForm && (
        <AddLessonModal
          open={addLessonForm}
          handleClose={handleCloseModal}
          course={course}
          chapter={currentChapter}
        />
      )}
      
      {editLessonForm && (
        <EditLessonModal
          open={editLessonForm}
          handleClose={handleCloseModal}
          course={course}
          chapter={currentChapter}
          lesson={currentLesson}
        />
      )}
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

      <CourseChapterList
        editLessonOnClick={EditLessonOnClick}
        addLessonOnClick={AddLessonOnClick}
        editChapterOnClick={editChapterOnClick}
        chapters={course.chapters}
        setValues={setChapterList}
      />
      <button
        onClick={() => {
          setAddChapterForm(true);
        }}
      >
        Thêm chương mới
      </button>
    </div>
  );
}

export default ChapterManager;
