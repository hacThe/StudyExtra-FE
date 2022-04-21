import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Grid, Stack } from "@mui/material";
import "./SingleCourseForm.scss";
import DragAndDropList from "./DragAndDropList";
import CourseChapterList from "./CourseChapterList";
import SaveOrExitButton from "../../component/SaveOrExitButton"

function youtube_parser(url){
  var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
  var match = url.match(regExp);
  return (match&&match[7].length==11)? match[7] : false;
}

function SingleCourseForm(props) {
  const formik = useFormik({
    validateOnChange: true,
    validateOnBlur: true,
    validateOnMount: false,
    initialValues: {
      imgUrl: "",
      introVideo: "",
      name: "",
      description: "",
      content: [],
      price: 0,
      requirement: [],
      chapter: [],
    },
     validationSchema: Yup.object({
      imgUrl: Yup.string().required("Vui lòng chọn ảnh thumbnail cho khóa học"),
      introVideo: Yup.string().required("Vui lòng nhập link của video intro cho khóa học"),
      name: Yup.string().required("Vui lòng nhập tên khóa học"),
      description: Yup.string().required("Vui lòng nhập mô tả cho khóa học"),
      price: Yup.number().min(0,"Giá tiền lớn hơn hoặc bằng 0").required("Vui lòng nhập giá tiền cho khóa học"),

     }),
    onSubmit: (values) => {
      alert(JSON.stringify(values), null, 2)
    },
  });

  return (
    <div className="single-course-form-wrapper">
      <form onSubmit={formik.handleSubmit}></form>
      <div className="mb-3">
        <Grid container spacing={4}>
          <Grid item xs={12} lg={6}>
            <div className="justify-content-between">
              <span className="input-label">Thumnail</span>
              <label htmlFor="imgUrl">
                <div className="se-btn">Chọn ảnh</div>
              </label>
            </div>
            <div className="aspect-ratio">
              <img
                src="https://thetinydots.files.wordpress.com/2020/07/emma-matthews-digital-content-production-o_cljxjzn3m-unsplash.jpg?w=1024"
                alt=""
                width={"100%"}
              />
            </div>
          </Grid>
          <Grid item xs={12} lg={6}>
            <div className="justify-content-between">
              <label htmlFor="introVideo">Link intro: </label>
              <input
                type="text"
                id="introVideo"
                name="introVideo"
                value={formik.values.introVideo}
                onChange={formik.handleChange}
              />
            </div>
            <div className="aspect-ratio">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/BMmyB0K85Rc"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </Grid>
        </Grid>
      </div>

      <div className="mb-3">
        <label htmlFor="name">Tên khóa học</label>
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
        <label htmlFor="price">Giá khóa học</label>
        <input
          type="text"
          id="price"
          name="price"
          value={formik.values.price}
          onChange={formik.handleChange}
        />
        {formik.errors.price && formik.touched.price && (
          <p className="input-error-validation"> {formik.errors.price} </p>
        )}
      </div>


      <div className="mb-3">
        <label htmlFor="name">Mô tả</label>
        <textarea
          id="description"
          name="description"
          value={formik.values.description}
          onChange={formik.handleChange}
        />
        {formik.errors.description && formik.touched.description && (
          <p className="input-error-validation"> {formik.errors.description} </p>
        )}
      </div>

      <div className="mb-3">
        <span className="input-label mb-2">Tổng quan khóa học</span>
        <DragAndDropList/>
        <div className="add-new-item-to-list-wrapper">
        <div className="justify-content-between">
              <input
                type="text"
                id="newOverview"
                name="newOverview"
              />
              <p className="se-btn">Thêm</p>
            </div>
        </div>
      </div>


      <div className="mb-3">
        <span className="input-label mb-2">Nội dung bài học</span>
        <CourseChapterList/>
      </div>



      <div className="mb-3">
        <span className="input-label mb-2">Yêu cầu trình độ</span>
        <DragAndDropList/>
        <div className="add-new-item-to-list-wrapper">
        <div className="justify-content-between">
              <input
                type="text"
                id="newRequirement"
                name="newRequirement"
              />
              <p className="se-btn">Thêm</p>
            </div>
        </div>
      </div>


      <SaveOrExitButton SaveOnClick={()=>alert("save")} CancelOnClick={()=>alert("exit")}/>

    </div>


  );
}

export default SingleCourseForm;
