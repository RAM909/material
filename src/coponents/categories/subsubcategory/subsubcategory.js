import { React, useEffect, useState } from "react";
import Pagination from "../categories/Pagination";
import { Link } from "react-router-dom";
import { SubSubgetCategory, subsubcategoryfilter } from "../../../services/api";
import Footer from "../../footer/Footer";
import Subsubposts from "./Subsubposts";
function SubSubCategory() {
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
  useEffect(() => {
    async function data() {
      let dat = await SubSubgetCategory();

      setposts(dat);
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
                  <h4 className="page-title">Sub sub Category</h4>
                </div>
                <div className="col-sm-6">
                  <ol className="breadcrumb float-right">
                    <li className="breadcrumb-item">
                      <Link to="/">materialbuy</Link>
                    </li>
                    <li className="breadcrumb-item active">Sub sub Category</li>
                  </ol>
                </div>
              </div>
            </div>

            <div className="row d-md-flex justify-content-md-end ">
              <div className="col-sm-6">
                <h4 className="page-title">Sub sub Categories</h4>
              </div>
              <div className="col-sm-6 d-md-flex justify-content-md-end">
                <Link to="/addsubsubcategory">
                  <button className="btn btn-secondary rounded-pill mb-3">
                    Add Sub sub Categories
                  </button>
                </Link>
              </div>
            </div>

            <div className="row">
              <div className="col-xl-12">
                <div className="card m-b-30">
                  <div className="card-body">
                    <h4 className="mt-0 header-title mb-4">Sub sub Category</h4>
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
                          placeholder="Search sub sub category"
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
                            let dat = await SubSubgetCategory();
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
                              let dat = await subsubcategoryfilter(
                                searchedvalue
                              );

                              setposts(dat.data);
                            } else {
                              let dat = await SubSubgetCategory();
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
                            <th scope="col">Category</th>
                            <th scope="col">Sub Category</th>
                            <th scope="col">Sub Sub Category </th>
                            <th scope="col">Sub Sub Category Image</th>
                            <th scope="col">Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <Subsubposts posts={currentPosts} />
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

export default SubSubCategory;
