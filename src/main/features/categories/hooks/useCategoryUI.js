import { useState } from 'react';

export default function useCategoryUI() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [formMode, setFormMode] = useState('edit'); // 'edit' or 'add'
  const [parentCategoryId, setParentCategoryId] = useState(null); // for sub category edit

  // Image click handler
  const handleImageClick = (card) => {
    setSelectedCard(card);
    setFormMode('edit');
    setDrawerOpen(true);
    setParentCategoryId(null);
  };

  // Menu action handler
  const handleMenuAction = (action, card) => {
    if (action === 'add') {
      setSelectedCard(card); // parent category
      setFormMode('add');
      setDrawerOpen(true);
      setParentCategoryId(null);
    } else if (action === 'update') {
      setSelectedCard(card);
      setFormMode('edit');
      setDrawerOpen(true);
      setParentCategoryId(null);
    }
  };

  // Sub category click handler
  const handleSubCategoryClick = (subCategory, parentCategory) => {
    setSelectedCard(subCategory);
    setFormMode('edit-sub');
    setDrawerOpen(true);
    setParentCategoryId(parentCategory.id);
  };

  return {
    drawerOpen,
    setDrawerOpen,
    selectedCard,
    setSelectedCard,
    formMode,
    setFormMode,
    parentCategoryId,
    setParentCategoryId,
    handleImageClick,
    handleMenuAction,
    handleSubCategoryClick,
  };
} 