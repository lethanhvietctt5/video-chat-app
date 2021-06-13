import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "api";
import { setToken } from "api/token";

const initialState = {
  isAuthenticated: false,
  user: null,
  loading: false,
};

export const fetchUser = createAsyncThunk("auth/fetchUser", async () => {
  const response = await api.get("/auth");
  return response.data;
});

export const userLogin = createAsyncThunk(
  "auth/userLogin",
  async ({ email, password }) => {
    const response = await api.post("/login", { email, password });
    return response.data;
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    authLogout(state, action) {
      state.loading = false;
      state.isAuthenticated = false;
      state.user = null;
      setToken("");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state, action) => {
        state.loading = true;
        state.isAuthenticated = false;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.loading = false;
        if (!action.payload.message) {
          state.isAuthenticated = true;
          state.user = action.payload.user;
        }
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.loading = false;
      })
      .addCase(userLogin.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(userLogin.fulfilled, (state, action) => {
        state.loading = false;
        if (!action.payload.message) {
          setToken(action.payload.token);
          state.user = action.payload.user;
          state.isAuthenticated = true;
        }
      })
      .addCase(userLogin.rejected, (state, action) => {
        state.loading = false;
      });
  },
});

export const { authLogout } = authSlice.actions;

export default authSlice.reducer;
