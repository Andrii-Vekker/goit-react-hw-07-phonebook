import {fetchContactsRequest, fetchContactsSuccess, fetchContactsError } from "./contactsActions";
import { getContacts, addContact, removeContact } from "API/Api";

export const fetchContacts = () => async dispatch => {
    dispatch(fetchContactsRequest());
  try {
      const contacts = await getContacts();
    dispatch(fetchContactsSuccess(contacts))
  } catch (error) {
    dispatch(fetchContactsError(error.message))
  }
}