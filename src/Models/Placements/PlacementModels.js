import axios from "axios";

export const BASE_URL = "https://o1codingclub.herokuapp.com/placement";

const PlacementModels = {
  viewAllPlacements: async () => {
    return await axios.get(`${BASE_URL}/`);
  },
  viewAllPlacementsAdmin: async (username, hashid) => {
    return await axios.post(`${BASE_URL}/`, { name: username, key: hashid });
  },
  approvePlacement: async (id, username, hashid) => {
    return await axios.post(`${BASE_URL}/approve/${id}`, {
      name: username,
      key: hashid,
    });
  },
  createPlacement: async (userData) => {
    return await axios.post(`${BASE_URL}/create/`, userData);
  },
  deletePlacement: async (id, username, hashid) => {
    return await axios.post(`${BASE_URL}/delete/${id}`, {
      name: username,
      key: hashid,
    });
  },
  requestPlacement: async (userData) => {
    return await axios.post(`${BASE_URL}/requestkey/`, userData);
  },
  viewSinglePlacement: async (id) => {
    return await axios.get(`${BASE_URL}/${id}/`);
  },
  viewSinglePlacementAdmin: async (id, username, hashid) => {
    return await axios.post(`${BASE_URL}/${id}/`, {
      name: username,
      key: hashid,
    });
  },
};

export default PlacementModels;
