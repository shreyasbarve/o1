import React from "react";
import "./App.css";
import { Link } from "react-router-dom";

import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";

// CSS styling
import AppBarStyles from "./Styles/AppBarStyles";

function App() {
  // Styling for elements
  const AppBarStyle = AppBarStyles();

  return (
    <div className="App">
      <div className={AppBarStyle.root}>
        <AppBar position="sticky">
          <Toolbar>
            <Typography variant="h5" className={AppBarStyle.title}>
              Home
            </Typography>

            <Typography>
              <Link
                to="/blog"
                color="inherit"
                style={{ textDecoration: "none" }}
              >
                <Button style={{color: "white"}}>Blogs</Button>
              </Link>
              <Link
                to="/placement"
                color="inherit"
                style={{ textDecoration: "none" }}
              >
                <Button style={{color: "white"}}>Placements</Button>
              </Link>
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    </div>
  );
}

export default App;
