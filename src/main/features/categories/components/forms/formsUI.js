import React from 'react';
import { Form, Input, Button } from 'antd';
import { UserOutlined, FileTextOutlined, NumberOutlined, CloseOutlined } from '@ant-design/icons';

const { TextArea } = Input;

const FormsUI = ({
  cardData = {},
  onClose,
  onAddSubCategory,
  onDeleteSubCategory,
  onDisableSubCategory,
  onUpdateCategory,
  onFinish,
  color = '#1677ff',
  labelStyle = {},
}) => (
  <div className="max-w-3xl w-full mx-auto px-4 md:px-8 overflow-hidden mt-2">
    <div className="bg-white rounded-tl-[3rem] p-4 flex items-center justify-between" style={{ borderTopLeftRadius: '3rem' }}>
      <h2 className="text-xl font-bold mb-0" style={{ color, textAlign: 'left' }}>Edit Category</h2>
      <button
        onClick={onClose}
        style={{ background: 'transparent', border: 'none', cursor: 'pointer', padding: 0, marginLeft: 16 }}
        aria-label="Close"
      >
        <CloseOutlined style={{ fontSize: 20, color: '#888' }} />
      </button>
    </div>
    <div className="bg-gray-50 p-4">
      <Form
        key={cardData.name + (cardData.parent || '')}
        layout="vertical"
        initialValues={{
          index: cardData?.index || 0,
          name: cardData?.name || '',
          shortDescription: cardData?.shortDescription || '',
          description: cardData?.description || '',
        }}
        onFinish={onFinish}
      >
        {cardData.parent && (
          <Form.Item label={<span style={labelStyle}>Category</span>} name="parent" className="mb-5">
            <Input value={cardData.parent} disabled className="rounded-lg" />
          </Form.Item>
        )}
        <Form.Item label={<span style={labelStyle}>Index No</span>} name="index" rules={[{ required: true }]} className="mb-5">
          <Input prefix={<NumberOutlined />} disabled className="rounded-lg w-full" />
        </Form.Item>
        <Form.Item label={<span style={labelStyle}>Name</span>} name="name" rules={[{ required: true }]} className="mb-5">
          <Input prefix={<UserOutlined />} className="rounded-lg w-full" />
        </Form.Item>
        <Form.Item label={<span style={labelStyle}>Short Description</span>} name="shortDescription" rules={[
          { required: true },
          { max: 200, message: 'Maximum 200 characters allowed.' }
        ]} className="mb-5">
          <Input prefix={<FileTextOutlined />} className="rounded-lg w-full" maxLength={200} />
        </Form.Item>
        <Form.Item label={<span style={labelStyle}>Description</span>} name="description" rules={[
          { max: 500, message: 'Maximum 500 characters allowed.' }
        ]} className="mb-6">
          <TextArea rows={4} className="rounded-lg w-full" maxLength={500} />
        </Form.Item>
        <Form.Item>
          <div className="flex flex-row gap-3 mt-4 justify-start">
            <Button type="primary" size="small" htmlType="submit" style={{ backgroundColor: color, borderColor: color }}>
              Save
            </Button>
            <Button size="small" ghost style={{ color, borderColor: color }} onClick={onDisableSubCategory}>
              Disable
            </Button>
            <Button danger size="small" onClick={onDeleteSubCategory}>
              Delete
            </Button>
          </div>
        </Form.Item>
      </Form>
    </div>
  </div>
);

export default FormsUI; 