import { React, useEffect, useState } from "react";
import Footer from "../footer/Footer";
import { Link } from "react-router-dom";
import { promocodeget } from "../../services/api";
import Pagination from "../categories/categories/Pagination";
import Promocodeposts from "./Promocodeposts";

function Promocode() {
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
      let dat = await promocodeget();
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
                  <h4 className="page-title">Promo code </h4>
                </div>
                <div className="col-sm-6">
                  <ol className="breadcrumb float-right">
                    <li className="breadcrumb-item">
                      <Link to="/">materialbuy</Link>
                    </li>
                    <li className="breadcrumb-item active">
                      <Link to="/Promo">Promo code </Link>
                    </li>
                  </ol>
                </div>
              </div>
            </div>

            <div className="row d-md-flex justify-content-md-end ">
              <div className="col-sm-6">
                <h4 className="page-title">Promo code </h4>
              </div>
              <div className="col-sm-6 d-md-flex justify-content-md-end">
                <Link to="/addPromocode">
                  <button className="btn btn-secondary rounded-pill mb-3">
                    Add Promo code{" "}
                  </button>
                </Link>
              </div>
            </div>

            <div className="row">
              <div className="col-xl-12">
                <div className="card m-b-30">
                  <div className="card-body">
                    <h4 className="mt-0 header-title mb-4">Promo code</h4>

                    <div className="table-responsive">
                      <table className="table table-hover">
                        <thead>
                          <tr>
                            <th scope="col">Sr No.</th>
                            <th scope="col">Code Name</th>
                            <th scope="col">Message</th>

                            <th scope="col">Discount</th>
                            <th scope="col">Discount Type</th>
                            <th scope="col">Start Date</th>
                            <th scope="col">End Date</th>
                            <th scope="col">Minimum order Amount</th>
                            <th scope="col">No of Users</th>

                            <th scope="col">Status</th>
                            <th scope="col">Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <Promocodeposts posts={currentPosts} />
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

export default Promocode;
