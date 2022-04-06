import { rankingConstants } from "../constaint";

const initialState = {
    pagination: 1,
    rankingList: [],
};
  
  
export function ranking(state = initialState, action) {
    console.log("inside ranking redux")
    switch (action.type) {
        case rankingConstants.CHANGE_PAGINATION_REQUEST:
            var newState = {...state};
            newState.pagination = action.page;
            return newState;
        default:
            return state;
    }
}