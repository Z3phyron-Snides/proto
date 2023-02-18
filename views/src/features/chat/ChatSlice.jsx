import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import ChatService from "./ChatServices";

const initialState = {
  conversations: [],
  currentConversation: null,
  messages: [],
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: "",
};

export const FetchConversations = createAsyncThunk(
  "chat/fetchConversations",
  async (_, thunkAPI) => {
    try {
      const { token } = thunkAPI.getState().auth;
      const data = await ChatService.getConversations(token);
      return data;
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

export const createConversation = createAsyncThunk(
  "chat/createConversation",
  async (conversation, thunkAPI) => {
    try {
      const { token } = thunkAPI.getState().auth;
      const data = await ChatService.createConversation(
        conversation.recepient,
        token
      );
      return data;
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

export const fetchMessages = createAsyncThunk(
  "chat/fetchMessages",
  async (conversationId, thunkAPI) => {
    try {
      const { token } = thunkAPI.getState().auth;
      const data = await ChatService.getMessagesByConversationId(
        conversationId,
        token
      );
      return data;
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

export const sendMessage = createAsyncThunk(
  "chat/sendMessage",
  async (message, thunkAPI) => {
    try {
      const { token } = thunkAPI.getState().auth;
      let data;
      if (!message.conversationId) {
        // Create new conversation if it doesn't exist yet
        const conversation = {
          members: [message.conversationId, thunkAPI.getState().user._id],
        };
        const newConversation = await ChatService.createConversation(
          conversation.members,
          token
        );
        message.conversationId = newConversation.id;
      }
      console.log(message);
      data = await ChatService.createMessage(message, token);
      return data;
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

export const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = "";
    },
    setCurrentChat: (state, action) => {
      state.currentChat = action.payload;
      state.currentMessages = [];
    },
    addNewChat: (state, action) => {
      state.chats = [action.payload, ...state.chats];
    },
    addNewMessage: (state, action) => {
      state.currentMessages = [...state.currentMessages, action.payload];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(FetchConversations.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(FetchConversations.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.conversations = action.payload;
      })
      .addCase(FetchConversations.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(createConversation.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createConversation.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.currentConversation = action.payload;
        state.conversations = [action.payload, ...state.conversations];
      })
      .addCase(createConversation.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(fetchMessages.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchMessages.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        console.log(action.payload);
        state.currentConversation = action.payload.conversation;
        state.messages = action.payload.messages;
      })
      .addCase(fetchMessages.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(sendMessage.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(sendMessage.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.messages = [...state.messages, action.payload];
      })
      .addCase(sendMessage.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = chatSlice.actions;
export default chatSlice.reducer;
