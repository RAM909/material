import { React, useEffect, useState, useRef } from "react";
import Footer from "../footer/Footer";
import { Formik, Form, ErrorMessage } from "formik";
import TextField from "../categories/TextField";
import * as yup from "yup";
import {
  Transporter,
  Transporterget,
  transportfilter,
} from "../../services/api";
import "yup-phone";
import Pagination from "../categories/categories/Pagination";
import TransportersPosts from "./TransportersPosts";
import JoditEditor from "jodit-react";
function Transporters() {
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
  const [searchedvalue, setsearchedvalue] = useState("");

  // eslint-disable-next-line
  const editor = useRef(null);
  useEffect(() => {
    async function data() {
      let dat = await Transporterget();

      setposts(dat);
    }
    data();
  }, []);

  const validate = yup.object({
    name: yup.string().required("Required"),
    gst: yup.string().required("Required"),
    mobileno: yup.string().required("Required").phone("INDIA", true),
    emailid: yup.string().required("required").email("Invalid Email"),

    address: yup.string().required("Required!"),
    rate: yup.string().required("Required"),
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
                    <h4 className="mt-0 header-title mb-4">Transporter Form</h4>
                    <div>
                      <Formik
                        initialValues={{
                          name: "",
                          gst: "",

                          mobileno: "",
                          address: "",
                          rate: "",
                          emailid: "",
                        }}
                        validationSchema={validate}
                        onSubmit={async (values, actions) => {
                          try {
                            let data = await Transporter(values);
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
                            <div className="row mt-2">
                              <div className="col-sm-4 col-md-6">
                                <TextField label="Name" name="name" />
                              </div>
                              <div className="col-sm-4 col-md-6">
                                <TextField
                                  label="Phone number"
                                  name="mobileno"
                                />
                              </div>
                            </div>
                            <div className="row mt-2">
                              <div className="col-sm-4 col-md-6">
                                <TextField label="Email" name="emailid" />
                              </div>
                              <div className="col-sm-4 col-md-6">
                                <TextField label="GST" name="gst" />
                              </div>
                            </div>

                            <div className="row mt-2">
                              <div className="col-sm-4 col-md-6">
                                <TextField label="Address" name="address" />
                              </div>
                              <div className="col-sm-4 col-md-6">
                                <label>Rate</label>
                                <JoditEditor
                                  ref={editor}
                                  value={formik.values.rate}
                                  tabIndex={1} // tabIndex of textarea
                                  onBlur={(newContent) =>
                                    formik.setFieldValue("rate", newContent)
                                  } // preferred to use only this option to update the content for performance reasons
                                  onChange={(newContent) => {}}
                                />

                                <ErrorMessage
                                  component="div"
                                  name="rate"
                                  className="error"
                                />
                              </div>
                            </div>

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
                    <h4 className="mt-0 header-title mb-4">Transporter List</h4>
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
                          placeholder="Search Name"
                          onChange={(e) => {
                            setsearchedvalue(e.target.value);
                          }}
                          aria-label="Search Email"
                        />
                        <button
                          type="button"
                          className="btn bg-transparent"
                          style={{ left: "-43px" }}
                          onClick={async () => {
                            let dat = await Transporterget();
                            setposts(dat);
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
                              let dat = await transportfilter(searchedvalue);
                              setposts(dat.data);
                            } else {
                              let dat = await Transporterget();
                              setposts(dat);
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
                            <th scope="col">Sr No</th>
                            <th scope="col">Name</th>
                            <th scope="col">Number</th>
                            <th scope="col">Email</th>
                            <th scope="col">GST</th>
                            <th scope="col">Address</th>
                            <th scope="col">Rate</th>
                            <th scope="col">Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <TransportersPosts posts={currentPosts} />
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

export default Transporters;
