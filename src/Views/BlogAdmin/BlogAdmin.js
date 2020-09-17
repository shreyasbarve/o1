import React from "react";
import { Link } from "react-router-dom";
import ScrollTop from "../../Components/ScrollTop";

// CSS styling
import AppBarStyles, { AppbarTheme } from "../../Styles/AppBarStyles";

import {
  AppBar,
  Toolbar,
  Button,
  Typography,
  Container,
  Fab,
  ThemeProvider,
  Tooltip
} from "@material-ui/core";

import BackIcon from "@material-ui/icons/ArrowBackIos";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";

import ViewBlogsAdmin from "./ViewBlogsAdmin.js";

function Blog(props) {
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
                <Tooltip title="Go Back" aria-label="Go Back">
                  <Link to="/" style={{ color: "inherit" }}>
                    <BackIcon />
                  </Link>
                </Tooltip>
              </Typography>
              <Typography variant="h5" className={AppBarStyle.title}>
                Blogs
              </Typography>

              <Typography>
                <Button color="inherit">Login</Button>
                <Button color="inherit">Sign Up</Button>
              </Typography>
            </Toolbar>
          </AppBar>
        </div>
      </ThemeProvider>

      <Container fixed>
        <Typography gutterBottom variant="h4">
          This is the page where blogs of all users are displayed
        </Typography>
      </Container>

      {/* Display Blogs */}
      <ViewBlogsAdmin />

      <ScrollTop {...props}>
        <Fab color="secondary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </>
  );
}

export default Blog;
