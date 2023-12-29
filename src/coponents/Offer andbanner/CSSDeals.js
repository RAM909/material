import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useState, useEffect } from "react";
import {
  DEALSGET,
  DEALSPOST,
  SubSubgetCategory,
  cssfilter,
  getAllCategory,
  getAllSubCategory,
} from "../../services/api";
import * as yup from "yup";
import TextField from "../categories/TextField";
import Pagination from "../categories/categories/Pagination";
import CSSDealsposts from "./CSSDealsposts";
import "../../App.css";
function CSSDeals() {
  const validate = yup.object({
    category: yup.string().required("Required"),
    percentage: yup.number().required("Required"),
  });
  const [state, setstate] = useState([]);
  const [state1, setstate1] = useState([]);
  const [state2, setstate2] = useState([]);
  const [searchedvalue, setsearchedvalue] = useState("");
  //   const navigate = useNavigate();
  const [posts, setposts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(25);

  // // total no of pages
  const Totalpages = Math.ceil(posts.length / postsPerPage);
  const pages = [...Array(Totalpages + 1).keys()].slice(1);

  // // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  useEffect(() => {
    async function data() {
      let dat = await getAllCategory();
      let response = await getAllSubCategory();
      let resp = await SubSubgetCategory();
      let data = await DEALSGET();
      setposts(data.data);
      setstate2(resp);
      setstate1(response);
      setstate(dat);
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
                  <h4 className="page-title">CSS Deals</h4>
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
                    <h4 className="mt-0 header-title mb-4">CSS Deals</h4>

                    <div className="table-responsive">
                      <Formik
                        initialValues={{
                          category: "",
                          subcategory: "",
                          subsubcategory: "",
                          percentage: "",
                        }}
                        validationSchema={validate}
                        onSubmit={async (values, action) => {
                          try {
                            let dat = await DEALSPOST(values);

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
                            <div className="row mt-2 mx-0">
                              <div className="col mt-2">
                                <label> Category Name</label>
                                <Field
                                  as="select"
                                  className={`form-control shadow-none ${
                                    formik.touched.category &&
                                    formik.errors.category &&
                                    "is-invalid"
                                  }`}
                                  name="category"
                                >
                                  <option defaultValue="">
                                    Select Category
                                  </option>
                                  {state &&
                                    state.map((i, index) => (
                                      <option value={i.title}>{i.title}</option>
                                    ))}
                                </Field>
                                <ErrorMessage
                                  component="div"
                                  name="category"
                                  className="error"
                                />
                              </div>
                              <div className="col mt-2">
                                <label> Sub Category Name</label>
                                <Field
                                  as="select"
                                  className={`form-control shadow-none ${
                                    formik.touched.subcategory &&
                                    formik.errors.subcategory &&
                                    "is-invalid"
                                  }`}
                                  name="subcategory"
                                >
                                  <option>Select Category</option>
                                  {state1 &&
                                    state1.map((i, index) => {
                                      if (
                                        formik.values.category ===
                                        i.categoryname
                                      )
                                        return (
                                          <option
                                            key={index}
                                            name="subcategory"
                                            value={i.subcategory}
                                          >
                                            {i.subcategory}
                                          </option>
                                        );
                                      return null;
                                    })}
                                </Field>
                                <ErrorMessage
                                  component="div"
                                  className="error"
                                  name="subcategory"
                                />
                              </div>

                              <div className="col mt-2">
                                <label> Sub Sub Category Name</label>
                                <Field
                                  as="select"
                                  className={`form-control shadow-none ${
                                    formik.touched.subsubcategory &&
                                    formik.errors.subsubcategory &&
                                    "is-invalid"
                                  }`}
                                  name="subsubcategory"
                                >
                                  <option
                                    defaultValue=""
                                    hidden
                                    className="invisible"
                                  >
                                    Select Category
                                  </option>
                                  {state2 &&
                                    state2.map((i, index) => {
                                      if (
                                        formik.values.category ===
                                          i.categoryname &&
                                        formik.values.subcategory ===
                                          i.subcategoryname
                                      )
                                        return (
                                          <option value={i.subsubcategory}>
                                            {i.subsubcategory}
                                          </option>
                                        );
                                      return null;
                                    })}
                                </Field>
                                <ErrorMessage
                                  component="div"
                                  name="subsubcategory"
                                  className="error"
                                />
                              </div>
                              <div className="col mt-2">
                                <TextField
                                  label="Percentage "
                                  name="percentage"
                                />
                              </div>
                            </div>

                            <br />
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
            <div className="row">
              <div className="col">
                <div className="card m-b-30">
                  <div className="card-body">
                    <h4 className="mt-0 header-title mb-4">CSS Deals</h4>

                    <form
                      className="d-flex mb-2 "
                      style={{ width: "50%" }}
                      role="search"
                    >
                      <div className="btn-group">
                        <input
                          className="form-control  mx-2  btn-close"
                          type="search"
                          value={searchedvalue}
                          placeholder="Search category"
                          onChange={(e) => {
                            setsearchedvalue(e.target.value);
                          }}
                          aria-label="Search Product Name"
                        />
                        <button
                          type="button"
                          className="btn bg-transparent"
                          style={{ left: "-43px" }}
                          onClick={async () => {
                            let data = await DEALSGET();
                            setposts(data.data);
                            setsearchedvalue("");
                          }}
                        >
                          <i
                            className="fa fa-times"
                            style={{ color: "white" }}
                          ></i>
                        </button>
                        <button
                          className="btn rounded btn-md btn-outline-secondary btn-dark"
                          type="submit"
                          onClick={async (e) => {
                            e.preventDefault();

                            if (searchedvalue) {
                              let dat = await cssfilter(searchedvalue);
                              setposts(dat.data);
                            } else {
                              let data = await DEALSGET();
                              setposts(data.data);
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
                            <th scope="col"> Sr No. </th>
                            <th scope="col"> category </th>
                            <th scope="col"> sub category </th>
                            <th scope="col">sub sub category</th>
                            <th scope="col">Percentage</th>
                            <th scope="col">Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <CSSDealsposts posts={currentPosts} />
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

export default CSSDeals;
