import React, {
  useEffect,
  useRef,
  useState,
  useImperativeHandle,
  forwardRef,
} from "react";
import { useDispatch, useSelector } from "react-redux";
import "./scss/Question.scss";
import Post from "./components/Post.js";
import { articleActions } from "../../../actions/article.action";
import AddPostSection from "./components/AddPostSection";
import ShowUserModal from "./components/ShowUserModal";
// import { appActions } from "../../../actions";

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
        userID: item.userID,
        username: item.username,
        userAvatar: item.avatar,
        contents: item.content,
        imgUrl: item.imgUrl,
        name: item.name,
        createdAt: item.createdAt,
        reactions: item.reactions,
      };
      var tempComment = refineComments(item.comments, item._id, []);
      temp.comment = tempComment;
      res.push(temp);
    });
  return res;
};
// Fake data
const posts = [
  {
    userID: "abc",
    username: "Raiden Shogun",
    userAvatar:
      "https://i.pinimg.com/474x/84/e0/08/84e008e416a5662ada45185058678ed7.jpg",
    contents:
      "M???i ng?????i c?? th??? gi??p em so s??nh s??? kh??c nhau gi???a beautiful v?? handsome ???????c kh??ng ???, qu??? l?? kh?? kh??n ???? nha hahaha ?????y l?? c??u h???i v?? d??? thoi",
    imgUrl: [
      "https://gamek.mediacdn.vn/133514250583805952/2021/9/2/base64-1630595438805599368242.png",
      "https://cdn.tgdd.vn//GameApp/1395135//cach-choi-raiden-genshin-impact-thong-tin-guide-skill-moi-thumb-800x450.jpg",
      "https://i.pinimg.com/originals/73/a5/ac/73a5ac0e8495ee7f053a9b7fd0952631.jpg",
    ],
    comment: [
      {
        userID: "bcv",
        username: "Yae Miko Real",
        userAvatar: "https://img-9gag-fun.9cache.com/photo/axBB4pW_460s.jpg",
        content:
          "M??nh ngh?? l?? v???y ????, b???n tham kh???o c??u tr??? l???i c???a m??nh nhaada dadadadadadad d??dq",
        userTagID: "",
        userTagName: "Raiden Ei",
        imgUrl:
          "https://i.pinimg.com/564x/f1/9f/5d/f19f5dc827dbe910912846fe975f2b37.jpg",
        isHide: false,
        replyComment: [
          {
            userID: "bcv",
            username: "Raiden Ei",
            userAvatar:
              "https://i.pinimg.com/474x/84/e0/08/84e008e416a5662ada45185058678ed7.jpg",
            content: "Con m??? b???n",
            userTagID: "",
            userTagName: "Yae Miko",
            replyComment: [],
            imgUrl: "",
            isHide: false,
          },
        ],
      },
    ],
  },
];
const Question = () => {
  // Get real data
  const dispatch = useDispatch();
  React.useEffect(async () => {
    await dispatch(articleActions.getAllArticle());
  }, []);

  const articles =
    useSelector((state) => {
      // console.log("state", state);
      return state.article.articles;
    }) || [];
  // console.log("articles", articles)

  const userInfo = useSelector((state) => state.user.currentUser);
  // console.log("userInfo", userInfo);

  const [isOpenPost, setIsOpenPost] = useState(false);

  const ref = useRef(this);
  useImperativeHandle(ref, () => ({
    closeAddPost: () => {
      setIsOpenPost(false);
    },
  }));
  // console.log("question ref", ref);

  useSelector((state) => {
    console.log({ state });
  });

  const isShowUserModal =
    useSelector((state) => {
      return state.article.isShowModalUser;
    }) || false;

  return (
    <div className="question-page-container">
      {isShowUserModal ? <ShowUserModal /> : null}
      <div className="question-container">
        {/* <button
                    onClick={() => {
                        if(!isShowUserModal)
                            dispatch(articleActions.openShowUserModal());
                        else 
                            dispatch(articleActions.closeShowUserModal());
                    }}
                >
                    Control Modal
                </button> */}

        <div className="add-post-section">
          {userInfo ? (
            <div className="add-post-overall">
              <div className="add-post-header">
                <img src={userInfo.avatar} className="user-avatar" />
                <div className="user-question">
                  <span className="content">
                    {userInfo.name} ??i, b???n c?? c??u h???i hay th???c m???c g?? kh??ng?
                  </span>
                </div>
              </div>
              <button
                style={{
                  fontSize: "16px",
                  fontWeight: "600",
                  fontFamily: "Montserrat",
                }}
                className="button-add-post"
                onClick={() => {
                  setIsOpenPost(!isOpenPost);
                }}
              >
                {!isOpenPost ? "Th??m b??i ????ng" : "Hu???"}
              </button>
            </div>
          ) : null}

          {!isOpenPost ? null : <AddPostSection ref={ref} />}
          {refineData(articles).map((item) => {
            return <Post post={item} />;
          })}
        </div>
      </div>
      {/* ????y l?? confirm modal */}
      {/* <span
                onClick={() => {
                    dispatch(
                        appActions.openConfirmDialog("THis is content", () => {
                            console.log("haha");
                        })
                    );
                }}
                className="se-btn"
            >
                Click me
            </span> */}

      {/* ????y l?? modal hi???n th??? danh s??ch user ???? like */}
    </div>
  );
};

export default Question;
