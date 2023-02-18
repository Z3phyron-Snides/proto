import axios from "axios";
import { tokenConfig } from "../tokenConfig";
const API_URL = "http://localhost:5000/api/post/";

axios.defaults.withCredentials = true;

const createPost = async (postData, token) => {
  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
    },
    params: {},
  };

  // If token, add to headers
  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }
  const { data } = await axios.post(`${API_URL}`, postData, config);

  return data;
};

const getNewsFeed = async (axiosPrivate) => {
  const { data } = await axiosPrivate.get(`${API_URL}newsfeed`);

  return data;
};

const getPost = async (id) => {
  let params = { id };
  const { data } = await axios.get(`${API_URL}`, tokenConfig(null, params));

  return data;
};

const fetchTimeLine = async (id, token) => {
  let params = { id };

  const { data } = await axios.get(
    `${API_URL}${id}/timeline`,
    tokenConfig(token, params)
  );

  return data;
};

const likePost = async (id, token) => {
  const { data } = await axios.get(
    `${API_URL}${id}/like`,
    tokenConfig(token, null)
  );

  return data;
};

const commentPost = async (comment, token) => {
  const { id, text } = comment;
  let params = { id };
  const { data } = await axios.put(
    `${API_URL}comment`,
    { text },
    tokenConfig(token, params)
  );

  return data;
};

const updateComment = async (comment, token) => {
  const { id, text } = comment;
  let params = { id };
  const { data } = await axios.put(
    `${API_URL}comment/update`,
    { text },
    tokenConfig(token, params)
  );

  return data;
};
const delComment = async (id, token) => {
  let params = { id };
  const { data } = await axios.delete(
    `${API_URL}comment/delete`,
    tokenConfig(token, params)
  );

  return data;
};

const postService = {
  createPost,
  getNewsFeed,
  getPost,
  fetchTimeLine,
  likePost,
  commentPost,
  updateComment,
  delComment
};

export default postService;
