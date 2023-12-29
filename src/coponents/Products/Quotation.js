import React, { useState, useEffect } from "react";
import Footer from "../footer/Footer";
import Pagination from "../categories/categories/Pagination";
import QuotationPosts from "./QuotationPosts";
import { QuotationFilter, Quotationpage } from "../../services/api";
// import { useNavigate } from 'react-router-dom';
function Quotation() {
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
  // const navigate=useNavigate()

  // eslint-disable-next-line
  useEffect(() => {
    async function data() {
      let dat = await Quotationpage();
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
                  <h4 className="page-title">Quotations</h4>
                
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-xl-12">
                <div className="card m-b-30">
                  <div className="card-body">
                    <h4 className="mt-0 header-title mb-4">
                        
                        Quotation List

                        <form
                      className="d-flex mb-2 "
                      style={{ width: "40%" }}
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
                          style={{ left: "-12%" }}
                          onClick={async () => {
                            let dat = await Quotationpage();
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
                              let dat = await QuotationFilter(searchedvalue);
                              setposts(dat.data);
                            } else {
                                let dat = await Quotationpage();
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
                            <th scope="col"> Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Phone No.</th>
                            <th scope="col">Description</th>
                            <th scope="col">Images</th>
                            <th scope="col" colSpan="2">
                              Action
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <QuotationPosts posts={currentPosts} />
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

export default Quotation;
