import React from "react";
import { usersServices } from "../../../../services";
import { useFormik } from "formik";
import * as Yup from "yup";
import { GrClose } from "react-icons/gr";
import { Modal, Box } from '@mui/material';
import "./ResetPasswordModal.scss"

function ResetPasswordModal(props) {
    const handleClose = (event, reason) => {
        if (reason !== 'backdropClick') {
            passwordFormik.setValues(passwordFormik.initialValues);
            passwordFormik.setTouched(passwordFormik.touched.password, false);
            props.setPassOpen(false);
        }
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

    const passwordFormik = useFormik({
        validateOnChange: true,
        validateOnBlur: true,
        validateOnMount: false,
        initialValues: {
            oldPassword: "",
            password: "",
            repassword: "",
        },
        validationSchema: Yup.object({
            oldPassword: Yup.string()
                .required("Vui lòng nhập mật khẩu cũ")
                .matches(
                    /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                    "Mật khẩu tối thiểu 8 kí tự, bao gồm chữ cái và chữ số"
                ),
            password: Yup.string()
                .required("Vui lòng nhập mật khẩu mới")
                .matches(
                    /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                    "Mật khẩu tối thiểu 8 kí tự, bao gồm chữ cái và chữ số"
                ),
            repassword: Yup.string()
                .required("Required")
                .oneOf([Yup.ref("password"), null], "Mật khẩu không trùng khớp"),
        }),
        onSubmit: (values) => {
            console.log(values)
            usersServices.resetPassword(values.oldPassword, values.password).then((data) => {
                alert("Đổi mật khẩu thành công")
                props.setPassOpen(false);
            }, (error) => {
                alert(error.response.data);
            })
        },
    });


    return (
        <div className="reset-password-modal-wrapper">
            <Modal
                open={props.isOpen}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box style={style} className="box-modal">
                    <div className="reset-password-form-group">
                        <button className="exit-btn" onClick={handleClose}>
                            <GrClose />
                        </button>

                        <h1>Đặt lại mật khẩu</h1>

                        <form className="reset-password-form" onSubmit={passwordFormik.handleSubmit}>
                            
                            
                            <div className="input-item">
                                <h5>Mật khẩu cũ</h5>
                                <input
                                    type='password'
                                    id="oldPassword"
                                    value={passwordFormik.values.oldPassword}
                                    onChange={passwordFormik.handleChange}
                                ></input>
                                {passwordFormik.errors.oldPassword && passwordFormik.touched.oldPassword && (
                                    <p className="input-error-validation"> {passwordFormik.errors.oldPassword} </p>
                                )}
                            </div>

                            <div className="input-item">
                                <h5>Mật khẩu mới</h5>
                                <input
                                    type='password'
                                    id="password"
                                    value={passwordFormik.values.password}
                                    onChange={passwordFormik.handleChange}
                                ></input>
                                {passwordFormik.errors.password && passwordFormik.touched.password && (
                                    <p className="input-error-validation"> {passwordFormik.errors.password} </p>
                                )}
                            </div>
                            <div className="input-item">
                                <h5>Nhập lại mật khẩu</h5>
                                <input
                                    type='password'
                                    id="repassword"
                                    value={passwordFormik.values.repassword}
                                    onChange={passwordFormik.handleChange}
                                ></input>
                                {passwordFormik.errors.repassword && passwordFormik.touched.repassword && (
                                    <p className="input-error-validation"> {passwordFormik.errors.repassword} </p>
                                )}
                            </div>

                            <div className="btn-submit">
                                <button type="submit">Cập nhật</button>
                            </div>
                        </form>
                    </div>
                </Box>
            </Modal>
        </div>
    )
}
export { ResetPasswordModal }