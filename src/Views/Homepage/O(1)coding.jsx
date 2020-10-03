import React, { useEffect, useState } from "react";
import axios from "axios";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../assets/css/contest.css";

const O1CodingContest = () => {
  const [contests, setContests] = useState([]);
  const getcontest = async () => {
    axios
      .get("https://o1codingclub.herokuapp.com/contest/?type=1")
      .then((response) => {
        console.log(response.data);
        setContests(response.data);
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
    </div>
  );
};

export default O1CodingContest;
