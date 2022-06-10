import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import "./scss/Lesson.scss";
import Credit from "./component/Credit";
import CommentItem from "../overall/components/CommentItem";
import LessonOverall from "./component/LessonOverall";
import useWindowDimensions from "./functions/useWindowDimensions";
import ChapterItem from "./component/ChaperItem.js";
import Notion from "./component/Notion";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { lessonActions } from "../../../actions/lesson.action";
// Để play video
import ReactPlayer from "react-player";

import "./scss/Question.scss";
import Post from "./component/Post.js";
import { discussionActions } from "../../../actions/dicussion.action";
import ShowUserModal from "./component/ShowUserModal";
import "./scss/ConcretePost.scss";

const refineComments = (comments, postID, parrentComment) => {
  var res = [];
  // console.log("comments", comments);
  try {
    comments.forEach((cmt) => {
      // console.log("cmt", cmt);
      var tempt = {
        postID: postID,
        commentID: cmt.commentID || cmt._id,
        userID: cmt.userID,
        username: cmt.username,
        name: cmt.name,
        userAvatar: cmt.userAvatar,
        content: cmt.content,
        userTagID: cmt.userTagID || "",
        userTagName: "Raiden Ei",
        imgUrl: cmt.imgUrl,
        isHidden: cmt.isHidden,
        time: cmt.time,
        reactions: cmt.reactions || [],
        parrentComment: parrentComment,
      };
      if (cmt.replyComment && cmt.replyComment.length > 0)
        tempt.replyComment = refineComments(cmt.replyComment, postID, [
          ...parrentComment,
          cmt.commentID,
        ]);
      else tempt.replyComment = [];
      res.push(tempt);
    });
  } catch (e) {
    console.log("error", e);
    console.log("comments", comments);
  }

  // var tempt ={};
  return res;
};

const refineData = (data) => {
  var res = [];
  data
    .slice()
    .reverse()
    .forEach((item) => {
      // console.log("item to refine", item)
      var temp = {
        _id: item._id,
        contents: item.content,
        imgUrl: item.imgUrl,
        name: item.name,
        createdAt: item.createdAt,
        lessonID: item.lessonID,
      };
      var tempComment = refineComments(item.comments, item._id, []);
      temp.comment = tempComment;
      res.push(temp);
    });
  return res;
};

const Lesson = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  // console.log(id);
  useEffect(() => {
    // dispatch(courseAction.getLesson(id))
    dispatch(lessonActions.getCourseInfo(id));
  }, []);

  const { height, width } = useWindowDimensions();
  const [panel, setPanel] = React.useState(1);
  const changePanel = (event, newValue) => {
    setPanel(newValue);
    // console.log("newValue", newValue)
  };

  // useSelector((state) => {
  //     console.log("State nè", state);
  // })

  const currentCourse =
    useSelector((state) => {
      return state.lesson.currentCourse;
    }) || {};

  const currrentSelectedIndex = useSelector((state) => {
    {
      return state.lesson.userSelectedLessonIndex;
    }
  });

  //  [state.lesson.userSelectedLessonIndex.chapterIndex].lessons
  //         [state.lesson.userSelectedLessonIndex.chapterIndex];
  // useSelector((state) => {
  //     // console.log("state.lesson.currentCourse", state.lesson.currentCourse)

  //     if(Object.keys(state.lesson.currentCourse).length==0) return {};
  //     else
  //     {
  //         // console.log(state.lesson.currentCourse.chapters, "state.lesson.currentCourse.chapters")
  //         return JSON.parse(JSON.stringify(state.lesson.currentCourse.chapters))
  //         [state.lesson.userSelectedLessonIndex.chapterIndex].lessons
  //         [state.lesson.userSelectedLessonIndex.chapterIndex];
  //     }

  // }) || {};

  const [selectedIndex, setSelectedIndex] = useState({
    chapterIndex: 0,
    lessonIndex: 0,
  });

  //
  const changeSelectedIndex = (selectedIndex) => {
    setSelectedIndex(selectedIndex);
  };

  var currentLesson = currentCourse.chapters
    ? currentCourse.chapters[selectedIndex.chapterIndex].lessons[
        selectedIndex.lessonIndex
      ]
    : {};
  console.log("currentLesson", currentLesson);

  // Phần discussion
  React.useEffect(async () => {
    await dispatch(discussionActions.getAllArticle());
    // window.scrollTo(0, 0);
  }, []);

  const articles =
    useSelector((state) => {
      return state.discussion.articles;
    }) || [];

  const userInfo = useSelector((state) => state.user.currentUser);

  useSelector((state) => {
    console.log({ state });
  });

  const isShowUserModal =
    useSelector((state) => {
      return state.discussion.isShowModalUser;
    }) || false;

  // console.log("current Link", window.location.href);
  var splitting = window.location.href.split("/");
  console.log("currentID", splitting[splitting.length - 1]);

  var currentID = splitting[splitting.length - 1];

  var isFindPost = () => {
    for (var i = 0; i < articles.length; i++) {
      if (articles[i]._id == currentID) {
        // console.log("tìm thấy rồi")
        return true;
      }
    }
    // console.log("ủa ra đây rồi mà")
    return false;
  };

  return (
    <div className="lesson-wrapper">
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={12} lg={8} className="lesson-detail">
          <div className="video-responsive">
            <ReactPlayer
              className="lesson-video"
              url={currentLesson ? currentLesson.videoUrl : " "}
              width="100%"
              height="100%"
              controls={true}
            />
            {/* <iframe 
                            
                            src=
                            // title="YouTube video player" 
                            // allowFullScreen
                        ></iframe> */}
          </div>
          <div className="tab-panel">
            <div className="panel-choosing">
              <div
                onClick={(e) => changePanel(e, 1)}
                className={panel == 1 ? "panel-choose active" : "panel-choose"}
              >
                Tổng quan
                <div className="active-bar overall"></div>
              </div>

              <div className="vertical-divider"></div>
              <div
                onClick={(e) => changePanel(e, 2)}
                className={panel == 2 ? "panel-choose active" : "panel-choose"}
              >
                Tài liệu
                <div className="active-bar document"></div>
              </div>
              {width > 920 ? null : <div className="vertical-divider"></div>}
              {width > 920 ? null : (
                <div
                  onClick={(e) => changePanel(e, 3)}
                  className={
                    panel == 3
                      ? "panel-choose divide active"
                      : "panel-choose divide"
                  }
                >
                  Nội dung
                  <div className="active-bar content"></div>
                </div>
              )}
              {width > 920 ? null : <div className="vertical-divider"></div>}
              {width > 920 ? null : (
                <div
                  onClick={(e) => changePanel(e, 4)}
                  className={
                    panel == 4 ? "panel-choose active" : "panel-choose"
                  }
                >
                  Ghi chú
                  <div className="active-bar notion"></div>
                </div>
              )}
            </div>
            <div className="horizontal-divider"></div>
            <div className="panel-container">
              <div className={panel == 1 ? "panel" : "panel hide"}>
                <p
                  style={{
                    fontSize: "1.8rem",
                    fontWeight: "bold",
                  }}
                  className="lesson-name-in-detail"
                >
                  {currentLesson.name}
                </p>
                <p
                  style={{
                    fontSize: "1.4rem",
                    marginTop: "24px",
                    color: "#535353",
                  }}
                >
                  Tham gia nhóm Học tập cùng STUDY EXTRA trên Facebook để cùng
                  nhau trao đổi trong quá trình học tập ❤️
                </p>

                <p
                  style={{
                    marginTop: "24px",
                    fontWeight: 600,
                    color: "var(--primary-color)",
                    fontSize: "1.6rem",
                  }}
                >
                  Tham gia trao đổi cùng SE:
                </p>
                {/* Phần bình luận ở đây */}
                <div className="question-section">
                  <div className="question-container">
                    <div className="add-post-section">
                      {refineData(articles).map((item) => {
                        if (item.lessonID == currentLesson._id)
                          return <Post post={item} />;
                      })}
                      {/*  */}
                    </div>
                  </div>
                </div>
                <div className="credit-wrapper">
                  <Credit />
                </div>
              </div>
              <div className={panel == 2 ? "panel" : "panel hide"}>
                Tổng hợp tài liệu liên quan đến bài học:
                {!currentLesson ? null : (
                  <a
                    href={currentLesson.documentUrl}
                    style={{ marginLeft: 4, textDecoration: "underline" }}
                  >
                    tại đây
                  </a>
                )}
                <div className="credit-wrapper">
                  <Credit />
                </div>
              </div>
              {width > 920 ? null : (
                <div className={panel == 3 ? "panel" : "panel hide"}>
                  {!currentCourse.chapters
                    ? null
                    : currentCourse.chapters.map((value, index, key) => {
                        return (
                          <ChapterItem
                            chapter={value}
                            index={index}
                            key={index}
                            changeIndex={changeSelectedIndex}
                          />
                        );
                      })}
                </div>
              )}
              {width > 920 ? null : (
                <div className={panel == 4 ? "panel" : "panel hide"}>
                  <Notion currentLesson={currentLesson} />
                </div>
              )}
            </div>
          </div>
        </Grid>
        {width < 920 ? null : (
          <Grid item xs={12} sm={12} md={12} lg={4} className="lesson-overall">
            <LessonOverall
              currentLesson={currentLesson}
              changeIndex={changeSelectedIndex}
            />
          </Grid>
        )}
      </Grid>
      {isShowUserModal ? <ShowUserModal /> : null}
    </div>
  );
};

export default Lesson;
