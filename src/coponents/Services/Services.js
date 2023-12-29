import { React, useState, useEffect, useRef } from "react";
import Footer from "../footer/Footer";
import * as yup from "yup";
import { Formik, Form, ErrorMessage } from "formik";
import TextField from "../categories/TextField";
import { serceget, sercepost, UploadFile } from "../../services/api";
import Serposts from "./Serposts";
import JoditEditor from "jodit-react";
import Pagination from "../categories/categories/Pagination";
function Services() {
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
      let dat = await serceget();

      setposts(dat);
    }
    data();
  }, []);
  const editor = useRef(null);
  const validate = yup.object({
    service: yup.string().required("Required"),
    descr: yup.string().required("Required"),
    img: yup.mixed().nullable(),
  });

  return (
    <>
      <div className="content-page">
        <div className="content">
          <div className="container-fluid">
            <div className="page-title-box">
              <div className="row align-items-center">
                <div className="col-sm-6">
                  <h4 className="page-title">Services</h4>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-xl-12">
                <div className="card m-b-30">
                  <div className="card-body">
                    <h4 className="mt-0 header-title mb-4">Add Service</h4>
                    <Formik
                      initialValues={{
                        service: "",
                        img: "",
                        img1: "",
                        img2: "",
                        img3: "",
                        img4: "",
                        img5: "",
                        descr: "",
                      }}
                      validationSchema={validate}
                      onSubmit={async (values, action) => {
                        try {
                          if (values.img) {
                            const data = new FormData();
                            data.append("name", values.img.name);
                            data.append("file", values.img);
                            const image = await UploadFile(data);

                            values.img = image.data;
                          }
                        } catch (error) {
                          alert("error in upload file", error);
                        }
                        try {
                          if (values.img1) {
                            const data = new FormData();
                            data.append("name", values.img1.name);
                            data.append("file", values.img1);
                            const image = await UploadFile(data);

                            values.img1 = image.data;
                          }
                        } catch (error) {
                          alert("error in upload file", error);
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
                          alert("error in upload file", error);
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
                          alert("error in upload file", error);
                        }
                        try {
                          if (values.img4) {
                            const data = new FormData();
                            data.append("name", values.img4.name);
                            data.append("file", values.img4);
                            const image = await UploadFile(data);

                            values.img4 = image.data;
                          }
                        } catch (error) {
                          alert("error in upload file", error);
                        }
                        try {
                          if (values.img5) {
                            const data = new FormData();
                            data.append("name", values.img5.name);
                            data.append("file", values.img5);
                            const image = await UploadFile(data);

                            values.img5 = image.data;
                          }
                        } catch (error) {
                          alert("error in upload file", error);
                        }
                        try {
                          let data = await sercepost(values);
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
                          <TextField label="Service " name="service" />
                          <br />

                          <label> Description</label>

                          <JoditEditor
                            ref={editor}
                            value={formik.values.descr}
                            tabIndex={1} // tabIndex of textarea
                            onBlur={(newContent) =>
                              formik.setFieldValue("descr", newContent)
                            } // preferred to use only this option to update the content for performance reasons
                            onChange={(newContent) => {}}
                          />

                          <ErrorMessage
                            component="div"
                            name="descr"
                            className="error"
                          />
                          <br />
                          <label>Services Image</label>
                          <input
                            type="file"
                            onChange={(e) =>
                              formik.setFieldValue("img", e.target.files[0])
                            }
                            className={`form-control shadow-none mb-2 ${
                              formik.touched.img &&
                              formik.errors.img &&
                              "is-invalid"
                            }`}
                            name="
                                                    
                                                    
                                                    img"
                            placeholder="Image"
                          />
                          <ErrorMessage
                            name="img"
                            className="error"
                            component="div"
                          />

                          <input
                            type="file"
                            onChange={(e) =>
                              formik.setFieldValue("img1", e.target.files[0])
                            }
                            className={`form-control shadow-none mb-2 ${
                              formik.touched.img1 &&
                              formik.errors.img1 &&
                              "is-invalid"
                            }`}
                            name="img1"
                            placeholder="Image"
                          />
                          <ErrorMessage
                            name="img1"
                            className="error"
                            component="div"
                          />
                          <input
                            type="file"
                            onChange={(e) =>
                              formik.setFieldValue("img2", e.target.files[0])
                            }
                            className={`form-control shadow-none mb-2 ${
                              formik.touched.img2 &&
                              formik.errors.img2 &&
                              "is-invalid"
                            }`}
                            name="img2"
                            placeholder="Image"
                          />
                          <ErrorMessage
                            name="img2"
                            className="error"
                            component="div"
                          />
                          <input
                            type="file"
                            onChange={(e) =>
                              formik.setFieldValue("img3", e.target.files[0])
                            }
                            className={`form-control shadow-none mb-2 ${
                              formik.touched.img3 &&
                              formik.errors.img3 &&
                              "is-invalid"
                            }`}
                            name="img3"
                            placeholder="Image"
                          />
                          <ErrorMessage
                            name="img3"
                            className="error"
                            component="div"
                          />
                          <input
                            type="file"
                            onChange={(e) =>
                              formik.setFieldValue("img4", e.target.files[0])
                            }
                            className={`form-control shadow-none mb-2 ${
                              formik.touched.img4 &&
                              formik.errors.img4 &&
                              "is-invalid"
                            }`}
                            name="img4"
                            placeholder="Image"
                          />
                          <ErrorMessage
                            name="img4"
                            className="error"
                            component="div"
                          />
                          <input
                            type="file"
                            onChange={(e) =>
                              formik.setFieldValue("img5", e.target.files[0])
                            }
                            className={`form-control shadow-none mb-2 ${
                              formik.touched.img5 &&
                              formik.errors.img5 &&
                              "is-invalid"
                            }`}
                            name="img5"
                            placeholder="Image"
                          />
                          <ErrorMessage
                            name="img5"
                            className="error"
                            component="div"
                          />

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

            <div className="row">
              <div className="col-xl-12">
                <div className="card m-b-30">
                  <div className="card-body">
                    <h4 className="mt-0 header-title mb-4">Service List</h4>

                    <div className="table-responsive">
                      <table className="table table-hover">
                        <thead>
                          <tr>
                            <th scope="col"> Sr No.</th>
                            <th scope="col"> Services</th>
                            <th scope="col">Description</th>
                            <th scope="col" colSpan="2">
                              Image
                            </th>
                            <th scope="col">Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <Serposts posts={currentPosts} />
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

export default Services;
