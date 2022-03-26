import { searchContants } from "../constaint/search.contants";

export const searchAction = {
    getSearch
};


function getSearch(search){
    return (dispatch)=>{
        dispatch({
            type: searchContants.GET_SEARCH,
            payload: {
                search: search
            }
        })
    }
}