import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.contacts;
console.log(selectContacts);
export const selectFilter = state => state.filter;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;

export const selectVisibleContact = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    console.log(contacts);
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
