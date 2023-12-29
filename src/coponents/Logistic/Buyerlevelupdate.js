import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import TextField from "../categories/TextField";
import * as yup from "yup";
import { buyerlevelupdate, getbuyerlevel } from "../../services/api";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function Buyerlevelupdate() {
  const { id } = useParams();
  var [head, sethead] = useState([]);
  const validate = yup.object({
    pin: yup.string().required("Required"),
    level: yup.string().required("Required"),
  });
  let navigate=useNavigate()
  // eslint-disable-next-line
  useEffect(() => {
    async function data() {
      let dat = await getbuyerlevel(id);
    
      
      sethead(dat);
    }
    data();
  }, []);
  return (
    <div className="content-page">
      <div className="content">
        <div className="container-fluid">
          <div className="page-title-box">
            <div className="row align-items-center">
              <div className="col-sm-6">
                <h4 className="page-title">Buyer Level</h4>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-right"></ol>
              </div>
            </div>
          </div>

          <div className="row d-md-flex justify-content-md-end ">
            <div className="col-sm-6 d-md-flex justify-content-md-end"></div>
          </div>

          <div className="row">
            <div className="col-xl-12">
              <div className="card m-b-30">
                <div className="card-body">
                  <h4 className="mt-0 header-title mb-4">Buyer</h4>

                  <div className="table-responsive">
                    <Formik
                    enableReinitialize
                      initialValues={{
                        id:id,
                        pin: head.pin,
                        level: head.level,
                      }}
                      validationSchema={validate}
                      onSubmit={async (values, action) => {
                        try {
                          let dat = await buyerlevelupdate(values);

                          if (dat.status) {
                            alert("SUCCESSFULLY ", dat.data);
                            navigate('/buyerlevel')
                            
                            window.location.reload();
                            
                          } else {
                            alert("Something went wrong");
                          }
                        } catch (error) {
                        alert(error)
                        }
                        action.resetForm();
                      }}
                    >
                      {(formik) => (
                        <Form>
                          <TextField label="Pin Code" name="pin" />

                          <br />

                          <label>Level</label>

                          <Field
                            as="select"
                            className={`form-control shadow-none ${
                              formik.touched.level &&
                              formik.errors.level &&
                              "is-invalid"
                            }`}
                            id="level"
                            name="level"
                          >
                            <option defaultValue="">Select Level</option>
                            <option defaultValue="1">1</option>
                            <option defaultValue="2">2</option>
                            <option defaultValue="3">3</option>
                            <option defaultValue="4">4</option>
                          </Field>
                          <ErrorMessage
                            component="div"
                            name="level"
                            className="error"
                          />

                          <br />
                          <input
                            type="Submit"
                            className="btn mt-2 rounded-3 w-20  btn-lg btn-outline-secondary btn-dark"
                            value="Submit"
                            onChange={() => {}}
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
  );
}

export default Buyerlevelupdate;
