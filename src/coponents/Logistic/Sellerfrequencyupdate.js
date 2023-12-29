import { ErrorMessage, Field, Form, Formik } from 'formik';
import React,{useState,useEffect} from 'react'
import TextField from '../categories/TextField';
import * as yup from "yup";
import { getsellerfre, sellerlevelupdate } from '../../services/api';
import { useNavigate, useParams } from 'react-router-dom';
function Sellerfrequencyupdate() {
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
       // eslint-disable-next-line
      let dat = await getsellerfre(id);
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
              <h4 className="page-title">Seller Frequency</h4>
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
                <h4 className="mt-0 header-title mb-4">Seller</h4>

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
                        let dat = await sellerlevelupdate(values);

                        if (dat.status) {
                      
                          alert("SUCCESSFUL");
                          navigate('/sellerfrequency')
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

                        <label>Range</label>

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
                          <option defaultValue="">Select level</option>
                          <option defaultValue="A">A</option>
                          <option defaultValue="B">B</option>
                          <option defaultValue="C">C</option>
                          <option defaultValue="D">D</option>
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
  )
}

export default Sellerfrequencyupdate
