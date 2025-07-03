import { configureStore } from '@reduxjs/toolkit';
import categoriesReducer from '../main/features/categories/Actions/reduxSlices';
import servicesReducer from '../main/features/services/Action/serviceSlice';

export const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    services: servicesReducer,
  },
});
