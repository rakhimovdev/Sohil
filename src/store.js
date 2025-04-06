// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import languageReducer from './slices/languageSlices';

export const store = configureStore({
    reducer: {
        language: languageReducer,
    },
});
