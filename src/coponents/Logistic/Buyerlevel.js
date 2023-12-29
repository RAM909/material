import React, { useEffect, useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as yup from "yup";
import TextField from "../categories/TextField";
import { buyerleve, buyerlevel, buyerlevel1 } from "../../services/api";
import Pagination from "../categories/categories/Pagination";
import Buyerlevelpost from "./Buyerlevelpost";
function Buyerlevel() {
  const [searchedvalue, setsearchedvalue] = useState("");
  const validate = yup.object({
    pin: yup.string().required("Required"),
    level: yup.string().required("Required"),
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
      let dat = await buyerlevel();
      setposts(dat.data);
    }
    data();
  }, []);
  return (
    <>
      <div className="content-page">
        <div className="content">
          <div className="container-fluid">
            <div className="page-title-box">
              <div className="row align-items-center">
                <div className="col-sm-6">
                  <h4 className="page-title">Buyer Level</h4>
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
                    <h4 className="mt-0 header-title mb-4">Buyer</h4>

                    <div className="table-responsive">
                      <Formik
                        initialValues={{
                          pin: "",
                          level: "",
                        }}
                        validationSchema={validate}
                        onSubmit={async (values, action) => {
                          try {
                            let dat = await buyerleve(values);

                            if (dat.status) {
                              alert("SUCCESSFULLY ", dat.data);
                              window.location.reload();
                            } else {
                              alert("Something went wrong");
                            }
                          } catch (error) {
                            alert(error);
                          }
                          action.resetForm();
                        }}
                      >
                        {(formik) => (
                          <Form>
                            <TextField label="Pin Code" name="pin" />

                            <br />

                            <label>Level</label>

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
                              <option defaultValue="">Select Level</option>
                              <option defaultValue="1">1</option>
                              <option defaultValue="2">2</option>
                              <option defaultValue="3">3</option>
                              <option defaultValue="4">4</option>
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
            <div className="row">
              <div className="col">
                <div className="card m-b-30">
                  <div className="card-body">
                    <h4 className="mt-0 header-title mb-4">Buller Level</h4>
                    <form
                      className="d-flex mb-2 "
                      style={{ width: "50%" }}
                      role="search"
                    >
                      <div className="btn-group">
                        <input
                          className="form-control  mx-2  btn-close"
                          type="search"
                          placeholder="Search"
                          onChange={(e) => {
                            setsearchedvalue(e.target.value);
                          }}
                          aria-label="Search"
                        />

                        <button
                          className="btn rounded btn-md btn-outline-secondary btn-dark"
                          type="submit"
                          onClick={async (e) => {
                            e.preventDefault();
                            if (searchedvalue) {
                              let dat = await buyerlevel1(searchedvalue);

                              setposts(dat.data.data);
                            } else {
                              let dat = await buyerlevel();
                              setposts(dat.data);
                            }
                          }}
                        >
                          Search
                        </button>
                      </div>
                    </form>

                    <div className="table-responsive">
                      <table className="table table-hover">
                        <thead>
                          <tr>
                            <th scope="col"> Pin code </th>
                            <th scope="col">Level</th>
                            <th scope="col">Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <Buyerlevelpost posts={currentPosts} />
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
      </div>
    </>
  );
}

export default Buyerlevel;
