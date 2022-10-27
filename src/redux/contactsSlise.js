import { createSlice } from "@reduxjs/toolkit";
// import { createReduser, combineReducers } from "@reduxjs/toolkit";
import { createReducer, combineReducers } from "@reduxjs/toolkit";
import { fetchContactsError, fetchContactsRequest, fetchContactsSuccess } from "./contactsActions";



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

/////////createReduser//////////////////

const items = createReducer([], {
    [fetchContactsSuccess]: (state, action) => state = action.payload
   
});

const isloading = createReducer(false, {
    [fetchContactsRequest]: () => true,
    [fetchContactsSuccess]: () => false,
    [fetchContactsError]: () => false
});

const error = createReducer(null, {
[fetchContactsError]: (_, action) => action.payload,
[fetchContactsError]: () => null
})

export default combineReducers({
    items,
    isloading,
    error
})