import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
import { Form, Formik, ErrorMessage } from "formik";
import * as yup from "yup";
import TextField from "../TextField";
import {
  UploadFile,
  getASubCategory,
  UpdateASubCategory,
} from "../../../services/api";
/* eslint-disable */
function Updatesub() {
  const { id } = useParams();
  const [head, sethead] = useState([]);

  const navigate = useNavigate();

  const validate = yup.object({
    subcategory: yup.string().required("Required"),
    edit: yup.boolean(),
    subcategoryimg: yup
      .mixed()
      .nullable()
      .notRequired()
      .when("edit", {
        is: true,
        then: yup.string().required("Required"),
      }),
  });

  useEffect(() => {
    async function data() {
      let dat = await getASubCategory(id);

      sethead(dat);
    }
    data();
  }, []);

  return (
    <>
      <div className="content-page">
        <div className="content">
          <div className="container-fluid">
            <div className="page-title-box">
              <div className="row align-items-center">
                <div className="col-sm-6">
                  <h4 className="page-title">Update Sub Category</h4>
                </div>
                <div className="col-sm-6">
                  <ol className="breadcrumb float-right">
                    <Link to="/categories">Categories</Link>
                  </ol>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-12">
                <div className="card m-b-30">
                  <div className="card-body">
                    <h4 className="mt-0 header-title mb-4">
                      {" "}
                      Update Sub Category
                    </h4>
                    <div className="table-responsive">
                      <Formik
                        enableReinitialize
                        initialValues={{
                          subcategory: head.subcategory,
                          subcategoryimg: head.subcategoryimg,
                          edit: false,
                          id: id,
                        }}
                        validationSchema={validate}
                        onSubmit={async (values, actions) => {
                          if (values.edit) {
                            try {
                              if (values.subcategoryimg) {
                                const data = new FormData();
                                data.append("name", values.subcategoryimg.name);
                                data.append("file", values.subcategoryimg);
                                let subimg = await UploadFile(data);

                                values.subcategoryimg = subimg.data;
                              }
                            } catch (error) {
                              alert(error);
                            }
                            try {
                              let response = await UpdateASubCategory(
                                values.id,
                                values
                              );

                              if (response.status) {
                                alert("UPDATED SUCCESSFULLY");
                                navigate("/subcategory");

                                window.location.reload();
                              } else {
                                alert("something went wrong");
                              }
                            } catch (error) {
                              alert(error);
                            }
                          } else {
                            try {
                              let response = await UpdateASubCategory(
                                values.id,
                                values
                              );

                              if (response.status) {
                                alert("UPDATED SUCCESSFULLY");
                                navigate("/subcategory");

                                actions.resetForm();
                                window.location.reload();
                              } else {
                                alert("Something went wrong");
                              }
                            } catch (error) {
                              alert(error);
                            }
                          }
                        }}
                      >
                        {(formik) => (
                          <Form onSubmit={formik.handleSubmit}>
                            <TextField
                              label=" Sub Category Name"
                              onChange={formik.handleChange}
                              name="subcategory"
                            />
                            <br />
                            {formik.values.edit ? (
                              <>
                                {" "}
                                <label>Category Image</label>
                                <input
                                  type="file"
                                  accept="image/*"
                                  className={`form-control shadow-none ${
                                    formik.touched.subcategoryimg &&
                                    formik.errors.subcategoryimg &&
                                    "is-invalid"
                                  }`}
                                  name="subcategoryimg"
                                  placeholder="Image"
                                  onChange={(e) =>
                                    formik.setFieldValue(
                                      "subcategoryimg",
                                      e.target.files[0]
                                    )
                                  }
                                />
                                <ErrorMessage
                                  component="div"
                                  name="subcategoryimg"
                                  className="error"
                                />
                                <br />
                                <div className="form-check">
                                  <input
                                    className="form-check-input"
                                    onClick={() => {
                                      formik.setFieldValue("edit", false);
                                    }}
                                    type="checkbox"
                                    value=""
                                    id="flexCheckDefault"
                                  />
                                  <label
                                    className="form-check-label"
                                    for="flexCheckDefault"
                                  >
                                    No Change Image
                                  </label>
                                </div>
                              </>
                            ) : (
                              <>
                                <img
                                  src={head.subcategoryimg}
                                  alt="..."
                                  className="img-fluid w-25 "
                                ></img>
                                <br />
                                <br />

                                <div className="form-check">
                                  <input
                                    className="form-check-input"
                                    onClick={(e) => {
                                      formik.setFieldValue("edit", true);
                                    }}
                                    type="checkbox"
                                    value=""
                                    id="flexCheckDefault"
                                  />
                                  <label
                                    className="form-check-label"
                                    for="flexCheckDefault"
                                  >
                                    Change Image
                                  </label>
                                </div>
                              </>
                            )}

                            <br />
                            <input
                              type="Submit"
                              className="btn mt-2 rounded-3 w-20  btn-lg btn-outline-secondary btn-dark"
                              value="Submit"
                            />
                          </Form>
                        )}
                      </Formik>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Updatesub;
