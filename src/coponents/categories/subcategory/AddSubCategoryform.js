import { React, useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import TextField from "../TextField";
import * as yup from "yup";
import { getAllCategory, SubCategory, UploadFile } from "../../../services/api";
/* eslint-disable */
function AddSubCategoryform() {
  const SUPPORTED_FORMATS = ["image/jpg", "image/jpeg", "image/png"];
  const validate = yup.object({
    categoryid: yup.string().required("Required"),
    subcategory: yup.string().required("Required"),
    subcategoryimg: yup.mixed().nullable().required("!Required"),
  });
  const [state, setstate] = useState([]);
  useEffect(() => {
    async function data() {
      let dat = await getAllCategory();
      setstate(dat);
    }
    data();
  }, []);

  return (
    <>
      <div className="row">
        <div className="col-xl-12">
          <div className="card m-b-30">
            <div className="card-body">
              <h4 className="mt-0 header-title mb-4">Add Sub Category</h4>
              <div className="table-responsive">
                <Formik
                  initialValues={{
                    categoryid: "",

                    subcategory: "",
                    subcategoryimg: "",
                  }}
                  onSubmit={async (values, actions) => {
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
                      let response = await SubCategory(values);
                      if (response.status) {
                        alert("SUCCESSFULLY CREATED");

                        window.location.reload();
                      } else {
                        alert("something went wrong");
                      }
                    } catch (error) {
                      alert(error);
                    }

                    actions.resetForm();
                  }}
                  validationSchema={validate}
                >
                  {(formik) => (
                    <Form onSubmit={formik.handleSubmit}>
                      <label>Category Name</label>
                      <Field
                        as="select"
                        className={`form-control shadow-none  ${
                          formik.touched.categoryid &&
                          formik.errors.categoryid &&
                          "is-invalid"
                        }`}
                        id="title"
                        name="categoryid"
                      >
                        <option defaultValue="">Select Category</option>
                        {state &&
                          state.map((i, index) => (
                            <option key={index} value={i._id}>
                              {i.title}
                            </option>
                          ))}
                      </Field>

                      <ErrorMessage
                        name="categoryid"
                        component="div"
                        className="error"
                      />

                      <br />
                      <TextField label="Sub Category" name="subcategory" />
                      <label>Sub Category Image</label>
                      <input
                        type="file"
                        onChange={(e) =>
                          formik.setFieldValue(
                            "subcategoryimg",
                            e.target.files[0]
                          )
                        }
                        className={`form-control shadow-none mb-2 ${
                          formik.touched.subcategoryimg &&
                          formik.errors.subcategoryimg &&
                          "is-invalid"
                        }`}
                        name="subcategoryimg"
                        placeholder="Image"
                      />
                      <ErrorMessage
                        name="subcategoryimg"
                        className="error"
                        component="div"
                      />

                      <br />

                      <input
                        type="submit"
                        className="btn mt-2 rounded-3 w-20  btn-lg btn-outline-secondary btn-dark"
                        value="Submit"
                      />
                    </Form>
                  )}
                </Formik>
              </div>
              {/* formik form */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddSubCategoryform;
