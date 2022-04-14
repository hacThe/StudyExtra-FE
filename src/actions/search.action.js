import { searchContants } from "../constaint/search.contants";
import axios from "axios";
export const searchAction = {
    getSearch,
    getDataFromSearch
};


function getDataFromSearch(searchRedux) {
    return async dispatch => {
        dispatch(request())
        await axios.get(`http://localhost:5000/api/search/getSearchData?search=${searchRedux}`)
            .then(res => {
                dispatch(success(res.data.exam, res.data.course))
            })
            .catch(err => {
                dispatch(failure(err))
            })

        function request() {
            return { type: searchContants.GET_POST_REQUEST };
        }
        function success(exams, courses) {
            return { type: searchContants.GET_POST_SUCCESS, exams, courses };
        }
        function failure(error) {
            return { type: searchContants.GET_POST_ERROR, error };
        }
    }


}

function getSearch(search) {
    return (dispatch) => {
        dispatch({
            type: searchContants.GET_SEARCH,
            payload: {
                search: search
            }
        })
    }
}