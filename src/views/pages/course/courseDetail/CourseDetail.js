import React, { useEffect, useState } from "react";
import "./CourseDetail.scss";
import { Grid } from "@mui/material";
import IntroVideoModal from "./component/IntroVideoModal";
import CourseDetailLeftSide from "./component/CourseDetailLeftSide";
import CourseDetailRightSide from "./component/CourseDetailRightSide";
import { useDispatch, useSelector } from "react-redux";
import { courseAction } from "../../../../actions/course.action";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import URL from "../../../../services/api/config";
import youtube_parser from "../../../../utilities/ConvertDocsToMultipleChoice.util copy";
import { user } from "../../../../reducers/user.reducer";
import { showToast } from "../../../../actions/toast.action";

const CourseDetail = (props) => {
  const [modalVisible, setModalVisible] = useState(false);
  const course = useSelector((state) => state.course.course);
  const isLoggedIn = useSelector((state) => state.authentication.isLoggedIn);
  const infoUser = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    console.log("ID nè: ", id);
    dispatch(courseAction.getOne(id, infoUser?._id));
  }, []);
  console.log("Course nè", course);
  const navigate = useNavigate();
  const buyCourse = async () => {
    if (!isLoggedIn) {
      navigate("/dang-nhap");
      return;
    }
    if (
      course &&
      course.studentIds &&
      course.studentIds.includes(infoUser._id)
    ) {
      console.log("registed");
      navigate(`/bai-hoc/` + course.courseId);
    } else {
      if (infoUser.gem < course.price) {
        dispatch(
          showToast("fail", "Tài khoản không đủ để thực hiện giao dịch")
        );
      } else {
        console.log("Buy");
        await axios
          .post(URL.URL_BUY_COURSE, {
            courseId: course._id,
            username: infoUser.username,
          })
          .then((res) => {
            console.log(res);
            dispatch(showToast("success", "Đăng ký khóa học thành công!"));
            setTimeout(() => {
              navigate(`/bai-hoc/${course.courseId}`);
            }, 1500);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    }
  };

  return (
    <div className="course-detail-wrapper">
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <CourseDetailLeftSide course={course}></CourseDetailLeftSide>
        </Grid>
        <Grid item xs={4}>
          <CourseDetailRightSide
            buyCourse={buyCourse}
            registed={course.studentIds?.includes(infoUser?._id) || false}
            course={course}
            toogle={() => {
              setModalVisible(!modalVisible);
            }}
          />
        </Grid>
      </Grid>

      {modalVisible && (
        <IntroVideoModal
          courseName={course.name}
          videoId={youtube_parser(course.introVideoUrl)}
          toogle={() => {
            setModalVisible(!modalVisible);
          }}
        />
      )}
    </div>
  );
};

export default CourseDetail;
