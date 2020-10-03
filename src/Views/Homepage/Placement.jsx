import React, { useEffect, useState } from "react";
import axios from "axios";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../assets/css/contest.css";

const Placement = () => {
  const [placements, setplacements] = useState([]);
  const getPlacement = async () => {
    axios
      .get("https://o1codingclub.herokuapp.com/placement/")
      .then((response) => {
        console.log(response.data);
        setplacements(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    getPlacement();
  }, []);

  return (
    <div>
      <center>
        <h1 className="heading">Placement Corner</h1>
      </center>
      <div className="contest">
        {placements.map((placement) => (
          <div className="card" style={{ width: "18rem" }}>
            <div className="card-body">
              <h5 className="card-title">{placement.title}</h5>
              <p className="card-text">{placement.author}</p>
            </div>
            <div className="card-body">
              <p className="card-text">{placement.body}</p>
            </div>

            <ul className="list-group list-group-flush">
              <li className="list-group-item">{placement.email}</li>
              <li className="list-group-item">{placement.fullname}</li>
            </ul>
            <div className="card-body">
              <a
                href={placement.url}
                target="_blank"
                className="btn btn-primary"
              >
                Read More
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Placement;
