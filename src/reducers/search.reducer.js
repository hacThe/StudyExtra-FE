import { searchContants } from "../constaint/search.contants";

const initialState = {
    search: "",
    exams: [],
    courses: [],
    documents: [],
    lessons: [],
    isLoding: true,
    error: ""
};

export function search(state = initialState, action) {
    switch (action.type) {
        case searchContants.GET_SEARCH:
            return {
                ...state,
                search: action.payload.search,
            };
        case searchContants.GET_POST_REQUEST:
            return {
                ...state,
                isLoding: true,
            }
        case searchContants.GET_POST_SUCCESS:
            return {
                ...state,
                exams: action.exams,
                courses: action.courses
            }
        case searchContants.GET_POST_ERROR:
            return {
                ...state,
                isLoding: false,
                error: action.error
            }
        default:
            return state;
    }
}
