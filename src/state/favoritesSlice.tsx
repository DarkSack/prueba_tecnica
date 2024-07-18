import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { Character, FavoritesState } from "../Interfaces";

// Initial state for the favorites slice, including characters from localStorage
const initialState: FavoritesState = {
  characters: JSON.parse(localStorage.getItem("favorites") || "[]"),
};

// Slice for managing favorite characters
const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    /**
     * Adds a character to the list of favorite characters.
     * If the list already contains 5 characters, the oldest one is removed.
     * @param {FavoritesState} state - The current state.
     * @param {PayloadAction<Character>} action - The character to add.
     */
    addFavorite: (state, action: PayloadAction<Character>) => {
      if (state.characters.length >= 5) {
        state.characters.shift();
      }
      state.characters.push(action.payload);
      localStorage.setItem("favorites", JSON.stringify(state.characters));
    },

    /**
     * Removes a character from the list of favorite characters by its id.
     * @param {FavoritesState} state - The current state.
     * @param {PayloadAction<number>} action - The id of the character to remove.
     */
    removeFavorite: (state, action: PayloadAction<number>) => {
      state.characters = state.characters.filter(
        (character) => character.id !== action.payload
      );
      localStorage.setItem("favorites", JSON.stringify(state.characters));
    },
  },
});

// Export actions for adding and removing favorites
export const { addFavorite, removeFavorite } = favoritesSlice.actions;

// Selector to get the list of favorite characters from the state
export const selectFavorites = (state: RootState) => state.favorites.characters;

// Export the reducer to be included in the store
export default favoritesSlice.reducer;
