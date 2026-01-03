import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { AuthState, LoginPayload } from "../../types/auth.type";
import { login, logout } from "../../services/auth.api";

const initialState: AuthState = {
  user: null,
  token: localStorage.getItem("token"),
  isLoading: false,
  isError: false,
  errorMessage: null,
};

export const loginThunk = createAsyncThunk<
  { user: any; access_token: string },
  LoginPayload,
  { rejectValue: string }
>("auth/login", async (credentials, thunkAPI) => {
  try {
    const data = await login(credentials);
    localStorage.setItem("token", data.access_token);
    return data;
  } catch (error: any) {
    return thunkAPI.rejectWithValue(
      error.response?.data?.message || "Login failed"
    );
  }
});

export const logoutUser = createAsyncThunk("auth/logout", async () => {
  await logout();
  localStorage.removeItem("token");
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    resetAuthState: (state) => {
      state.isLoading = false;
      state.isError = false;
      state.errorMessage = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.user;
        state.token = action.payload.access_token;
      })
      .addCase(loginThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = action.payload ?? "Login error";
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.user = null;
        state.token = null;
      });
  },
});

export const { resetAuthState } = authSlice.actions;
export default authSlice.reducer;
