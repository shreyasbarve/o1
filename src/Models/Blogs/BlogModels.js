import axios from "axios";

export const BASE_URL = "https://o1codingclub.herokuapp.com/blog";

const BlogModels = {
  viewAllBlogs: async () => {
    return await axios.get(`${BASE_URL}`);
  },
  viewSingleBlog: async (id) => {
    return await axios.get(`${BASE_URL}/${id}`);
  },
  createBlog: async (userData) => {
    return await axios.post(`${BASE_URL}/create`, userData);
  },
  requestBlog: async (userData) => {
    return  await axios.post(`${BASE_URL}/requestkey`, userData)
  }
};

export default BlogModels;
