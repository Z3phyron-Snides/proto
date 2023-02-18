import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import PostService from "./PostServices";

const initialState = {
  newsFeed: [],
  post: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// Register user
export const CreatePost = createAsyncThunk(
  "post/create",
  async (data, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.token;
      return await PostService.createPost(data, token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const NewsFeed = createAsyncThunk(
  "post/newsfeed",
  async (axiosPrivate, thunkAPI) => {
    try {
      return await PostService.getNewsFeed(axiosPrivate);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const GetPost = createAsyncThunk("post/single", async (id, thunkAPI) => {
  try {
    return await PostService.getPost(id);
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

export const GetTimeline = createAsyncThunk(
  "post/timeline",
  async (id, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.token;
      return await PostService.fetchTimeLine(id, token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const LikePost = createAsyncThunk("post/like", async (id, thunkAPI) => {
  try {
    const token = thunkAPI.getState().auth.token;
    return await PostService.likePost(id, token);
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

export const CommentPost = createAsyncThunk(
  "post/comment_add",
  async (data, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.token;
      return await PostService.commentPost(data, token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);
export const UpdateComment = createAsyncThunk(
  "post/comment_update",
  async (data, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.token;
      return await PostService.updateComment(data, token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);
export const DeleteComment = createAsyncThunk(
  "post/comment_delete",
  async (id, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.token;
      return await PostService.delComment(id, token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    //signUp Builder
    builder
      .addCase(CreatePost.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(CreatePost.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.newsFeed = action.payload.feed;
        // state.message = "SignUp Success!!!";
      })
      .addCase(CreatePost.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(NewsFeed.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(NewsFeed.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.newsFeed = action.payload.feed;
        // state.message = "SignUp Success!!!";
      })
      .addCase(NewsFeed.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(GetPost.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(GetPost.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.post = action.payload.data;
        // state.message = "SignUp Success!!!";
      })
      .addCase(GetPost.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(GetTimeline.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(GetTimeline.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.newsFeed = action.payload.feed;
        // state.message = "SignUp Success!!!";
      })
      .addCase(GetTimeline.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(LikePost.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(LikePost.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.newsFeed = state.newsFeed.map((post) => {
          if (post._id === action.payload.postId) {
            return { ...post, likes: action.payload.likes };
          }
          return post;
        });
        state.post = { ...state.post, likes: action.payload.likes };
      })
      .addCase(LikePost.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(CommentPost.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(CommentPost.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.newsFeed = state.newsFeed.map((post) => {
          if (post._id === action.payload.postId) {
            return { ...post, comments: action.payload.data };
          }
          return post;
        });
        state.post = { ...state.post, comments: action.payload.data };

        // state.message = "SignUp Success!!!";
      })
      .addCase(CommentPost.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(UpdateComment.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(UpdateComment.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.newsFeed = state.newsFeed.map((post) => {
          if (post._id === action.payload.postId) {
            return { ...post, comments: action.payload.data };
          }
          return post;
        });
        state.post = { ...state.post, comments: action.payload.data };

        // state.message = "SignUp Success!!!";
      })
      .addCase(UpdateComment.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(DeleteComment.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(DeleteComment.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.newsFeed = state.newsFeed.map((post) => {
          if (post._id === action.payload.postId) {
            return { ...post, comments: action.payload.data };
          }
          return post;
        });
        state.post = { ...state.post, comments: action.payload.data };

        // state.message = "SignUp Success!!!";
      })
      .addCase(DeleteComment.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
  },
});

export const { reset } = postSlice.actions;
export default postSlice.reducer;
