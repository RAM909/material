import React, { useEffect, useState, useRef } from "react";
import TextField from "../categories/TextField";
import Footer from "../footer/Footer";
import { Formik, Form, ErrorMessage } from "formik";
import JoditEditor from "jodit-react";
import * as yup from "yup";
import { procateget, procatepost } from "../../services/api";
import Pagination from "../categories/categories/Pagination";
import Categoryposts from "./Categoryposts";
function ProCategory() {
  const [posts, setposts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(25);

  const editor = useRef(null);
  // total no of pages
  const Totalpages = Math.ceil(posts.length / postsPerPage);
  const pages = [...Array(Totalpages + 1).keys()].slice(1);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  useEffect(() => {
    async function data() {
      let dat = await procateget();

      setposts(dat);
    }
    data();
  }, []);
  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
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
                      initialValues={{
                        catprof: "",
                        descr: "",
                      }}
                      validationSchema={validate}
                      onSubmit={async (values, actions) => {
                        try {
                          let data = await procatepost(values);
                          if (data.status) {
                            alert("SUCCESSFULLY CREATED CATEGORY ");
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
                          {/* <TextField label="Description" name="descr" /> */}
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
                    <h4 className="mt-0 header-title mb-4">Category List</h4>

                    <div className="table-responsive">
                      <table className="table table-hover">
                        <thead>
                          <tr>
                            <th scope="col"> Sr No.</th>
                            <th scope="col"> Category</th>
                            <th scope="col">Description</th>

                            <th scope="col">Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <Categoryposts posts={currentPosts} />
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

export default ProCategory;
