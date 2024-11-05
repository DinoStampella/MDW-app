import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Character } from '../types/characters';

interface Characters {
    results: Character[];
}

interface CharacterState {
    list: Character[];
    loading: boolean;
    error: string | undefined;
};

export const getCharacters = createAsyncThunk(
  'characters/getCharacters',
  async () => {
    const response = await axios.get<Characters>('https://rickandmortyapi.com/api/character');
    return response.data.results;
  },
);

const initialState: CharacterState = {
  list: [],
  loading: false,
  error: undefined,
};

const slice = createSlice({
  name: 'characters',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCharacters.pending, (state) => {
        state.loading = true;
        state.error = initialState.error;
      })
      .addCase(getCharacters.fulfilled, (state, action) => {
        state.loading = initialState.loading;
        state.list = action.payload;
      })
      .addCase(getCharacters.rejected, (state, action) => {
        state.loading = initialState.loading;
        state.list = initialState.list;
        state.error = action.error.message;
      })
  },
});

export const reducer = slice.reducer;

export default slice;
