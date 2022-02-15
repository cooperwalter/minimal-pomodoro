import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  duration: 0,
  length: 0,
  type: 'work',
  setNumber: 0,
  currentSet: [],
  pastSets: [],
};

export const periodsSlice = createSlice({
  name: 'periods',
  initialState,
  reducers: {},
});

export default periodsSlice.reducer;
