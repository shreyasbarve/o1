import React from "react";
import { Link } from "react-router-dom";

import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  ThemeProvider,
} from "@material-ui/core";

// CSS styling
import AppBarStyles, { AppbarTheme } from "./Styles/AppBarStyles";

function App() {
  // Styling for elements
  const AppBarStyle = AppBarStyles();

  return (
    <ThemeProvider theme={AppbarTheme}>
      <div className={AppBarStyle.root}>
        <AppBar position="sticky">
          <Toolbar>
            <Typography variant="h5" className={AppBarStyle.title}>
              Home
            </Typography>

            <Link to="/blog" style={{ textDecoration: "none" }}>
              <Button>Blogs</Button>
            </Link>
            <Link
              to="/placement"
              color="inherit"
              style={{ textDecoration: "none" }}
            >
              <Button>Placements</Button>
            </Link>
          </Toolbar>
        </AppBar>
        <h2>ADMIN key:</h2>
        <h4>gAAAAABfONaVoTJS5s8Q8bfFDnxpg5fLL_XtPtm_uGAMPvAVupgPgK0qxiaOLv_Lj66mSA1YrL9BjwY29dU1wUj07gaXJncLOQ==</h4>
      </div>  
    </ThemeProvider>
  );
}

export default App;
