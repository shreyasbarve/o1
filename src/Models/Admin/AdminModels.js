import axios from "axios";

export const BASE_URL = "https://o1codingclub.herokuapp.com/mail";

const AdminModels = {
  senMailToAll: async = (message, hashid) => {
    return await axios.post(`${BASE_URL}/mail/`, { HTML: message, key: hashid })
  }
};

export default AdminModels;
