import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  fetchAll,
  addContact,
  deleteContact,
} from '../services/fetchContactsAPI';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, { rejectedWithValue }) => {
    try {
      const contacts = await fetchAll();

      return contacts;
    } catch (error) {
      return rejectedWithValue(error.message);
    }
  }
);

export const addContactItem = createAsyncThunk(
  'contacts/addContact',
  async (text, { rejectedWithValue }) => {
    try {
      const contacts = await addContact(text);
      return contacts;
    } catch (error) {
      return rejectedWithValue(error.message);
    }
  }
);

export const deleteContactItem = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, { rejectedWithValue }) => {
    try {
      const contacts = await deleteContact(contactId);
      return contacts;
    } catch (error) {
      return rejectedWithValue(error.message);
    }
  }
);
