import {fetchContactsRequest, fetchContactsSuccess, fetchContactsError } from "./contactsActions";
import { getContacts, addContact, removeContact } from "API/Api";
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

// export const fetchContacts = () => async dispatch => {
//     dispatch(fetchContactsRequest());
//     try {
//         const contacts = await getContacts();
//         dispatch(fetchContactsSuccess(contacts))
//     } catch (error) {
//         dispatch(fetchContactsError(error.message))
//     }
// };


/////////////////////createAsyncThunk//////////////////////



// First, create the thunk
export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, {rejectWithValue}) => {
   try {
     const contacts = await getContacts();
    return contacts
   } catch (error) {
    return rejectWithValue(error.message)
   }
  }
)