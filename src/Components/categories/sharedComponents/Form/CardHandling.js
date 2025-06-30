import React, { useState } from 'react';
import Card from '../Card';
import FormModal from './FormModal';

const CardHandling = (props) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedSubCategory, setSelectedSubCategory] = useState(null);
  const [formMode, setFormMode] = useState(null); // 'add' or 'update'

  const handleImageClick = () => {
    setSelectedSubCategory(null);
    setFormMode(null);
    setModalOpen(true);
  };
  const handleClose = () => setModalOpen(false);

  const handleSubCategoryClick = (sub) => {
    setSelectedSubCategory(sub);
    setFormMode(null);
    setModalOpen(true);
  };

  const handleMenuAction = (action) => {
    setFormMode(action);
    setSelectedSubCategory(null);
    setModalOpen(true);
  };

  // Decide what data to show in the form
  let cardData = props;
  if (formMode === 'add') {
    cardData = { name: '', parent: props.name };
  } else if (formMode === 'update') {
    cardData = { name: props.name, parent: props.name };
  } else if (selectedSubCategory) {
    cardData = { ...selectedSubCategory, parent: props.name };
  }

  return (
    <>
      <Card
        {...props}
        onImageClick={handleImageClick}
        subCategories={props.subCategories || []}
        onSubCategoryClick={handleSubCategoryClick}
        onMenuAction={handleMenuAction}
      />
      <FormModal
        visible={modalOpen}
        onClose={handleClose}
        cardData={cardData}
        onAddSubCategory={props.onAddSubCategory}
        onDeleteSubCategory={props.onDeleteSubCategory}
        onDisableSubCategory={props.onDisableSubCategory}
        onUpdateCategory={props.onUpdateCategory}
      />
    </>
  );
};

export default CardHandling; 