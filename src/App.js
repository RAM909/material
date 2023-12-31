import { React } from "react";
import Sidebar from "./coponents/sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./coponents/Login/Login";
import Signup from "./coponents/Login/Signup";
/* eslint-disable */

function App() {
  const handleLogout = () => {
    alert("Logout");
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />

          <Route exact path="/signup" element={<Signup />}></Route>
        </Routes>
      </Router>
      {localStorage.token ? (
        <>
          <div className="APP">
            <div id="wrapper">
              <div className="topbar">
                <div className="topbar-left">
                  <a href="#" className="logo">
                    <span className="logo-light">
                      <i className="mdi mdi-camera-control "></i> Material Buy
                    </span>
                  </a>
                </div>
                <nav className="navbar-custom">
                  <ul className="navbar-right list-inline float-right mb-0">
                    <li className="dropdown notification-list list-inline-item">
                      <div className="dropdown notification-list nav-pro-img">
                        <a
                          className="dropdown-toggle nav-link arrow-none nav-user"
                          data-toggle="dropdown"
                          href="#"
                          role="button"
                          aria-haspopup="false"
                          aria-expanded="false"
                        >
                          <i className="fas fa-user" /> User
                        </a>
                        <div className="dropdown-menu dropdown-menu-right profile-dropdown ">
                          {/* <a className="dropdown-item" href="#">
                            {" "}
                            Profile
                          </a> */}

                          {/* <a className="dropdown-item d-block" href="#">
                            <i className="fas fa-gear"></i> Settings
                          </a> */}

                          <div className="dropdown-divider"></div>
                          <button
                            className="dropdown-item text-danger"
                            href="#"
                            onClick={handleLogout}
                          >
                            <i className="fas fa-sharp fa-solid fa-right-from-bracket "></i>{" "}
                            Logout
                          </button>
                        </div>
                      </div>
                    </li>
                  </ul>

                  <ul className="list-inline menu-left mb-0">
                    <li className="float-left">
                      <button className="button-menu-mobile open-left waves-effect">
                        <i className=" fa-solid fa-bars"></i>
                      </button>
                    </li>
                    <li className="d-none d-md-inline-block"></li>
                  </ul>
                </nav>
              </div>

              <Sidebar />
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  );
}

export default App;
