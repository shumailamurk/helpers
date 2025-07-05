import React from 'react';
import { useSelector } from 'react-redux';
import { useTheme } from '../../../ThemeContext';
import CategoryCardList from '../../features/categories/components/Cards/CategoryCardList';
import FormDrawerUI from '../../features/categories/components/forms/FormDrawerUI';
import useCategoryUI from './components/sharedComponents/generichooks/ReusableUIcustomhooks';
import Card from './components/Cards/cards';

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

  const categories = useSelector(state => state.categories.list);

  // Pad categories for grid balance (4 columns)
  const paddedCategories = [...categories];
  while (paddedCategories.length % 4 !== 0) {
    paddedCategories.push({ id: `dummy-${paddedCategories.length}`, dummy: true });
  }

  return (
    <div className="text-center">
      <h2
        className="text-2xl font-bold mb-8 text-left ml-8"
        style={{ color: color, marginTop: 32 }}
      >
        Categories
      </h2>
      <div className="mb-6 mt-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 justify-center max-w-6xl mx-auto">
          {categories.map(card =>
            card.dummy ? (
              <div key={card.id} className="w-60 min-w-[160px] max-w-full invisible" />
            ) : (
              <Card
                key={card.id}
                name={card.name}
                image={card.image}
                subCategories={card.subCategories}
                className="w-60 min-w-[160px] max-w-full"
                onImageClick={() => handleImageClick(card)}
                onMenuAction={(action) => handleMenuAction(action, card)}
                onSubCategoryClick={(sub) => {
                  const parentCard = categories.find(c =>
                    c.subCategories.includes(sub)
                  ) || {};
                  handleSubCategoryClick(sub, parentCard);
                }}
              />
            )
          )}
        </div>
      </div>
      <FormDrawerUI
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