import React from "react";
import Home from "./home";
import Logistic from "./Logistic/Sellerrange";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Categories from "./categories/categories/Categories";
import AddCategory from "./categories/categories/AddCategory";
import AddProduct from "./Products/AddProduct";
import Subcategory from "./categories/subcategory/Subcategory";
import SubSubCategory from "./categories/subsubcategory/subsubcategory";
import AddSubcategory from "./categories/subcategory/AddSubcategory";
import AddSubSubcategory from "./categories/subsubcategory/AddSubSubcategory";
import Career from "./Static/Career";
import Updatecat from "./categories/categories/Updatecat";
import RequestVendor from "./Vendors/RequestVendor";
import ProfileUpates from "./Vendors/ProfileUpates";
import Orders from "./Orders/Orders";
import Status from "./POR/Status";
import Request from "./POR/Request";
import ProCategory from "./Professional/ProCategory";
import AddProfe from "./Professional/AddProfe";
import Services from "./Services/Services";
import Promocode from "./Offer andbanner/Promocode";
import Promocodef from "./Offer andbanner/Promocodef";
import Updatesub from "./categories/subcategory/Updatesub";
import Warehouse from "./Vendors/Warehouse";
import Carousels from "./Offer andbanner/Carousels";
import Corporate from "./Customer/Corporate";
import NormalCusttomer from "./Customer/NormalCusttomer";
import SellerFrequency from "./Logistic/SellerFrequency";
import Buyerlevel from "./Logistic/Buyerlevel";
import Filter from "./Products/Filter";
import Banner from "./Offer andbanner/Banner";
import Weightrange from "./Logistic/Weightrange";
import UpdateSubSub from "./categories/subsubcategory/UpdateSubSub";
import Privacy from "./Static/Privacy";
import RRC from "./Static/RRC";
import Shipping from "./Static/Shipping";
import TOS from "./Static/TOS";
import Buyerlevelupdate from "./Logistic/Buyerlevelupdate";
import Transporters from "./Logistic/Transporters";
import Ratecharts from "./Logistic/Ratecharts";
import Prefab from "./Prefab houses/Prefab";
import Quotation from "./Products/Quotation";
import RequestProduct from "./Products/RequestProduct";
import ManageProduct from "./Products/ManageProduct";
import Updateproduct from "./Products/Updateproduct";
import Deals from "./Offer andbanner/Deals";
import Recom from "./Offer andbanner/Recom";
import UpdateCAtegory from "./Professional/UpdateCAtegory";
import Prefabform from "./Prefab houses/Prefabform";
import Sellerfrequencyupdate from "./Logistic/Sellerfrequencyupdate";
import CSSDeals from "./Offer andbanner/CSSDeals";
import AddVariants from "./Products/AddVariants";
import Addvariantform from "./Products/Addvariantform";
/* eslint-disable */
function Sidebar() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/home" element={<Home />}></Route>
          <Route exact path="/categories" element={<Categories />}></Route>
          <Route
            exact
            path="/update/profe/cat/:id"
            element={<UpdateCAtegory />}
          ></Route>

          <Route exact path="/addcategories" element={<AddCategory />}></Route>
          <Route exact path="/addproduct" element={<AddProduct />}></Route>
          <Route exact path="/subcategory" element={<Subcategory />}></Route>
          <Route
            exact
            path="/addsubcategory"
            element={<AddSubcategory />}
          ></Route>
          <Route
            exact
            path="/subsubcategories"
            element={<SubSubCategory />}
          ></Route>
          <Route
            exact
            path="/addsubsubcategory"
            element={<AddSubSubcategory />}
          ></Route>
          <Route exact path="/update/cat/:id" element={<Updatecat />}></Route>
          <Route exact path="/update/sub/:id" element={<Updatesub />}></Route>
          <Route
            exact
            path="/update/addvariant/:id"
            element={<Addvariantform />}
          ></Route>
          <Route
            exact
            path="/update/pro/:id/:varianceid"
            element={<Updateproduct />}
          ></Route>
          <Route
            exact
            path="/update/subsub/:id"
            element={<UpdateSubSub />}
          ></Route>
          <Route
            exact
            path="/update/sellerfrequencylevel/:id"
            element={<Sellerfrequencyupdate />}
          ></Route>
          <Route
            exact
            path="/update/buyerlevel/:id"
            element={<Buyerlevelupdate />}
          ></Route>
          <Route
            exact
            path="/requestvendor"
            element={<RequestVendor />}
          ></Route>
          <Route
            exact
            path="/profilevendor"
            element={<ProfileUpates />}
          ></Route>
          <Route exact path="/orders" element={<Orders />}></Route>
          <Route exact path="/cssdeals" element={<CSSDeals />}></Route>
          <Route exact path="/porstatus" element={<Status />}></Route>
          <Route exact path="/porrequest" element={<Request />}></Route>
          <Route exact path="/profecat" element={<ProCategory />}></Route>
          <Route exact path="/addprofe" element={<AddProfe />}></Route>
          <Route exact path="/service" element={<Services />}></Route>
          <Route exact path="/promo" element={<Promocode />}></Route>
          <Route exact path="/addPromocode" element={<Promocodef />}></Route>
          <Route exact path="/sellerrange" element={<Logistic />}></Route>
          <Route exact path="/warehouse" element={<Warehouse />}></Route>
          <Route exact path="/carousels" element={<Carousels />}></Route>
          <Route exact path="/corporate" element={<Corporate />}></Route>
          <Route exact path="/customer" element={<NormalCusttomer />}></Route>
          <Route
            exact
            path="/sellerfrequency"
            element={<SellerFrequency />}
          ></Route>
          <Route exact path="/buyerlevel" element={<Buyerlevel />}></Route>
          <Route exact path="/weightrange" element={<Weightrange />}></Route>
          <Route exact path="/banner" element={<Banner />}></Route>
          <Route exact path="/pp" element={<Privacy />}></Route>
          <Route exact path="/rrc" element={<RRC />}></Route>
          <Route exact path="/sp" element={<Shipping />}></Route>
          <Route exact path="/tos" element={<TOS />}></Route>
          <Route exact path="/career" element={<Career />}></Route>
          <Route exact path="/filter" element={<Filter />}></Route>
          <Route exact path="/trans" element={<Transporters />}></Route>
          <Route exact path="/rate" element={<Ratecharts />}></Route>
          <Route exact path="/house" element={<Prefab />}></Route>
          <Route exact path="/quotations" element={<Quotation />}></Route>
          <Route exact path="/prorequest" element={<RequestProduct />}></Route>
          <Route exact path="/deals" element={<Deals />}></Route>
          <Route exact path="/recom" element={<Recom />}></Route>
          <Route exact path="/UI" element={<Prefabform />}></Route>
          <Route exact path="/addvariant" element={<AddVariants />}></Route>
          <Route
            exact
            path="/manageproduct"
            element={<ManageProduct />}
          ></Route>
        </Routes>

        <div className="left side-menu">
          <div className="slimscroll-menu" id="remove-scroll">
            <div id="sidebar-menu">
              <ul className="metismenu" id="side-menu">
                <li className="menu-title">Menu</li>
                <li>
                  <Link to="/home" className="waves-effect">
                    <i className="fas fa-home"></i> <span> Home </span>
                  </Link>
                </li>

                <li>
                  <a href="#" className="waves-effect">
                    <i className="fas fa-users"></i>
                    <span>
                      {" "}
                      Vendor Panel{" "}
                      <span className="float-right menu-arrow">
                        <i className="mdi mdi-chevron-right"></i>
                      </span>{" "}
                    </span>
                  </a>
                  <ul className="submenu">
                    <li>
                      <Link to="/requestvendor">
                        <i className="fas fa-user-plus" />
                        &ensp; Requests
                      </Link>
                    </li>
                    <li>
                      <Link to="/profilevendor">
                        <i className="fas fa-user-secret" /> &ensp; Vendors
                      </Link>
                    </li>
                    <li>
                      <Link to="/warehouse">
                        <i className="fas fa-warehouse" /> &ensp; Ware House
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="/porrequest" className="waves-effect">
                    <i className="fas fa-plus-square"></i>
                    <span> POR request</span>
                  </Link>
                </li>
                <li>
                  <Link to="/porstatus" className="waves-effect">
                    <i className="fas fa-retweet"></i>
                    <span>
                      {" "}
                      POR Status{" "}
                      <span className="float-right menu-arrow"></span>{" "}
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/orders" className="waves-effect">
                    <i className="fa-solid fa-cart-plus"></i>
                    <span>
                      {" "}
                      Orders<span className="float-right menu-arrow"></span>{" "}
                    </span>
                  </Link>
                </li>

                <li>
                  <Link to="/categories" className="waves-effect">
                    <i className="fas fa-bullseye"></i>{" "}
                    <span> Categories </span>{" "}
                  </Link>
                </li>
                <li>
                  <Link to="/subcategory" className="waves-effect">
                    <i className="fas fa-bullseye"></i>{" "}
                    <span> Sub Categories </span>{" "}
                  </Link>
                </li>
                <li>
                  <Link to="/subsubcategories" className="waves-effect">
                    <i className="fas fa-bullseye"></i>{" "}
                    <span>Sub Sub Categories </span>{" "}
                  </Link>
                </li>
                <li>
                  <a href="#" className="waves-effect">
                    <i className="fas fa-cubes"></i>{" "}
                    <span>
                      {" "}
                      Products{" "}
                      <span className="float-right menu-arrow">
                        <i className="mdi mdi-chevron-right"></i>
                      </span>{" "}
                    </span>{" "}
                  </a>
                  <ul className="submenu">
                    <li>
                      <Link to="/addproduct">
                        <i className="fas fa-plus" />
                        &ensp; Add Product
                      </Link>
                    </li>
                    <li>
                      <Link to="/manageproduct">
                        <i className="fas fa-tasks" />
                        &ensp; Manage Product
                      </Link>
                    </li>
                    <li>
                      <Link to="/prorequest">
                        <i className="fas fa-sort-alpha-down" />
                        &ensp; Product Request
                      </Link>
                    </li>
                    <li>
                      <Link to="/quotations">
                        <i className="far fa-file-word" /> &ensp; Quotations
                      </Link>
                    </li>
                    <li>
                      {" "}
                      <Link to="/filter" className="waves-effect">
                        <i className="fa-solid fa-filter"></i> &ensp; Filters
                      </Link>
                    </li>
                    <li>
                      {" "}
                      <Link to="/addvariant" className="waves-effect">
                        <i className="fa-solid fa-filter"></i> &ensp; Add
                        Variants
                      </Link>
                    </li>
                  </ul>
                </li>

                <li>
                  <a href="#" className="waves-effect">
                    {" "}
                    <i className="fa-solid fa-user-tie"></i>
                    <span>
                      {" "}
                      Professional{" "}
                      <span className="float-right menu-arrow">
                        <i className="mdi mdi-chevron-right"></i>
                      </span>{" "}
                    </span>
                  </a>
                  <ul className="submenu">
                    <li>
                      <Link to="/profecat">
                        <i className="fas fa-list"></i> &ensp; Category
                      </Link>
                    </li>
                    <li>
                      <Link to="/addprofe">
                        <i className="fas fa-user-plus" /> &ensp; Add
                        Professionals
                      </Link>
                    </li>
                  </ul>
                </li>

                <li>
                  <Link to="/service" className="waves-effect">
                    <i className="fa-solid fa-briefcase"></i> &ensp; Service
                  </Link>
                </li>

                <li>
                  <a href="#" className="waves-effect">
                    {" "}
                    <i className="fa-solid fa-user-tie"></i>
                    <span>
                      {" "}
                      Prefab House{" "}
                      <span className="float-right menu-arrow">
                        <i className="mdi mdi-chevron-right"></i>
                      </span>{" "}
                    </span>
                  </a>
                  <ul className="submenu">
                    <li>
                      <Link to="/house">
                        <i className="fas fa-list"></i> &ensp; Enquiry
                      </Link>
                    </li>
                    <li>
                      <Link to="/UI">
                        <i className="fas fa-user-plus" /> &ensp; UI
                      </Link>
                    </li>
                  </ul>
                </li>

                <li>
                  <a href="#" className="waves-effect">
                    {" "}
                    <i className="fa-solid fa-gifts"></i>
                    <span>
                      Offer &amp; Banner{" "}
                      <span className="float-right menu-arrow">
                        <i className="mdi mdi-chevron-right"></i>
                      </span>{" "}
                    </span>
                  </a>
                  <ul className="submenu">
                    <li>
                      <Link to="/promo">
                        <i className="fas fa-list"></i> &ensp; Promo code{" "}
                      </Link>
                    </li>
                    <li>
                      <Link to="/deals">
                        <i className="fas fa-list"></i> &ensp; Deals
                      </Link>
                    </li>
                    <li>
                      <Link to="/cssdeals">
                        <i className="fas fa-list"></i> &ensp; CSS Deals
                      </Link>
                    </li>
                    <li>
                      <Link to="/recom">
                        <i className="fas fa-list"></i> &ensp; Recommended
                      </Link>
                    </li>
                    <li>
                      <Link to="/carousels">
                        <i className=" fa-solid fa-panorama"></i>&ensp; Carousel
                      </Link>
                    </li>
                    <li>
                      <Link to="/banner">
                        <i className=" fa-solid fa-images"></i>&ensp; Banners
                      </Link>
                    </li>
                  </ul>
                </li>

                <li>
                  <a href="#" className="waves-effect">
                    {" "}
                    <i className="fa-solid fa-truck-fast"></i>
                    <span>
                      Logistic{" "}
                      <span className="float-right menu-arrow">
                        <i className="mdi mdi-chevron-right"></i>
                      </span>{" "}
                    </span>
                  </a>
                  <ul className="submenu">
                    <li>
                      {" "}
                      <Link to="/sellerrange" className="waves-effect">
                        <i className="fa-solid fa-sliders"></i> &ensp;Seller
                        Range
                      </Link>
                    </li>
                    <li>
                      {" "}
                      <Link to="/buyerlevel" className="waves-effect">
                        <i className="fa-solid fa-sliders"></i> &ensp;Buyer
                        Level
                      </Link>
                    </li>
                    <li>
                      {" "}
                      <Link to="/weightrange" className="waves-effect">
                        <i className="fa-solid fa-sliders"></i> &ensp;Weight
                        Range
                      </Link>
                    </li>
                    <li>
                      {" "}
                      <Link to="/sellerfrequency" className="waves-effect">
                        <i className="fa-solid fa-sliders"></i> &ensp;Seller
                        Frequency
                      </Link>
                    </li>

                    <li>
                      {" "}
                      <Link to="/rate" className="waves-effect">
                        <i className="fa-solid fa-indian-rupee-sign"></i> &ensp;
                        Rate Charts
                      </Link>
                    </li>
                    <li>
                      {" "}
                      <Link to="/trans" className="waves-effect">
                        <i className="fa-solid fa-truck-arrow-right"></i> &ensp;
                        Transporters
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#" className="waves-effect">
                    {" "}
                    <i className="fa-solid fa-users"></i>
                    <span>
                      Customer{" "}
                      <span className="float-right menu-arrow">
                        <i className="mdi mdi-chevron-right"></i>
                      </span>{" "}
                    </span>
                  </a>
                  <ul className="submenu">
                    <li>
                      <Link to="/corporate">
                        <i className="fa-solid fa-user-tie"></i> &ensp;
                        Corporate{" "}
                      </Link>
                    </li>
                    <li>
                      <Link to="/customer">
                        <i className=" fa-solid fa-user"></i>&ensp; Normal{" "}
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#" className="waves-effect">
                    {" "}
                    <i className="fa-solid fa-file"></i>
                    <span>
                      Static Pages
                      <span className="float-right menu-arrow">
                        <i className="mdi mdi-chevron-right"></i>
                      </span>{" "}
                    </span>
                  </a>
                  <ul className="submenu">
                    <li>
                      <Link to="/pp">
                        <i className="fas fa-list"></i> &ensp; Privacy Policy{" "}
                      </Link>
                    </li>
                    <li>
                      <Link to="/tos">
                        <i className="fas fa-list"></i>&ensp; Terms of Services
                      </Link>
                    </li>
                    <li>
                      <Link to="/sp">
                        <i className=" fas fa-list"></i>&ensp; Shipping Policy
                      </Link>
                    </li>
                    <li>
                      <Link to="/rrc">
                        <i className=" fas fa-list"></i>&ensp; RRC Policy
                      </Link>
                    </li>

                    <li>
                      <Link to="/career">
                        <i className=" fas fa-list"></i>&ensp; Career
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>

            <div className="clearfix"></div>
          </div>
        </div>
      </Router>
    </>
  );
}

export default Sidebar;
