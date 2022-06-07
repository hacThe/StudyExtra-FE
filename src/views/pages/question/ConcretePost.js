import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import './scss/Question.scss';
import Post from './components/Post.js';
import { articleActions } from '../../../actions/article.action';
import ShowUserModal from './components/ShowUserModal';
import './scss/ConcretePost.scss';

const refineComments = (comments, postID, parrentComment) => {
    var res = [];
    // console.log("comments", comments);
    try{
        comments.forEach(cmt => {
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
                userTagName: 'Raiden Ei',
                imgUrl: cmt.imgUrl,
                isHidden: cmt.isHidden,
                time: cmt.time,
                reactions: cmt.reactions || [],
                parrentComment: parrentComment,
            }
            if(cmt.replyComment && cmt.replyComment.length > 0)
                tempt.replyComment =  refineComments(cmt.replyComment, postID, [...parrentComment, cmt.commentID]);
            else tempt.replyComment = [];
            res.push(tempt);
        });
    }
    catch(e){
        console.log("error", e);
        console.log("comments", comments);
    }
    
    // var tempt ={};
    return res;
}

const refineData = (data) => {
    var res = [];
    data.slice().reverse().forEach(item => {
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
            reactions: item.reactions
        }
        var tempComment = refineComments(item.comments,item._id, []);
        temp.comment = tempComment;
        res.push(temp);
    });
    return res;
}
const ConcretePost = () => {
    const dispatch = useDispatch();
    React.useEffect(async () => {
        await dispatch(articleActions.getAllArticle());
        window.scrollTo(0, 0);
    }, []);

    const articles =
        useSelector((state) => {
            return state.article.articles;
        }) || [];
    
    const userInfo = useSelector((state) => state.user.currentUser);

    useSelector((state) => {
        console.log({ state });
    })

    const isShowUserModal = useSelector((state) => {
        return state.article.isShowModalUser;
    }) || false;
    

    // console.log("current Link", window.location.href);
    var splitting = window.location.href.split('/');
    console.log("currentID", splitting[splitting.length - 1]);

    var currentID =  splitting[splitting.length - 1];

    var isFindPost = () => {
        for(var i = 0; i < articles.length; i++){
            if(articles[i]._id == currentID){
                // console.log("tìm thấy rồi")
                return true;
            }
        }
        // console.log("ủa ra đây rồi mà")  
        return false;
    }

    return (    
        <div className="question-page-container">
            {
                isShowUserModal 
                    ? <ShowUserModal/>
                    : (null)
            }
            <div className="question-container">
                <div className="add-post-section">
                    {
                        isFindPost() ?
                            refineData(articles).map((item)=>{
                                if(item._id == currentID )
                                    return (
                                        <Post 
                                            post = {item}
                                        />
                                    );
                            })
                        :
                        <div className='information-container'>
                            Không tìm thấy bài đăng tương ứng
                        </div>
                    }
                    {/*  */}
                </div>
            </div>
            {/* Đây là confirm modal */}
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

            {/* Đây là modal hiển thị danh sách user đã like */}
            
        </div>
    )
}

export default ConcretePost