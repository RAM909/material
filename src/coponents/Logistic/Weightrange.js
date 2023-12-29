import { React, useEffect, useState } from "react";
import { Form, Formik } from "formik";
import Footer from "../footer/Footer";
import InputField from "./InputField";
import { Weightget, Weightgetrange } from "../../services/api";

function Weightrange() {
  const [posts, setposts] = useState([
    {
      weighting1: "",
      weighting2: "",
      weighting3: "",
      weighting4: "",
      weighting5: "",
      weighting6: "",
      weighting7: "",
      weighting8: "",
      weighting9: "",
      weighting10: "",
      ran1: "",
      ran2: "",
      ran3: "",
      ran4: "",
      ran5: "",
      ran6: "",
      ran7: "",
      ran8: "",
      ran9: "",
      ran10: "",
    },
  ]);
  useEffect(() => {
    (async () => {
      const dat = await Weightget();

      setposts(dat[0]);
    })();
  }, []);

  return (
    <>
      <div className="content-page">
        <div className="content">
          <div className="container-fluid">
            <div className="page-title-box"></div>

            <div className="row">
              <div className="col-xl-12">
                <div className="card m-b-30">
                  <div className="card-body">
                    <h4 className="mt-0 header-title mb-4">Weight Range</h4>
                    <div className="row justify-content-between">
                      <div className="col-6">
                        <strong>Weight</strong>
                      </div>
                      <div className="col-6">
                        <strong>Values</strong>
                      </div>
                    </div>
                    <Formik
                      initialValues={{
                        title: process.env.REACT_APP_WEIGHTTITLE,
                        weighting1: posts.weighting1,
                        weighting2: posts.weighting2,
                        weighting3: posts.weighting3,
                        weighting4: posts.weighting4,
                        weighting5: posts.weighting5,
                        weighting6: posts.weighting6,
                        weighting7: posts.weighting7,
                        weighting8: posts.weighting8,
                        weighting9: posts.weighting9,
                        weighting10: posts.weighting10,
                        ran1: posts.ran1,
                        ran2: posts.ran2,
                        ran3: posts.ran3,
                        ran4: posts.ran4,
                        ran5: posts.ran5,
                        ran6: posts.ran6,
                        ran7: posts.ran7,
                        ran8: posts.ran8,
                        ran9: posts.ran9,
                        ran10: posts.ran10,
                      }}
                      enableReinitialize
                      onSubmit={async (values, actions) => {
                        try {
                          let dataresponse = await Weightgetrange(values);

                          if (!dataresponse.status) {
                            alert("Something went wrong", dataresponse);
                          } else {
                            alert("SUCCESSFULLY CREATED", dataresponse.status);
                            window.location.reload();
                          }
                        } catch (error) {
                          alert("error", error);
                        }

                        actions.resetForm();
                      }}
                    >
                      {(formik) => (
                        <Form>
                          <div>
                            <div className="row justify-content-between mt-3">
                              <div className="col-6">
                                <InputField
                                  name="weighting1"
                                  placeholder="KG"
                                />
                              </div>
                              <div className="col-6">
                                <InputField name="ran1" placeholder="Value" />
                              </div>
                            </div>
                            <div className="row justify-content-between mt-3">
                              <div className="col-6">
                                <InputField
                                  name="weighting2"
                                  placeholder="KG"
                                />
                              </div>
                              <div className="col-6">
                                <InputField name="ran2" placeholder="Value" />
                              </div>
                            </div>
                            <div className="row justify-content-between mt-3">
                              <div className="col-6">
                                <InputField
                                  name="weighting3"
                                  placeholder="KG"
                                />
                              </div>
                              <div className="col-6">
                                <InputField name="ran3" placeholder="Value" />
                              </div>
                            </div>
                            <div className="row justify-content-between mt-3">
                              <div className="col-6">
                                <InputField
                                  name="weighting4"
                                  placeholder="KG"
                                />
                              </div>
                              <div className="col-6">
                                <InputField name="ran4" placeholder="Value" />
                              </div>
                            </div>
                            <div className="row justify-content-between mt-3">
                              <div className="col-6">
                                <InputField
                                  name="weighting5"
                                  placeholder="KG"
                                />
                              </div>
                              <div className="col-6">
                                <InputField name="ran5" placeholder="Value" />
                              </div>
                            </div>
                            <div className="row justify-content-between mt-3">
                              <div className="col-6">
                                <InputField
                                  name="weighting6"
                                  placeholder="KG"
                                />
                              </div>
                              <div className="col-6">
                                <InputField name="ran6" placeholder="Value" />
                              </div>
                            </div>
                            <div className="row justify-content-between mt-3">
                              <div className="col-6">
                                <InputField
                                  name="weighting7"
                                  placeholder="KG"
                                />
                              </div>
                              <div className="col-6">
                                <InputField name="ran7" placeholder="Value" />
                              </div>
                            </div>
                            <div className="row justify-content-between mt-3">
                              <div className="col-6">
                                <InputField
                                  name="weighting8"
                                  placeholder="KG"
                                />
                              </div>
                              <div className="col-6">
                                <InputField name="ran8" placeholder="Value" />
                              </div>
                            </div>
                            <div className="row justify-content-between mt-3">
                              <div className="col-6">
                                <InputField
                                  name="weighting9"
                                  placeholder="KG"
                                />
                              </div>
                              <div className="col-6">
                                <InputField name="ran9" placeholder="Value" />
                              </div>
                            </div>
                            <div className="row justify-content-between mt-3">
                              <div className="col-6">
                                <InputField
                                  name="weighting10"
                                  placeholder="KG"
                                />
                              </div>
                              <div className="col-6">
                                <InputField name="ran10" placeholder="Value" />
                              </div>
                            </div>

                            <input
                              type="submit"
                              className="btn justify-content-between   mt-4 rounded-3 w-20  btn-lg btn-outline-secondary btn-dark"
                              value="Submit"
                            />
                          </div>
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

export default Weightrange;
