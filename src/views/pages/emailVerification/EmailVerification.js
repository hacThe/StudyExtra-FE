import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { userActions } from "../../../actions/user.actions"; 
import axios from "axios";
import { Fragment } from "react/cjs/react.production.min";

function EmailVerification() {

   // const [validUrl, setValidUrl] = useState(true);
    const param = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        const verifyEmailUrl = async () => {
            /* try {
                const url = `http://localhost:5000/api/auth/${param.id}/verify/${param.token}`;
                const { data } = await axios.get(url);
                console.log(data);
                setValidUrl(true);
            } catch (error) {
                console.log(error);
                setValidUrl(false);
            } */
            dispatch(userActions.verifyEmail(param.id, param.token))
        };
        verifyEmailUrl();
    }, [param]);
    const emailVerified = useSelector(state => state.emailVerification.emailVerified)

    return (

        <Fragment>
            {emailVerified ? (
                <div className="email-verification">
                    <h1 style={{ margin: "50px" }}>Email verified successfully!!!!</h1>
                    <div style={{ display: "flex", flexWrap: "nowrap", margin: "50px" }}>
                        <button style={{marginRight: "20px"}} onClick={() => { navigate("/trang-chu") }}>Trang chủ</button>
                        <button onClick={() => { navigate("dang-nhap") }}>Đăng nhập</button>
                    </div>
                </div>
            ) : navigate("/404")}
        </Fragment>
    );
}

export default EmailVerification