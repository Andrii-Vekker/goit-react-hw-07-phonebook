// import { createReducer, combineReducers } from "@reduxjs/toolkit";
import { fetchContacts } from "./ContactsOperations";
import { createSlice } from "@reduxjs/toolkit";
// import { createReduser, combineReducers } from "@reduxjs/toolkit";
// import { fetchContactsError, fetchContactsRequest, fetchContactsSuccess } from "./contactsActions";



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
//     [fetchContactsSuccess]: (state, action) => state = action.payload
   
// });

// const isloading = createReducer(false, {
//     [fetchContactsRequest]: () => true,
//     [fetchContactsSuccess]: () => false,
//     [fetchContactsError]: () => false
// });

// const error = createReducer(null, {
// [fetchContactsError]: (_, action) => action.payload,
// [fetchContactsError]: () => null
// })

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
    //        [addContacts.pending]: (state) => {
    //         state.isLoading = true
    //     },
    //     [addContacts.fulfilled]: (state, { payload }) => {
    //         state.isLoading = false
    //         state.items = payload; 
    //     },
    //     [addContacts.rejected]: (state, { payload }) => {
    //         state.isLoading = false;
    //         state.error = payload
    //     },
    //         [deleteContacts.pending]: (state) => {
    //         state.isLoading = true
    //     },
    //     [deleteContacts.fulfilled]: (state, { payload }) => {
    //         state.isLoading = false
    //         state.items = payload; 
    //     },
    //     [deleteContacts.rejected]: (state, { payload }) => {
    //         state.isLoading = false;
    //         state.error = payload
    //  }
   

} 
});
export default contactsReducer.reducer