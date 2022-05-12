export const appActions = {
    openConfirmDialog,
}

function openConfirmDialog(content, action){
    return (dispatch)=>{
        dispatch({
            type: "set",
            confirmActionModal: {
                open: true,
                content,
                action
            }
        })
    }
}