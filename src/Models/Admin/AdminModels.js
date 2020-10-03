import axios from "axios";

export const BASE_URL = "https://o1codingclub.herokuapp.com/verifyadmin";

const AdminModels = {
  verifyAdmin: async (data) => {
    return await axios.post(`${BASE_URL}/`, data)
  }
};

export default AdminModels;
