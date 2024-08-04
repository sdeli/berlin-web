import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LoggedInUserDto, TokensDto } from '../dto';
import { RootState } from './store';


export interface User {
  id: string;
  username: string;
  password?: string;
}
// Define the type for the AuthState
export interface AuthState {
  isAuthenticated: boolean;
  user: null | User;
  tokens: null | TokensDto;
  loading: boolean;
  error: null | string;
}

const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
  tokens: null,
  loading: false,
  error: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      state.tokens = null
    },
    login: (state, action: PayloadAction<LoggedInUserDto>) => {
      state.isAuthenticated = true;
      state.user = action.payload.user;
      state.tokens = action.payload.tokens
    },
  },
});

export const { logout } = authSlice.actions;
export const selectIsAuth = (state: RootState) => state.auth;

export default authSlice.reducer;
