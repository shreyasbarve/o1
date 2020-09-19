import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// CSS
import CardStyles from "../../Styles/CardStyles";
import LoadingStyles from "../../Styles/LoadingStyles";
import logo from "../../o1_logo.jpg";
import { Delete } from "@material-ui/icons";

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
  Chip,
  Avatar,
  LinearProgress,
  Button,
} from "@material-ui/core";

function ViewBlogsAdmin(props) {
  // CSS for styling
  const CardStyle = CardStyles();
  const LoadingStyle = LoadingStyles();

  // Get the blog data from server
  const key = "gAAAAABfYyrPc24Rm_-3GlzW0nzgy2kfCHevEb3KnbDEBUwnwqIrBMVhBaTxcf1PS6FgRjSDJ6o1IBcbfhTycyQFuqR3sJn_XQ==";
  const [loading, setloading] = useState(true);
  const [blogs, setblogs] = useState([]);
  const viewAllBlogs = () => {
    BlogModels.viewAllBlogsAdmin(key).then((res) => {
      setblogs(res.data);
      setloading(false);
    });
  };

  const deleteBlog = (blogid) => {
    BlogModels.deleteBlog(blogid, key);
  };

  useEffect(() => {
    document.title = "Admin Blogs";
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
                    <CardMedia component="img" alt="Some Image" image={logo} title="Image Title" className={CardStyle.media} />
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
                      <Link
                        to={{
                          pathname: `singleblogAdmin/${blog.id}`,
                          state: { idofblog: blog.id },
                        }}
                        color="inherit"
                        style={{ textDecoration: "none", flex: "1" }}
                      >
                        <Chip avatar={<Avatar>{blog.author.substring(0, 1)}</Avatar>} label="Go to Blog" clickable color="primary" />
                      </Link>
                      <Button variant="outlined" startIcon={<Delete />} color="secondary" onClick={() => deleteBlog(blog.id)}>
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
