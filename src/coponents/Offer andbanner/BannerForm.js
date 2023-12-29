import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
// import TextField from '../categories/TextField';
import * as yup from "yup";
import { Banner, UploadFile } from "../../services/api";
function BannerForm() {
  const validate = yup.object({
    img: yup.mixed().nullable().required("Required"),
    bannernumber: yup.string().required("Required"),
  });
  return (
    <div>
      <Formik
        initialValues={{
          img: "",
          bannernumber: "",
        }}
        validationSchema={validate}
        onSubmit={async (values, actions) => {
          try {
            const data = new FormData();
            if (values.img) {
              data.append("name", values.img.name);
              data.append("file", values.img);
              const image = await UploadFile(data);

              values.img = image.data;
            }
          } catch (error) {
            alert("error in upload file in add form cat", error);
          }

          try {
            let dataresponse = await Banner(values);

            if (!dataresponse.status) {
              alert("something went wrong", dataresponse);
            } else {
              alert("SUCCESSFULLY CREATED", dataresponse.status);
              window.location.reload();
            }
          } catch (error) {
            alert("error in add category form", error);
          }

          actions.resetForm();
        }}
      >
        {(formik) => (
          <Form>
            {/* <TextField label="Banner" name="Bannername" /> */}
            <br />

            <label>Banner Number</label>
            <Field
              as="select"
              className={`form-control shadow-none  ${
                formik.touched.bannernumber &&
                formik.errors.bannernumber &&
                "is-invalid"
              }`}
              id="title"
              name="bannernumber"
            >
              <option value="">Select Banner</option>
              <option value="1">Banner 1</option>
              <option value="2">Banner 2</option>
              <option value="3">Banner 3</option>
              <option value="4">Banner 4</option>
              <option value="5">Banner 5</option>
              <option value="6">Banner 6</option>
            </Field>

            <ErrorMessage
              name="bannernumber"
              component="div"
              className="error"
            />

            <br />
            <label>Banner Image</label>
            <input
              type="file"
              accept="image/*"
              className={`form-control shadow-none mt-2 ${
                formik.touched.img && formik.errors.img && "is-invalid"
              }`}
              name="img"
              placeholder="Image"
              onChange={(e) => formik.setFieldValue("img", e.target.files[0])}
            />
            <ErrorMessage component="div" name="img" className="error" />

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
  );
}

export default BannerForm;
