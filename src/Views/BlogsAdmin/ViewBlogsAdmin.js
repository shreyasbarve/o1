import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

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

function ViewBlogsAdmin(props) {
  // CSS for styling
  const CardStyle = CardStyles();
  const LoadingStyle = LoadingStyles();

  // Get the blog data from server
  const key =
    "gAAAAABfYys99vhKbNtgKJ5PB_HgqIeQ5qFW_Nz4j8m_p8p0zOKVFjs4y6VxMeCLJMmJtB2e7X7F69tYenleGxfBxeOqPyPjJll-60Ol9AJWW48JI6cCAKG0fDAGdJPlDAom8TUl_r6l";
  const [loading, setloading] = useState(true);
  const [blogs, setblogs] = useState([]);
  const viewAllBlogs = () => {
    BlogModels.viewAllBlogsAdmin(key).then((res) => {
      setblogs(res.data);
      setloading(false);
    });
  };

  const deleteBlog = (blogid) => {
    BlogModels.deleteBlog(blogid, key).then(() => {
      setblogs((blogs) => blogs.filter((i) => i.id !== blogid));
    });
  };

  const approveBlog = (blogid) => {
    BlogModels.approveBlog(blogid, key);
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
