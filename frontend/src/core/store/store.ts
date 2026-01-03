import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./users/userSlice";
import authReducer from "./auth/authSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    users: usersReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;