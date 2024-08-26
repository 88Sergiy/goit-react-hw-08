import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';
import {
  errorNumber,
  errorString,
  IAuthCredentials,
  IAuthResponse,
  IUser,
} from './types/authTypes';
import { RootState } from '../store';

axios.defaults.baseURL = 'https://connections-api.goit.global';

const setAuthHeader = (token: string) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk<
  IAuthResponse,
  IAuthCredentials,
  errorString
>('auth/register', async (credentials, thunkAPI) => {
  try {
    const response = await axios.post('/users/signup', credentials);
    setAuthHeader(response.data.token);
    return response.data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e as string);
  }
});

export const login = createAsyncThunk<
  IAuthResponse,
  Pick<IAuthCredentials, 'email' | 'password'>,
  errorNumber
>('auth/login', async (credentials, thunkAPI) => {
  try {
    const response = await axios.post('/users/login', credentials);
    setAuthHeader(response.data.token);
    return response.data;
  } catch (e) {
    const error = e as AxiosError;
    if (error.response) {
      return thunkAPI.rejectWithValue(error.response.status);
    }
  }
});

export const logout = createAsyncThunk<void, void, errorString>(
  'auth/logout',
  async (_, thunkAPI) => {
    try {
      await axios.post('/users/logout');
      clearAuthHeader();
    } catch (e) {
      const error = e as AxiosError;
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const refreshUser = createAsyncThunk<
  IUser,
  void,
  { state: RootState; rejectValue: string }
>(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState() as RootState;
    const token = state.auth.token;

    if (token) {
      setAuthHeader(token);
    }

    try {
      const res = await axios.get<IUser>('/users/current');
      return res.data;
    } catch (e) {
      const error = e as AxiosError;
      return thunkAPI.rejectWithValue(error.message);
    }
  },
  {
    condition: (_, thunkAPI) => {
      const state = thunkAPI.getState() as RootState;
      return state.auth.token !== null;
    },
  }
);