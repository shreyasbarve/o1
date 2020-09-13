import React, { useState, useEffect } from "react";
import axios from "axios";

// CSS styling
import AppBarStyles from "../Styling/AppBarStyles.js";
import LoadingStyles from "../Styling/LoadingStyles.js";

import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Divider,
  Tooltip,
  Grid,
  Card,
  CardActionArea,
  CardContent,
  CardActions,
  LinearProgress,
} from "@material-ui/core";

import BackIcon from "@material-ui/icons/ArrowBackIos";
import { Link } from "react-router-dom";

export default function ViewSingleBlog(props) {
  const [loading, setloading] = useState(true);
  // Styling for elements
  const AppBarStyle = AppBarStyles();
  const LoadingStyle = LoadingStyles();

  const [singleBlogId, setsingleBlogId] = useState(
    JSON.stringify(props.history.location.state.idofblog)
  );

  if (singleBlogId === undefined) {
    setsingleBlogId(1);
  }

  // Getting Data of the Single Blog
  const [singleBlog, setsingleBlog] = useState([]);

  useEffect(() => {
    async function gotoBlog() {
      try {
        const specificBlogData = await axios.get(
          `https://o1codingclub.herokuapp.com/blog/${singleBlogId}`
        );
        setsingleBlog(specificBlogData.data);
        setloading(false);
        document.title = singleBlog.title;
      } catch (error) {
        console.log(error);
      }
    }
    gotoBlog();
  }, [singleBlogId, singleBlog.title, loading]);

  return (
    <Container fixed>
      {loading ? (
        <div className={LoadingStyle.root}>
          <LinearProgress />
        </div>
      ) : (
        <>
          <AppBar position="sticky">
            <Toolbar>
              <Typography className={AppBarStyle.title}>
                <Tooltip title="Go Back" aria-label="Go Back">
                  <Link to="/blog" style={{ color: "inherit" }}>
                    <BackIcon />
                  </Link>
                </Tooltip>
              </Typography>

              <Typography
                variant="overline"
                component="h5"
                className={AppBarStyle.title}
              >
                {singleBlog.title}
              </Typography>
            </Toolbar>
          </AppBar>

          <Grid container spacing={3} style={{ marginTop: "8%" }}>
            <Grid item xs={12} sm={9} lg={9}>
              <Typography variant="overline">by {singleBlog.author}</Typography>
              <br />
              <Divider />
              <br />
              <Typography gutterBottom variant="body1">
                {singleBlog.body}
              </Typography>
            </Grid>

            <Grid item xs={12} sm={3} lg={3}>
              <Card variant="outlined">
                <CardActionArea>
                  <CardContent>
                    <Typography gutterBottom variant="h5">
                      About Author
                    </Typography>
                    <Divider />
                    <br />
                    <Typography gutterBottom variant="subtitle1">
                      Name: {singleBlog.fullname}
                    </Typography>

                    <Typography gutterBottom variant="subtitle1">
                      Email: {singleBlog.email}
                    </Typography>
                  </CardContent>
                  <CardActions></CardActions>
                </CardActionArea>
              </Card>
            </Grid>
          </Grid>
        </>
      )}
    </Container>
  );
}
