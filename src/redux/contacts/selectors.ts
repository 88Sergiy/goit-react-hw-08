import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { selectFilterValue } from '../filters/selectors';

export const selectContacts = (state: RootState) => state.contacts.items;
export const selectLoading = (state: RootState) => state.contacts.loading;
export const selectIsContactsFetching = (state: RootState) =>
  state.contacts.isFetching;
export const selectError = (state: RootState) => state.contacts.error;

export const selectContactById = (contactId: string) =>
  createSelector([selectContacts], contacts => {
    const contact = contacts.filter(contact => contact.id === contactId);

    return contact;
  });

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilterValue],
  (contacts, filterName) => {
    const filteredContacts = contacts.filter(
      contact =>
        contact.name.toLowerCase().includes(filterName.toLowerCase()) ||
        contact.number.includes(filterName)
    );

    return filteredContacts;
  }
);