import { configureStore } from '@reduxjs/toolkit';
import userReducer from './profile';

export const store = configureStore({
  reducer: {
    profile: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

