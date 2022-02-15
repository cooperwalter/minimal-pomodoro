import { configureStore } from '@reduxjs/toolkit';
import { periodsSlice } from '../features/periods/periods.slice';

const reducer = {
  periods: periodsSlice,
};

const store = configureStore({
  reducer,
});

export default store;
