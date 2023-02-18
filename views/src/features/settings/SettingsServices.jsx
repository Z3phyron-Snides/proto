import axios from "axios";
// import { tokenConfig } from "../tokenConfig";
const API_URL = "http://localhost:5000/api/settings/";

axios.defaults.withCredentials = true;


const getAllPrivacies = async (axiosPrivate) => {
  const { data } = await axiosPrivate.get(`${API_URL}privacies`);

  return data;
};

const updatePrivacy = async (privacy) => {
  const {axiosPrivate, privacyData} = privacy
  const { data } = await axiosPrivate.put(`${API_URL}update-privacy`, privacyData);

  return data;
};

const settingsService = {
  getAllPrivacies,
  updatePrivacy
};

export default settingsService;
