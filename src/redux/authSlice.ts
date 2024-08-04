import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Define the type for the registration payload
interface RegisterPayload {
  username: string;
  password: string;
}

// Define the type for the login payload
interface LoginPayload {
  username: string;
  password: string;
}

// Define the type for the AuthState
interface AuthState {
  isAuthenticated: boolean;
  user: null | { username: string };
  loading: boolean;
  error: null | string;
}

const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
  loading: false,
  error: null,
};

// Define the async thunk for user registration
export const registerUser = createAsyncThunk(
  'auth/registerUser',
  async (user: RegisterPayload, { rejectWithValue }) => {
    try {
      const response = await axios.post('http://localhost:3000/auth/register', user);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || 'Registration failed');
    }
  }
);

// Define the async thunk for user login
export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (user: LoginPayload, { rejectWithValue }) => {
    try {
      const response = await axios.post('http://localhost:3000/auth/login', user);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || 'Login failed');
    }
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isAuthenticated = true;
        state.user = action.payload;
        state.loading = false;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.error = action.payload as string;
        state.loading = false;
      })
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isAuthenticated = true;
        state.user = action.payload;
        state.loading = false;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.error = action.payload as string;
        state.loading = false;
      });
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
