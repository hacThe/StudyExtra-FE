import React, { useState, useRef, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Grid } from "@mui/material";
import { AiOutlineExport, AiOutlineImport, AiFillDelete } from "react-icons/ai";
import { IoCheckmarkSharp, IoAddCircleSharp } from "react-icons/io5";
import "./SingleExamForm.scss";
import LeadingIconButton from "../../../../components/LeadingIconButton";
import SaveOrExitButton from "../../component/SaveOrExitButton";
import { useNavigate } from "react-router-dom";
import handleStringDocsToMultipleChoice from '../../../../../utilities/ConvertDocsToMultipleChoice.util'
import Docxtemplater from "docxtemplater";
import PizZip from 'pizzip';
import { setNameExam, setTimeExam, setQuestionsExam, setPointExam, setTypeCategory, setDescription } from '../../../../../actions/newExam.action'
import { useDispatch, useSelector } from "react-redux"
import { IoMdAdd } from 'react-icons/io'
import Fab from '@mui/material/Fab';
function SingleExamForm({ exam, handleAdd }) {
  const navigator = useNavigate();
  const dispatch = useDispatch()
  const newExam = useSelector((state) => state.newExam) || {}
  function AddNewQuestionOnClick() {
    navigator(`/quan-ly/thi-thu/cau-hoi/tao-moi`)
  }

  function EditQuestionOnClick(id) {
    navigator(`/quan-ly/thi-thu/cau-hoi/chinh-sua/${id}`)
  }

  const [listRequire, setListRequire] = useState(['YÊu cầu toeic 700', 'Yêu cầu lớp 10'])
  const inputRef = useRef()
  const [questions, setQuestions] = useState([]);
  const showFile = (e) => {
    e.preventDefault();
    const reader = new FileReader();
    reader.onload = async (e) => {
      const content = e.target.result;
      var doc = new Docxtemplater(new PizZip(content), { delimiters: { start: '12op1j2po1j2poj1po', end: 'op21j4po21jp4oj1op24j' } });
      var text = doc.getFullText();
      var list = handleStringDocsToMultipleChoice(text)
      if (list) {
        setQuestions(list)
        dispatch(setQuestionsExam(list))
      }
    };
    reader.readAsBinaryString(e.target.files[0]);
  }

  const handleBlurNameExam = (e) => {
    dispatch(setNameExam(e.target.value))
  }
  const handleBlurTimeExam = (e) => {
    dispatch(setTimeExam(e.target.value))
  }
  const handleBlurPointExam = (e) => {
    dispatch(setPointExam(e.target.value))
  }
  const handleBlurTypeCategory = (e) => {
    dispatch(setTypeCategory(e.target.value))
  }

  const handleChangeNameExam = (e) => {
    dispatch(setNameExam(e.target.value))
  }
  const handleChangeTimeExam = (e) => {
    dispatch(setTimeExam(e.target.value))
  }
  const handleChangePointExam = (e) => {
    dispatch(setPointExam(e.target.value))
  }

  const handleChangeDescription = (e) => {
    dispatch(setDescription(e.target.value))
  }

  const handleDeleteRequire = (require) => {
    console.log(require)
  }


  const formik = useFormik({
    validateOnChange: true,
    validateOnBlur: true,
    validateOnMount: false,
    initialValues: {
      name: "",
      time: 15,
      category: 2,
      typeOfUser: 1,
      scoreUnit: undefined,
    },
    validationSchema: Yup.object({
      scoreUnit: Yup.number().min(0, "Số điểm mỗi câu lớn hơn 0"),
      name: Yup.string().required("Vui lòng nhập tên bài thi"),
      time: Yup.string().required("Vui lòng nhập thời gian làm bài"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const Answer = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  function QuestionTile({ question, index }) {

    return (
      <div className="question-tile">
        <div className="justify-content-between">
          <p>
            <strong>{`Câu ${index + 1}: `}</strong>
            {question.nameQuestion}
          </p>

          <span onClick={() => EditQuestionOnClick(index)}>Chỉnh sửa</span>
        </div>
        <div className="answer-list">
          <div className="answer-tile">
            {question.listAnswers.map((answer, idx) => {
              return idx === question.rightAnswer ? (
                <p className="answer-tile right-answer">
                  <strong>{Answer[idx] + ". "}</strong>
                  {answer}
                  <IoCheckmarkSharp />
                </p>
              ) : (
                <p className="answer-tile left-answer">
                  {" "}
                  <strong>{Answer[idx] + ". "}</strong>
                  {answer}
                </p>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={formik.handleSubmit}>
      <Grid className="single-exam-form-wrapper" container spacing={2}>
        <Grid className="single-exam-form" item xs={12} md={4}>
          <div className="list-input-form">
            <div className="mb-3">
              <label htmlFor="name">Tên bài thi</label>
              <input
                type="text"
                id="name"
                name="name"
                onChange={handleChangeNameExam}
                value={newExam.name}
                onBlur={handleBlurNameExam}
              />
              {formik.errors.name && (
                <p className="input-error-validation"> {formik.errors.name} </p>
              )}
            </div>

            <div className="mb-3">
              <label htmlFor="time">Thời gian</label>
              <input
                type="number"
                id="time"
                name="time"
                //value={formik.values.time}
                onBlur={handleBlurTimeExam}
                value={newExam.time}
                onChange={handleChangeTimeExam}
              />
              {formik.errors.time && (
                <p className="input-error-validation"> {formik.errors.time} </p>
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="description">Mô tả</label>
              <textarea
                style={{ width: '90%' }}
                id="description"
                rows="4"
                cols="50"
                onChange={handleChangeDescription}
                value={newExam.description}
              >

              </textarea>
              {/* <input
                type="text"
                id="time"
                name="time"
                //value={formik.values.time}
                onBlur={handleBlurTimeExam}
                value={newExam.time}
                onChange={handleChangeTimeExam}
              /> */}
            </div>
            <div className="mb-3">
              <label htmlFor="scoreUnit">Số điểm mỗi câu</label>
              <input
                type="number"
                id="scoreUnit"
                name="scoreUnit"
                onBlur={handleBlurPointExam}
                onChange={handleChangePointExam}
                value={newExam.questionPoint}
              />
              {formik.errors.scoreUnit && (
                <p className="input-error-validation">
                  {" "}
                  {formik.errors.scoreUnit}{" "}
                </p>
              )}
            </div>

            <div className="mb-3">
              <label htmlFor="name">Thể loại</label>
              <div className="category">
                <select
                  name="category"
                  onChange={handleBlurTypeCategory}
                  style={{ display: "block" }}
                  value={newExam.typeCategory}
                >
                  <option value={''} label="--Chọn--">
                    --Chọn--
                  </option>
                  <option value={'Lớp 10'} label="Lớp 10">
                    Lớp 10
                  </option>
                  <option value={'Lớp 11'} label="Lớp 11">
                    Lớp 11
                  </option>
                  <option value={'Lớp 12'} label="Lớp 12">
                    Lớp 12
                  </option>
                  <option value={'Khác'} label="Khác">
                    Khác
                  </option>
                </select>
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="name">Bắt buộc</label>
              <div style={{ borderRadius: '4px', border: '1px solid #D5D5D5', width: '90%', padding: '20px 10px' }}>
                {
                  listRequire.map(value => {
                    return (
                      <div style={{ fontSize: '13px', backgroundColor: '#ebebeb', display: 'inline-block', padding: '5px', borderRadius: '16px', margin: '5px' }}>
                        {value}
                        <AiFillDelete onClick={() => { handleDeleteRequire(value) }} className="btn-delete" style={{ transform: 'translateY(+10%)', cursor: 'pointer' }}></AiFillDelete>
                      </div>
                    )
                  })
                }
                <div style={{display:'flex'}}>
                  <input style={{paddingRight:'10px'}} type='text'></input>
                  <Fab style={{width: '50px'}} size="small" color="primary" aria-label="add">
                    <IoMdAdd />
                  </Fab>
                </div>
              </div>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} md={8}>
          <Grid
            className="question-top-bar"
            container
            direction="row"
            justifyContent="start"
            alignItems="center"
          >
            <h3>Câu hỏi</h3>
            <LeadingIconButton
              icon={<AiOutlineImport />}
              content="Nhập câu hỏi"
              onClick={() => { inputRef.current.click() }}
            />
            <input style={{ display: 'none' }} ref={inputRef} type="file" id="fileInput" onChange={(e) => showFile(e)} />
            <LeadingIconButton
              icon={<AiOutlineExport />}
              content="Xuất câu hỏi"
            />
          </Grid>

          <div className="question-list">
            {newExam.listQuestion.map((question, index) => (
              <QuestionTile question={question} index={index} />
            ))}
          </div>

          <span onClick={() => AddNewQuestionOnClick(123)} className="se-btn">
            <IoAddCircleSharp />
            Thêm câu hỏi
          </span>
        </Grid>
      </Grid>
    </form>
  );
}

export default SingleExamForm;
