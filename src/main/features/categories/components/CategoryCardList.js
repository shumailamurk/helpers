import React from 'react';
import Card from './Cards/cards';

const CategoryCardList = ({ categories, onImageClick, onMenuAction, onSubCategoryClick }) => {
  return (
    <div className="flex flex-wrap justify-center gap-10">
      {categories.map(card => (
        <Card
          key={card.id}
          name={card.name}
          image={card.image}
          subCategories={card.subCategories}
          className="w-60 min-w-[160px] max-w-full"
          onImageClick={() => onImageClick(card)}
          onMenuAction={(action) => onMenuAction(action, card)}
          onSubCategoryClick={(sub) => onSubCategoryClick(sub, card)}
        />
      ))}
    </div>
  );
};

export default CategoryCardList; 