import { React } from "react";
import { Link } from "react-router-dom";

import Footer from "../../footer/Footer";
import AddCategoryform from "./AddCategoryform";
function AddCategory() {
  return (
    <>
      <div className="content-page">
        <div className="content">
          <div className="container-fluid">
            <div className="page-title-box">
              <div className="row align-items-center">
                <div className="col-sm-6">
                  <h4 className="page-title">Add Category</h4>
                </div>
                <div className="col-sm-6">
                  <ol className="breadcrumb float-right">
                    <li className="breadcrumb-item">
                      <Link to="/categories">Back to Category</Link>
                    </li>
                    <li className="breadcrumb-item active">Add Categories</li>
                  </ol>
                </div>
              </div>
            </div>

            <AddCategoryform />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default AddCategory;
