import React from 'react';
import CardHandling from './Form/CardHandling';
import { useTheme } from '../../../ThemeContext';
import { useSelector, useDispatch } from 'react-redux';
import { updateCategory } from '../../../features/categories/categoriesSlice';

const Categories = () => {
  const { color } = useTheme();
  const categories = useSelector(state => state.categories.list);
  const dispatch = useDispatch();

  const handleAddSubCategory = (parentName, subCategory) => {
    const category = categories.find(cat => cat.name === parentName);
    if (!category) return;
    const updatedCategory = {
      ...category,
      subCategories: [...(category.subCategories || []), subCategory],
    };
    dispatch(updateCategory({ ...updatedCategory, id: category.id }));
  };

  const handleDeleteSubCategory = (parentName, subCategoryName) => {
    const category = categories.find(cat => cat.name === parentName);
    if (!category) return;
    const updatedCategory = {
      ...category,
      subCategories: (category.subCategories || []).filter(sub => sub.name !== subCategoryName),
    };
    dispatch(updateCategory({ ...updatedCategory, id: category.id }));
  };

  const handleDisableSubCategory = (parentName, subCategoryName) => {
    const category = categories.find(cat => cat.name === parentName);
    if (!category) return;
    const updatedCategory = {
      ...category,
      subCategories: (category.subCategories || []).map(sub =>
        sub.name === subCategoryName ? { ...sub, disabled: true } : sub
      ),
    };
    dispatch(updateCategory({ ...updatedCategory, id: category.id }));
  };

  const handleUpdateCategory = (oldName, updatedData) => {
    const category = categories.find(cat => cat.name === oldName);
    if (!category) return;
    dispatch(updateCategory({ ...category, ...updatedData, id: category.id }));
  };

  return (
    <div className="mt-8">
      <h2
        className="text-2xl font-bold mb-8 text-left drop-shadow-lg ml-8"
        style={{ color }}
      >
        Categories
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 justify-items-center">
        {categories.map(item => (
          <CardHandling
            key={item.id}
            name={item.name}
            image={item.image}
            subCategories={item.subCategories || []}
            className="w-72"
            onAddSubCategory={handleAddSubCategory}
            onDeleteSubCategory={handleDeleteSubCategory}
            onDisableSubCategory={handleDisableSubCategory}
            onUpdateCategory={handleUpdateCategory}
          />
        ))}
      </div>
    </div>
  );
};

export default Categories;

export { default as Card } from './Card'; 