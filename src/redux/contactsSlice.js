import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchContacts, addContactItem, deleteContactItem } from './operations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const extraActions = [fetchContacts, addContactItem, deleteContactItem];

const getActions = type => isAnyOf(...extraActions.map(action => action[type]));

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { items: [], isLoading: false, error: null },
  extraReducers: builder =>
    builder
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(addContactItem.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(deleteContactItem.fulfilled, (state, action) => {
        const index = state.items.findIndex(
          contact => contact.id === action.payload.id
        );
        state.items.splice(index, 1);
      })
      .addMatcher(getActions('pending'), handlePending)
      .addMatcher(getActions('rejected'), handleRejected)
      .addMatcher(getActions('fulfilled'), state => {
        state.isLoading = false;
        state.error = null;
      }),
  // extraReducers: {

  //   [fetchContacts.pending]: handlePending,
  //   [fetchContacts.fulfilled](state, action) {
  //     state.isLoading = false;
  //     state.error = null;
  //     state.items = action.payload;
  //   },
  //   [fetchContacts.rejected]: handleRejected,
  //   [addContactItem.pending]: handlePending,
  //   [addContactItem.fulfilled](state, action) {
  //     state.isLoading = false;
  //     state.error = null;
  //     state.items.unshift(action.payload);
  //   },
  //   [addContactItem.rejected]: handleRejected,
  //   [deleteContactItem.pending]: handlePending,
  //   [deleteContactItem.fulfilled](state, action) {
  //     state.isLoading = false;
  //     state.error = null;
  //     const index = state.items.findIndex(
  //       contact => contact.id === action.payload.id
  //     );
  //     state.items.splice(index, 1);
  //   },
  //   [deleteContactItem.rejected]: handleRejected,
  // },
});

export const contactsReducer = contactsSlice.reducer;
