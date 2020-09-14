import React, { useState, useEffect } from "react";

// CSS
import CardStyles from "../Styles/CardStyles";
import LoadingStyles from "../Styles/LoadingStyles";
import logo from "../o1_logo.jpg";

// Animation
import Slide from "react-reveal";

// API
import BlogModels from "../Models/Blogs/BlogModels";

// Components
import {
  Typography,
  Container,
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Divider,
  CardActions,
  Chip,
  Avatar,
  LinearProgress,
} from "@material-ui/core";
import { Link } from "react-router-dom";

function ViewBlogs(props) {
  // CSS for styling
  const CardStyle = CardStyles();
  const LoadingStyle = LoadingStyles();

  // Get the blog data from server
  const [loading, setloading] = useState(true);
  const [blogs, setblogs] = useState([]);
  const viewAllBlogs = () => {
    BlogModels.viewAllBlogs().then((res) => {
      setblogs(res.data);
      setloading(false);
    });
  };

  useEffect(() => {
    viewAllBlogs();
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
            <Grid item xs={12} sm={6} lg={3} key={blog.email}>
              <Slide bottom>
                <Card className={CardStyle.root} elevation={3}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      alt="Some Image"
                      image={logo}
                      title="Image Title"
                      className={CardStyle.media}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" noWrap>
                        {blog.title}
                      </Typography>

                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                        gutterBottom
                        noWrap
                      >
                        {blog.body}
                      </Typography>

                      <Divider />

                      <Typography
                        variant="overline"
                        color="textSecondary"
                        component="p"
                        aria-rowcount="3"
                        noWrap
                      >
                        Author: {blog.author}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Link
                        to={{
                          pathname: `singleblog/${blog.id}`,
                          state: { idofblog: blog.id },
                          // state: {idofblog: 1},
                        }}
                        color="inherit"
                        style={{ textDecoration: "none" }}
                      >
                        <Chip
                          avatar={
                            <Avatar>{blog.author.substring(0, 1)}</Avatar>
                          }
                          label="Go to Blog"
                          clickable
                          color="primary"
                        />
                      </Link>
                    </CardActions>
                  </CardActionArea>
                </Card>
              </Slide>
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
}

export default ViewBlogs;
