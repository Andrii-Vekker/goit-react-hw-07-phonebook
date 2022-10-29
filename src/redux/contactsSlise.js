import { fetchContacts, addContacts, deleteContacts } from "./ContactsOperations";
import { createSlice } from "@reduxjs/toolkit";
// import { createReducer, combineReducers } from "@reduxjs/toolkit";
// import {fetchContactsRequest, fetchContactsSuccess, fetchContactsError, addContactsRequest,
// addContactsSuccess,
// addContactsError,
// deleteContactsRequest,
// deleteContactsSuccess,
// deleteContactsError } from "./contactsActions";

/////////////////createSlise with async////////////
export const contactsReducer = createSlice({
    name: 'contacts',
    initialState: {
        items: [],
        isLoading: false,
        error: null
    },
    extraReducers: {
        [fetchContacts.pending]: (state) => {
            state.isLoading = true
        },
        [fetchContacts.fulfilled]: (state, { payload }) => {
            state.isLoading = false
            state.items = payload; 
        },
        [fetchContacts.rejected]: (state, { payload }) => {
            state.isLoading = false;
            state.error = payload
        },
           [addContacts.pending]: (state) => {
            state.isLoading = true
        },
        [addContacts.fulfilled]: (state, { payload }) => {
            state.isLoading = false
            state.items.push(payload); 
        },
        [addContacts.rejected]: (state, { payload }) => {
            state.isLoading = false;
            state.error = payload
        },
            [deleteContacts.pending]: (state) => {
            state.isLoading = true
        },
        [deleteContacts.fulfilled]: (state, { payload }) => {
            state.isLoading = false
            state.items =  state.items.filter(({id}) => id !== payload.id)
        },
        [deleteContacts.rejected]: (state, { payload }) => {
            state.isLoading = false;
            state.error = payload
     }
   } 
});
export default contactsReducer.reducer;
//////////////////////////////////////////////////////////////////////
// export const contactsSlise = createSlice({
//     name: "contacts",
//     initialState: {
//         contacts: []
//     },
//     reducers: {
//         addContacts(state, action) {
            
// state.contacts.push(action.payload)
//         },
//         removeContacts(state, action) {
//            state.contacts =  state.contacts.filter(({id}) => id !== action.payload.id)
//         }
//     }
// });

// export const {addContacts, removeContacts} = contactsSlise.actions

/////////async with createReduser//////////////////

// const items = createReducer([], {
//     [fetchContactsSuccess]: (state, action) => state = action.payload,
//     [addContactsSuccess]: (state, action) => state.items = [...state.items, action.payload],
//     [deleteContactsSuccess]: (state, action) => state.items.filter(item => item.id !== action.payload),
   
// });

// const isloading = createReducer(false, {
//     [fetchContactsRequest]: () => true,
//     [fetchContactsSuccess]: () => false,
//     [fetchContactsError]: () => false,
//      [addContactsRequest]: () => true,
//     [addContactsSuccess]: () => false,
//     [addContactsError]: () => false,
//      [deleteContactsRequest]: () => true,
//     [deleteContactsSuccess]: () => false,
//     [deleteContactsError]: () => false
// });

// const error = createReducer(null, {
//     [fetchContactsError]: (_, action) => action.payload,
//     [fetchContactsError]: () => null,
//     [addContactsError]: (_, action) => action.payload,
//     [addContactsError]: () => null,
//      [deleteContactsError]: (_, action) => action.payload,
//     [deleteContactsError]: () => null
// });

// export default combineReducers({
//     items,
//     isloading,
//     error
// });

/////////////////////reduser with asyncThunk//////////////////

// const items = createReducer([], {
//     [fetchContacts.fulfilled]: (state, action) => state = action.payload
   
// });

// const isloading = createReducer(false, {
//     [fetchContacts.pending]: () => true,
//     [fetchContacts.fulfilled]: () => false,
//     [fetchContacts.rejected]: () => false
// });

// const error = createReducer(null, {
// [fetchContacts.rejected]: (_, action) => action.payload,
// [fetchContacts.pending]: () => null
// })

// export default combineReducers({
//     items,
//     isloading,
//     error
// });

