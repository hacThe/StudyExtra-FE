const initialState = {
    pagination: 1,
};
  
  
export function ranking(state = initialState, action) {
    switch (action.type) {
        case "set_pagination":
            console.log("action", action);
            return initialState;
        default:
            return state;
    }
}