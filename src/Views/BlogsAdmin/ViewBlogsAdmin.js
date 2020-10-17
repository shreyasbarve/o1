import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { read_cookie } from "sfcookies";

// CSS
import CardStyles from "../../Styles/CardStyles";
import LoadingStyles from "../../Styles/LoadingStyles";
import { Check, Delete } from "@material-ui/icons";

// Animation
import Slide from "react-reveal";

// API
import BlogModels from "../../Models/Blogs/BlogModels";

// Components
import {
  Typography,
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Divider,
  CardActions,
  LinearProgress,
  Button,
} from "@material-ui/core";
import setSnackbar from "../../Components/SnackBarReducer";

function ViewBlogsAdmin(props) {
  // Redux
  const dispatch = useDispatch();

  // CSS for styling
  const CardStyle = CardStyles();
  const LoadingStyle = LoadingStyles();

  // Get the blog data from server
  const name = read_cookie("adminName");
  const key = read_cookie("adminKey");
  const [loading, setloading] = useState(true);
  const [blogs, setblogs] = useState([]);
  const viewAllBlogs = async () => {
    try {
      const res = await BlogModels.viewAllBlogsAdmin(name, key);
      setblogs(res.data);
      setloading(false);
    } catch (error) {
      dispatch(setSnackbar(true, "error", "Some error occured"));
    }
  };

  const deleteBlog = async (blogid) => {
    try {
      await BlogModels.deleteBlog(blogid, name, key);
      setblogs((blogs) => blogs.filter((i) => i.id !== blogid));
      dispatch(setSnackbar(true, "success", "Blog post deleted"));
    } catch (error) {
      dispatch(setSnackbar(true, "error", "Some error occured"));
    }
  };

  const approveBlog = async (blogid) => {
    try {
      await BlogModels.approveBlog(blogid, name, key);
      dispatch(setSnackbar(true, "success", "Blog post approved"));
    } catch (error) {
      dispatch(setSnackbar(true, "error", "Some error occured"));
    }
  };

  useEffect(() => {
    document.title = "Admin Blogs";
    viewAllBlogs();
    // eslint-disable-next-line
  }, []);

  return (
    <Container fixed>
      {loading ? (
        <div className={LoadingStyle.root}>
          <LinearProgress />
        </div>
      ) : (
        <Grid container spacing={3}>
          {blogs.map((blog) => (
            <Grid item xs={12} sm={6} lg={3} key={blog.id}>
              <Slide bottom>
                <Card className={CardStyle.root} elevation={3}>
                  <Link
                    to={`singleblogAdmin/${blog.id}`}
                    color="inherit"
                    style={{ textDecoration: "none", flex: "1" }}
                  >
                    <CardMedia
                      component="img"
                      alt="Some Image"
                      image={`https://source.unsplash.com/1600x900/?coding,programming`}
                      title="Image Title"
                      className={CardStyle.media}
                    />
                  </Link>

                  <CardContent>
                    <Typography gutterBottom variant="h5" noWrap>
                      {blog.title}
                    </Typography>

                    <Divider />

                    <Typography variant="overline" color="textSecondary" noWrap>
                      Author: {blog.author}
                    </Typography>
                  </CardContent>

                  <CardActions>
                    <Button
                      variant="outlined"
                      startIcon={<Check />}
                      color="primary"
                      onClick={() => approveBlog(blog.id)}
                    >
                      Approve
                    </Button>

                    <Button
                      variant="outlined"
                      startIcon={<Delete />}
                      color="secondary"
                      onClick={() => deleteBlog(blog.id)}
                    >
                      Delete
                    </Button>
                  </CardActions>
                </Card>
              </Slide>
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
}

export default ViewBlogsAdmin;
