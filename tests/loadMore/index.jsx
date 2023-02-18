// server.js
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const postsRoutes = require("./routes/posts");

const app = express();
const PORT = process.env.PORT || 5000;

mongoose.connect("mongodb://localhost:27017/myapp", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.json());
app.use(cors());

app.use("/", postsRoutes);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});




// models/Post.js
const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Post', postSchema);



// routes/posts.js
const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

router.get('/api/posts', async (req, res) => {
  const { page } = req.query;
  const pageSize = 10;
  const offset = (page - 1) * pageSize;

  try {
    const posts = await Post.find()
      .skip(offset)
      .limit(pageSize)
      .sort({ createdAt: 'desc' });
    res.json(posts);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;



// App.js
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from './redux/postsSlice';

function App() {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const { posts, status } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchPosts({ page }));
  }, [dispatch, page]);

  function handleLoadMore() {
    setPage((prevPage) => prevPage + 1);
  }

  return (
    <div>
      {status === 'loading' && <div>Loading...</div>}
      {status === 'succeeded' && (
        <>
          {posts.map((post) => (
            <div key={post._id}>
              <h2>{post.title}</h2>
              <p>{post.content}</p>
            </div>
          ))}
          <button onClick={handleLoadMore}>Load More</button>
        </>
      )}
      {status === 'failed' && <div>Failed to load data</div>}
    </div>
  );
}

export default App;


//slice
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchPosts = createAsyncThunk(
  'posts/fetchPosts',
  async ({ page }) => {
    const response = await axios.get(`/api/posts?page=${page}`);
    return response.data;
  }
);

const postsSlice = createSlice({
  name: 'posts',
  initialState: { posts: [], status: 'idle', error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.posts = [...state.posts, ...action.payload];
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

// export default postsSlice.reducer;
