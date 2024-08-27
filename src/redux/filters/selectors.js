import { createSelector } from "@reduxjs/toolkit";
import { filteredContact, selectContacts } from "../contacts/selectors";

export const selectFilteredContacts = createSelector(
  [selectContacts, filteredContact],
  (contacts, filtered) => {
    const searchContact = contacts.filter((cont) =>
      cont.name.toLowerCase().includes(filtered.toLowerCase())
    );
    return searchContact;
  }
);