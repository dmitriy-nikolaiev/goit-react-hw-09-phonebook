import { createSelector } from '@reduxjs/toolkit';

export const getLoading = (state) => state.contacts.loading;

export const getFilter = (state) => state.contacts.filter;

export const getContacts = (state) => state.contacts.items;

export const getFilteredContacts = createSelector([getContacts, getFilter], (items, filter) => {
  return items.filter(({ name }) => name.toLowerCase().includes(filter.toLowerCase()));
});

export const getError = (state) => state.contacts.error;
