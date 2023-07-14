import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchGreeting = createAsyncThunk(
  'greeting/fetchGreeting',
  async () => {
    const response = await fetch('api/greeting');
    const data = await response.json();
    if (response.status < 200 || response.status >= 300) {
      return 'fails';
    }
    return data;
  },
);

export default fetchGreeting;