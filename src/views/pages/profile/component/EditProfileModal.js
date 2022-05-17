import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { userActions } from "./../../../../actions/user.actions";
import { useFormik } from "formik";
import * as Yup from "yup";
import { FiEdit, FiRefreshCw } from "react-icons/fi";
import { Modal, Box } from '@mui/material';

function EditModal(props) {
    const [open, setOpen] = React.useState(false);
    const dispatch = useDispatch();
    const handleOpen = () => setOpen(true);
    const handleClose = (event, reason) => {
        if (reason !== 'backdropClick') {
            setOpen(false)
        }
    }
    const cancleHandleClick = () => {
        formik.setValues(formik.initialValues);
        setOpen(false);
    }

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: "50rem",
        bgcolor: '#FFFFFF',
        border: '1px solid #000',
        boxShadow: 24,
        p: 4,
    };
    const formik = useFormik({
        validateOnChange: true,
        validateOnBlur: true,
        validateOnMount: false,
        initialValues: {
            username: props.user.username,
            fullname: props.user.name,
            email: props.user.mail,
            phone: props.user.phone,
            birthday: props.user.birthday?.split('T')[0]
        },
        validationSchema: Yup.object({
            fullname: Yup.string().required("Vui lòng nhập họ và tên"),
            email: Yup.string().email().required("Vui lòng nhập email"),
            phone: Yup.string().matches(
                /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/,
                "Vui lòng nhập đúng số điện thoại"
            ),
            birthday: Yup.date()
                .max(new Date(), "Future date not allowed")
        }),
        onSubmit: (values) => {
            console.log("Edit modal:  ", values);
            if(values !== formik.initialValues){
                dispatch(userActions.updateProfile(values));
            }
            else{
                alert("Thông tin không bị thay đổi");
            }

        },
    });

    return (
        <div className="edit-modal-wrapper">
            <button variant="outlined" onClick={() => handleOpen()}>
                <FiEdit />
                Chỉnh sửa
            </button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box style={style} className="box-modal">
                    <div className="form-group">
                        <h1 style={{ display: "flex", flexWrap: "nowrap", justifyContent: "space-between" }}>
                            Chỉnh sửa thông tin cá nhân
                            <button
                                style={{ padding: "0rem 2rem", backgroundColor: "transparent", color: "#000" }}
                                onClick = {() => {formik.setValues(formik.initialValues)}}>
                                <FiRefreshCw style={{ height: "2rem", width: "2rem" }} />
                            </button>
                        </h1>
                        <form className="form-update" onSubmit={formik.handleSubmit}>
                            <div className="input-item">
                                <h5>Username</h5>
                                <input type="text" disabled={true} value={formik.values.username}></input>
                            </div>

                            <div className="input-item">
                                <h5>Họ và tên</h5>
                                <input
                                    type="text"
                                    id="fullname"
                                    value={formik.values.fullname}
                                    onChange={formik.handleChange}
                                ></input>
                                {formik.errors.fullname && (
                                    <p className="input-error-validation"> {formik.errors.fullname} </p>
                                )}
                            </div>

                            <div className="input-item">
                                <h5>Ngày sinh</h5>
                                <input
                                    type="date"
                                    id="birthday"
                                    value={formik.values.birthday}
                                    onChange={formik.handleChange}
                                ></input>
                                {formik.errors.birthday && (
                                    <p className="input-error-validation"> {formik.errors.birthday} </p>
                                )}
                            </div>

                            <div className="input-item">
                                <h5>Email</h5>
                                <input
                                    type="text"
                                    id="email"
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                >
                                </input>
                                {formik.errors.email && (
                                    <p className="input-error-validation"> {formik.errors.email} </p>
                                )}
                            </div>

                            <div className="input-item">
                                <h5>Số điện thoại</h5>
                                <input
                                    type="text"
                                    id="phone"
                                    value={formik.values.phone}
                                    onChange={formik.handleChange}
                                >
                                </input>
                                {formik.errors.phone && (
                                    <p className="input-error-validation"> {formik.errors.phone} </p>
                                )}
                            </div>

                            <div className="btn-change-password" >
                                <button type="button">Đổi mật khẩu</button>
                            </div>
                            <div className="btn-group">
                                <button
                                    type="button"
                                    className="btn-cancle"
                                    onClick={() => cancleHandleClick()}
                                > Hủy
                                </button>
                                <button
                                    className="btn-update"
                                    type="submit"
                                >Cập nhật
                                </button>
                            </div>
                        </form>
                    </div>
                </Box>
            </Modal>
        </div>
    )
}
export { EditModal }