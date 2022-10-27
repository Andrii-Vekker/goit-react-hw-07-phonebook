import { createSlice } from "@reduxjs/toolkit";

export const filterSlise = createSlice({
    name: "filter",
    initialState: { filter: "" },
    reducers: {
        filteredContacts(state, action) {
  state.filter = action.payload
        }
    }
});


     
  //  const handleChange = (e) => {
  //    const { value } = e.target;
  //   setFilter(value)
  // };



export const {filteredContacts} = filterSlise.actions