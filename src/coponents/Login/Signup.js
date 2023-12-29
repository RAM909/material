import React from "react";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";

import { Formik, Form, ErrorMessage } from "formik";
import * as yup from "yup";
import { Register } from "../../services/api";
import Footer from "../footer/Footer";
/* eslint-disable */
function Signup() {
  const navigate = useNavigate();
  const LoginSchema = yup.object({
    username: yup.string().required("Required!").min(3, "Too smaller"),
    email: yup.string().required("Required!").email("Invalid"),
    password: yup
      .string()
      .required("Required")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
      )
      .min(8, "length should be 8 char"),
    key: yup.string().required("Required"),
  });
  return (
    <>
      {localStorage.getItem("token") ? (
        (window.location.href = "/home")
      ) : (
        <>
          {" "}
          <div className="row text-center d-flex">
            <div className="col-lg-5   mx-5 mr-1 mt-3">
              <Formik
                initialValues={{
                  username: "",
                  password: "",
                  email: "",
                  key: "",
                }}
                validationSchema={LoginSchema}
                onSubmit={async (values, actions) => {
                  try {
                    let dat = await Register(values);

                    if (dat.status === 200) {
                      alert("SUCCESSFULLY CREATED ");
                      navigate("/");
                    } else {
                      alert("Something went wrong");
                    }
                  } catch (error) {
                    alert(error);
                  }

                  actions.resetForm();
                }}
              >
                {(formik) => (
                  <Form onSubmit={formik.handleSubmit}>
                    <div>
                      <img
                        alt="....."
                        src="/assets/Images/Logo.png"
                        className="rounded w-50 mx-auto  d-block  mt-5 "
                      />
                      <div>
                        <h1 className="form__title mt-4">Admin Dashboard </h1>
                        <h6>Signup to continue as an Admin</h6>

                        <div className="form__div mx-5  mb-1 mt-3 ">
                          <input
                            type="text"
                            className={`form__input form-control shadow-none mx-5  ${
                              formik.touched.username &&
                              formik.errors.username &&
                              "is-invalid"
                            }`}
                            placeholder=" "
                            name="username"
                            value={formik.values.username}
                            onChange={formik.handleChange}
                          />
                          <label htmlFor="" className="form__label mx-5  ">
                            Username <span style={{ color: "red" }}>*</span>
                          </label>
                        </div>

                        <ErrorMessage
                          component="div"
                          name="username"
                          className="error"
                        />

                        <div className="form__div mx-5  mb-2 mt-3 ">
                          <input
                            type="email"
                            className={`form__input form-control shadow-none mx-5  ${
                              formik.touched.email &&
                              formik.errors.email &&
                              "is-invalid"
                            }`}
                            placeholder=" "
                            name="email"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                          />
                          <label htmlFor="" className="form__label mx-5 ">
                            Email <span style={{ color: "red" }}>*</span>
                          </label>
                        </div>

                        <ErrorMessage
                          component="div"
                          name="email"
                          className="error"
                        />

                        <div className="form__div mx-5  mb-2 mt-3">
                          <input
                            type="password"
                            className={`form__input form-control shadow-none mx-5  ${
                              formik.touched.password &&
                              formik.errors.password &&
                              "is-invalid"
                            }`}
                            placeholder=" "
                            name="password"
                            value={formik.values.password}
                            onChange={formik.handleChange}
                          />
                          <label htmlFor="" className="form__label mx-5 ">
                            Password <span style={{ color: "red" }}>*</span>
                          </label>
                        </div>
                        <ErrorMessage
                          component="div"
                          name="password"
                          className="error"
                        />

                        <div className="form__div mx-5  mb-2 mt-3 ">
                          <input
                            type="text"
                            className={`form__input form-control shadow-none mx-5  ${
                              formik.touched.key &&
                              formik.errors.key &&
                              "is-invalid"
                            }`}
                            placeholder=" "
                            name="key"
                            value={formik.values.key}
                            onChange={formik.handleChange}
                          />
                          <label htmlFor="" className="form__label mx-5 ">
                            Secret Key <span style={{ color: "red" }}>*</span>
                          </label>
                        </div>
                        <ErrorMessage
                          component="div"
                          name="key"
                          className="error"
                        />

                        <input
                          type="submit"
                          className="btn btn-dark mt-3  btn-lg"
                          value=" Sign Up"
                        />

                        <div className="row   d-flex mt-2  align-items-center  justify-content-center">
                          <Link to="/">
                            <p
                              className="text-center"
                              style={{
                                color: "#1A73E8",
                                textDecoration: "none",
                              }}
                            >
                              Already have an Account? Login
                            </p>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
            <div className="col-lg-5 w-100  mt-2">
              <img
                src="/assets/Images/Loginim.svg"
                className="rounded float-right w-100 mt-5 "
                alt=" loading.."
              />
            </div>
            <br />
          </div>
          <footer className="footer1"></footer>
          <Footer />
        </>
      )}
    </>
  );
}

export default Signup;
