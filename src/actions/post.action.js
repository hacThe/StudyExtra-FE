import { postConstants } from "../constaint/post.contants";
import { postService } from "../services/post.service";

export const postAction = {
    getAllPost
};

function getAllPost() {
    return (dispatch) => {
        dispatch(request())
        postService.getAll().then(
            posts => {
                console.log(posts.data)
                dispatch(success(posts.data))
            },
            err => {
                dispatch(failure(err.toSring()))
                console.log('Lỗi' + err.toSring())
            }
        )
    }



    function request() {
        return { type: postConstants.GET_POST_REQUEST };
    }
    function success(posts) {
        return { type: postConstants.GET_POST_SUCCESS, posts };
    }
    function failure(error) {
        return { type: postConstants.GET_POST_FAILURE, error };
    }
}