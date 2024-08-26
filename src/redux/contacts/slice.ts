import { createSlice, Draft, PayloadAction } from '@reduxjs/toolkit';
import {
  addContact,
  deleteContact,
  editContact,
  fetchContacts,
} from './operations';
import { logout } from '../auth/operations';

import { IContactsState } from './types/contactsTypes';

const initialState: IContactsState = {
  items: [],
  loading: false,
  isFetching: false,
  error: '',
};

const handlePending = (state: Draft<IContactsState>) => {
  state.loading = true;
  state.error = '';
};

const handleRejected = (
  state: Draft<IContactsState>,
  action: PayloadAction<string | undefined>
) => {
  state.loading = false;
  state.error = action.payload ?? 'Some error occured';
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, state => {
        state.isFetching = true;
        state.loading = true;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isFetching = false;
        state.loading = false;
        state.error = '';
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.isFetching = false;
        state.loading = false;
        state.error = action.payload ?? 'Some error occured';
      })
      .addCase(addContact.pending, handlePending)
      .addCase(addContact.fulfilled, (state, action) => {
        state.loading = false;
        state.error = '';
        state.items.push(action.payload);
      })
      .addCase(addContact.rejected, handleRejected)
      .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.loading = false;
        state.error = '';
        const index = state.items.findIndex(
          contact => contact.id === action.payload.id
        );
        state.items.splice(index, 1);
      })
      .addCase(deleteContact.rejected, handleRejected)
      .addCase(editContact.pending, handlePending)
      .addCase(editContact.rejected, handleRejected)
      .addCase(editContact.fulfilled, (state, action) => {
        state.loading = false;
        state.error = '';
        const index = state.items.findIndex(
          contact => contact.id === action.payload.id
        );
        state.items[index] = action.payload;
      })
      .addCase(logout.fulfilled, state => {
        state.items = [];
        state.loading = false;
        state.error = '';
      });
  },
});

export const contactReducer = contactsSlice.reducer;