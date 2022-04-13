import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Grid } from "@mui/material";
import {
  AiOutlineExport,
  AiOutlineImport,
} from "react-icons/ai";
import { IoCheckmarkSharp, IoAddCircleSharp } from "react-icons/io5";
import { BiHide } from "react-icons/bi";
import "./SingleExamForm.scss";
import LeadingIconButton from "../../../../components/LeadingIconButton";
import SaveOrExitButton from "../../course/component/SaveOrExitButton";
function SingleExamForm(props) {
  const formik = useFormik({
    validateOnChange: true,
    validateOnBlur: true,
    validateOnMount: false,
    initialValues: {
      name: "",
      time: 15,
      category: "Khác",
      typeOfUser: "Toàn bộ",
      scoreUnit: 1,
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Vui lòng nhập tên bài thi"),
      time: Yup.string().required("Vui lòng nhập thời gian làm bài"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });
  const initialQuestions = [
    {
      questions: "Đây là câu hỏi nè, vd như cách nào để hiểu con gái",
      answers: [
        "Đây là đáp án A",
        "Đây là đáp án B",
        "Đây là đáp án C",
        "Đây là đáp án S",
      ],
      rightAnswer: 0,
    },
    {
      questions: "Đây là câu hỏi nè, vd như cách nào để hiểu con gái",
      answers: [
        "Đây là đáp án A",
        "Đây là đáp án B",
        "Đây là đáp án C",
        "Đây là đáp án S",
      ],
      rightAnswer: 0,
    },
    {
      questions: "Đây là câu hỏi nè, vd như cách nào để hiểu con gái",
      answers: [
        "Đây là đáp án A",
        "Đây là đáp án B",
        "Đây là đáp án C",
        "Đây là đáp án S",
      ],
      rightAnswer: 0,
    },
    {
      questions: "Đây là câu hỏi nè, vd như cách nào để hiểu con gái",
      answers: [
        "Đây là đáp án A",
        "Đây là đáp án B",
        "Đây là đáp án C",
        "Đây là đáp án S",
      ],
      rightAnswer: 0,
    },
    {
      questions: "Đây là câu hỏi nè, vd như cách nào để hiểu con gái",
      answers: [
        "Đây là đáp án A",
        "Đây là đáp án B",
        "Đây là đáp án C",
        "Đây là đáp án S",
      ],
      rightAnswer: 0,
    },
    {
      questions: "Đây là câu hỏi nè, vd như cách nào để hiểu con gái",
      answers: [
        "Đây là đáp án A",
        "Đây là đáp án B",
        "Đây là đáp án C",
        "Đây là đáp án S",
      ],
      rightAnswer: 0,
    },
    {
      questions: "Đây là câu hỏi nè, vd như cách nào để hiểu con gái",
      answers: [
        "Đây là đáp án A",
        "Đây là đáp án B",
        "Đây là đáp án C",
        "Đây là đáp án S",
      ],
      rightAnswer: 0,
    },
    {
      questions: "Đây là câu hỏi nè, vd như cách nào để hiểu con gái",
      answers: [
        "Đây là đáp án A",
        "Đây là đáp án B",
        "Đây là đáp án C",
        "Đây là đáp án S",
      ],
      rightAnswer: 0,
    },
    {
      questions: "Đây là câu hỏi nè, vd như cách nào để hiểu con gái",
      answers: [
        "Đây là đáp án A",
        "Đây là đáp án B",
        "Đây là đáp án C",
        "Đây là đáp án S",
      ],
      rightAnswer: 0,
    },
    {
      questions: "Đây là câu hỏi nè, vd như cách nào để hiểu con gái",
      answers: [
        "Đây là đáp án A",
        "Đây là đáp án B",
        "Đây là đáp án C",
        "Đây là đáp án S",
      ],
      rightAnswer: 0,
    },
  ];

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
  const [questions, setQuestions] = useState(initialQuestions);

  function QuestionTile({ question, index }) {
    console.log(question, index);
    return (
      <div className="question-tile">
        <div className="justify-content-between">
          <p>
            <strong>{`Câu ${index + 1}: `}</strong>
            {question.questions}
          </p>

          <span>Chỉnh sửa</span>
        </div>
        <div className="answer-list">
          <div className="answer-tile">
            {question.answers.map((answer, idx) => {
              console.log(answer);
              return idx === question.rightAnswer ? (
                <p className="answer-tile right-answer">
                  <strong>{Answer[idx] + ". "}</strong>
                  {question.answers[idx]}
                  <IoCheckmarkSharp />
                </p>
              ) : (
                <p className="answer-tile left-answer">
                  {" "}
                  <strong>{Answer[idx] + ". "}</strong>
                  {question.answers[idx]}
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
        <Grid item xs={12} md={4}>
          <div className="mb-3">
            <label htmlFor="name">Tên bài thi</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
            />
            {formik.errors.name && formik.touched.name && (
              <p className="input-error-validation"> {formik.errors.name} </p>
            )}
          </div>

          <div className="mb-3">
            <label htmlFor="name">Thời gian</label>
            <input
              type="number"
              id="time"
              name="time"
              value={formik.values.time}
              onChange={formik.handleChange}
            />
            {formik.errors.time && formik.touched.time && (
              <p className="input-error-validation"> {formik.errors.time} </p>
            )}
          </div>

          <div className="mb-3">
            <label htmlFor="name">Thể loại</label>
            <div className="category">
            <span className="manage-category">Quản lý thể loại</span>

            <select
              name="category"
              value={formik.category}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              style={{ display: "block" }}
            >
              <option value={1} label="Lớp 10">
                Lớp 19
              </option>
              <option value={2} label="Lớp 11">
                Lớp 11
              </option>
              <option value={3} label="Lớp 12">
                Lớp 12
              </option>
            </select>
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="name">Đối tượng</label>
            <select
              name="category"
              value={formik.category}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              style={{ display: "block" }}
            >
              <option value={1} label="Khóa học 10">
                Toàn bộ
              </option>
              <option value={2} label="Khóa học 11">
                Khóa học 1
              </option>
              <option value={3} label="Khóa học 12">
                Khóa học 2
              </option>
            </select>
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
            <LeadingIconButton icon={<AiOutlineImport />} content="Nhập câu hỏi" />
            <LeadingIconButton icon={<AiOutlineExport />} content="Xuất câu hỏi" />
          </Grid>

          <div className="question-list">
            {questions.map((question, index) => (
              <QuestionTile question={question} index={index} />
            ))}
          </div>

          <span className="se-btn">
          <IoAddCircleSharp/>
            Thêm câu hỏi
          </span>

          <SaveOrExitButton CancelOnClick={()=>console.log("Cancel")} SaveOnClick={()=>console.log("Save")}/>
        </Grid>
      </Grid>
    </form>
  );
}

export default SingleExamForm;
