import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Grid, Stack } from "@mui/material";
import "./SingleCourseForm.scss";
import DragAndDropList from "./DragAndDropList";
import CourseChapterList from "./CourseChapterList";
import SaveOrExitButton from "../../component/SaveOrExitButton";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "../../../../../firebase";
import { showToast } from "../../../../../actions/toast.action";
import { useDispatch } from "react-redux";

function youtube_parser(url) {
  var regExp =
    /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
  var match = url.match(regExp);
  return match && match[7].length == 11 ? match[7] : false;
}

function SingleCourseForm({ course, onSubmit }) {
  const dispatch = useDispatch();
  console.log(
    {
      course,
    },
    "is editting"
  );
  const formik = useFormik({
    validateOnChange: true,
    validateOnBlur: true,
    validateOnMount: false,
    initialValues: {
      ...course,
    },
    validationSchema: Yup.object({
      categories: Yup.number().required("Vui lòng chọn thể loại cho khóa học"),
      imgUrl: Yup.string().required("Vui lòng chọn ảnh thumbnail cho khóa học"),
      introVideoUrl: Yup.string().required(
        "Vui lòng nhập link của video intro cho khóa học"
      ),
      name: Yup.string().required("Vui lòng nhập tên khóa học"),
      description: Yup.string().required("Vui lòng nhập mô tả cho khóa học"),
      price: Yup.number()
        .min(0, "Giá tiền lớn hơn hoặc bằng 0")
        .required("Vui lòng nhập giá tiền cho khóa học"),
    }),
    onSubmit: onSubmit,
  });

  console.log("render single course form");
  console.log(formik.values);

  const handleAddContentOnClick = () => {
    if (document.getElementById("newContent").value.trim()) {
      const contentTile = document.getElementById("newContent").value.trim();
      const contentList = formik.values.contents;
      if (contentList.includes(contentTile)) {
        dispatch(showToast("fail", "Nội dung không được trùng lặp"));
      } else {
        formik.setFieldValue("contents", [...contentList, contentTile]);
      }
    }
    document.getElementById("newContent").value = "";
  };

  const handleAddRequirementOnClick = () => {
    if (document.getElementById("newRequirement").value.trim()) {
      const requirementTile = document
        .getElementById("newRequirement")
        .value.trim();
      const requirementList = formik.values.requirements;
      if (requirementList.includes(requirementTile)) {
        dispatch(showToast("fail", "Nội dung không được trùng lặp"));
      } else {
        formik.setFieldValue("requirements", [
          ...requirementList,
          requirementTile,
        ]);
        console.log(formik.values.requirements);
      }
    }
    document.getElementById("newRequirement").value = "";
  };

  const handleChange = (e) => {
    if (e.target.files[0]) {
      uploadImg(e.target.files[0]);
    }
  };
  const uploadImg = (imgSelected) => {
    const storageRef = ref(storage, `file${imgSelected.name}`);
    const uploadTask = uploadBytesResumable(storageRef, imgSelected);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const prog =
          Math.round(snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        //setUpProg(prog);
      },
      (err) => {
        console.log(err);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((URL) => {
          formik.setFieldValue("imgUrl", URL);
          console.log("url: ", URL);
        });
      }
    );
  };

  return (
    <div className="single-course-form-wrapper">
      <form onSubmit={formik.handleSubmit}></form>
      <div className="mb-3">
        <Grid container spacing={4}>
          <Grid item xs={12} lg={6}>
            <div className="justify-content-between">
              <span className="input-label">Thumnail</span>
              <label htmlFor="uploadThumbnailInput">
                <div className="se-btn">Chọn ảnh</div>
              </label>
              <input
                id="uploadThumbnailInput"
                style={{ display: "none" }}
                type="file"
                onChange={handleChange}
              />
            </div>
            <div className="aspect-ratio">
              <img
                src={
                  formik.values.imgUrl ||
                  window.location.origin + "/img/default.jpg"
                }
                alt=""
                width={"100%"}
              />
            </div>
          </Grid>
          <Grid item xs={12} lg={6}>
            <div className="justify-content-between">
              <label htmlFor="introVideoUrl">Link intro: </label>
              <input
                type="text"
                id="introVideoUrl"
                name="introVideoUrl"
                value={formik.values.introVideoUrl}
                onChange={formik.handleChange}
              />
            </div>
            <div className="aspect-ratio">
              {youtube_parser(formik.values.introVideoUrl) ? (
                <iframe
                  width="560"
                  height="315"
                  src={`https://www.youtube.com/embed/${youtube_parser(
                    formik.values.introVideoUrl
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
          type="number"
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
        <label htmlFor="categories">Loại khóa học</label>
        <select
          id="categories"
          name="categories"
          value={formik.values.categories}
          onChange={formik.handleChange}
        >
          <option selected value={0}>
            Lớp 10
          </option>
          <option value={1}>Lớp 11</option>
          <option value={2}>Lớp 12</option>
          <option value={3}>Khác</option>
        </select>
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
          <p className="input-error-validation">
            {" "}
            {formik.errors.description}{" "}
          </p>
        )}
      </div>

      <div className="mb-3">
        <span className="input-label mb-2">Tổng quan khóa học</span>
        <DragAndDropList
          items={Array.from(formik.values.contents)}
          setValues={(e) => {
            formik.setFieldValue("contents", e);
          }}
        />
        <div className="add-new-item-to-list-wrapper">
          <div className="justify-content-between">
            <input type="text" id="newContent" name="newContent" />
            <p onClick={handleAddContentOnClick} className="se-btn">
              Thêm
            </p>
          </div>
        </div>
      </div>

      {/* <div className="mb-3">
        <span className="input-label mb-2">Danh sách các chương</span>
        <CourseChapterList
          setValues={(values) => {
            formik.setFieldValue("chapters", values);
          }}
          chapters={Array.from(formik.values.chapters)}
        />
        <div className="add-new-item-to-list-wrapper">
          <div className="justify-content-between">
            <input type="text" id="newChapter" name="newChapter" />
            <p onClick={handleAddChapterOnClick} className="se-btn">
              Thêm
            </p>
          </div>
        </div>
      </div> */}

      <div className="mb-3">
        <span className="input-label mb-2">Yêu cầu trình độ</span>
        <DragAndDropList
          items={Array.from(formik.values.requirements)}
          setValues={(e) => {
            formik.setFieldValue("requirements", e);
          }}
        />
        <div className="add-new-item-to-list-wrapper">
          <div className="justify-content-between">
            <input type="text" id="newRequirement" name="newRequirement" />
            <p onClick={handleAddRequirementOnClick} className="se-btn">
              Thêm
            </p>
          </div>
        </div>
      </div>

      <SaveOrExitButton
        SaveOnClick={formik.handleSubmit}
        CancelOnClick={() => console.log("exit")}
      />
    </div>
  );
}

export default SingleCourseForm;
