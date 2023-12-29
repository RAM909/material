import { React, useEffect, useState } from "react";
import Footer from "../footer/Footer";
import { Formik, Form, ErrorMessage, Field } from "formik";
import TextField from "../categories/TextField";
import * as yup from "yup";
import {
  procateget,
  profaddpost,
  profget,
  UploadFile,
} from "../../services/api";
import "yup-phone";
import Pagination from "../categories/categories/Pagination";
import Profeposyts from "./Profeposyts";
function AddProfe() {
  const [state, setstate] = useState("");
  const [posts, setposts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(25);

  // total no of pages
  const Totalpages = Math.ceil(posts.length / postsPerPage);
  const pages = [...Array(Totalpages + 1).keys()].slice(1);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(() => {
    async function data() {
      let dat = await procateget();

      setstate(dat);
    }
    async function data1() {
      let dat = await profget();

      setposts(dat);
    }
    data();
    data1();
  }, []);
  // const SUPPORTED_FORMATS = ["image/jpg", "image/jpeg", "image/png"];
  const validate = yup.object({
    name: yup.string().required("Required"),
    cat: yup.string().required("Required"),
    city: yup.string().required("Required!"),
    expr: yup.number().typeError("Only Number").required("Required"),
    phone: yup.string().required("Required").phone("IN", true),
    email: yup.string().required("required").email("Invalid Email"),
    img: yup.mixed().nullable().required("Required"),
    img2: yup.mixed().nullable(),
    img3: yup.mixed().nullable(),
    img4: yup.mixed().nullable(),
  });
  return (
    <>
      <div className="content-page">
        <div className="content">
          <div className="container-fluid">
            <div className="page-title-box">
              <div className="row align-items-center"></div>
            </div>
            <div className="row">
              <div className="col-xl-12">
                <div className="card m-b-28">
                  <div className="card-body">
                    <h4 className="mt-0 header-title mb-4">
                      Professional Form
                    </h4>
                    <div>
                      <Formik
                        initialValues={{
                          name: "",
                          cat: "",
                          phone: "",
                          city: "",
                          expr: "",
                          email: "",
                          img: "",
                          img2: "",
                          img3: "",
                          img4: "",
                        }}
                        validationSchema={validate}
                        onSubmit={async (values, actions) => {
                          try {
                            if (values.img) {
                              const data = new FormData();
                              data.append("name", values.img.name);
                              data.append("file", values.img);

                              const image = await UploadFile(data);

                              values.img = image.data;
                            }
                          } catch (error) {
                            alert(
                              "error in upload file in add form cat",
                              error
                            );
                          }

                          try {
                            if (values.img2) {
                              const data = new FormData();
                              data.append("name", values.img2.name);
                              data.append("file", values.img2);

                              const image = await UploadFile(data);

                              values.img2 = image.data;
                            }
                          } catch (error) {
                            alert(
                              "error in upload file in add form cat",
                              error
                            );
                          }

                          try {
                            if (values.img3) {
                              const data = new FormData();
                              data.append("name", values.img3.name);
                              data.append("file", values.img3);

                              const image = await UploadFile(data);

                              values.img3 = image.data;
                            }
                          } catch (error) {
                            alert(
                              "error in upload file in add form cat",
                              error
                            );
                          }

                          try {
                            if (values.img) {
                              const data = new FormData();
                              data.append("name", values.img4.name);
                              data.append("file", values.img4);
                              const image = await UploadFile(data);

                              values.img4 = image.data;
                            }
                          } catch (error) {
                            alert(
                              "error in upload file in add form cat",
                              error
                            );
                          }
                          try {
                            let data = await profaddpost(values);
                            if (data.status) {
                              alert("SUCCESSFULLY");
                              window.location.reload();
                            } else {
                              alert("something went wrong");
                            }
                          } catch (error) {
                            alert(error);
                          }

                          actions.resetForm();
                        }}
                      >
                        {(formik) => (
                          <Form>
                            {/* 1st row  */}
                            <TextField label="Name" name="name" />

                            <div className="row mt-2">
                              <div className="col-sm-4 col-md-6">
                                <label>Category Professional</label>
                                <Field
                                  as="select"
                                  className={`form-control shadow-none ${
                                    formik.touched.cat &&
                                    formik.errors.cat &&
                                    "is-invalid"
                                  }`}
                                  id="cat"
                                  name="cat"
                                >
                                  <option defaultValue="">
                                    Select Category
                                  </option>
                                  {state &&
                                    state.map((i) => (
                                      <option key={i._id} value={i.catprof}>
                                        {i.catprof}
                                      </option>
                                    ))}
                                </Field>

                                <ErrorMessage
                                  name="cat"
                                  component="div"
                                  className="error"
                                />
                              </div>
                              <div className="col-sm-4 col-md-6">
                                <TextField label="Phone number" name="phone" />
                              </div>
                            </div>

                            <div className="row mt-2">
                              <div className="col-sm-4 col-md-6">
                                <TextField label="City" name="city" />
                              </div>
                              <div className="col-sm-4 col-md-6">
                                <TextField label="Experience" name="expr" />
                              </div>
                            </div>
                            <TextField label="Email" name="email" />

                            <label> Upload profile Picture</label>
                            <input
                              type="file"
                              accept="image/*"
                              className={`form-control shadow-none ${
                                formik.touched.img &&
                                formik.errors.img &&
                                "is-invalid"
                              }`}
                              name="img"
                              placeholder="Image"
                              onChange={(e) =>
                                formik.setFieldValue("img", e.target.files[0])
                              }
                            />
                            <ErrorMessage
                              component="div"
                              name="img"
                              className="error"
                            />

                            <input
                              type="file"
                              accept="image/*"
                              className={`form-control mt-3 shadow-none ${
                                formik.touched.img2 &&
                                formik.errors.img2 &&
                                "is-invalid"
                              }`}
                              name="img2"
                              placeholder="Image"
                              onChange={(e) =>
                                formik.setFieldValue("img2", e.target.files[0])
                              }
                            />
                            <ErrorMessage
                              component="div"
                              name="img2"
                              className="error"
                            />

                            <input
                              type="file"
                              accept="image/*"
                              className={`form-control mt-3 shadow-none ${
                                formik.touched.img3 &&
                                formik.errors.img3 &&
                                "is-invalid"
                              }`}
                              name="img3"
                              placeholder="Image"
                              onChange={(e) =>
                                formik.setFieldValue("img3", e.target.files[0])
                              }
                            />
                            <ErrorMessage
                              component="div"
                              name="img3"
                              className="error"
                            />

                            <input
                              type="file"
                              accept="image/*"
                              className={`form-control mt-3 shadow-none ${
                                formik.touched.img4 &&
                                formik.errors.img4 &&
                                "is-invalid"
                              }`}
                              name="img4"
                              placeholder="Image"
                              onChange={(e) =>
                                formik.setFieldValue("img4", e.target.files[0])
                              }
                            />
                            <ErrorMessage
                              component="div"
                              name="img4"
                              className="error"
                            />
                            <input
                              type="submit"
                              className="btn mt-2 rounded-3 w-20  btn-lg btn-outline-secondary btn-dark"
                              value="Submit"
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

            <div className="row">
              <div className="col-xl-12">
                <div className="card m-b-30">
                  <div className="card-body">
                    <h4 className="mt-0 header-title mb-4">Professionals</h4>

                    <div className="table-responsive">
                      <table className="table table-hover">
                        <thead>
                          <tr>
                            <th scope="col">Sr No.</th>
                            <th scope="col">Name</th>

                            <th scope="col">Service</th>
                            <th scope="col">City</th>
                            <th scope="col">Phone number</th>
                            <th scope="col">Experience</th>

                            <th scope="col">Image</th>
                            <th scope="col">Image </th>
                            <th scope="col">Image</th>
                            <th scope="col">Image</th>
                            <th scope="col">Email</th>
                            <th scope="col">Status</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <Profeposyts posts={currentPosts} />
                        </tbody>
                      </table>
                    </div>
                    <Pagination
                      postsPerPage={postsPerPage}
                      totalPosts={Totalpages}
                      paginate={paginate}
                      currentPage={currentPage}
                      pageNumbers={pages}
                    />
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

export default AddProfe;
