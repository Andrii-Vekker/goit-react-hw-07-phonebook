import { createSlice } from "@reduxjs/toolkit";


export const contactsSlise = createSlice({
    name: "contacts",
    initialState: {
        contacts: []
    },
    reducers: {
        addContacts(state, action) { 
            
state.contacts.push(action.payload)
        },
        removeContacts(state, action) {
           state.contacts =  state.contacts.filter(({id}) => id !== action.payload.id) 
        }
    }
});

export const {addContacts, removeContacts} = contactsSlise.actions