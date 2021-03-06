import React from "react";
import "../../assets/css/footer.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../../node_modules/font-awesome/css/font-awesome.min.css";
import "../../assets/vendor/ionicons/css/ionicons.min.css";
import { NavLink } from "react-router-dom";
function footer() {
  return (
    <div>
      <footer className="page-footer middleColor  font-small unique-color-dark">
        <div className="footerColor">
          <div className="container">
            <div className="row py-4 d-flex align-items-center">
              <div className="col-md-6 col-lg-5 text-center text-md-left mb-4 mb-md-0 footerTitle">
                <h6 className="mb-0">Get connected with us on social networks!</h6>
              </div>

              <div className="col-md-6 col-lg-7 text-center text-md-right">
                <a className="fb-ic" href="/">
                  <i className="fa fa-facebook-f white-text mr-4"> </i>
                </a>
                <a className="tw-ic" href="/">
                  <i className="fa fa-twitter white-text mr-4"> </i>
                </a>
                <a className="gplus-ic" href="/">
                  <i className="fa fa-google-plus white-text mr-4"> </i>
                </a>
                <a className="li-ic" href="/">
                  <i className="fa fa-linkedin white-text mr-4"> </i>
                </a>
                <a className="ins-ic" href="/">
                  <i className="fa fa-instagram white-text"> </i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="container text-center text-md-left mt-5">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="text-uppercase white font-weight-bold">O(1) Coding Club</h6>
              <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" />
              <p className="white">
                We've got a strong team filled with caffeine addicted developers, gradient
                loving designers and machine like working managers providing a solution
                for Great Coding
              </p>
            </div>

            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase white font-weight-bold">SERVICES</h6>
              <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" />
              <p>
                <a href="/">Daily Blogs</a>
              </p>
              <p>
                <a href="/">Bunch of Contest</a>
              </p>
              <p>
                <a href="/">Placement Corner</a>
              </p>
            </div>

            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase white font-weight-bold">Useful links</h6>
              <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" />
              <p>
                <NavLink to="/">Home</NavLink>
              </p>
              <p>
                <a href="/blog">Blogs</a>
              </p>
              <p>
                <NavLink to="/contest">Contest</NavLink>
              </p>
              <p>
                <a href="/placement">Placement Corner</a>
              </p>
            </div>

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase white font-weight-bold">Contact</h6>
              <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" />
              <p className="white">
                <i className="fa fa-home white mr-3"></i> Nagpur, 440018, India
              </p>
              <p className="white">
                <i className="fa fa-envelope white mr-3"></i> O(1)codingclub@gmail.com
              </p>
              <p className="white">
                <i className="fa fa-phone white mr-3"></i> + 01 234 567 88
              </p>
              <p className="white">
                <i className="fa fa-print white mr-3"></i> + 01 234 567 89
              </p>
            </div>
          </div>
        </div>

        <div className="footer-copyright text-center py-3 copyrightColor">
          © 2020 :<a href="https://mdbootstrap.com/"> O(1) Coding Club</a>
        </div>
      </footer>
    </div>
  );
}

export default footer;
