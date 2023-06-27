import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { ROCKETS_URL } from '../apiconfig';
// Async action creator
export const fetchRockets = createAsyncThunk('Rockets/fetchRockets', async () => {
  try {
    const response = await axios.get(`${ROCKETS_URL}`);
    const rockets = response.data;
    return rockets;
  } catch (error) {
    throw new Error('Failed to fetch Rockets');
  }
});

const initialState = {
  loading: false,
  rockets: [],
};

const RocketsSlice = createSlice({
  name: 'Rockets',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRockets.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchRockets.fulfilled, (state, action) => {
        state.loading = false;
        state.rockets = action.payload;
      })
      .addCase(fetchRockets.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default RocketsSlice.reducer;
