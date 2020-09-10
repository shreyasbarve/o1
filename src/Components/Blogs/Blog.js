import React, { useEffect, useState } from "react";
import axios from "axios";

import logo from "../../logo.svg";

import {
  AppBar,
  Toolbar,
  Button,
  Typography,
  Container,
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Fab,
  Zoom,
  useScrollTrigger,
} from "@material-ui/core";

import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";

function ScrollTop(props) {
  const { children, window } = props;

  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 40,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    );

    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <Zoom in={trigger}>
      <div
        onClick={handleClick}
        role="presentation"
        style={{
          float: "right",
          position: "inherit",
          margin: "2%",
        }}
      >
        {children}
      </div>
    </Zoom>
  );
}

export default function Blog(props) {
  // run onload of window
  useEffect(() => {
    getBlogs();
  }, []);

  // Get the blog data from server
  const [blogs, setblogs] = useState([]);
  const getBlogs = async () => {
    try {
      const blogdata = await axios.get(
        "http://jsonplaceholder.typicode.com/users"
      );
      setblogs(blogdata.data);
    } catch (error) {
      console.log(error);
    }
  };
  // api for blog data over

  return (
    <div>
      <AppBar position="sticky">
        <Toolbar>
          <Typography variant="h5" style={{ flexGrow: 1 }}>
            Blogs
          </Typography>

          <Typography>
            <Button color="inherit">Login</Button>
            <Button color="inherit">Sign Up</Button>
          </Typography>
        </Toolbar>
      </AppBar>

      <Container fixed id="back-to-top-anchor" style={{ marginTop: "3%" }}>
        <Typography gutterBottom variant="h3">
          This is the page where blogs of all users are displayed
        </Typography>
      </Container>

      <Container fixed>
        <Grid container spacing={3}>
          {blogs.map((blog) => (
            <Grid item xs={12} sm={6} lg={3} key={blog.id}>
              <Card
                style={{ marginTop: "4%", borderRadius: "20px" }}
                elevation={3}
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt="Some Image"
                    image={logo}
                    title="Image Title"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" noWrap>
                      {blog.name}
                    </Typography>

                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      {blog.username}
                      <br />
                      {blog.email}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      <ScrollTop {...props}>
        <Fab color="secondary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </div>
  );
}
