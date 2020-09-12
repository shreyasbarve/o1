import React, { useState, useEffect } from "react";
import axios from "axios";

// CSS
import CardStyles from "../Styling/CardStyles.js";
import logo from "../o1_logo.jpg";

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
  Avatar
} from "@material-ui/core";
import { Link } from "react-router-dom";

export default function ViewBlogs(props) {
  // CSS for styling
  const CardStyle = CardStyles();

  useEffect(() => {
    getBlogs();
  }, []);

  // Get the blog data from server
  const [blogs, setblogs] = useState([]);
  const getBlogs = async () => {
    try {
      const blogdata = await axios.get(
        "https://cors-anywhere.herokuapp.com/https://o1codingclub.herokuapp.com/blog/"
      );
      setblogs(blogdata.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container fixed>
      <Grid container spacing={3}>
        {blogs.map((blog) => (
          <Grid item xs={12} sm={6} lg={3} key={blog.email}>
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
                      pathname: "/singleblog",
                      // state: {idofblog: blog.id},
                      state: {idofblog: 1},
                    }}
                    color="inherit"
                    style={{textDecoration: "none"}}
                  >
                    <Chip avatar={<Avatar>{blog.author.substring(0,1)}</Avatar>} label="Go to Blog" clickable color="primary" />
                  </Link>

                </CardActions>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
