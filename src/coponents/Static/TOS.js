import React, { useState, useRef } from "react";
import Footer from "../footer/Footer";
import JoditEditor from "jodit-react";
import { tos } from "../../services/api";
import { Form, Formik } from "formik";
function TOS() {
  const editor = useRef(null);
  const [content, setContent] = useState("");
  return (
    <div>
      <div className="content-page">
        <div className="content">
          <div className="container-fluid">
            <div className="page-title-box">
              <div className="row align-items-center">
                <div className="col-sm-6">
                  <h4 className="page-title">Term of Services </h4>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-xl-12">
                <div className="card m-b-30">
                  <div className="card-body">
                    <h4 className="mt-0 header-title mb-4">Term of Services</h4>

                    <div className="table-responsive">
                      <Formik
                        onSubmit={async (values, actions) => {
                          try {
                            let data = await tos({ ts: content });
                            if (data.status) {
                              alert("SUCCESSFULLY CREATED  ");
                            } else {
                              alert("Something went wrong");
                            }
                          } catch (error) {
                            alert("error in procat", error);
                          }

                          actions.resetForm();
                          setContent("");
                          window.location.reload();
                        }}
                      >
                        {(formik) => (
                          <Form>
                            <JoditEditor
                              ref={editor}
                              value={content}
                              tabIndex={1} // tabIndex of textarea
                              onBlur={(newContent) => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
                              onChange={(newContent) => {}}
                            />
                            <input
                              type="Submit"
                              className="btn mt-4 rounded-3 w-20  btn-lg btn-outline-secondary btn-dark"
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
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default TOS;
