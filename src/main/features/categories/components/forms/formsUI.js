import React from 'react';
import { Form, Input, Button } from 'antd';
import { UserOutlined, FileTextOutlined, NumberOutlined, CloseOutlined } from '@ant-design/icons';
import { useTheme } from '../../../../../ThemeContext';
import useFormLogic from './FormLogic';

const { TextArea } = Input;

const FormsUI = ({
  cardData = {},
  onClose,
  formMode = 'edit',
  color = '#1677ff',
  parentCategoryId = null,
}) => {
  const { color: themeColor } = useTheme();
  const { handleFinish, handleDisable, handleDelete } = useFormLogic(cardData, onClose, formMode, parentCategoryId);

  return (
    <>
      {/* Header Bar */}
      <div className="bg-white w-full flex items-center justify-between px-10 py-2 mt-4">
        <h2 className="text-xl font-bold text-left m-0" style={{ color: themeColor }}>
          {formMode === 'add' ? 'Add Sub Category' : 'Edit Category'}
        </h2>
        <button
          onClick={onClose}
          className="bg-transparent border-none cursor-pointer p-0"
          aria-label="Close"
        >
          <CloseOutlined style={{ fontSize: 22, color: '#888' }} />
        </button>
      </div>
      <div className="w-full border-b border-gray-200" />
      {/* Form Area */}
      <div className="w-full bg-gray-100 px-4 sm:px-8 lg:px-10 pt-10 pb-10 max-w-2xl mx-auto">
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
            <Form.Item label={<span className="text-base font-semibold text-gray-700">Category</span>} name="parent" className="mb-6">
              <Input value={cardData.parent} disabled className="rounded-lg" />
            </Form.Item>
          )}
          <Form.Item label={<span className="text-base font-semibold text-gray-700">Index No</span>} name="index" rules={[{ required: true }]} className="mb-6">
            <Input prefix={<NumberOutlined />} disabled className="rounded-lg w-full" />
          </Form.Item>
          <Form.Item
            label={<span className="text-base font-semibold text-gray-700">Name</span>}
            name="name"
            rules={[{ required: true }]}
            className="mb-6"
          >
            <Input prefix={<UserOutlined />} className="rounded-lg w-full" />
          </Form.Item>
          <Form.Item label={<span className="text-base font-semibold text-gray-700">Short Description</span>} name="shortDescription" rules={[
            { required: true },
            { max: 200, message: 'Maximum 200 characters allowed.' }
          ]} className="mb-6">
            <Input prefix={<FileTextOutlined />} className="rounded-lg w-full" maxLength={200} />
            <div className="text-xs text-gray-400 text-right mt-1">0 / 200</div>
          </Form.Item>
          <Form.Item label={<span className="text-base font-semibold text-gray-700">Description</span>} name="description" rules={[
            { max: 500, message: 'Maximum 500 characters allowed.' }
          ]} className="mb-8">
            <TextArea rows={4} className="rounded-lg w-full" maxLength={500} />
            <div className="text-xs text-gray-400 text-right mt-1">0 / 500</div>
          </Form.Item>
          <Form.Item>
            <div className="flex gap-4 justify-start mt-4">
              <Button type="primary" size="small" htmlType="submit" style={{ backgroundColor: themeColor, borderColor: themeColor }}>
                Save
              </Button>
              <Button size="small" ghost style={{ color: themeColor, borderColor: themeColor }} onClick={handleDisable}>
                Disable
              </Button>
              <Button danger size="small" onClick={handleDelete}>
                Delete
              </Button>
            </div>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};

export default FormsUI; 