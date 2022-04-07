import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

function LoginForm(props) {
  const formik = useFormik({
    validateOnChange: true,
    validateOnBlur: true,
    validateOnMount: false,
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: Yup.object({
      username: Yup.string().required("Required"),
      password: Yup.string()
        .required("Required")
        .matches(
          /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
          "Password must be minimum eight characters, at least one letter and one number"
        ),
    }),
    onSubmit: (values) => {
      props.onSubmit(values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="mb-3">
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Username or Email"
          value={formik.values.username}
          onChange={formik.handleChange}
        />
        {formik.errors.username && formik.touched.username && (
          <p className="input-error-validation"> {formik.errors.username} </p>
        )}
      </div>

      <div className="mb-3">
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          value={formik.values.password}
          onChange={formik.handleChange}
        />
        {formik.errors.password && formik.touched.password && (
          <p className="input-error-validation"> {formik.errors.password} </p>
        )}
      </div>

      <button type="submit"> Đăng nhập </button>
    </form>
  );
}

export default LoginForm;
