import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import FriendsServices from "./FriendsServices";

const initialState = {
  friends: [],
  friendRequests: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// Register user
export const GetFriends = createAsyncThunk(
  "friends/all",
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.token;
      return await FriendsServices.getFriends(token);
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
export const GetRequests = createAsyncThunk(
  "friends/all_requests",
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.token;
      return await FriendsServices.getRequests(token);
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

export const SendRequest = createAsyncThunk(
  "friends/send_request",
  async (id, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.token;
      return await FriendsServices.sendRequest(id, token);
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

export const AcceptRequest = createAsyncThunk(
  "friends/accept_request",
  async (id, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.token;
      return await FriendsServices.acceptRequest(id, token);
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

export const RejectRequest = createAsyncThunk(
  "friends/reject_request",
  async (id, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.token;
      return await FriendsServices.rejectRequest(id, token);
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

export const friendsSlice = createSlice({
  name: "friends",
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
    builder
      .addCase(GetFriends.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(GetFriends.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.friends = action.payload;
        // state.message = "SignUp Success!!!";
      })
      .addCase(GetFriends.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(GetRequests.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(GetRequests.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.friendRequests = action.payload;
        // state.message = "SignUp Success!!!";
      })
      .addCase(GetRequests.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(SendRequest.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(SendRequest.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        // state.message = "SignUp Success!!!";
      })
      .addCase(SendRequest.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(AcceptRequest.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(AcceptRequest.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.friendRequests = action.payload.requests;
        state.friends = action.payload.friends;
        // state.message = "SignUp Success!!!";
      })
      .addCase(AcceptRequest.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(RejectRequest.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(RejectRequest.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.friendRequests = action.payload;
        // state.message = "SignUp Success!!!";
      })
      .addCase(RejectRequest.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = friendsSlice.actions;
export default friendsSlice.reducer;
