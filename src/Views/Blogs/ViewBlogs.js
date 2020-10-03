import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// CSS
import CardStyles from "../../Styles/CardStyles";
import LoadingStyles from "../../Styles/LoadingStyles";

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
  CardActionArea,
  CardMedia,
  CardContent,
  Divider,
  CardActions,
  Chip,
  Avatar,
  LinearProgress,
} from "@material-ui/core";

function ViewBlogs(props) {
  // CSS for styling
  const CardStyle = CardStyles();
  const LoadingStyle = LoadingStyles();

  // Get the blog data from server
  const [loading, setloading] = useState(true);
  const [blogs, setblogs] = useState([]);
  const viewAllBlogs = async () => {
    try {
      const res = await BlogModels.viewAllBlogs();
      setblogs(res.data);
      setloading(false);
    } catch (error) {
      alert("Some Error Occured");
    }
  };

  useEffect(() => {
    document.title = "Blogs";
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
            <Grid item xs={12} sm={6} lg={3} key={blog.id}>
              <Slide bottom>
                <Card className={CardStyle.root} elevation={3}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      alt="Some Image"
                      image={`https://source.unsplash.com/1600x900/?coding,programming`}
                      title="Image Title"
                      className={CardStyle.media}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" noWrap>
                        {blog.title}
                      </Typography>

                      <Divider />

                      <Typography
                        variant="overline"
                        color="textSecondary"
                        noWrap
                      >
                        Author: {blog.author}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Link
                        to={`singleblog/${blog.id}`}
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
