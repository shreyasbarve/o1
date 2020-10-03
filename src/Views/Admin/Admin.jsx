import React from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { NavLink } from "react-router-dom";

const admin = () => {
  return (
    <div>
      <nav className="navbar navbar-dark navbar-expand-sm bg-primary  fixed-top" id="top">
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
                <NavLink className="nav-link active" to="/adminContest">
                  {" "}
                  <span className="fa fa-home fa-md"></span>Contest
                </NavLink>
              </li>
              <li className="nav-item mr-2">
                <NavLink className="nav-link active" to="/adminBlog">
                  {" "}
                  <span className="fa fa-home fa-md"></span>Blog
                </NavLink>
              </li>
              <li className="nav-item mr-2">
                <NavLink className="nav-link active" to="/adminPlacement">
                  {" "}
                  <span className="fa fa-home fa-md"></span>Placement
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default admin;
