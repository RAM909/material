import React from "react";
import { Link } from "react-router-dom";
import Footer from "../footer/Footer";
import Promocodeform from "./Promocodeform";

function Promocodef() {
  return (
    <>
      <div className="content-page">
        <div className="content">
          <div className="container-fluid">
            <div className="page-title-box">
              <div className="row align-items-center">
                <div className="col-sm-6">
                  <h4 className="page-title">Add Promo</h4>
                </div>
                <div className="col-sm-6">
                  <ol className="breadcrumb float-right">
                    <li className="breadcrumb-item">
                      <Link to="/promo">Back to Promo</Link>
                    </li>
                    <li className="breadcrumb-item active">Add Promo</li>
                  </ol>
                </div>
              </div>
            </div>

            <Promocodeform />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Promocodef;
