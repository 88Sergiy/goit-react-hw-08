import { createSelector } from '@reduxjs/toolkit';
import { selectFilterValue } from '../filters/selectors';

export const selectContacts = state => state.contacts.items;
export const selectLoading = state => state.contacts.loading;
export const selectIsContactsFetching = state => state.contacts.isFetching;
export const selectError = state => state.contacts.error;

export const selectContactById = contactId =>
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