import React from 'react';
import { Form, Input, Button } from 'antd';
import { UserOutlined, FileTextOutlined, NumberOutlined } from '@ant-design/icons';
import { useTheme } from '../../../../../src/ThemeContext';

import 'antd/dist/reset.css';
import '../../../../../src/index.css';
import { updateCategory } from '../../../../features/categories/categoriesSlice';

const { TextArea } = Input;

const FormFields = ({ cardData, onAddSubCategory, onDeleteSubCategory, onDisableSubCategory, onUpdateCategory, onClose }) => {
  const { color } = useTheme();
  const labelStyle = {
    fontWeight: 600,
    color,
    fontSize: 16,
  };


  const dispatch = useDispatch(); 
  console.log(cardData,'cardData');

  const handleFinish = (values) => {
    if (!cardData.isUpdate && onAddSubCategory && cardData.parent && !cardData.index) {
      // Add mode
      onAddSubCategory(cardData.parent, values);
      if (onClose) onClose();
      return;
    }
    if (onUpdateCategory && cardData.isUpdate) {
      // Update main category


    dispatch(updateCategory({ ...cardData, ...updatedData, id: category.id }));
  
      // dispatch(updateCategory(cardData.name, values));
      // onUpdateCategory(cardData.name, values);
      if (onClose) onClose();
      return;
    }
    // You can add update logic for sub-category here if needed
    if (onClose) onClose();
  };

  const handleDelete = () => {
    if (onDeleteSubCategory && cardData.parent && cardData.name) {
      onDeleteSubCategory(cardData.parent, cardData.name);
    }
    if (onClose) onClose();
  };

  const handleDisable = () => {
    if (onDisableSubCategory && cardData.parent && cardData.name) {
      onDisableSubCategory(cardData.parent, cardData.name);
    }
    if (onClose) onClose();
  };

  const handleUpdateCategory = (oldName, updatedData) => {
    console.log('Updating:', oldName, updatedData);
    // ...rest of your code
  };

  return (
    <Form
      key={cardData.name + (cardData.parent || '')}
      layout="vertical"
      initialValues={{
        index: cardData?.index || 0,
        name: cardData?.name || '',
        shortDescription: cardData?.shortDescription || '',
        description: cardData?.description || '',
      }}
      onFinish={handleFinish}
    >
      {cardData.parent && (
        <Form.Item
          label={<span style={labelStyle}>Category</span>}
          name="parent"
          className="mb-5"
        >
          <Input value={cardData.parent} disabled className="rounded-lg" />
        </Form.Item>
      )}
      <Form.Item
        label={<span style={labelStyle}>Index No</span>}
        name="index"
        rules={[{ required: true }]}
        className="mb-5"
      >
        <Input prefix={<NumberOutlined />} disabled className="rounded-lg w-full" />
      </Form.Item>
      <Form.Item
        label={<span style={labelStyle}>Name</span>}
        name="name"
        rules={[{ required: true }]}
        className="mb-5"
      >
        <Input prefix={<UserOutlined />} className="rounded-lg w-full" />
      </Form.Item>
      <Form.Item
        label={<span style={labelStyle}>Short Description</span>}
        name="shortDescription"
        rules={[
          { required: true },
          { max: 200, message: 'Maximum 200 characters allowed.' }
        ]}
        className="mb-5"
      >
        <Input prefix={<FileTextOutlined />} className="rounded-lg w-full" maxLength={200} />
      </Form.Item>
      <Form.Item
        label={<span style={labelStyle}>Description</span>}
        name="description"
        rules={[
          { max: 500, message: 'Maximum 500 characters allowed.' }
        ]}
        className="mb-6"
      >
        <TextArea rows={4} className="rounded-lg w-full" maxLength={500} />
      </Form.Item>
      <Form.Item>
        <div className="flex flex-row gap-3 mt-4 justify-start">
          <Button type="primary" size="small" htmlType="submit" style={{ backgroundColor: color, borderColor: color }}>
            Save
          </Button>
          <Button size="small" ghost style={{ color, borderColor: color }} onClick={handleDisable}>
            Disable
          </Button>
          <Button danger size="small" onClick={handleDelete}>
            Delete
          </Button>
        </div>
      </Form.Item>
    </Form>
  );
};

export default FormFields; 