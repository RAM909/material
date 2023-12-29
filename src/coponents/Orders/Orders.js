import React, { useEffect, useState } from "react";
import { Orderget, orderFilter, orderfilter } from "../../services/api";
import Pagination from "../categories/categories/Pagination";
import Footer from "../footer/Footer";
import OrdersPosts from "./OrdersPosts";
function Orders() {
  const [ord, setord] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(25);
  const [searchedvalue, setsearchedvalue] = useState("");

  // total no of pages
  const Totalpages = Math.ceil(ord.length / postsPerPage);
  const pages = [...Array(Totalpages + 1).keys()].slice(1);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = ord.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  useEffect(() => {
    async function data() {
      let dat = await Orderget();
      setord(dat.data.data.orders);
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
                  <h4 className="page-title">Orders</h4>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-xl-12">
                <div className="card m-b-30">
                  <div className="card-body">
                    <h4 className="mt-0 header-title w-25 mb-4">Order List</h4>
                    <div className="row">
                      <div className="col-4 mb-2">
                        <label>Filter</label>
                        <select
                          onChange={async (i) => {
                            if (i.target.value === "ALL") {
                              let dat = await Orderget();
                              setord(dat.data.data.orders);
                            } else {
                              let dat = await orderFilter(i.target.value);
                              setord(dat.data.data.orders);
                            }
                          }}
                          className={`form-control  shadow-none mx-1`}
                          name="statu"
                        >
                          <option value="">Select Filter</option>
                          <option value="ALL">ALL</option>
                          <option value="PENDING">PENDING</option>
                          <option value="DELIVERED">DELIVERED</option>
                          <option value="RETURN">RETURN</option>
                          <option value="IN TRANSIT">IN TRANSIT</option>
                          <option value="REFUND">REFUND</option>
                          <option value="CANCELLED">CANCELLED</option>
                        </select>
                      </div>
                      <div className="col-8 mt-4">
                        <form className="d-flex mb-2 " role="search">
                          <div className="btn-group">
                            <input
                              className="form-control  mx-2  "
                              type="search"
                              value={searchedvalue}
                              placeholder="Search username"
                              onChange={(e) => {
                                setsearchedvalue(e.target.value);
                              }}
                              aria-label="Search"
                            />
                            <button
                              type="button"
                              className="btn bg-transparent border-none"
                              style={{ left: "-43px" }}
                              onClick={async () => {
                                setsearchedvalue("");
                                let dat = await Orderget();
                                setord(dat.data.data.orders);
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
                                  let dat = await orderfilter(searchedvalue);
                                  setord(dat.data.data.orders);
                                } else {
                                  let dat = await Orderget();
                                  setord(dat.data.data.orders);
                                }
                              }}
                            >
                              Search
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>

                    <div className="table-responsive">
                      <table className="table table-hover">
                        <thead>
                          <tr>
                            <th scope="col">Sr no</th>
                            <th>Products</th>
                            <th scope="col">User Name</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Amount</th>
                            <th scope="col">Status</th>
                            <th scope="col" colSpan="5">
                              Action
                            </th>
                            <th></th>
                            <th scope="col">Details</th>
                            <th scope="col"> Date CreatedAt </th>
                            <th scope="col">Time strap</th>
                          </tr>
                        </thead>
                        <tbody>
                          <OrdersPosts posts={currentPosts} />
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

export default Orders;
