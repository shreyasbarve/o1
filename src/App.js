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

            <Link to="/blogAdmin" style={{ textDecoration: "none" }}>
              <Button>Admin Blog</Button>
            </Link>

            <Link to="/placement" style={{ textDecoration: "none" }}>
              <Button>Placements</Button>
            </Link>

            <Link to="/placementAdmin" style={{ textDecoration: "none" }}>
              <Button>Admin Placement</Button>
            </Link>

          </Toolbar>
        </AppBar>
        <h2>ADMIN key:</h2>
        <h4>
          gAAAAABfYyrPc24Rm_-3GlzW0nzgy2kfCHevEb3KnbDEBUwnwqIrBMVhBaTxcf1PS6FgRjSDJ6o1IBcbfhTycyQFuqR3sJn_XQ==
        </h4>
      </div>
    </ThemeProvider>
  );
}

export default App;
