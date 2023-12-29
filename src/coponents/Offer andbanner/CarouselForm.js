import React from "react";
// import TextField from '../categories/TextField';
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Carousels } from "../../services/api";
import { UploadFile } from "../../services/api";
import * as yup from "yup";
function CarouselForm() {
  const validate = yup.object({
    cauimg: yup.mixed().nullable().required("Required"),
    carouselnum: yup.string().required("Required"),
  });

  return (
    <>
      <Formik
        initialValues={{
          carouselnum: "",

          cauimg: "",
        }}
        validationSchema={validate}
        onSubmit={async (values, actions) => {
          try {
            const data = new FormData();
            if (values.cauimg) {
              data.append("name", values.cauimg.name);
              data.append("file", values.cauimg);
              const image = await UploadFile(data);

              values.cauimg = image.data;
            }
          } catch (error) {
            alert("error in upload file in add form cat", error);
          }

          try {
            let dataresponse = await Carousels(values);

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
            {/* <TextField label="Carousel" name="title"   /> */}
            <br />
            <label>Carousel Number</label>
            <Field
              as="select"
              className={`form-control shadow-none  ${
                formik.touched.carouselnum &&
                formik.errors.carouselnum &&
                "is-invalid"
              }`}
              id="title"
              name="carouselnum"
            >
              <option value="">Select Carousel</option>
              <option value="1">Carousel 1</option>
              <option value="2">Carousel 2</option>
              <option value="3">Carousel 3</option>
              <option value="4">Carousel 4</option>
              <option value="5">Carousel 5</option>
              <option value="6">Carousel 6</option>
            </Field>

            <ErrorMessage
              name="carouselnum"
              component="div"
              className="error"
            />

            <br />
            <label>Carousel Image</label>
            <input
              type="file"
              accept="image/*"
              className={`form-control shadow-none mt-2 ${
                formik.touched.cauimg && formik.errors.cauimg && "is-invalid"
              }`}
              name="cauimg"
              placeholder="Image"
              onChange={(e) =>
                formik.setFieldValue("cauimg", e.target.files[0])
              }
            />
            <ErrorMessage component="div" name="cauimg" className="error" />

            <br />
            <input
              type="Submit"
              className="btn mt-2 rounded-3 w-20  btn-lg btn-outline-secondary btn-dark"
              value="Submit"
            />
          </Form>
        )}
      </Formik>
    </>
  );
}

export default CarouselForm;
