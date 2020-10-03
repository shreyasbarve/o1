import React, { useEffect, useState } from "react";
import axios from "axios";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../assets/css/blog.css";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const getblog = async () => {
    axios
      .get("https://o1codingclub.herokuapp.com/blog/")
      .then((response) => {
        console.log(response.data);
        setBlogs(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    getblog();
  }, []);

  return (
    <div>
      <center>
        <h1 className="heading">Explore Variety of Blog</h1>
      </center>
      <div className="blog">
        {blogs.map((blog) => (
          <div className="card" style={{ width: "18rem" }}>
            <div className="card-body">
              <h5 className="card-title">{blog.title}</h5>
              <p className="card-text">{blog.author}</p>
            </div>
            <div className="card-body">
              <p className="card-text">{blog.body}</p>
            </div>

            <ul className="list-group list-group-flush">
              <li className="list-group-item">{blog.email}</li>
              <li className="list-group-item">{blog.fullname}</li>
            </ul>
            <div className="card-body">
              <a href={blog.url} target="_blank" className="btn btn-primary">
                Read More
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
