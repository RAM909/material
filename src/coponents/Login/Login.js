import React from "react";
import "./login.css";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import { Loging } from "../../services/api";

import Footer from "../footer/Footer";
import { Formik, Form, ErrorMessage } from "formik";
import * as yup from "yup";
function Login() {
  const navigate = useNavigate();
  const LoginSchema = yup.object({
    username: yup.string().required("Required!").min(3, "Greater than 3 "),
    password: yup.string().required("Required!"),
    key: yup.string().required("Required"),
  });
  return (
    <>
      {localStorage.getItem("token") ? (
        (window.location.href = "/home")
      ) : (
        <>
          {" "}
          <div>
            <div className="row text-center ">
              <div className="col-lg-5   mx-5 mr-1 mt-3">
                <Formik
                  initialValues={{
                    username: "",
                    password: "",
                    key: "",
                  }}
                  validationSchema={LoginSchema}
                  onSubmit={async (values, actions) => {
                    try {
                      let response = await Loging(values);

                      if (response.data) {
                        localStorage.setItem("token", response.data.authtoken);

                        navigate("/home");
                        alert("LOGIN SUCCESSFUL");
                        window.location.reload();
                      }
                      if (!response.data) {
                        alert("something wrong ");
                      }

                      actions.resetForm();
                    } catch (error) {
                      alert("Invalid username or secret key or password ");
                    }

                    actions.resetForm();
                  }}
                >
                  {(formik) => (
                    <Form onSubmit={formik.handleSubmit}>
                      <div>
                        <img
                          alt="..."
                          src="/assets/Images/Logo.png"
                          className="rounded mx-auto d-block w-50 mt-5 "
                        />

                        <div className="mt-5">
                          <h1 className="form__title mt-1">Admin Dashboard </h1>
                          <h6>Login to continue as an Admin</h6>

                          <div className="form__div mb-2 mx-5 mt-3">
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
                            <label
                              htmlFor=" "
                              or=""
                              className="form__label  mx-5"
                            >
                              Username <span style={{ color: "red" }}>*</span>
                            </label>
                          </div>

                          <ErrorMessage
                            component="div"
                            name="username"
                            className="error"
                          />

                          <br />

                          <div className="form__div mb-2  mx-5">
                            <input
                              type="password"
                              className={`form__input  form-control shadow-none  mx-5 ${
                                formik.touched.password &&
                                formik.errors.password &&
                                "is-invalid"
                              }`}
                              placeholder=" "
                              name="password"
                              value={formik.values.password}
                              onChange={formik.handleChange}
                            />
                            <label htmlFor="" className="form__label  mx-5">
                              Password <span style={{ color: "red" }}>*</span>
                            </label>
                          </div>
                          <ErrorMessage
                            component="div"
                            name="password"
                            className="error"
                          />
                          <br />
                          <div className="form__div mb-2 mx-5">
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
                          <br />
                          <ErrorMessage
                            component="div"
                            name="key"
                            className="error"
                          />
                          <input
                            type="submit"
                            className="btn btn-dark   btn-lg"
                            value=" Login"
                          />

                          <div className="row mt-2  d-flex  align-items-center  justify-content-center">
                            <Link to="/signup">
                              <p
                                className="text-center"
                                style={{
                                  color: "#1A73E8",
                                  textDecoration: "none",
                                }}
                              >
                                Don't have an Account? Sign Up
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
            </div>
          </div>
          <br />
          <footer className="footer1 "></footer>
          <Footer />
        </>
      )}
    </>
  );
}

export default Login;
