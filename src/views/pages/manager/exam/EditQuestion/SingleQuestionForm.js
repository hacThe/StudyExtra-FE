import React from "react";
import { AiFillDelete } from "react-icons/ai";
import * as Yup from "yup";
import { Formik, Field, Form, ErrorMessage, FieldArray } from "formik";
import "../component/SingleQuestionForm.scss"
import { useNavigate } from 'react-router-dom'
import SaveOrExitButton from "../../../manager/component/SaveOrExitButton";
import { useDispatch } from 'react-redux'
import { addNewQuestion, editQuestion } from '../../../../../actions/newExam.action'

Yup.addMethod(Yup.array, "unique", function (message, mapper = (a) => a) {
  return this.test("unique", message, function (list) {
    return list.length === new Set(list.map(mapper)).size;
  });
});

function SingleQuestionForm({ maxQuestion, question, index }) {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const initialValues = {
    index: index,
    question: question.nameQuestion,
    answers: question.listAnswers,
    correctAnswer: question.rightAnswer,
  };


  const validationSchema = Yup.object({
    index: Yup.number()
      .required("Vui lòng nhập số thứ tự")
      .min(1, "Số thứ tự câu hỏi phải lớn hơn 0")
      .max(
        maxQuestion || 30,
        "Số thứ tự câu hỏi không vượt quá tổng số câu hỏi"
      ),
    question: Yup.string().required("Vui lòng nhập câu hỏi"),
    answers: Yup.array()
      .of(Yup.string().required("Câu trả lời không được để trống"))
      .min(2, "Cần ít nhất 2 câu trả lời")
      .unique("Câu trả lời không được trùng nhau"),
    correctAnswer: Yup.number().required(
      "Vui lòng chọn câu trả lời chính xác."
    ),
  });


  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={async (values) => {
          console.log(values)
          let newIndex = values.index
          let oldIndex = index
          let question = {
            listAnswers: values.answers,
            nameQuestion: values.question,
            rightAnswer: Number(values.correctAnswer),
          }
          console.log(index)
          console.log(question)
          dispatch(editQuestion(oldIndex, question, newIndex))
          navigate(-1)
        }}
      >
        {({ values, errors, handleSubmit }) => (
          <Form>
            <div className="mb-3">
              <label htmlFor="index">Số thứ tự câu hỏi</label>
              <Field
                type="number"
                id="index"
                name="index"
                placeholder="Nhập câu hỏi"
              />
              <ErrorMessage
                name={`index`}
                component="div"
                className="field-error"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="question">Câu hỏi</label>
              <Field
                as="textarea"
                id="question"
                name="question"
                placeholder="Nhập câu hỏi"
              />
              <ErrorMessage
                name={`question`}
                component="div"
                className="field-error"
              />
            </div>

            <FieldArray name="answers">
              {({ insert, remove, push }) => (
                <div>
                  {values.answers.length > 0 &&
                    values.answers.map((friend, index) => (
                      <div className="row" key={index}>
                        <div className="col answer-tile">
                          <label htmlFor={`answers.${index}`}>
                            Câu trả lời
                          </label>

                          <div className="answer-input-wrapper">
                            <Field
                              name={`answers.${index}`}
                              placeholder="Nhập câu trả lời"
                              type="text"
                            />
                            <div
                              onClick={() => remove(index)}
                              className="col remove-btn"
                            >
                              <AiFillDelete color="#818181" size={"2em"} />
                            </div>
                          </div>

                          {errors.answers &&
                            (!Array.isArray(errors.answers) ? (
                              <ErrorMessage
                                name={`answers`}
                                component="div"
                                className="field-error"
                              />
                            ) : (
                              <ErrorMessage
                                name={`answers.${index}`}
                                component="div"
                                className="field-error"
                              />
                            ))}
                        </div>
                      </div>
                    ))}
                  <span type="span" className="se-btn" onClick={() => push("")}>
                    Thêm đáp án
                  </span>
                </div>
              )}
            </FieldArray>

            <div className="mb-3">
              <label htmlFor="question">Đáp án đúng</label>
              <Field as="select" id="correctAnswer" name="correctAnswer">
                <option>Chọn đáp án đúng</option>
                {values.answers.map((answer, index) => {
                  return (
                    <option key={`option-${index}`} value={index}>
                      {answer}
                    </option>
                  );
                })}
              </Field>
              <ErrorMessage
                name={`correctAnswer`}
                component="div"
                className="field-error"
              />
            </div>

            <SaveOrExitButton
              SaveOnClick={() => {
                handleSubmit()
              }}

              CancelOnClick={() => {
                navigate(-1)
              }}
            />
          </Form>
        )}
      </Formik>
    </div >
  );
}

export default SingleQuestionForm;
