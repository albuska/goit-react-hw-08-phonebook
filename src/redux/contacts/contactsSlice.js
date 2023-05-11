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
  initialState: {
    items: [
      // { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      // { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      // { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      // { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    isLoading: false,
    error: null,
  },
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
});

export const contactsReducer = contactsSlice.reducer;
