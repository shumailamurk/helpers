import React, { useState } from 'react';
import Card from '../Card';
import FormModal from './FormModal';

const CardHandling = (props) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedSubCategory, setSelectedSubCategory] = useState(null);

  const handleImageClick = () => {
    setSelectedSubCategory(null);
    setModalOpen(true);
  };
  const handleClose = () => setModalOpen(false);

  const handleSubCategoryClick = (sub) => {
    setSelectedSubCategory(sub);
    setModalOpen(true);
  };

  return (
    <>
      <Card
        {...props}
        onImageClick={handleImageClick}
        subCategories={props.subCategories || []}
        onSubCategoryClick={handleSubCategoryClick}
      />
      <FormModal
        visible={modalOpen}
        onClose={handleClose}
        cardData={selectedSubCategory ? { ...selectedSubCategory, parent: props.name } : props}
      />
    </>
  );
};

export default CardHandling; 