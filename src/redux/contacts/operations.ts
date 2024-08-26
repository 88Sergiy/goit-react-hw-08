import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';
import { IContact } from './types/contactsTypes';

axios.defaults.baseURL = 'https://connections-api.goit.global';

export const fetchContacts = createAsyncThunk<
  IContact[],
  void,
  { rejectValue: string }
>('contacts/fetchAll', async (_, thunkAPI) => {
  try {
    const response = await axios.get<IContact[]>('/contacts');
    return response.data;
  } catch (e) {
    const error = e as AxiosError;
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const addContact = createAsyncThunk<
  IContact,
  Omit<IContact, 'id'>,
  { rejectValue: string }
>('contacts/addContact', async (contactObj, thunkAPI) => {
  try {
    const response = await axios.post<IContact>('/contacts', contactObj);
    return response.data;
  } catch (e) {
    const error = e as AxiosError;
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const deleteContact = createAsyncThunk<
  IContact,
  string,
  { rejectValue: string }
>('contacts/deleteContact', async (contactId, thunkAPI) => {
  try {
    const response = await axios.delete<IContact>(`/contacts/${contactId}`);
    console.log(response, response.data);
    return response.data;
  } catch (e) {
    const error = e as AxiosError;
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const editContact = createAsyncThunk<
  IContact,
  IContact,
  { rejectValue: string }
>('contacts/editContact', async (contactObj, thunkAPI) => {
  try {
    const response = await axios.patch<IContact>(`/contacts/${contactObj.id}`, {
      name: contactObj.name,
      number: contactObj.number,
    });
    return response.data;
  } catch (e) {
    const error = e as AxiosError;
    return thunkAPI.rejectWithValue(error.message);
  }
});