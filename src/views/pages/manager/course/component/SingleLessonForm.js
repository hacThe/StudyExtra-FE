import React from "react";
import * as Yup from "yup";
import { Formik, Form, Field } from "formik";
import { Grid } from "@mui/material";

// const linkCheck = require("link-check");
import "./SingleLessonForm.scss";
function SingleLessonForm({editModal, lesson, course, chapter, onSubmit }) {
  const initialValues = {
    index: chapter.lessons?.length || 0,
    name: "",
    chapter: chapter._id,
    videoUrl: "",
    documentUrl: "",
    ...lesson,
  };

  function youtube_parser(url) {
    var regExp =
      /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    var match = url.match(regExp);
    return match && match[7].length == 11 ? match[7] : false;
  }

  async function validateUrl(value) {
    let error;
    if (!value) {
      error = "Vui lòng nhập đường dẫn";
    } else if (
      !/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/i.test(
        value
      )
    ) {
      error = "Đường dẫn không hợp lệ";
    }
    // linkCheck(value, function (err, result) {
    //   if (err) {
    //     error = "Đường dẫn không tồn tại hoặc xảy ra sự cố";
    //   }
    //   return error;
    // });
    return error;
  }

  const validationSchema = Yup.object({
    index: Yup.number().required("Vui lòng chọn vị trí"),
    name: Yup.string().required("Vui lòng nhập tên bài học"),
    chapter: Yup.string().required("Vui lòng chọn chương"),
  });

  return (
    <div className="single-lesson-form-wrapper">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleSubmit,
          setFieldValue,
        }) => (
          <Grid container spacing={2}>
            <Grid className="lesson-video-views" item xs={12} md={8}>
              <div className="aspect-ratio">
                {youtube_parser(values.videoUrl) ? (
                  <iframe
                    width="560"
                    height="315"
                    src={`https://www.youtube.com/embed/${youtube_parser(
                      values.videoUrl
                    )}`}
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                ) : (
                  <h1 className="align-center" style={{ marginTop: "20%" }}>
                    Nhập đúng đường dẫn video youtube của bạn
                  </h1>
                )}
              </div>
            </Grid>

            <Grid className="single-lesson-form" item xs={12} md={4}>
              <Form>
                <div className="mb-3">
                  <label htmlFor="name">Tên bài học</label>
                  <Field name="name" type="text" />
                  {errors.name && touched.name && <div>{errors.name}</div>}
                </div>

                {editModal || <div className="mb-3">
                  <label htmlFor="chapter">Chương học</label>
                  <Field name="chapter" as="select">
                    {course.chapters.map((item) => (
                      <option value={item._id}>{item.name}</option>
                    ))}
                  </Field>
                  {errors.chapter && touched.chapter && (
                    <div>{errors.chapter}</div>
                  )}
                </div>}

                <div className="mb-3">
                  <label htmlFor="index">Thứ tự trong chương</label>
                  <Field name="index" as="select">
                    {chapter.lessons.map((item, index) => {
                      return <option value={index}>{index + 1}</option>;
                    })}
                    {editModal || (
                      <option value={chapter.lessons?.length || 0}>
                        {chapter.lessons?.length
                          ? chapter.lessons?.length + 1
                          : 1}
                      </option>
                    )}
                  </Field>
                  {errors.index && touched.index && <div>{errors.index}</div>}
                </div>

                <div className="mb-3">
                  <label htmlFor="videoUrl">Link Video</label>
                  <Field validate={validateUrl} name="videoUrl" type="text" />
                  {errors.videoUrl && touched.videoUrl && (
                    <div>{errors.videoUrl}</div>
                  )}
                </div>

                <div className="mb-3">
                  <label htmlFor="documentUrl">Link tài liệu</label>
                  <Field
                    validate={validateUrl}
                    name="documentUrl"
                    type="text"
                  />
                  {errors.documentUrl && touched.documentUrl && (
                    <div>{errors.documentUrl}</div>
                  )}
                </div>

                <button
                  style={{
                    display: "flex",
                    marginLeft: "auto",
                  }}
                >
                  Submit
                </button>
              </Form>
            </Grid>
          </Grid>
        )}
      </Formik>
    </div>
  );
}

export default SingleLessonForm;
