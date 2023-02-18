import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/AuthSlice";
import chatSlice from "../features/chat/ChatSlice";
import postSlice from "../features/post/PostSlice";
import friendsSlice from "../features/friends/FriendsSlice";
import settingsSlice from "../features/settings/SettingsSlice";
import userSlice from "../features/user/UserSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    chat: chatSlice,
    user: userSlice,
    friends: friendsSlice,
    post: postSlice,
    settings: settingsSlice,
  },
});
