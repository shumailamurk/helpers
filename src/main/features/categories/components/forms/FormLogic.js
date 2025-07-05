import { useDispatch } from 'react-redux';
import { addSubCategory, updateCategory, deleteCategory, updateSubCategory, deleteSubCategory } from '../../Actions/reduxSlices';
import { CloseOutlined } from '@ant-design/icons';
import { Form } from 'antd';

const useFormLogic = (cardData, onClose, formMode, parentCategoryId) => {
  const dispatch = useDispatch();

  // Form submit handler
  const handleFinish = (values) => {
    if (formMode === 'add') {
      // Add Sub Category
      const newSubCategory = {
        id: Date.now(),
        name: values.name,
        shortDescription: values.shortDescription,
        description: values.description,
      };
      dispatch(addSubCategory({
        categoryId: cardData.id,
        subCategory: newSubCategory,
      }));
      onClose();
    } else if (formMode === 'edit-sub') {
      // Update Sub Category
      const updatedSubCategory = {
        ...cardData,
        ...values,
      };
      dispatch(updateSubCategory({
        categoryId: parentCategoryId,
        subCategory: updatedSubCategory,
      }));
      onClose();
    } else {
      // Edit Category
      dispatch(updateCategory({
        ...cardData,
        ...values,
      }));
      onClose();
    }
  };

  // Disable handler (for demo, just closes form)
  const handleDisable = () => {
    // You can implement disable logic as needed
    onClose();
  };

  // Delete handler
  const handleDelete = () => {
    if (formMode === 'edit-sub') {
      dispatch(deleteSubCategory({
        categoryId: parentCategoryId,
        subCategoryId: cardData.id,
      }));
    } else {
      dispatch(deleteCategory(cardData.id));
    }
    onClose();
  };

  return {
    handleFinish,
    handleDisable,
    handleDelete,
  };
};

export default useFormLogic; 