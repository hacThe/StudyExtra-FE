export const appActions = {
    openConfirmDialog,
}

function openConfirmDialog(content, action){
    return (dispatch)=>{
        console.log("opem dialog")
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