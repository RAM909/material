import { React, useEffect } from "react";
import { warehouse, warehousefilter } from "../../services/api";
import useState from "react-usestateref";
import Footer from "../footer/Footer";
import Pagination from "../categories/categories/Pagination";
import Wareposts from "./Wareposts";
// import {  useNavigate } from 'react-router-dom'
function Warehouse() {
  const [posts, setposts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(25);
  const [searchedvalue, setsearchedvalue] = useState("");

  // total no of pages
  const Totalpages = Math.ceil(posts.length / postsPerPage);
  const pages = [...Array(Totalpages + 1).keys()].slice(1);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // const navigate=useNavigate()
  // eslint-disable-next-line
  useEffect(() => {
    async function data() {
      let dat = await warehouse();

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
                  <h4 className="page-title">Ware House</h4>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-xl-12">
                <div className="card m-b-30">
                  <div className="card-body">
                    <h4 className="mt-0 header-title mb-4"> Ware House</h4>
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
                          placeholder="Search email"
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
                            let dat = await warehouse();
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
                              let dat = await warehousefilter(searchedvalue);

                              setposts(dat.data);
                            } else {
                              let dat = await warehouse();
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
                            <th scope="col"> Sr No.</th>
                            <th scope="col"> Name</th>
                            <th scope="col">District</th>
                            <th scope="col">State</th>
                            <th scope="col">Address</th>
                            <th scope="col">Pincode</th>
                            <th scope="col">Vendor Name</th>
                            <th scope="col">Vendor Email</th>
                            <th scope="col">Phone Number</th>
                            <th scope="col">Status</th>
                            <th scope="col" colSpan="2">
                              Action
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <Wareposts posts={currentPosts} />
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

export default Warehouse;
