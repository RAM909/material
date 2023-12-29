import React, { useState, useEffect } from "react";
import Footer from "../footer/Footer";
import FilterForm from "./FilterForm";
import { Filterget, productfilter } from "../../services/api";
import Pagination from "../categories/categories/Pagination";
import Filterposts from "./Filterposts";

function Filter() {
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
  const [searchedvalue, setsearchedvalue] = useState("");
  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(() => {
    async function data() {
      let dat = await Filterget();
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
                  <h4 className="page-title">Add Filter</h4>
                </div>
                <div className="col-sm-6"></div>
              </div>
            </div>

            <FilterForm />
          </div>
          <div className="row">
            <div className="col-xl-12">
              <div className="card m-b-30">
                <div className="card-body">
                  <h4 className="mt-0 header-title mb-4">Filter List
                  <br/>
                  <form
                      className="d-flex mb-2 "
                      style={{ width: "100%" }}
                      role="search"
                    >
                      <div className="btn-group  w-75 mt-3">
                        <input
                          className="form-control  mx-2  btn-close"
                          type="search"
                          value={searchedvalue}
                          placeholder="Search Filter Name"
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
                            let dat = await Filterget();
                            setposts(dat.data);
                            setsearchedvalue("");
                          }}
                        >
                          <i className="fa fa-times" style={{ color: "white" }}></i>
                        </button>
                        <button
                         className="btn rounded btn-md btn-outline-secondary btn-dark"
                          type="submit"
                          onClick={async (e) => {
                            e.preventDefault();
                            if (searchedvalue) {
                              let dat = await productfilter(searchedvalue);
                              setposts(dat.data);
                            } else {
                              let dat = await Filterget();
                              setposts(dat.data);
                            }
                          }}
                        >
                          Search
                        </button>
                      </div>
                    </form>
                    </h4>

                  <div className="table-responsive">
                   
                    <table className="table table-hover">
                      <thead>
                        <tr>
                          <th scope="col"> Filter Name</th>
                          <th scope="col">Attributres</th>

                          <th scope="col">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <Filterposts posts={currentPosts} />
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
        <Footer />
      </div>
    </>
  );
}

export default Filter;
