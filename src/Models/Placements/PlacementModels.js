import axios from "axios";

export const BASE_URL = "https://o1codingclub.herokuapp.com/placement";

const PlacementModels = {
  viewAllPlacements: async () => {
    return await axios.get(`${BASE_URL}/`);
  },
  viewAllPlacementsAdmin: async (hashid) => {
    return await axios.post(`${BASE_URL}/`, { key: hashid })
  },
  approvePlacement: async (id, hashid) => {
    return await axios.post(`${BASE_URL}/approve/${id}`, { key: hashid })
  },
  createPlacement: async (userData) => {
    return await axios.post(`${BASE_URL}/create/`, userData);
  },
  deletePlacement: async (id, hashid) => {
    return await axios.post(`${BASE_URL}/delete/${id}`, { key: hashid })
  },
  requestPlacement: async (userData) => {
    return  await axios.post(`${BASE_URL}/requestkey/`, userData)
  },
  viewSinglePlacement: async (id) => {
    return await axios.get(`${BASE_URL}/${id}/`);
  },
  viewSinglePlacementAdmin: async (id, hashid) => {
    return await axios.post(`${BASE_URL}/${id}/`, { key: hashid });
  },
};

export default PlacementModels;
