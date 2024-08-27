export const filteredContact = (state) => state.filter.filter;

export const selectContacts = (state) => state.contact.contacts.items;

export const selectIsLoading = (state) => state.contact.contacts.loading;

export const selectError = (state) => state.contact.contacts.error;