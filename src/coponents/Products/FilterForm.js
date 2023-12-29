import React from "react";
import { Formik, Form } from "formik";
import TextField from "../categories/TextField";
import * as yup from "yup";
import { FilterPost } from "../../services/api";
function FilterForm() {
  const validate = yup.object({
    name: yup.string().required("Required"),
    att: yup.string().required("Required"),
  });

  return (
    <>
      <div className="row">
        <div className="col-xl-12">
          <div className="card m-b-30">
            <div className="card-body">
              <h4 className="mt-0 header-title mb-4">Add Filter</h4>
              <div className="table-responsive">
                <Formik
                  initialValues={{
                    name: "",
                    att: "",
                  }}
                  validationSchema={validate}
                  onSubmit={async (values, actions) => {
                    try {
                      let dataresponse = await FilterPost(values);

                      if (!dataresponse.status) {
                        alert("something went wrong", dataresponse);
                      } else {
                        alert("SUCCESSFULLY CREATED", dataresponse.status);
                        window.location.reload();
                      }
                    } catch (error) {
                      alert("error ", error);
                    }

                    actions.resetForm();
                  }}
                >
                  {(formik) => (
                    <Form>
                      <TextField label="Filter Name" name="name" />
                      <br />
                      <TextField
                        label="Attributes"
                        name="att"
                        placeholder="Separate by , eg. red,blue"
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
              {/* formik form */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FilterForm;
