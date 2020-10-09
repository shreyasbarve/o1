import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";
import "../../assets/css/style.css";
import ContestModels from "../../Models/Contests/ContestModels";
import setSnackbar from "../../Components/SnackBarReducer";

const AdminViewContest = () => {
  // Redux
  const dispatch = useDispatch();

  const [addcontest, setAddcontest] = useState({
    name: "",
    platform: "",
    startTime: "",
    endTime: "",
    url: "",
    typeOfEvent: "",
    status: "",
    key: "",
  });

  const addContest = async (e) => {
    e.preventDefault();
    try {
      await ContestModels.viewContestAdmin(addcontest);
      dispatch(setSnackbar(true, "success", "Contest added successfully"));
    } catch (error) {
      dispatch(setSnackbar(true, "error", "Some error occured"));
    }
  };

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
      <button
        type="button"
        className="close mt-5 mr-3"
        data-toggle="modal"
        data-target="#modalLoginForm"
        data-dismiss="modal"
        aria-label="Close"
      >
        +
      </button>
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
      <div
        className="modal fade"
        id="modalLoginForm"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="myModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header text-center">
              <h4 className="modal-title w-100 font-weight-bold">
                Add Contest
              </h4>
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
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  value={addcontest.name}
                  onChange={(e) =>
                    setAddcontest({ ...addcontest, name: e.target.value })
                  }
                  placeholder="Enter Name of contest"
                />
              </div>
              <div className="form-group mt-3">
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  value={addcontest.platform}
                  onChange={(e) =>
                    setAddcontest({ ...addcontest, platform: e.target.value })
                  }
                  placeholder="Enter platform for contest"
                />
              </div>
              <div className="form-group mt-3">
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  value={addcontest.startTime}
                  onChange={(e) =>
                    setAddcontest({ ...addcontest, startTime: e.target.value })
                  }
                  placeholder="Enter startTime for contest"
                />
              </div>
              <div className="form-group mt-3">
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  value={addcontest.endTime}
                  onChange={(e) =>
                    setAddcontest({ ...addcontest, endTime: e.target.value })
                  }
                  placeholder="Enter endTime for contest"
                />
              </div>
              <div className="form-group mt-3">
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  value={addcontest.url}
                  onChange={(e) =>
                    setAddcontest({ ...addcontest, url: e.target.value })
                  }
                  placeholder="Enter url for contest"
                />
              </div>
              <div className="form-group mt-3">
                <input
                  type="number"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  value={addcontest.typeOfEvent}
                  onChange={(e) =>
                    setAddcontest({
                      ...addcontest,
                      typeOfEvent: e.target.value,
                    })
                  }
                  placeholder="Enter typeofEvent for contest"
                />
              </div>
              <div className="form-group mt-3">
                <input
                  type="number"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  value={addcontest.status}
                  onChange={(e) =>
                    setAddcontest({ ...addcontest, status: e.target.value })
                  }
                  placeholder="Enter status for contest"
                />
              </div>

              <div className="form-group mt-3">
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  value={addcontest.key}
                  onChange={(e) =>
                    setAddcontest({ ...addcontest, key: e.target.value })
                  }
                  placeholder="Enter Key for contest"
                />
              </div>
            </div>
            <button
              type="submit"
              onClick={addContest}
              className="btn btn-primary"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminViewContest;
