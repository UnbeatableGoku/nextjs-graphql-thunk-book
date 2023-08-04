import { createSlice } from '@reduxjs/toolkit';

export const bookSlice = createSlice({
  name: 'book',
  initialState: {
    compareBook: [],
  },
  reducers: {
    addBookToCompare(state, action) {
      state.compareBook = [...state.compareBook, action.payload];
    },
    removeBookFromCompare(state, action) {
      const filteredState = state.compareBook.filter(
        (item) => item != action.payload
      );
      state.compareBook = filteredState;
    },
  },
});

export const { addBookToCompare, removeBookFromCompare } = bookSlice.actions;
