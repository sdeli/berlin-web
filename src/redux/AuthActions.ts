import { ThunkAction } from 'redux-thunk';
import { LoggedInUserDto, LoginDto } from '../dto';
import { RootState } from './store';
import { AnyAction } from 'redux';
import { postLoginData } from '../api/authApi';
import { authSlice } from './authSlice';
import { useNavigate } from 'react-router-dom';
const authReducers = authSlice.actions;

// Define the async thunk for user registration
export const loginUserAction = (user: LoginDto, navigate: (path: string) => void): ThunkAction<void, RootState, unknown, AnyAction> => async (dispatch) => {
  try {
    const loggedInUserData = await postLoginData(user);
    dispatch(authReducers.login(loggedInUserData))
    navigate('/protected')
  } catch (error) {
    console.log('rejected')
  }
}

export const registerUserAction = (user: LoginDto, navigate: (path: string) => void): ThunkAction<void, RootState, unknown, AnyAction> => async (dispatch) => {
  try {
    await postLoginData(user, true);
    console.log('nav')
    navigate('/login');
    console.log('postLoginData')
    // console.log(postLoginData)
  } catch (error) {
    console.log('error')
    console.log(error)

    console.log('rejected')
  }
}