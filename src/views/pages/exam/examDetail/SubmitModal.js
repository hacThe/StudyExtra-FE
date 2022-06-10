import React from "react";
import {Button, Modal, Box, Typography} from '@mui/material'

function SubmitModal(props) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const styleBtnCancle = {
        textTransform: "none", background: "#3DA43B", fontSize: "1.3rem", fontFamily: "Montserrat"
    }
    const styleBtnSubmit = {
        textTransform: "none", background: "#D83333", fontSize: "1.3rem", fontFamily: "Montserrat"
    }
    const handleSubmit = () => {
        props.handleSubmit();
    }
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };
    return (
        <div>
            <Button variant="contained" onClick={() => handleOpen()}>Nộp bài</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2" style={{ textAlign: "center", fontSize: "1.5rem", fontFamily: "Montserrat" }}>
                        Nộp bài và kết thúc?
                    </Typography>
                    <Typography id="modal-modal-description" style={{ display: "flex", justifyContent: "space-around", marginTop: "2rem" }}>
                        <Button variant="contained" style={styleBtnCancle} onClick={() => handleClose()}>Hủy</Button>
                        <Button variant="contained" style={styleBtnSubmit} onClick={() => handleSubmit()}>Nộp Bài</Button>
                    </Typography>
                </Box>
            </Modal>
        </div>
    );
}

export { SubmitModal }
