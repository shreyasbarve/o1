import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link, useRouteMatch } from "react-router-dom";

// CSS
import AppBarStyles, { AppbarTheme } from "../../Styles/AppBarStyles";
import LoadingStyles from "../../Styles/LoadingStyles";
import image from "../../codeImage.jpg";
import { ArrowBackIos } from "@material-ui/icons";
import "../../Styles/forImage.css";

// API
import BlogModels from "../../Models/Blogs/BlogModels";
import parse from "html-react-parser";

// Component
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
  LinearProgress,
  ThemeProvider,
} from "@material-ui/core";
import setSnackbar from "../../Components/SnackBarReducer";

function ViewSingleBlog(props) {
  // Redux
  const dispatch = useDispatch();

  const [loading, setloading] = useState(true);
  // Styling for elements
  const AppBarStyle = AppBarStyles();
  const LoadingStyle = LoadingStyles();

  const match = useRouteMatch();

  const blogid = match.params.id;
  // eslint-disable-next-line
  const [singleBlogId, setsingleBlogId] = useState(blogid);

  // Getting Data of the Single Blog
  const [singleBlog, setsingleBlog] = useState([]);

  useEffect(() => {
    async function viewSingleBlog() {
      try {
        const res = await BlogModels.viewSingleBlog(singleBlogId);
        setsingleBlog(res.data);
        setloading(false);
        document.title = `${singleBlog.title}`;
      } catch (error) {
        dispatch(setSnackbar(true, "error", "Some error occured"));
      }
    }
    viewSingleBlog();
  }, [singleBlogId, singleBlog.title, loading, dispatch]);

  return (
    <div style={{ backgroundImage: `url(${image})`, height: "100rem" }}>
      <Container fixed style={{ backgroundColor: "#ffffff", height: "100rem" }}>
        {loading ? (
          <div className={LoadingStyle.root}>
            <LinearProgress />
          </div>
        ) : (
          <>
            <ThemeProvider theme={AppbarTheme}>
              <AppBar position="sticky">
                <Toolbar>
                  <Typography className={AppBarStyle.title}>
                    <Tooltip title="Go Back" aria-label="Go Back">
                      <Link to="/blog" style={{ color: "inherit" }}>
                        <ArrowBackIos />
                      </Link>
                    </Tooltip>
                  </Typography>

                  <Typography variant="overline" className={AppBarStyle.title}>
                    {singleBlog.title}
                  </Typography>
                </Toolbar>
              </AppBar>
            </ThemeProvider>

            <Grid container style={{ marginTop: "8%" }}>
              <Grid item xs={12} sm={8} lg={9}>
                <Typography variant="overline">
                  by {singleBlog.author}
                </Typography>
                <br />
                <Divider />
                <br />
                <Typography
                  gutterBottom
                  variant="body1"
                  style={{ overflow: "auto" }}
                >
                  {parse(singleBlog.body)}
                </Typography>
              </Grid>

              <Grid item xs={12} sm={4} lg={3}>
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
                  </CardActionArea>
                </Card>
              </Grid>
            </Grid>
          </>
        )}
      </Container>
    </div>
  );
}

export default ViewSingleBlog;
