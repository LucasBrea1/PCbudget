// en Store.js se configura redux y la integración con localStorage mediante redux-persist

import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './CartSlice'; // El reducer que vamos a crear
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // Guarda en localStorage
import { combineReducers } from 'redux';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  cart: cartReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);