import React from "react";
import { Link } from "react-router-dom";
import Footer from "../footer/Footer";

import ProductForm from "./productform";
function AddProduct() {
  return (
    <>
      <div className="content-page">
        <div className="content">
          <div className="container-fluid">
            <div className="page-title-box">
              <div className="row align-items-center">
                <div className="col-sm-6">
                  <h4 className="page-title">Products</h4>
                </div>
                <div className="col-sm-6">
                  <ol className="breadcrumb float-right">
                    <li className="breadcrumb-item">
                      <Link to="/">materialbuy</Link>
                    </li>

                    <li className="breadcrumb-item active">
                      <Link to="/addproduct">Add Product</Link>
                    </li>
                  </ol>
                </div>
              </div>
            </div>

            <ProductForm />
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}

export default AddProduct;
