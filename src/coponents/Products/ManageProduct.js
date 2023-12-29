import React, { useState, useEffect } from "react";
import { Productget } from "../../services/api";
import Pagination from "../categories/categories/Pagination";
import Footer from "../footer/Footer";
import ManagePosts from "./ManagePosts";
function ManageProduct() {
  // eslint-disable-next-line
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
      let dat = await Productget();

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
                  <h4 className="page-title">Manage Product</h4>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-xl-12">
                <div className="card m-b-30">
                  <div className="card-body">
                    <h4 className="mt-0 header-title mb-4">Manage Product</h4>
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
                            let dat = await Productget();

                            setposts(dat.data);
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
                                let filteredArray = posts.filter((user) => {
                                  // Convert both search term and product name to lowercase for case-insensitive matching
                                  const searchTermLower = searchedvalue.toLowerCase();
                                  const productNameLower = user.productname1.toLowerCase();
                                  
                                  // Use includes for partial matching
                                  return productNameLower.includes(searchTermLower);
                                });
                                setposts(filteredArray);
                              } else {
                                let dat = await Productget();
                                setposts(dat.data);
                              }
                            }}
                          >
                            Search
                          </button>


                        {/* <button
                          className="btn rounded btn-md btn-outline-secondary btn-dark"
                          type="submit"
                          onClick={async (e) => {
                            e.preventDefault();
                            if (searchedvalue) {
                            
                              let filteredArray = posts.filter((user) => {
                               
                                if (user.productname1 === searchedvalue) {
                                  return user;
                                }
                              }
                              
                              );
                              setposts(filteredArray)
                              
                            } else {
                              let dat = await Productget();

                              setposts(dat.data);
                            }
                          }}
                        >
                          Search
                        </button> */}
                      </div>
                    </form>

                    <div className="table-responsive">
                      <table className="table table-hover">
                        <thead>
                          <tr>
                            <th scope="col"> Name</th>
                            <th scope="col">Image</th>
                            <th scope="col">Price</th>
                            <th scope="col">Discount Price</th>
                            <th scope="col">Stock</th>
                            <th scope="col" colSpan="2">
                              Action
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <ManagePosts posts={currentPosts} />
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

export default ManageProduct;
