import axios from "axios";

export const BASE_URL = "https://o1codingclub.herokuapp.com/blog";

const BlogModels = {
  viewAllBlogs: async () => {
    return await axios.get(`${BASE_URL}/`);
  },
  viewAllBlogsAdmin: async (username, hashid) => {
    return await axios.post(`${BASE_URL}/`, { name: username, key: hashid });
  },
  approveBlog: async (id, username, hashid) => {
    return await axios.post(`${BASE_URL}/approve/${id}`, {
      name: username,
      key: hashid,
    });
  },
  createBlog: async (userData) => {
    return await axios.post(`${BASE_URL}/create/`, userData);
  },
  deleteBlog: async (id, username, hashid) => {
    return await axios.post(`${BASE_URL}/delete/${id}`, {
      name: username,
      key: hashid,
    });
  },
  requestBlog: async (userData) => {
    return await axios.post(`${BASE_URL}/requestkey/`, userData);
  },
  viewSingleBlog: async (id) => {
    return await axios.get(`${BASE_URL}/${id}/`);
  },
  viewSingleBlogAdmin: async (id, username, hashid) => {
    return await axios.post(`${BASE_URL}/${id}/`, {
      name: username,
      key: hashid,
    });
  },
};

export default BlogModels;
