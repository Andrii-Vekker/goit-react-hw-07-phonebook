import { configureStore } from "@reduxjs/toolkit";
import { filterSlise } from "./filterSlise";
import { contactsSlise } from "./contactsSlise";
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const persistConfig = {
    key: 'root',
    storage,
};

const persistContactsReducer = persistReducer(persistConfig, contactsSlise.reducer)


export const store = configureStore({
    reducer: {
        contacts: persistContactsReducer,
        filter: filterSlise.reducer
    },
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store)