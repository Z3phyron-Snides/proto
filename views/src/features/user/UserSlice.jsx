import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import userService from "./UserServices";

const initialState = {
  user: null,
  userProfile: null,
  userMedia: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// Login user
export const loadUser = createAsyncThunk(
  "user/user",
  async (axiosPrivate, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.token;
      return await userService.loadUser(axiosPrivate, token);
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

// Login user
export const getUser = createAsyncThunk(
  "user/userDetail",
  async (email, thunkAPI) => {
    try {
      return await userService.getUser(email);
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

// Login user
export const getUserProfile = createAsyncThunk(
  "user/userProfile",
  async (id, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.token;
      return await userService.getUserProfile(id, token);
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
export const getUserMedia = createAsyncThunk(
  "user/userMedia",
  async (id, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.token;
      return await userService.getUserMedia(id, token);
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

export const updateUser = createAsyncThunk(
  "user/update",
  async (data, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.token;

      return await userService.updateUser(data, token);
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

export const updateCoverImage = createAsyncThunk(
  "user/coverImage",
  async (data, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.token;

      return await userService.updateCoverImage(data, token);
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

export const userSlice = createSlice({
  name: "user",
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
      .addCase(loadUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loadUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
        
      })
      .addCase(loadUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(getUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        // state.user = null;
      })
      .addCase(getUserProfile.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUserProfile.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.userProfile = action.payload.user;
      })
      .addCase(getUserProfile.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.userProfile = null;
      })
      .addCase(getUserMedia.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUserMedia.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.userMedia = action.payload.data;
      })
      .addCase(getUserMedia.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.userMedia = null;
      })
      .addCase(updateUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
        state.message = "Profile Updated Success!!!";
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = "Error Updating Profile!!!";
      })
      .addCase(updateCoverImage.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateCoverImage.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.message = "Profile Updated Success!!!";
      })
      .addCase(updateCoverImage.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = "Error Updating Profile!!!";
      });
  },
});

export const { reset } = userSlice.actions;
export default userSlice.reducer;
