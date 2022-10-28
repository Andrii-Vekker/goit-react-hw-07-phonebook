import {fetchContactsRequest, fetchContactsSuccess, fetchContactsError, addContactsRequest,
addContactsSuccess,
addContactsError,
deleteContactsRequest,
deleteContactsSuccess,
deleteContactsError } from "./contactsActions";
import { getContacts, addContact, removeContact } from "API/Api";
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const fetchContacts = () => async dispatch => {
    dispatch(fetchContactsRequest());
    try {
        const contacts = await getContacts();
        dispatch(fetchContactsSuccess(contacts))
    } catch (error) {
        dispatch(fetchContactsError(error.message))
    }
};


const isDublicate = ({ name, phone }, contacts) => {
  const normalizedName = name.toLowerCase()
  // const normalizedPhone = phone.toLowerCase()
    
  const result = contacts.find(item => {
    return (normalizedName === item.name.toLowerCase())
  });
  return result
};

export const addContacts = (data) => async (dispatch, getstate) => {
  console.log(data)
  const { contacts } = getstate()
  if (isDublicate(data, contacts.items)) {
    return alert("fuck");
  };
  dispatch(addContactsRequest());
  try {
    const result = await addContact(data);
console.log(result)
    dispatch(addContactsSuccess(result))
    } catch (error) {
      dispatch(addContactsError(error.message))
  };

};

export const deleteContact = (id) => async (dispatch) => {
try {
    dispatch(deleteContactsRequest());
    await removeContact(id);
    dispatch(deleteContactsSuccess(id))
    } catch (error) {
      dispatch(deleteContactsError(error.message))
  };
}


/////////////////////createAsyncThunk//////////////////////



// First, create the thunk
// export const fetchContacts = createAsyncThunk(
//   'contacts/fetchContacts',
//   async (_, { rejectWithValue }) => {
//     try {
//       const contacts = await getContacts();
//       return contacts
//     } catch (error) {
//       return rejectWithValue(error.message)
//     };
//   });