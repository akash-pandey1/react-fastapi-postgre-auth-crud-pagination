import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { User } from "../../types/auth.type";
import { usersService, type UsersResponse } from "../../services/users.service";

interface UsersState {
  users: User[];
  pagination: UsersResponse["pagination"] | null;
  isLoading: boolean;
  isError: boolean;
  errorMessage: string | null;
}

const initialState: UsersState = {
  users: [],
  pagination: null,
  isLoading: false,
  isError: false,
  errorMessage: null,
};

// Async thunk
export const fetchUsers = createAsyncThunk<
  UsersResponse,          // ✅ return type
  number,            // ✅ argument type
  { rejectValue: string }
>(
  "users",
  async (page: number = 1, thunkAPI) => {
    try {
      return await usersService.getAll(page);
    } catch (error: any) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Failed to fetch users"
      );
    }
  }
);


const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    resetUsersState: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.users = action.payload.data;
        state.pagination = action.payload.pagination ?? null;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = action.payload ?? "Something went wrong";
      });
  },
});

export const { resetUsersState } = usersSlice.actions;
export default usersSlice.reducer;