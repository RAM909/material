import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../footer/Footer";
import AddSubCategoryform from "./AddSubCategoryform";
function AddSubcategory() {
  return (
    <>
      <div className="content-page">
        <div className="content">
          <div className="container-fluid">
            <div className="page-title-box">
              <div className="row align-items-center">
                <div className="col-sm-6">
                  <h4 className="page-title">Add Sub Category</h4>
                </div>
                <div className="col-sm-6">
                  <ol className="breadcrumb float-right">
                    <li className="breadcrumb-item">
                      <Link to="/subcategory">Back to sub Category</Link>
                    </li>
                    <li className="breadcrumb-item active">
                      Add Sub Categories
                    </li>
                  </ol>
                </div>
              </div>
            </div>

            <AddSubCategoryform />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default AddSubcategory;
