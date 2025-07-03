// Redux slices and actions for categories feature 
import { createSlice } from '@reduxjs/toolkit';
import { fetchCategories } from '../services/forApi';

const initialState = {
  list: fetchCategories(),
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
    addSubCategory(state, action) {
      const { categoryId, subCategory } = action.payload;
      const category = state.list.find(cat => cat.id === categoryId);
      if (category) {
        if (!category.subCategories) category.subCategories = [];
        category.subCategories.push(subCategory);
      }
    },
    updateSubCategory(state, action) {
      const { categoryId, subCategory } = action.payload;
      const category = state.list.find(cat => cat.id === categoryId);
      if (category && category.subCategories) {
        const idx = category.subCategories.findIndex(sub => sub.id === subCategory.id);
        if (idx !== -1) category.subCategories[idx] = subCategory;
      }
    },
    deleteSubCategory(state, action) {
      const { categoryId, subCategoryId } = action.payload;
      const category = state.list.find(cat => cat.id === categoryId);
      if (category && category.subCategories) {
        category.subCategories = category.subCategories.filter(sub => sub.id !== subCategoryId);
      }
    },
  },
});

export const { setCategories, addCategory, updateCategory, deleteCategory, addSubCategory, updateSubCategory, deleteSubCategory } = categoriesSlice.actions;
export default categoriesSlice.reducer; 