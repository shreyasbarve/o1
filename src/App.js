import React from "react";
import "./App.css";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div style={{ marginTop: "50%" }}>
        <Link to="/blog">Blogs</Link>
        <br />
        <Link to="/placement">Placements</Link>
      </div>
    </div>
  );
}

export default App;
