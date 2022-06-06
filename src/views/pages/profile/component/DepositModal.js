import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { usersServices } from "../../../../services";
import { useFormik } from "formik";
import * as Yup from "yup";
import { GrClose } from "react-icons/gr";
import { IoReturnUpBackOutline } from "react-icons/io5";
import { Modal, Box, Button } from '@mui/material';
import { showToast } from '../../../../actions/toast.action';
import "./DepositModal.scss"

function DepositModal(props) {
    const [open, setOpen] = React.useState(false);
    const [currentPage, setCurrentPage] = useState(1)
    const dispatch = useDispatch();
    const handleOpen = () => setOpen(true);
    const handleClose = (event, reason) => {
        if (reason !== 'backdropClick') {
            setOpen(false);
            setCurrentPage(1);
        }
    }

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: "60rem",
        bgcolor: '#FFFFFF',
        border: '1px solid #000',
        boxShadow: 24,
        p: 4,
    };

    function DepositInformation() {

        const inform = [
            {
                tenNH: "Vietcombank",
                chiNhanh: "VCB Hà Nội",
                nguoiNhan: "Dương Thế Hiển",
                stk: "000 000 000 000"
            },
            {
                tenNH: "BIDV",
                chiNhanh: "BIDV Võ Văn Ngân, Thủ Đức",
                nguoiNhan: "Dương Thế Hiển",
                stk: "000 000 000 001"
            }
        ]

        return (
            <div className="deposit-information">
                <h1>PHƯƠNG THỨC NẠP GEM</h1>
                <h2>Chuyển khoản trực tiếp</h2>
                {inform.map((item, index) =>
                    <div key={index} className="deposit-inform-item">
                        <h5>{index + 1}. Ngân hàng: {item.tenNH}</h5>
                        <p>+ Chi nhánh: {item.chiNhanh}</p>
                        <p>+ Tên người thụ hưởng: {item.nguoiNhan}</p>
                        <p>+ Số tài khoản: {item.stk}</p>
                    </div>
                )}
                <div className="btn-next">
                    <button onClick={() => setCurrentPage(2)}>Xác nhận thanh toán</button>
                </div>
            </div>
        )
    }

    function DepositRequest(props) {

        const transactionFormik = useFormik({
            validateOnChange: true,
            validateOnBlur: true,
            validateOnMount: false,
            initialValues: {
                transactionNumber: "",
                bankSend: "",
                bankReceive: "Vietcombank",
                amount: 1,
            },
            validationSchema: Yup.object({
                transactionNumber: Yup.string().required("Vui lòng nhập số tài khoản").matches(/^[0-9]+$/, "Must be only digits"),
                bankSend: Yup.string().required("Vui lòng nhập ngân hàng gửi"),
                amount: Yup.number().required("Vui lòng nhập số GEM").positive("Số GEM phải lớn hơn 0")
            }),
            onSubmit: (values) => {
                console.log(values)
                const transaction = {
                    amount: values.amount,
                    context: {
                        transactionNumber: values.transactionNumber,
                        bankSend: values.bankSend,
                        bankReceive: values.bankReceive
                    }
                }
                usersServices.depositRequest(transaction).then((data) => {
                    //alert("Request sent successfully");
                    dispatch(showToast('success', 'Gửi yêu cầu thành công'));
                    setOpen(false);
                },
                    (error) => {
                        alert(error);
                    }
                )
            },
        });

        return (
            <div className="deposit-request">
                <h1>Yêu cầu xác nhận thanh toán</h1>
                <h5>1GEM = 1.000 VNĐ</h5>

                <form className="deposit-request-form" onSubmit={transactionFormik.handleSubmit}>
                    <div className="input-item">
                        <h5>Số tài khoản</h5>
                        <input
                            type='text'
                            id="transactionNumber"
                            name="transactionNumber"
                            value={transactionFormik.values.transactionNumber}
                            onChange={transactionFormik.handleChange}
                        ></input>
                        {transactionFormik.errors.transactionNumber && transactionFormik.touched.transactionNumber && (
                            <p className="input-error-validation"> {transactionFormik.errors.transactionNumber} </p>
                        )}
                    </div>

                    <div className="input-item">
                        <h5>Ngân hàng gửi</h5>
                        <input
                            type="text"
                            id="bankSend"
                            value={transactionFormik.values.bankSend}
                            onChange={transactionFormik.handleChange}
                        ></input>
                        {transactionFormik.errors.bankSend && transactionFormik.touched.bankSend && (
                            <p className="input-error-validation"> {transactionFormik.errors.bankSend} </p>
                        )}
                    </div>

                    <div className="input-item">
                        <h5>Ngân hàng nhận</h5>
                        <select id="bankReceive" value={transactionFormik.values.bankReceive} onChange={transactionFormik.handleChange}>
                            <option value="Vietcombank">Vietcombank</option>
                            <option value="BIDV">BIDV</option>
                        </select>
                    </div>

                    <div className="input-item">
                        <h5>Số lượng ( GEM )</h5>
                        <input
                            type='number'
                            id='amount'
                            value={transactionFormik.values.amount}
                            onChange={transactionFormik.handleChange}
                        ></input>
                        {transactionFormik.errors.amount && transactionFormik.touched.amount && (
                            <p className="input-error-validation"> {transactionFormik.errors.amount} </p>
                        )}
                    </div>

                    <div className="btn-submit">
                        <button type="submit">Gửi</button>
                    </div>
                </form>
            </div>
        )
    }


    return (
        <div className="edit-modal-wrapper">
            <div style={{
                display: "flex",
                justifyContent: "left",
                flexWrap: "wrap"
            }}>
                <Button variant="contained" className="btn-contained" onClick={handleOpen}>Nạp tiền vào tài khoản</Button>
            </div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box style={style} className="box-modal">
                    <div className="deposit-form-group">
                        <div className="exit-btn">
                            <button onClick={handleClose}>
                                <GrClose />
                            </button>
                        </div>
                        {
                            currentPage === 2 &&
                            <div className="back-btn">
                                <button onClick={() => setCurrentPage(1)}>
                                    <IoReturnUpBackOutline />
                                </button>
                            </div>
                        }

                        {currentPage === 1 && <DepositInformation />}
                        {currentPage === 2 && <DepositRequest />}
                    </div>
                </Box>
            </Modal>
        </div>
    )
}
export { DepositModal }