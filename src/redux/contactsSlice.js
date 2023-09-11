import { createSlice } from '@reduxjs/toolkit';

import { fetchContacts, addContacts, deleteContacts } from './operations';

const initialState = {
  contacts: [],
  isLoading: false,
  error: null,
};
const handleRejected = (state, action) => {
  return {
    ...state,
    isLoading: false,
    error: action.payload,
  };
};

const handlePending = state => {
  return {
    ...state,
    isLoading: true,
  };
};

// розбиваємо на 3 функції, щоб не дублювати код
const handleFetchContactsSuccess = (state, action) => {
  return { ...state, isLoading: false, error: null, items: action.payload };
};

const handleAddContactSuccess = (state, action) => {
  return {
    ...state,
    isLoading: false,
    error: null,
    items: [action.payload, ...state.items],
  };
};

const handleDeleteContactSuccess = (state, action) => {
  return {
    ...state,
    isLoading: false,
    error: null,
    items: state.items.filter(item => item.id !== action.payload.id),
  };
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,

  extraReducers: {
    extraReducers: {
      [fetchContacts.pending]: handlePending,
      [addContacts.pending]: handlePending,
      [deleteContacts.pending]: handlePending,
      [fetchContacts.rejected]: handleRejected,
      [addContacts.rejected]: handleRejected,
      [deleteContacts.rejected]: handleRejected,
      [fetchContacts.fulfilled]: handleFetchContactsSuccess,
      [addContacts.fulfilled]: handleAddContactSuccess,
      [deleteContacts.fulfilled]: handleDeleteContactSuccess,
    },
  },
});

export default contactsSlice.reducer;
