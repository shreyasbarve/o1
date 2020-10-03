import React, { useEffect, useState } from "react";
import axios from "axios";
import "../../assets/css/contest.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

const AddContest = () => {
  const [contests, setContests] = useState([]);
  const getcontest = async () => {
    axios
      .get("https://o1codingclub.herokuapp.com/contest/")
      .then((response) => {
        console.log(response.data);
        setContests(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

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

  const addContest = (e) => {
    e.preventDefault();
    axios
      .post("https://o1codingclub.herokuapp.com/contest/", addcontest)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getcontest();
  }, []);

  return (
    <div>
      <br />
      <center>
        <p className="heading">Explore Variety of Contest</p>
      </center>
      <button
        data-toggle="modal"
        data-target="#modalLoginForm"
        className="btn btn-primary addcontest"
      >
        <i class="fa fa-plus"></i>
      </button>
      <div className="contest">
        {contests.map((contest) => (
          <div class="card" style={{ width: "18rem" }}>
            <div class="card-body">
              <h5 class="card-title">{contest.name}</h5>
              <p class="card-text">{contest.platform}</p>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">
                Start Time : {contest.startTime.substring(12, 19)} &nbsp;{" "}
                {contest.startTime.substring(0, 10)}
              </li>
              <li class="list-group-item">
                End Time : {contest.endTime.substring(12, 19)} &nbsp;{" "}
                {contest.startTime.substring(0, 10)}
              </li>
            </ul>
            <div class="card-body">
              <a
                href={contest.url}
                target="_blank"
                class="btn btn-primary"
                rel="noopener noreferrer"
              >
                Participate
              </a>
            </div>
          </div>
        ))}
      </div>

      <div
        className="modal fade"
        id="modalLoginForm"
        tabindex="-1"
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

export default AddContest;
