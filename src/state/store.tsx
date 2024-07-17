import { configureStore } from '@reduxjs/toolkit';
import favoritesReducer from './favoritesSlice';

/**
 * Configures the Redux store with the favorites slice reducer.
 * The store manages the state for the application, and the configureStore function
 * automatically sets up the store with good default settings, including Redux DevTools.
 */
const store = configureStore({
  reducer: {
    favorites: favoritesReducer,
  },
});

/**
 * Type representing the entire Redux state.
 * Uses TypeScript's ReturnType utility type to infer the type from the store's getState method.
 */
export type RootState = ReturnType<typeof store.getState>;

/**
 * Type representing the dispatch function from the Redux store.
 * This is useful for defining the type of the dispatch function in asynchronous actions or thunks.
 */
export type AppDispatch = typeof store.dispatch;

export default store;
