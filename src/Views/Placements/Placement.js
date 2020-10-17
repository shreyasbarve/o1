import React from "react";
import { Link } from "react-router-dom";

// CSS
import AppBarStyles, { AppbarTheme } from "../../Styles/AppBarStyles";
import { ArrowBackIos, KeyboardArrowUp } from "@material-ui/icons";

import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Fab,
  ThemeProvider,
  Tooltip,
} from "@material-ui/core";
import ScrollTop from "../../Components/ScrollTop";
import Form from "./Form.js";
import ViewPlacements from "./ViewPlacements";

function Placement(props) {
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
                Placements
              </Typography>
            </Toolbar>
          </AppBar>
        </div>
      </ThemeProvider>

      <Container
        fixed
        style={{ marginTop: "3%", marginBottom: "3%" }}
        id="back-to-top-anchor"
      >
        <Form />
      </Container>

      {/* Display Placements */}
      <ViewPlacements />

      <ScrollTop {...props}>
        <Fab color="secondary" size="small">
          <KeyboardArrowUp />
        </Fab>
      </ScrollTop>
    </>
  );
}

export default Placement;
