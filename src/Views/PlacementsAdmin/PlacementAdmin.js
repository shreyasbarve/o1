import React from "react";
import { Link } from "react-router-dom";

// CSS
import AppBarStyles, { AppbarTheme } from "../../Styles/AppBarStyles";
import { ArrowBackIos, KeyboardArrowUp } from "@material-ui/icons";

import {
  AppBar,
  Toolbar,
  Button,
  Typography,
  Container,
  Fab,
  ThemeProvider,
  Tooltip,
} from "@material-ui/core";
import ScrollTop from "../../Components/ScrollTop";
import ViewPlacementsAdmin from "./ViewPlacementsAdmin.js";

function PlacementAdmin(props) {
  // Styling for elements
  const AppBarStyle = AppBarStyles();

  return (
    <>
      {/* Top Navbar */}
      <ThemeProvider theme={AppbarTheme}>
        <div className={AppBarStyle.root}>
          <AppBar position="sticky">
            <Toolbar>
              <Typography className={AppBarStyle.title}>
                <Tooltip title="Go Back">
                  <Link to="/" style={{ color: "inherit" }}>
                    <ArrowBackIos />
                  </Link>
                </Tooltip>
              </Typography>
              <Typography variant="h5" className={AppBarStyle.title}>
                Admin Placements
              </Typography>

              <Typography>
                <Button color="inherit">Login</Button>
                <Button color="inherit">Sign Up</Button>
              </Typography>
            </Toolbar>
          </AppBar>
        </div>
      </ThemeProvider>

      <Container fixed id="back-to-top-anchor">
        <Typography gutterBottom variant="h4">
          This is the page where placements of all users are displayed
        </Typography>
      </Container>

      {/* Display Admin Placements */}
      <ViewPlacementsAdmin />

      <ScrollTop {...props}>
        <Fab color="secondary" size="small">
          <KeyboardArrowUp />
        </Fab>
      </ScrollTop>
    </>
  );
}

export default PlacementAdmin;
