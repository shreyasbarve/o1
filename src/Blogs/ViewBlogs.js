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
} from "@material-ui/core";

export default function ViewBlogs() {
  const CardStyle = CardStyles();

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

  useEffect(() => {
    getBlogs();
  }, [blogs]);

  // Going to specific Blog
  const gotoBlog = async (params) => {
    // try {
    //   const specificBlog = await axios.get(
    //     `https://cors-anywhere.herokuapp.com/https://o1codingclub.herokuapp.com/blog/${params}`
    //   );
    // } catch (error) {
    //   console.log(error);
    // }
  };

  return (
    <Container fixed>
      <Grid container spacing={3}>
        {blogs.map((blog) => (
          <Grid
            item
            xs={12}
            sm={6}
            lg={3}
            key={blog.email}
            onClick={(e) => gotoBlog(e.target.id)}
          >
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
                  >
                    {blog.body}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
