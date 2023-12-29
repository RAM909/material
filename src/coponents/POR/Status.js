import React from "react";
import Footer from "../footer/Footer";

function Status() {
  return (
    <>
      <div className="content-page">
        <div className="content">
          <div className="container-fluid">
            <div className="page-title-box">
              <div className="row align-items-center">
                <div className="col-sm-6">
                  <h4 className="page-title">POR status</h4>
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
                    <h4 className="mt-0 header-title mb-4">POR status</h4>

                    <div className="table-responsive">
                      <table className="table table-hover">
                        <thead>
                          <tr>
                            <th scope="col">Sr no</th>
                            <th>Product Name</th>
                            <th scope="col">Vendor Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Phone Number</th>
                            <th scope="col">Quantity</th>
                            <th> Total Price</th>
                            <th scope="col">Request Status</th>
                          </tr>
                        </thead>
                        <tbody></tbody>
                      </table>
                    </div>
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

export default Status;
