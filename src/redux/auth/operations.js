import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

// Utility to add JWT
const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// Utility to remove JWT
const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const reset = createAsyncThunk('auth/reset', (err, thunkAPI) => {
//   console.log('resetOperations');
  try {
    return err;
  } catch (error) {
    toast.error(
      `Something wrong :(`
    );
  }
});

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, { rejectWithValue }) => {
    console.log('registerOperations', credentials);
    try {
      const res = await axios.post('/users/signup', credentials);
      // After successful registration, add the token to the HTTP header
      setAuthHeader(res.data.token);
      toast.success(`Welcome, ${res.data.user.name}!`);
      return res.data;
    } catch (error) {
      alert(`Something wrong :( Please check your email or password and try again`)
      toast.error(
        `Something wrong :( Please check your email or password and try again`);
      console.log(error);
      return rejectWithValue(error.response.data.message);
    }
  }
);

/*
 * POST @ /users/login
 * body: { email, password }
 */
export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, { rejectWithValue }) => {
    // console.log('logInOperations', credentials);
    try {
      const res = await axios.post('/users/login', credentials);
      // After successful login, add the token to the HTTP header
      setAuthHeader(res.data.token);
      toast.success(`Welcome, ${res.data.user.name}!`);
      return res.data;
    } catch (error) {
      alert(`Something wrong :( Please check your email or password and try again`)
      toast.error(
        `Something wrong :( Please check your email or password and try again`
      );
      console.log(error);
      return rejectWithValue('Wrong username or password');
    }
  }
);

/*
 * POST @ /users/logout
 * headers: Authorization: Bearer token
 */
export const logOut = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    console.log('logOutOperations');
    try {
      await axios.post('/users/logout');
      // After a successful logout, remove the token from the HTTP header
      clearAuthHeader();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

/*
 * GET @ /users/current
 * headers: Authorization: Bearer token
 */
export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, { getState, rejectWithValue }) => {
    // Reading the token from the state via getState()
    const state = getState();
    const persistedToken = state.auth.token;
    console.log('token', persistedToken, state);

    if (persistedToken === null) {
      // If there is no token, exit without performing any request
      return rejectWithValue('Unable to fetch user');
    }
    console.log('refreshUserOperations');
    try {
      // If there is a token, add it to the HTTP header and perform the request
      setAuthHeader(persistedToken);
      const res = await axios.get('/users/current');
      return res.data;
    } catch (error) {
      console.log('error refresh');
      return rejectWithValue(error.message);
    }
  }
);