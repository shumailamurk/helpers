import React from 'react';
import Card from './Cards/cards';

// Pure UI block: receives categories as prop
const Categories = ({ categories = [] }) => {
  return (
    <div style={{ padding: 24 }}>
      <h2 style={{ marginBottom: 24 }}>Categories</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24 }}>
        {categories.map(category => (
          <Card
            key={category.id}
            name={category.name}
            image={category.image}
            subCategories={category.subCategories}
          />
        ))}
      </div>
    </div>
  );
};

export default Categories; 