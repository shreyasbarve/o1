import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../assets/css/contest.css";
import ContestModels from "../../Models/Contests/ContestModels";
import setSnackbar from "../../Components/SnackBarReducer";

const O1CodingContest = () => {
  // Redux
  const dispatch = useDispatch();

  const [contests, setContests] = useState([]);
  const getcontest = async () => {
    try {
      const res = await ContestModels.o1contests();
      setContests(res.data);
    } catch (error) {
      dispatch(setSnackbar(true, "error", "Some error occured"));
    }
  };

  useEffect(() => {
    getcontest();
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <br />
      <center>
        <p className="heading">Explore Variety of Contest</p>
      </center>
      <div className="contest">
        {contests.map((contest) => (
          <div className="card" style={{ width: "18rem" }}>
            <div className="card-body">
              <h5 className="card-title">{contest.name}</h5>
              <p className="card-text">{contest.platform}</p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                Start Time : {contest.startTime.substring(12, 19)} &nbsp;{" "}
                {contest.startTime.substring(0, 10)}
              </li>
              <li className="list-group-item">
                End Time : {contest.endTime.substring(12, 19)} &nbsp;{" "}
                {contest.startTime.substring(0, 10)}
              </li>
            </ul>
            <div className="card-body">
              <a
                href={contest.url}
                target="_blank"
                className="btn btn-primary"
                rel="noopener noreferrer"
              >
                Participate
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default O1CodingContest;
