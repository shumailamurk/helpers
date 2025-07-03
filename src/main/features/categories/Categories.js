import React from 'react';
import { useSelector } from 'react-redux';
import { useTheme } from '../../../ThemeContext';
import CategoryCardList from './components/CategoryCardList';
import CategoryDrawer from './components/CategoryDrawer';
import useCategoryUI from './hooks/useCategoryUI';

const Categories = () => {
  const { color } = useTheme();
  const {
    drawerOpen,
    setDrawerOpen,
    selectedCard,
    formMode,
    parentCategoryId,
    handleImageClick,
    handleMenuAction,
    handleSubCategoryClick,
  } = useCategoryUI();

  // Redux se categories list 
  const categories = useSelector(state => state.categories.list);

  // 4-4 cards  2 rows
  const firstRow = categories.slice(0, 4);
  const secondRow = categories.slice(4, 8);

  return (
    <div className="text-center">
      <h2
        className="text-2xl font-bold mb-8 text-left ml-8"
        style={{ color: color, marginTop: 32 }}
      >
        Categories
      </h2>
      <div className="mb-6 mt-14">
        <CategoryCardList
          categories={firstRow}
          onImageClick={handleImageClick}
          onMenuAction={handleMenuAction}
          onSubCategoryClick={(sub) => handleSubCategoryClick(sub, firstRow.find(card => card.subCategories.includes(sub)) || {})}
        />
      </div>
      <div className="mt-8">
        <CategoryCardList
          categories={secondRow}
          onImageClick={handleImageClick}
          onMenuAction={handleMenuAction}
          onSubCategoryClick={(sub) => handleSubCategoryClick(sub, secondRow.find(card => card.subCategories.includes(sub)) || {})}
        />
      </div>
      {/* Drawer for Form */}
      <CategoryDrawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        selectedCard={selectedCard}
        formMode={formMode}
        parentCategoryId={parentCategoryId}
      />
    </div>
  );
};

export default Categories; 