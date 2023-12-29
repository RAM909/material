import React from "react";
import Footer from "../../footer/Footer";
import AddSubSubcategoryform from "./AddSubSubcategoryform";
import { Link } from "react-router-dom";

function AddSubSubcategory() {
  return (
    <>
      <div className="content-page">
        <div className="content">
          <div className="container-fluid">
            <div className="page-title-box">
              <div className="row align-items-center">
                <div className="col-sm-6">
                  <h4 className="page-title">Add Sub Sub Category</h4>
                </div>
                <div className="col-sm-6">
                  <ol className="breadcrumb float-right">
                    <li className="breadcrumb-item">
                      <Link to="/subsubcategories">
                        Back to sub sub Category
                      </Link>
                    </li>
                    <li className="breadcrumb-item active">
                      Add Sub sub Categories
                    </li>
                  </ol>
                </div>
              </div>
            </div>

            <AddSubSubcategoryform />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default AddSubSubcategory;
