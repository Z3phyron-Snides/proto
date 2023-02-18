import axios from "axios";
import { tokenConfig } from "../tokenConfig";
const API_URL = "http://localhost:5000/api/friends/";

axios.defaults.withCredentials = true;

const getFriends = async ( token) => {

  const { data } = await axios.get(`${API_URL}`, tokenConfig(token,null));

  return data;
};

const getRequests = async ( token) => {

  const { data } = await axios.get(`${API_URL}requests`, tokenConfig(token,null));

  return data;
};

const sendRequest = async (id, token) => {
  console.log(token)
  let params = { id };
  const { data } = await axios.get(`${API_URL}send`, tokenConfig(token, params));

  return data;
};

const acceptRequest = async (id, token) => {
  let params = { id };

  const { data } = await axios.get(
    `${API_URL}accept`,
    tokenConfig(token, params)
  );

  return data;
};

const rejectRequest = async (id, token) => {
  let params = { id };

  const { data } = await axios.get(
    `${API_URL}reject`,
    tokenConfig(token, params)
  );

  return data;
};

const friendsService = {
  getFriends,
  getRequests,
  sendRequest,
  acceptRequest,
  rejectRequest,
};

export default friendsService;
