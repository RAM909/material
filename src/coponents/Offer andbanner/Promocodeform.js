import { React } from "react";
import * as yup from "yup";
import TextField from "../categories/TextField";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { promocodepost } from "../../services/api";
import DatePicker from "react-datepicker";

import addDays from "date-fns/addDays";

import "react-datepicker/dist/react-datepicker.css";

function Promocodeform() {
  const validate = yup.object({
    codename: yup.string().required("Required"),
    message: yup.string().required("Required"),
    discount: yup.number().typeError("Only number").required("Required"),
    type: yup.string().required("Required"),
    mini: yup.number().typeError("Only Number").required("Required"),
    started: yup.date().required("Required"),
    ended: yup
      .date()
      .required("Required")
      .when(
        "started",
        (started, yup) =>
          started && yup.min(started, "End time cannot be before start time")
      ),

    noofusers: yup.number().required("Required"),
    // repeatusage:yup.string().required("Required!")
  });

  return (
    <>
      <div className="row">
        <div className="col-xl-12">
          <div className="card m-b-28">
            <div className="card-body">
              <h4 className="mt-0 header-title mb-4">Add Promo code</h4>
              <div>
                <Formik
                  initialValues={{
                    codename: "",
                    message: "",
                    discount: "",
                    type: "Percentage",
                    started: new Date(),
                    ended: addDays(new Date(), 7),
                    mini: "",
                    noofusers: "",
                    // repeatusage:""
                  }}
                  validationSchema={validate}
                  onSubmit={async (values, actions) => {
                    try {
                      let data = await promocodepost(values);
                      if (data.status) {
                        alert("SUCCESSFULL");
                      } else {
                        alert("something went wrong");
                      }
                    } catch (error) {
                      alert("error in promo", error);
                    }

                    actions.resetForm();
                  }}
                >
                  {(formik) => (
                    <Form>
                      {/* 1st row  */}
                      <div className="row mt-2">
                        <div className="col-sm-4 col-md-6">
                          <TextField label="Code Name" name="codename" />
                        </div>
                        <div className="col-sm-4 col-md-6">
                          <TextField label="Message" name="message" />
                        </div>
                      </div>
                      <div className="row mt-2">
                        <div className="col-sm-4 col-md-6">
                          <TextField label="Discount" name="discount" />
                        </div>
                        <div className="col-sm-4 col-md-6">
                          <label>Discount Type</label>
                          <Field
                            as="select"
                            className={`form-control shadow-none ${
                              formik.touched.type &&
                              formik.errors.type &&
                              "is-invalid"
                            }`}
                            id="title"
                            name="type"
                          >
                            <option defaultValue="Percentage">
                              Percentage
                            </option>
                            <option defaultvalue="Amount">Amount</option>
                          </Field>

                          <ErrorMessage
                            name="title"
                            component="div"
                            className="error"
                          />
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-sm-4 col-md-6">
                          <label>Start Date</label>
                          <DatePicker
                            selected={formik.values.started}
                            dateFormat="dd/MM/yyyy"
                            name="started"
                            className={`form-control shadow-none mb-2 ${
                              formik.touched.started &&
                              formik.errors.started &&
                              "is-invalid"
                            }`}
                            onChange={(e) => {
                              formik.setFieldValue("started", e);
                            }}
                          />

                          <ErrorMessage
                            component="div"
                            name="started"
                            className="error"
                          />
                        </div>
                        <div className="col-sm-4 col-md-6">
                          <label>End Date</label>
                          <DatePicker
                            selected={formik.values.ended}
                            dateFormat="dd/MM/yyyy"
                            name="ended"
                            className={`form-control shadow-none mb-2 ${
                              formik.touched.started &&
                              formik.errors.started &&
                              "is-invalid"
                            }`}
                            onChange={(e) => {
                              formik.setFieldValue("ended", e);
                            }}
                          />

                          <ErrorMessage
                            component="div"
                            name="ended"
                            className="error"
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-sm-4 col-md-6">
                          <TextField label="Minimum Order Amount" name="mini" />
                        </div>
                        <div className="col-sm-4 col-md-6">
                          <TextField
                            label="No of users"
                            type="number"
                            name="noofusers"
                          />
                        </div>
                      </div>
              
                      <input
                        type="submit"
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
    </>
  );
}

export default Promocodeform;
