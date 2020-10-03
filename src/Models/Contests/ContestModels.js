import axios from "axios";

export const BASE_URL = "https://o1codingclub.herokuapp.com/contest";

const ContestModels = {
  viewContest: async () => {
    return await axios.get(`${BASE_URL}/`);
  },
  viewContestAdmin: async (data) => {
    return await axios.post(`${BASE_URL}/`, data);
  },
  updateContestData: async (data) => {
    return await axios.post(`${BASE_URL}/update_data/`, data);
  },
  dailyContests: async () => {
    return await axios.get(`${BASE_URL}/?type=0`);
  },
  hiringContest: async () => {
    return await axios.get(`${BASE_URL}/?type=2`);
  },
  o1contests: async () => {
    return await axios.get(`${BASE_URL}/?type=1`);
  },
};

export default ContestModels;
