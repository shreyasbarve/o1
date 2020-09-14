import axios from "axios";

export const BASE_URL = "https://o1codingclub.herokuapp.com/placement";

const PlacementModels = {
  viewAllPlacements: async () => {
    return await axios.get(`${BASE_URL}`);
  },
  viewAllPlacementsAdmin: async (key) => {
    return await axios.post(`${BASE_URL}`, key)
  },
  approvePlacement: async (id, key) => {
    return await axios.post(`${BASE_URL}/approve/${id}`, key)
  },
  createPlacement: async (userData) => {
    return await axios.post(`${BASE_URL}/create`, userData);
  },
  deletePlacement: async (id, key) => {
    return await axios.post(`${BASE_URL}/delete/${id}`, key)
  },
  requestPlacement: async (userData) => {
    return  await axios.post(`${BASE_URL}/requestkey`, userData)
  },
  viewSinglePlacement: async (id) => {
    return await axios.get(`${BASE_URL}/${id}`);
  },
  viewSinglePlacementAdmin: async (id, key) => {
    return await axios.post(`${BASE_URL}/${id}`, key);
  },
};

export default PlacementModels;
