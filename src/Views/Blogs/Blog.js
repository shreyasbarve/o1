import React from "react";
import ScrollTop from "./ScrollTop.js";

// CSS styling
import AppBarStyles from "../../Styles/AppBarStyles";

import {
  AppBar,
  Toolbar,
  Button,
  Typography,
  Container,
  Fab,
} from "@material-ui/core";

import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import ViewBlogs from "./ViewBlogs.js";
import Form from "./Form.js";

function Blog(props) {
  // Styling for elements
  const AppBarStyle = AppBarStyles();

  return (
    <>
      {/* Top Navbar */}
      <div className={AppBarStyle.root}>
        <AppBar position="sticky">
          <Toolbar>
            <Typography variant="h5" className={AppBarStyle.title}>
              Blogs
            </Typography>

            <Typography className={AppBarStyle.title}>
              <Form />
            </Typography>

            <Typography>
              <Button color="inherit">Login</Button>
              <Button color="inherit">Sign Up</Button>
            </Typography>
          </Toolbar>
        </AppBar>
      </div>

      <Container fixed style={{ marginTop: "3%" }} id="back-to-top-anchor">
        <Typography gutterBottom variant="h4">
          This is the page where blogs of all users are displayed
        </Typography>
      </Container>

      {/* Display Blogs */}
      <ViewBlogs />

      <ScrollTop {...props}>
        <Fab color="secondary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </>
  );
}

export default Blog;
