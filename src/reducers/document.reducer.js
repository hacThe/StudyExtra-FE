import { documentConstants } from "../constaint";

const initialState = {
    pagination: 1,
};
   
export function document(state = initialState, action) {
    console.log('dispatch from document.reducer');
    switch (action.type) {
        case documentConstants.CHANGE_PAGINATION_REQUEST:
            console.log("action change page", action);
            return initialState;
        default:
            return state;
    }
}