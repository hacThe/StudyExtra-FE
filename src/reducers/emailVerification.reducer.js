import { userConstants } from "../constaint/user.constants";

const initialState = {
    emailVerified: false,
    isLoading: false,
    error: ""
};

export function emailVerification(state = initialState, action) {
    switch (action.type) {
        case userConstants.VERIFY_EMAIL_REQUEST:
            return {
                ...state,
                isLoading: true,
            };
        case userConstants.VERIFY_EMAIL_SUCCESS:
            return {
                ...state,
                emailVerified: true,
            }
        case userConstants.VERIFY_EMAIL_FAILURE:
            return {
                ...state,
                emailVerified: false,
                error: action.error
            }
        default:
            return state;
    }
}
