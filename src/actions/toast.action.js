import { toastContants } from "../constaint/toast.contants";

// typeToast:
// success || fail


export const showToast = (typeToast, message) => {
    return dispatch => {
        dispatch({
            type: toastContants.SHOW_TOAST,
            typeToast,
            message,
        })
    }
}

export const hideToast = () => {
    return dispatch => {
        dispatch({
            type: toastContants.HIDE_TOAST,
        })
    }
}
