import { React, useState, useEffect } from "react";
import { Formik, Form, ErrorMessage, Field } from "formik";
import TextField from "../TextField";
import * as yup from "yup";
import {
  getAllCategory,
  UploadFile,
  getAllSubCategory,
  SubSubCategory,
} from "../../../services/api";
/* eslint-disable */
function AddSubSubcategoryform() {
  const [state, setstate] = useState([]);
  const [state1, setstate1] = useState([]);

  // const SUPPORTED_FORMATS = ["image/jpg", "image/jpeg", "image/png"];
  const validate = yup.object({
    categoryid: yup.string().required("Required"),
    subcategoryid: yup.string().required("Required"),
    subsubcategory: yup.string().required("Required"),
    subsubcategoryimg: yup.mixed().nullable().required("!Required"),
  });
  useEffect(() => {
    async function data() {
      let dat = await getAllCategory();

      let response = await getAllSubCategory();

      setstate1(response);

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
              <h4 className="mt-0 header-title mb-4">Add Sub Sub Category</h4>
              <div className="table-responsive">
                <Formik
                  initialValues={{
                    categoryid: "",
                    subcategoryid: "",
                    subsubcategory: "",
                    subsubcategoryimg: "",
                  }}
                  validationSchema={validate}
                  onSubmit={async (values, actions) => {
                    try {
                      if (values.subsubcategoryimg) {
                        const data = new FormData();
                        data.append("name", values.subsubcategoryimg.name);
                        data.append("file", values.subsubcategoryimg);
                        let subimg = await UploadFile(data);

                        values.subsubcategoryimg = subimg.data;
                      }
                    } catch (error) {
                      alert(error);
                    }
                    try {
                      let response = await SubSubCategory(values);

                      if (response.status) {
                        alert("SUCCESSFULLY CREATED ");
                        window.location.reload()
                      } else {
                        alert("something went wrong");
                      }
                      actions.resetForm();
                    } catch (error) {
                      alert(error);
                    }
                  }}
                >
                  {(formik) => (
                    <Form>
                      <label>Category Name</label>
                      <Field
                        as="select"
                        className={`form-control shadow-none ${
                          formik.touched.categoryid &&
                          formik.errors.categoryid &&
                          "is-invalid"
                        }`}
                        name="categoryid"
                      >
                        <option defaultValue="">Select Category</option>
                        {state &&
                          state.map((i, index) => (
                            <option value={i._id}>{i.title}</option>
                          ))}
                      </Field>
                      <ErrorMessage
                        component="div"
                        name="categoryid"
                        className="error"
                      />
                      <br />
                      <label>Sub Category Name</label>
                      <Field
                        as="select"
                        className={`form-control shadow-none ${
                          formik.touched.subcategoryid &&
                          formik.errors.subcategoryid &&
                          "is-invalid"
                        }`}
                        name="subcategoryid"
                      >
                        <option defaultValue="">Select Category</option>
                        {state1 &&
                          state1.map((i, index) => {
                            if (formik.values.categoryid === i.categoryid)
                              return (
                                <option
                                  key={index}
                                  name="subcategory"
                                  value={i._id}
                                >
                                  {i.subcategory}
                                </option>
                              );
                          })}
                      </Field>
                      <ErrorMessage
                        component="div"
                        className="error"
                        name="subcategoryid"
                      />

                      <br />
                      <TextField
                        label="Sub Sub Category Name"
                        name="subsubcategory"
                      />
                      <br />
                      <label>Sub Sub Category Image</label>
                      <input
                        type="file"
                        onChange={(e) =>
                          formik.setFieldValue(
                            "subsubcategoryimg",
                            e.target.files[0]
                          )
                        }
                        className={`form-control shadow-none mb-2 ${
                          formik.touched.subsubcategoryimg &&
                          formik.errors.subsubcategoryimg &&
                          "is-invalid"
                        }`}
                        name="subsubcategoryimg"
                        placeholder="Image"
                      />
                      <ErrorMessage
                        name="subsubcategoryimg"
                        className="error"
                        component="div"
                      />

                      <input
                        type="Submit"
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

export default AddSubSubcategoryform;
