import { searchAnnouncementContants } from "../constaint/searchAnnoucement.contants";
import axios from "axios";



export const getSearchAnnoucement = (search) => {
    return (dispatch) => {
        dispatch({
            type: searchAnnouncementContants.GET_SEARCH_ANNOUNCEMENT,
            payload: {
                search: search
            }
        })
    }
}