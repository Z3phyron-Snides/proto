import axios from "axios";
import { tokenConfig } from "../tokenConfig";
const API_URL = "http://localhost:5000/api/user/";

axios.defaults.withCredentials = true;

// Register user
const signUp = async (userData) => {
  const { data } = await axios.post(`${API_URL}auth/sign-up`, userData);

  if (data) {
    localStorage.setItem("token", data.accessToken);
  }

  return data;
};

// Login user
const signIn = async (userData) => {
  const { data } = await axios.post(`${API_URL}auth/sign-in`, userData);
  if (data) {
    localStorage.setItem("token", data.accessToken);
  }
  return data;
};

// Login user
const updateUser = async (userData) => {
  const { formData, axiosPrivate } = userData;
  const { data } = await axiosPrivate.put(`${API_URL}auth/update`, formData);

  return data;
};
const updateCoverImage = async (userData, token) => {
 
  console.log(userData)

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

// Refresh User Access Token
const refresh = async () => {
  const response = await axios.get(`${API_URL}auth/refresh`);
  console.log("AuthService: refresh response is", response.data.accessToken);
  return response.data.accessToken;
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

// Logout user
const SignOut = async () => {
  const response = await axios.get(`${API_URL}auth/sign-out`);
  localStorage.removeItem("token");
  return response;
};

const authService = {
  signUp,
  SignOut,
  signIn,
  loadUser,
  getUser,
  refresh,
  updateUser,
  getUserProfile,
  updateCoverImage,
};

export default authService;
