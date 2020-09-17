import React from "react";
import { Link } from "react-router-dom";
import ScrollTop from "../../Components/ScrollTop";

// CSS
import AppBarStyles, { AppbarTheme } from "../../Styles/AppBarStyles";
import { ArrowBackIos, KeyboardArrowUp } from "@material-ui/icons";

// Components
import { AppBar, Toolbar, Button, Typography, Container, Fab, ThemeProvider, Tooltip } from "@material-ui/core";
import ViewBlogs from "./ViewBlogs.js";
import Form from "./Form.js";

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
                <Tooltip title="Go Back">
                  <Link to="/" style={{ color: "inherit" }}>
                    <ArrowBackIos />
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

      <Container fixed style={{ marginTop: "3%", marginBottom: "3%" }} id="back-to-top-anchor">
        <Typography className={AppBarStyle.title}>
          <Form />
        </Typography>
      </Container>

      <Container fixed>
        <Typography gutterBottom variant="h4">
          This is the page where blogs of all users are displayed
        </Typography>
      </Container>

      {/* Display Blogs */}
      <ViewBlogs />

      <ScrollTop {...props}>
        <Fab color="secondary" size="small">
          <KeyboardArrowUp />
        </Fab>
      </ScrollTop>
    </>
  );
}

export default Blog;
