import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchRocketsData } from '../api';

const initialState = {
  rockets: [],
  loading: false,
};

export const fetchRockets = createAsyncThunk('Rockets/fetchRockets', async () => {
  try {
    const rockets = await fetchRocketsData();
    return rockets;
  } catch (error) {
    throw new Error('Failed to fetch Rockets');
  }
});

const RocketsSlice = createSlice({
  name: 'Rockets',
  initialState,
  reducers: {
    reserveRocket: (state, action) => {
      const rocketId = action.payload;
      const rocket = state.rockets.find((rocket) => rocket.id === rocketId);
      if (rocket) {
        rocket.reserved = true; // Update the reserved property to true
      }
    },
    cancelReservation: (state, action) => {
      const rocketId = action.payload;
      const rocket = state.rockets.find((rocket) => rocket.id === rocketId);
      if (rocket) {
        rocket.reserved = false; // Update the reserved property to false
      }
    },
  },
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

export const { reserveRocket, cancelReservation } = RocketsSlice.actions;
export default RocketsSlice.reducer;
