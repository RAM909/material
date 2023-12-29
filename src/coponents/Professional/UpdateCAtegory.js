import React, { useEffect, useState } from "react";
import { Formik, Form } from "formik";
import * as yup from "yup";
import { profecategetone, profecateupdated } from "../../services/api";
import TextField from "../categories/TextField";
import Footer from "../footer/Footer";
import { useNavigate, useParams } from "react-router-dom";

function UpdateCAtegory() {
  const { id } = useParams();
  let navigate = useNavigate();
  const [posts, setposts] = useState([]);
  // eslint-disable-next-line
  useEffect(() => {
    async function data() {
      let dat = await profecategetone(id);

      setposts(dat.data);
    }
    data();
    // eslint-disable-next-line
  }, []);

  const validate = yup.object({
    catprof: yup.string().required("Required"),
    descr: yup.string().required("Required"),
  });
  return (
    <>
      <div className="content-page">
        <div className="content">
          <div className="container-fluid">
            <div className="page-title-box">
              <div className="row align-items-center">
                <div className="col-sm-6">
                  <h4 className="page-title">Category</h4>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-xl-12">
                <div className="card m-b-30">
                  <div className="card-body">
                    <h4 className="mt-0 header-title mb-4">Add Category</h4>
                    <Formik
                      enableReinitialize
                      initialValues={{
                        catprof: posts.catprof,
                        descr: posts.descr,
                      }}
                      validationSchema={validate}
                      onSubmit={async (values, actions) => {
                        try {
                          let data = await profecateupdated(id, values);
                          if (data.status) {
                            alert("SUCCESSFULLY");
                            navigate("/profecat");
                            window.location.reload();
                          } else {
                            alert("Something went wrong");
                          }
                        } catch (error) {
                          alert("error in procat", error);
                        }

                        actions.resetForm();
                      }}
                    >
                      {(formik) => (
                        <Form>
                          <TextField label="Category " name="catprof" />
                          <br />
                          <TextField label="Description" name="descr" />

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
        <Footer />
      </div>
    </>
  );
}

export default UpdateCAtegory;
