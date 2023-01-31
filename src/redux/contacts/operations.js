import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');
      return response.data;
    } catch (error) {
      toast.error(`Something went wrong :(`);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContacts = createAsyncThunk(
  'contacts/addContacts',
  async (items, { rejectWithValue }) => {
    try {
      const response = await axios.post(`/contacts`, items);
      toast.success(`Successful added contact`);
      return response.data;
    } catch (error) {
      toast.error(`Something went wrong :(`);
      return rejectWithValue(error.message);
    }
  }
);

export const deleteContacts = createAsyncThunk(
  'contacts/deleteContacts',
  async (items, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${items}`);
      toast.success(`You deleted the contact`);
      return response.data.id;
    } catch (error) {
      toast.error(`Something went wrong :(`);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const filterContacts = createAsyncThunk(
  'contacts/filterContacts',
  async (items, thunkAPI) => {
    try {
      const response = await axios.get(`/contacts`);
      const filteredContacts = response.data.filter(contact => {
        return contact.name.toLowerCase().includes(items.toLowerCase());
      });
      return filteredContacts;
    } catch (error) {
      toast.error(`Something went wrong :(`);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);