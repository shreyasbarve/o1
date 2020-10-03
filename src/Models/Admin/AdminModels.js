import axios from "axios";

export const BASE_URL = "https://o1codingclub.herokuapp.com/mail";

const AdminModels = {
  senMailToAll: async (userData) => {
    return await axios.post(`${BASE_URL}/`, userData);
  },
};

export default AdminModels;
