import axios from "axios";

export const BASE_URL = "https://o1codingclub.herokuapp.com/mail";

const MailModels = {
  senMailToAll: async (userData) => {
    return await axios.post(`${BASE_URL}/`, userData);
  },
  verifyMail: async (data) => {
    return await axios.post(`${BASE_URL}/verify/`, data);
  },
  addMail: async (data) => {
    return await axios.post(`${BASE_URL}/add/`, data);
  },
};

export default MailModels;
