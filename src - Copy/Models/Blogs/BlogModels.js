import axios from "axios";

export const BASE_URL = "https://o1codingclub.herokuapp.com/blog";

const BlogModels = {
  viewAllBlogs: async () => {
    return await axios.get(`${BASE_URL}/`);
  },
  viewAllBlogsAdmin: async (hashid) => {
    return await axios.post(`${BASE_URL}/`, { key: hashid });
  },
  approveBlog: async (id, hashid) => {
    return await axios.post(`${BASE_URL}/approve/${id}`, { key: hashid });
  },
  createBlog: async (userData) => {
    return await axios.post(`${BASE_URL}/create/`, userData);
  },
  deleteBlog: async (id, hashid) => {
    return await axios.post(`${BASE_URL}/delete/${id}`, { key: hashid });
  },
  requestBlog: async (userData) => {
    return await axios.post(`${BASE_URL}/requestkey/`, userData);
  },
  viewSingleBlog: async (id) => {
    return await axios.get(`${BASE_URL}/${id}/`);
  },
  viewSingleBlogAdmin: async (id, hashid) => {
    return await axios.post(`${BASE_URL}/${id}/`, { key: hashid });
  },
};

export default BlogModels;
