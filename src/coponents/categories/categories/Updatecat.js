import { Form, Formik, ErrorMessage } from "formik";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {
  getCategory,
  updatepercategory,
  UploadFile,
} from "../../../services/api";
import TextField from "../TextField";
import * as yup from "yup";
/* eslint-disable */
function Updatecat() {
  const { id } = useParams();
  var [head, sethead] = useState([]);

  const navigate = useNavigate();
  // const SUPPORTED_FORMATS = ["image/jpg", "image/jpeg", "image/png", ".png"];

  const validate = yup.object({
    title: yup.string().required("Required"),
    edit: yup.boolean(),
    img: yup
      .mixed()
      .nullable()
      .notRequired()
      .when("edit", {
        is: true,
        then: yup.string().required("Required"),
        // .test(
        //     "FILE_FORMAT",
        //     "Uploaded file has unsupported format",
        //     (value) => !value || SUPPORTED_FORMATS.includes(value?.type)
        // ),
      }),
  });

  // eslint-disable-next-line
  useEffect(() => {
    async function data() {
      let dat = await getCategory(id);
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
                  <h4 className="page-title">Update Category</h4>
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
                    <h4 className="mt-0 header-title mb-4"> Update Category</h4>
                    <div className="table-responsive">
                      <Formik
                        enableReinitialize
                        initialValues={{
                          title: head.title,
                          img: head.img,
                          edit: false,
                          id: id,
                        }}
                        validationSchema={validate}
                        onSubmit={async (values, actions) => {
                          if (values.edit) {
                            try {
                              if (values.img) {
                                const data = new FormData();
                                data.append("name", values.img.name);
                                data.append("file", values.img);
                                let subimg = await UploadFile(data);

                                values.img = subimg.data;
                              }
                            } catch (error) {
                              alert(error);
                            }
                            try {
                              let response = await updatepercategory(
                                values,
                                values.id
                              );

                              if (response.status) {
                                alert("UPDATED SUCCESSFULLY");
                                navigate("/categories");

                                window.location.reload();
                              } else {
                                alert("something went wrong");
                              }
                            } catch (error) {
                              alert(error);
                            }
                          } else {
                            try {
                              let response = await updatepercategory(
                                values,
                                values.id
                              );
                              if (response.status) {
                                alert("UPDATED SUCCESSFULLY");
                                navigate("/categories");

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
                              label="Category Name"
                              onChange={formik.handleChange}
                              name="title"
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
                                    formik.touched.img &&
                                    formik.errors.img &&
                                    "is-invalid"
                                  }`}
                                  name="img"
                                  placeholder="Image"
                                  onChange={(e) =>
                                    formik.setFieldValue(
                                      "img",
                                      e.target.files[0]
                                    )
                                  }
                                />
                                <ErrorMessage
                                  component="div"
                                  name="img"
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
                                  src={head.img}
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

export default Updatecat;
