import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { Customercount } from "../services/api";
import Footer from "./footer/Footer";
function Home() {
  const [cutomercount, setcustomercount] = useState("");
  const [vendorcount, setvendorcount] = useState("");
  const [productco, setproductco] = useState("");
  const [yearlyRevenue, setYearlyRevenue] = useState([]);
  const [lifeRevenue, setLifeRevenue] = useState([]);
  const [monthlyRevenue, setMonthlyRevenue] = useState([]);

  useEffect(() => {
    async function fetchData() {
      // You can await here
      let dat = await Customercount();
      setcustomercount(dat.customerCount);
      setvendorcount(dat.vendorCount);
      setproductco(dat.productCount);
      setMonthlyRevenue(dat.currentMonthRevenue);
      setYearlyRevenue(dat.currentYearRevenue);
      setLifeRevenue(dat.totalRevenue);
    }
    fetchData();
  }, []);

  return (
    <>
      <div className="content-page">
        <div className="content">
          <div className="container-fluid">
            <div className="page-title-box">
              <div className="row align-items-center">
                <div className="col-sm-6">
                  <h4 className="page-title">Dashboard</h4>
                </div>
                <div className="col-sm-6">
                  <ol className="breadcrumb float-right">
                    <li className="breadcrumb-item">
                      <Link to="/">materialbuy</Link>
                    </li>
                    <li className="breadcrumb-item active">Dashboard</li>
                  </ol>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-sm-6 col-xl-4">
                <div className="card">
                  <div className="card-heading p-4">
                    <div className="mini-stat-icon float-right">
                      <i className="mdi mdi-cube-outline bg-primary  text-white"></i>
                    </div>
                    <div>
                      <h5 className="font-16">Customer</h5>
                    </div>
                    <h3 className="mt-4">{cutomercount}</h3>

                    <p className="text-muted mt-2 mb-0">Life time </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-xl-4">
                <div className="card">
                  <div className="card-heading p-4">
                    <div className="mini-stat-icon float-right">
                      <i className="mdi mdi-briefcase-check bg-success text-white"></i>
                    </div>
                    <div>
                      <h5 className="font-16">Vendors</h5>
                    </div>
                    <h3 className="mt-4">{vendorcount}</h3>
                    <p className="text-muted mt-2 mb-0">Life time </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-xl-4">
                <div className="card">
                  <div className="card-heading p-4">
                    <div className="mini-stat-icon float-right">
                      <i className="mdi mdi-tag-text-outline bg-warning text-white"></i>
                    </div>
                    <div>
                      <h5 className="font-16">Products</h5>
                    </div>
                    <h3 className="mt-4">{productco}</h3>
                    <p className="text-muted mt-2 mb-0">Life time </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-sm-6 col-xl-4">
                <div className="card">
                  <div className="card-heading p-4">
                    <div className="mini-stat-icon float-right">
                      <i className="mdi mdi-buffer bg-danger text-white"></i>
                    </div>
                    <div>
                      <h5 className="font-16">Revenue</h5>
                    </div>
                    <h3 className="mt-4">Rs {monthlyRevenue}</h3>

                    <p className="text-muted  mt-2 mb-0">This month</p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-xl-4">
                <div className="card">
                  <div className="card-heading p-4">
                    <div className="mini-stat-icon float-right">
                      <i className="mdi mdi-buffer bg-info text-white"></i>
                    </div>
                    <div>
                      <h5 className="font-16">Revenue</h5>
                    </div>
                    <h3 className="mt-4">Rs {yearlyRevenue}</h3>

                    <p className="text-muted  mt-2 mb-0">This Year</p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-xl-4">
                <div className="card">
                  <div className="card-heading p-4">
                    <div className="mini-stat-icon float-right">
                      <i className="mdi mdi-buffer bg-light text-white"></i>
                    </div>
                    <div>
                      <h5 className="font-16">Revenue</h5>
                    </div>
                    <h3 className="mt-4">Rs {lifeRevenue}</h3>
                    <p className="text-muted  mt-2 mb-0">Life time</p>
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

export default Home;
