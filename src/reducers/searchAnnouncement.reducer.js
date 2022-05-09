import { searchAnnouncementContants } from "../constaint/searchAnnoucement.contants";

const initialState = {
    search: "",
};

export function searchAnnouncement(state = initialState, action) {
    switch (action.type) {
        case searchAnnouncementContants.GET_SEARCH_ANNOUNCEMENT:
            return {
                ...state,
                search: action.payload.search,
            };
        default:
            return state;
    }
}
