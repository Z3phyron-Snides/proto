import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import settingsService from "./SettingsServices";


const initialState = {
  privacies:  [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// Register user
export const GetPrivacies = createAsyncThunk(
  "settings/all",
  async (axiosPrivate, thunkAPI) => {
    try {
      return await settingsService.getAllPrivacies(axiosPrivate);
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
export const UpdatePrivacy = createAsyncThunk(
  "settings/update",
  async (data, thunkAPI) => {
    try {
      return await settingsService.updatePrivacy(data);
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


export const settingsSlice = createSlice({
  name: "settings",
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
      .addCase(GetPrivacies.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(GetPrivacies.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.privacies = action.payload.privacies;
        // state.message = "SignUp Success!!!";
      })
      .addCase(GetPrivacies.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(UpdatePrivacy.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(UpdatePrivacy.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.privacies = action.payload.privacies;
        // state.message = "SignUp Success!!!";
      })
      .addCase(UpdatePrivacy.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
  },
});

export const { reset } = settingsSlice.actions;
export default settingsSlice.reducer;
