import React from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";
import "../../assets/css/style.css";

const ViewContest = () => {
  // const [contests, setContests] = useState([]);
  // const getcontest = async () => {
  //   axios
  //     .get("https://o1codingclub.herokuapp.com/contest/")
  //     .then((response) => {
  //       console.log(response.data);
  //       setContests(response.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  // useEffect(() => {
  //   getcontest();
  // }, []);

  return (
    <div>
      <br />

      <section id="services" className="services section-bg">
        <div className="container">
          <header className="section-header">
            <h3>Types of Contest</h3>
          </header>
          <br />
          <div className="row">
            <div className="col-md-6 col-lg-4 wow bounceInUp">
              <div className="box">
                <div className="icon icon1">
                  <i className="ion-ios-analytics-outline i1"></i>
                </div>
                <h4 className="title">
                  <NavLink to="/O1coding">O(1) Contest</NavLink>
                </h4>
                <p className="description">
                  Explore Variety of Challenging Question prepared by teach
                  leader of O(1) Coding Club
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="box">
                <div className="icon icon2">
                  <i className="ion-ios-bookmarks-outline i2"></i>
                </div>
                <h4 className="title">
                  <NavLink to="/dailyCoding">Daily Coding Contest</NavLink>
                </h4>
                <p className="description">
                  Participate in varios contest of CodeChef and Codeforces and
                  leverage your experience of Competitive Coding
                </p>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="box">
                <div className="icon icon3">
                  <i className="ion-ios-paper-outline i3"></i>
                </div>
                <h4 className="title">
                  <NavLink to="/hiring">Hiring Contest</NavLink>
                </h4>
                <p className="description">
                  Participate in differnt hiring challenge to get placed in big
                  MNC
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ViewContest;
