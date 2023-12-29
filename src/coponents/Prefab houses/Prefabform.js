import { React, useRef } from "react";
import Footer from "../footer/Footer";
import JoditEditor from "jodit-react";
import * as yup from "yup";

import { Formik, Form, ErrorMessage } from "formik";
import { Prefabbform } from "../../services/api";

function Prefabform() {
  const editor = useRef(null);
  const validate = yup.object({
    description: yup.string().required("Required"),
  });

  return (
    <>
      <div className="content-page">
        <div className="content">
          <div className="container-fluid">
            <div className="page-title-box">
              <div className="row align-items-center">
                <div className="col-sm-6">
                  <h4 className="page-title">Front End </h4>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-xl-12">
                <div className="card m-b-30">
                  <div className="card-body">
                    <h4 className="mt-0 header-title mb-4">Add UI</h4>
                    <Formik
                      initialValues={{
                        description: "",
                      }}
                      validationSchema={validate}
                      onSubmit={async (values, action) => {
                        try {
                          let data = await Prefabbform(values);

                          if (data.status) {
                            alert("SUCCESSFUL");
                            window.location.reload();
                          } else {
                            alert("Something went wrong ");
                          }
                          if (!data.status) {
                            alert("TRY AGAIN ");
                          }
                        } catch (error) {
                          alert(error);
                        }
                        action.resetForm();
                      }}
                    >
                      {(formik) => (
                        <Form>
                          <br />

                          <label> Description</label>

                          <JoditEditor
                            ref={editor}
                            value={formik.values.description}
                            tabIndex={1} // tabIndex of textarea
                            onBlur={(newContent) =>
                              formik.setFieldValue("description", newContent)
                            } // preferred to use only this option to update the content for performance reasons
                            onChange={(newContent) => {}}
                          />

                          <ErrorMessage
                            component="div"
                            name="description"
                            className="error"
                          />
                          <br />

                          {/* <input
                            type="Submit"
                            className="btn mt-2 rounded-3 w-20  btn-lg btn-outline-secondary btn-dark"
                            value="Submit"
                          /> */}
                          <input
                            type="submit"
                            className="btn btn-primary"
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

export default Prefabform;
