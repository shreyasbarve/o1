import axios from "axios";

export const BASE_URL = "https://o1codingclub.herokuapp.com/blog";

const BlogModels = {
  viewAllBlogs: async () => {
    return await axios.get(`${BASE_URL}`);
  },
  viewAllBlogsAdmin: async (key) => {
    return await axios.post(`${BASE_URL}`, key)
  },
  approveBlog: async (id, key) => {
    return await axios.post(`${BASE_URL}/approve/${id}`, key)
  },
  createBlog: async (userData) => {
    return await axios.post(`${BASE_URL}/create/`, userData);
  },
  deleteBlog: async (id, key) => {
    return await axios.post(`${BASE_URL}/delete/${id}`, key)
  },
  requestBlog: async (userData) => {
    return  await axios.post(`${BASE_URL}/requestkey/`, userData)
  },
  viewSingleBlog: async (id) => {
    return await axios.get(`${BASE_URL}/${id}`);
  },
  viewSingleBlogAdmin: async (id, key) => {
    return await axios.post(`${BASE_URL}/${id}`, key);
  },
};

export default BlogModels;
