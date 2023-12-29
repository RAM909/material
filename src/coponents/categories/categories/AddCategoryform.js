import { React } from "react";
import { Formik, Form, ErrorMessage } from "formik";
import TextField from "../TextField";
import * as yup from "yup";

import { Category, UploadFile } from "../../../services/api";
function AddCategoryform() {
  const validate = yup.object({
    title: yup.string().required("Required"),
    img: yup
      .mixed()
      .nullable()
      .required("Required")
      .test(
        "FILE_SIZE",
        "uploaded file is too big",
        (value) => !value || (value && value.size <= 1024 * 1024 * 1024 * 8)
      ),
  });
  return (
    <>
      <div className="row">
        <div className="col-xl-12">
          <div className="card m-b-30">
            <div className="card-body">
              <h4 className="mt-0 header-title mb-4">Add Category</h4>
              <div className="table-responsive">
                <Formik
                  initialValues={{
                    title: "",
                    img: "",
                  }}
                  validationSchema={validate}
                  onSubmit={async (values, actions) => {
                    try {
                      if (values.img) {
                        const data = new FormData();
                        data.append("name", values.img.name);
                        data.append("file", values.img);
                        const image = await UploadFile(data);

                        values.img = image.data;
                      }
                    } catch (error) {
                      alert("error in upload file in add form cat", error);
                    }

                    try {
                      let dataresponse = await Category(values);

                      if (!dataresponse.status) {
                        alert("something went wrong", dataresponse);
                      } else {
                        alert("SUCCESSFULLY CREATED", dataresponse.status);
                        window.location.reload();
                      }
                    } catch (error) {
                      alert(error);
                    }

                    actions.resetForm();
                  }}
                >
                  {(formik) => (
                    <Form>
                      <TextField label="Category Name" name="title" />
                      <br />
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
                          formik.setFieldValue("img", e.target.files[0])
                        }
                      />
                      <ErrorMessage
                        component="div"
                        name="img"
                        className="error"
                      />

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
              {/* formik form */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddCategoryform;
