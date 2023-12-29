import React, { useRef, useState, useEffect } from "react";
import TextField from "../categories/TextField";
import { Formik, Form, ErrorMessage } from "formik";
import CareerPosts from './CareerPosts';
import Footer from "../footer/Footer";
import * as yup from "yup";
import { careers, getCareerOption, procateget } from "../../services/api";
import JoditEditor from "jodit-react";
import Pagination from "../categories/categories/Pagination";
function Career() {
  const validate = yup.object({
    title: yup.string().required("Required"),
    description: yup.string().required("Required"),
  });

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
      let data = await getCareerOption();
      setposts(data.data)
    
    } 
    data();
  }, []);
  const editor = useRef(null);
  return (
    <>
      <div className="content-page">
        <div className="content">
          <div className="container-fluid">
            <div className="page-title-box">
              <div className="row align-items-center">
                <div className="col-sm-6">
                  <h4 className="page-title">Career</h4>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-xl-12">
                <div className="card m-b-30">
                  <div className="card-body">
                    <h4 className="mt-0 header-title mb-4">Add Career</h4>
                    <Formik
                      initialValues={{
                        title: "",
                        description: "",
                      }}
                      validationSchema={validate}
                      onSubmit={async (values, actions) => {
                        try {
                          let data = await careers(values);
                          if (data.status) {
                            alert("SUCCESSFULLY CREATED CAREER ");
                            window.location.reload()
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
                          <TextField label="Career " name="title" />
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
                    <h4 className="mt-0 header-title mb-4">careers</h4>

                    <div className="table-responsive">
                      <table className="table table-hover">
                        <thead>
                          <tr>
                            <th scope="col">Sr No.</th>
                            <th scope="col">Career </th>
                            <th scope="col">Descriptions </th>

                          
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <CareerPosts posts={currentPosts} />
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

export default Career;
