import React from "react";
import * as Yup from "yup";
import { Formik, Form, Field } from "formik";
import './SingleChapterForm.scss'
function SingleChapterForm({editModal, course, chapter, onSubmit, onCanCel }) {
  const initialValues = {
    name: "",
    index: course.chapters.length,
    ...chapter,
  };
  console.log({chapter}, "==============================")

  const validationSchema = Yup.object({
    index: Yup.number().required("Vui lòng chọn vị trí"),
    name: Yup.string().required("Vui lòng nhập tên chương"),
  });

  return (
    <div className="algin-center single-chapter-form">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ values, errors, touched, handleSubmit }) => (
          <Form style={{marginTop: "24px"}} onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name">Tên chương</label>
              <Field name="name" type="text" />
              {errors.name && touched.name && <div>{errors.name}</div>}
            </div>

            <div className="mb-3">
              <label htmlFor="index">Chương số</label>
              <Field name="index" as="select">
                <option value={undefined}>Vui lòng chọn số thứ tự</option>
                {course.chapters?.map((item, index) => {
                  return (
                    <option value={index}>{index + 1}</option>
                  );
                })}
               { editModal || <option value={course.chapters.length}>{course.chapters.length + 1}</option>}
              </Field>
              {errors.chapter && touched.chapter && <div>{errors.chapter}</div>}
            </div>
            <div style={{display: "flex", justifyContent:"flex-end", marginTop: "24px"}}>
                <span className={"se-btn"} style={{marginRight: "12px",display: "inline-block", fontWeight: "bold"}} onClick={onCanCel}>Hủy</span>
                <button style={{display: "inline-block"}} type="submit">Lưu</button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default SingleChapterForm;
