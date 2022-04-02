import { searchContants } from "../constaint/search.contants";

const initialState = {
    search: "",
    error: ""
};

export function search(state = initialState, action) {
    switch (action.type) {
        case searchContants.GET_SEARCH:
            return {
                ...state,
                search: action.payload.search,
            };
        default:
            return state;
    }
}
