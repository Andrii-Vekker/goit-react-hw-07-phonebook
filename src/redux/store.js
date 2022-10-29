import { configureStore } from "@reduxjs/toolkit";
import { filterSlise } from "./filterSlise";
import contactsReducer from "./contactsSlise"

export const store = configureStore({
    reducer: {
        contacts: contactsReducer,
        filter: filterSlise.reducer
    },
  });

