import { createSlice } from '@reduxjs/toolkit';
import { fetchGreeting } from './greetingThunk';

const initialState = {
  message: '',
  isLoading: true,
};

export const GreetingSlice = createSlice({
  name: 'greeting',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchGreeting.pending, (state) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(fetchGreeting.fulfilled, (state, action) => ({
        ...state,
        isLoading: false,
        message: action.payload.message,
      }))
      .addCase(fetchGreeting.rejected, (state) => ({
        ...state,
        isLoading: false,
      }));
  },
});

export default GreetingSlice.reducer;