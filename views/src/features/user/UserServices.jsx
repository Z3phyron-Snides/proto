import axios from "axios";
import { tokenConfig } from "../tokenConfig";
const API_URL = "http://localhost:5000/api/user/";

axios.defaults.withCredentials = true;

const updateUser = async (userData) => {
  const { formData, axiosPrivate } = userData;
  const { data } = await axiosPrivate.put(`${API_URL}auth/update`, formData);

  return data;
};

const updateCoverImage = async (userData, token) => {
  console.log(userData);

  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
    },
    params: {},
  };

  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }
  const { data } = await axios.put(
    `${API_URL}auth/coverImage`,
    userData,
    config
  );

  return data;
};

// Login user
const loadUser = async (axiosPrivate) => {
  const { data } = await axiosPrivate.get(API_URL + "me");

  return data;
};

const getUser = async (email) => {
  // console.log(email)
  const { data } = await axios.post(API_URL + "info", email);

  return data;
};

const getUserProfile = async (id, token) => {
  // console.log(email)
  const { data } = await axios.get(`${API_URL}${id}`, tokenConfig(token, null));

  return data;
};

const getUserMedia = async (id, token) => {
  let params = {id}
  const { data } = await axios.get(`${API_URL}/medias`, tokenConfig(token, params));

  return data;
};

const userService = {
  loadUser,
  getUser,
  updateUser,
  getUserProfile,
  updateCoverImage,
  getUserMedia
};

export default userService;
