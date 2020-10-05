import React, { useState } from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { NavLink, useHistory } from "react-router-dom";
import AdminModels from "../../Models/Admin/AdminModels";
import { bake_cookie } from "sfcookies";

const Navbar = () => {
  const history = useHistory();

  const [admin, setAdmin] = useState({
    name: "",
    key: "",
  });

  const enterKey = async (e) => {
    e.preventDefault();
    try {
      await AdminModels.verifyAdmin(admin);
      bake_cookie("adminName", admin.name);
      bake_cookie("adminKey", admin.key);
      history.push("/adminContest");
    } catch (error) {
      alert("Some error occured");
    }
  };

  return (
    <div>
      {/* Admin Model */}
      <div
        className="modal fade"
        id="adminLoginForm"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="myModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header text-center">
              <h4 className="modal-title w-100 font-weight-bold">Enter Key</h4>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body mx-3">
              <div className="md-form mb-5">
                <input
                  type="text"
                  id="defaultForm-name"
                  value={admin.name}
                  onChange={(e) => setAdmin({ ...admin, name: e.target.value })}
                  className="form-control validate"
                  placeholder="Admin's Name"
                />
              </div>

              <div className="md-form mb-4">
                <input
                  type="password"
                  id="defaultForm-pass"
                  value={admin.Key}
                  onChange={(e) => setAdmin({ ...admin, key: e.target.value })}
                  className="form-control validate"
                  placeholder="Key"
                />
              </div>
            </div>
            <div className="modal-footer d-flex justify-content-center">
              <button
                className="btn bg-primary btn-send close"
                data-dismiss="modal"
                onClick={enterKey}
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
      <nav
        className="navbar navbar-dark navbar-expand-sm bg-primary  fixed-top"
        id="top"
      >
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#Navbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <a className="navbar-brand" href="#top">
            O(1) Coding Club
          </a>
          <div className="collapse navbar-collapse" id="Navbar">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item mr-2">
                <NavLink className="nav-link active" to="/">
                  {" "}
                  <span className="fa fa-home fa-md"></span> Home
                </NavLink>
              </li>
              <li className="nav-item mr-2">
                <NavLink className="nav-link" to="/about">
                  <span className="fa fa-info fa-md"></span> About
                </NavLink>
              </li>
              <li className="nav-item mr-2">
                <NavLink className="nav-link" to="/contest">
                  <span className="fa fa-address-card fa-md"></span> Contest{" "}
                </NavLink>
              </li>
              <li className="nav-item mr-2">
                <NavLink className="nav-link" to="/blog">
                  <span className="fa fa-address-card fa-md"></span> Blogs{" "}
                </NavLink>
              </li>
              <li className="nav-item mr-2">
                <NavLink className="nav-link" to="/placement">
                  <span className="fa fa-address-card fa-md"></span> Placement{" "}
                </NavLink>
              </li>
              <li className="nav-item">
                {/* <button type="submit" className="btn sendbtn"> */}
                <a
                  href="#top"
                  className="nav-link"
                  data-toggle="modal"
                  data-target="#adminLoginForm"
                  to="/admin"
                >
                  <span className="fa fa-sign-in fa-md"></span> Admin{" "}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
