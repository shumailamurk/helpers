import { createSlice } from '@reduxjs/toolkit';
import dummyData from '../../Components/categories/sharedComponents/dummyData.json';

const initialState = {
  list: dummyData,
  loading: false,
  error: null,
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    setCategories(state, action) {
      state.list = action.payload;
    },
    addCategory(state, action) {
      state.list.push(action.payload);
    },
    updateCategory(state, action) {
      const idx = state.list.findIndex(cat => cat.id === action.payload.id);
      if (idx !== -1) state.list[idx] = action.payload;
    },
    deleteCategory(state, action) {
      state.list = state.list.filter(cat => cat.id !== action.payload);
    },
  },
});

export const { setCategories, addCategory, updateCategory, deleteCategory } = categoriesSlice.actions;
export default categoriesSlice.reducer;
