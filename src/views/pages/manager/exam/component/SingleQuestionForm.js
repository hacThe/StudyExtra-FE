import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

function SingleQuestionForm({ maxQuestion, question }) {
  const [answer, setAnswer] = useState("");
  const formik = useFormik({
    validateOnChange: true,
    validateOnBlur: true,
    validateOnMount: false,
    initialValues: {
      index: 1,
      question: "",
      answers: [""],
      correctAnswer: 0,
      ...question,
    },
    validationSchema: Yup.object({
      index: Yup.number()
        .required("Vui lòng nhập số thứ tự")
        .min(1, "Số thứ tự câu hỏi phải lớn hơn 0")
        .max(
          maxQuestion || 30,
          "Số thứ tự câu hỏi không vượt quá tổng số câu hỏi"
        ),
      question: Yup.string().required("Vui lòng nhập câu hỏi"),
      answers: Yup.array()
        .of(Yup.string().required("Vui lòng nhập câu trả lời nhỏ"))
        .min(2, "Cần ít nhất 2 câu trả lời")
        .required("Vui lòng nhập câu trả lời"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  console.log("Formik values: ", formik.values, formik.errors);
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div className="mb-3">
          <label htmlFor="index">Số thứ tự</label>
          <input
            type="number"
            id="index"
            name="index"
            max={maxQuestion}
            min={1}
            value={formik.values.index}
            onChange={formik.handleChange}
          />
          {formik.errors.index && formik.touched.index && (
            <p className="input-error-validation"> {formik.errors.index} </p>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="question">Câu hỏi</label>
          <textarea
            id="question"
            name="question"
            value={formik.values.question}
            onChange={formik.handleChange}
          />
          {formik.errors.question && formik.touched.question && (
            <p className="input-error-validation"> {formik.errors.question} </p>
          )}

          {
              formik.values.answers.map((answer, index)=>{
                  return (
                    <div className="mb-3">
                    <label htmlFor="index">Đáp án {index + 1}</label>
                    <input
                      type="text"
                      id={"answer" + index}
                      name={"answer" + index}
                      value={formik.values.answers[index]}
                      onChange={formik.handleChange}
                    />
                    {formik.errors.index && formik.touched.index && (
                      <p className="input-error-validation"> {formik.errors.index} </p>
                    )}
                  </div>
                  )
              })
          }

          <div className="mb-3">
            <label htmlFor="addAnswer">Thêm đáp án</label>
            <div className="display-flex">
            <input
              type="text"
              id="addAnswer"
              name="addAnswer"
              value={answer}
              onChange={setAnswer}
            />
            <span className="se-btn">Thêm</span>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default SingleQuestionForm;
