import { useState } from 'react';
import { useDispatch } from 'react-redux';
// import { handleUpdateMainCategory, handleUpdateSubCategory } from './updateHandlers'; // Uncomment if using updateHandlers.js
import { addCategory, updateCategory, deleteCategory } from '../../../../categories/categoriesSlice';

const useFormHandling = (cardData, onClose) => {
  const dispatch = useDispatch();
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedSubCategory, setSelectedSubCategory] = useState(null);
  const [formMode, setFormMode] = useState(null); // 'add' or 'update'

  const handleOpenModal = (mode, subCategory = null) => {
    setFormMode(mode);
    setSelectedSubCategory(subCategory);
    setModalOpen(true);
  };
  const handleCloseModal = () => setModalOpen(false);

  const handleFinish = (values) => {
    if (formMode === 'add') {
      // Add sub-category logic
      dispatch(addCategory({ ...values, parent: cardData.name }));
      if (onClose) onClose();
    } else if (formMode === 'update' && !selectedSubCategory) {
      // Main category update logic
      dispatch(updateCategory({ ...cardData, ...values }));
      if (onClose) onClose();
    } else if (formMode === 'update' && selectedSubCategory) {
      // Sub-category update logic
      dispatch(updateCategory({ ...selectedSubCategory, ...values, parent: cardData.name }));
      if (onClose) onClose();
    }
  };

  const handleDelete = () => {
    if (selectedSubCategory) {
      dispatch(deleteCategory(selectedSubCategory.id));
    } else {
      dispatch(deleteCategory(cardData.id));
    }
    if (onClose) onClose();
  };

  const handleDisable = () => {
    // Implement disable logic if needed
    if (onClose) onClose();
  };

  return {
    modalOpen,
    handleOpenModal,
    handleCloseModal,
    handleFinish,
    handleDelete,
    handleDisable,
    formMode,
    selectedSubCategory,
  };
};

export default useFormHandling; 