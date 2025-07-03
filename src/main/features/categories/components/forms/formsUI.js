import React from 'react';
import { Form, Input, Button } from 'antd';
import { UserOutlined, FileTextOutlined, NumberOutlined, CloseOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { addSubCategory, updateCategory, deleteCategory, updateSubCategory, deleteSubCategory } from '../../Actions/reduxSlices';
import './formsUI.css';

const { TextArea } = Input;

const FormsUI = ({
  cardData = {},
  onClose,
  formMode = 'edit',
  color = '#1677ff',
  parentCategoryId = null,
}) => {
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

  return (
    <div className="form-drawer-container">
      <div className="form-header-row">
        <span className="form-heading">
          {formMode === 'add' ? 'Add Sub Category' : 'Edit Category'}
        </span>
        <button className="form-close-btn" onClick={onClose} aria-label="Close">
          <CloseOutlined />
      </button>
    </div>
    <div className="bg-gray-50 p-4">
      <Form
          key={formMode + (cardData.name || '')}
        layout="vertical"
        initialValues={{
          index: cardData?.index || 0,
            name: formMode === 'add' ? '' : cardData?.name || '',
            shortDescription: formMode === 'add' ? '' : cardData?.shortDescription || '',
            description: formMode === 'add' ? '' : cardData?.description || '',
        }}
          onFinish={handleFinish}
      >
        {cardData.parent && (
            <Form.Item label={<span className="form-drawer-label">Category</span>} name="parent" className="mb-5">
            <Input value={cardData.parent} disabled className="rounded-lg" />
          </Form.Item>
        )}
          <Form.Item label={<span className="form-drawer-label">Index No</span>} name="index" rules={[{ required: true }]} className="mb-5">
          <Input prefix={<NumberOutlined />} disabled className="rounded-lg w-full" />
        </Form.Item>
          <Form.Item label={<span className="form-drawer-label">Name</span>} name="name" rules={[{ required: true }]} className="mb-5">
          <Input prefix={<UserOutlined />} className="rounded-lg w-full" />
        </Form.Item>
          <Form.Item label={<span className="form-drawer-label">Short Description</span>} name="shortDescription" rules={[
          { required: true },
          { max: 200, message: 'Maximum 200 characters allowed.' }
        ]} className="mb-5">
          <Input prefix={<FileTextOutlined />} className="rounded-lg w-full" maxLength={200} />
        </Form.Item>
          <Form.Item label={<span className="form-drawer-label">Description</span>} name="description" rules={[
          { max: 500, message: 'Maximum 500 characters allowed.' }
        ]} className="mb-6">
          <TextArea rows={4} className="rounded-lg w-full" maxLength={500} />
        </Form.Item>
        <Form.Item>
          <div className="flex flex-row gap-3 mt-4 justify-start">
              <Button type="primary" size="small" htmlType="submit">
              Save
            </Button>
              <Button size="small" ghost onClick={handleDisable}>
              Disable
            </Button>
              <Button danger size="small" onClick={handleDelete}>
              Delete
            </Button>
          </div>
        </Form.Item>
      </Form>
    </div>
  </div>
);
};

export default FormsUI; 