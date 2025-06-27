import React from 'react';
import { Form, Input, Button } from 'antd';
import { UserOutlined, FileTextOutlined, NumberOutlined } from '@ant-design/icons';
import { useTheme } from '../../../../ThemeContext';

const { TextArea } = Input;

const FormFields = ({ cardData }) => {
  const { color } = useTheme();
  const labelStyle = {
    fontWeight: 600,
    color,
    fontSize: 16,
  };

  return (
    <Form
      layout="vertical"
      initialValues={{
        index: cardData?.index || 0,
        name: cardData?.name || '',
        shortDescription: cardData?.shortDescription || '',
        description: cardData?.description || '',
      }}
    >
      <Form.Item
        label={<span style={labelStyle}>Index No</span>}
        name="index"
        rules={[{ required: true }]}
        className="mb-5"
      >
        <Input prefix={<NumberOutlined />} disabled className="rounded-lg" />
      </Form.Item>
      <Form.Item
        label={<span style={labelStyle}>Name</span>}
        name="name"
        rules={[{ required: true }]}
        className="mb-5"
      >
        <Input prefix={<UserOutlined />} className="rounded-lg" />
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
        <Input prefix={<FileTextOutlined />} className="rounded-lg" maxLength={200} />
      </Form.Item>
      <Form.Item
        label={<span style={labelStyle}>Description</span>}
        name="description"
        rules={[
          { max: 500, message: 'Maximum 500 characters allowed.' }
        ]}
        className="mb-6"
      >
        <TextArea rows={4} className="rounded-lg" maxLength={500} />
      </Form.Item>
      <Form.Item>
        <div className="flex flex-row gap-3 mt-4 justify-start">
          <Button type="primary" size="small" style={{ backgroundColor: color, borderColor: color }}>
            Save
          </Button>
          <Button size="small" ghost style={{ color, borderColor: color }}>
            Disable
          </Button>
          <Button danger size="small">
            Delete
          </Button>
        </div>
      </Form.Item>
    </Form>
  );
};

export default FormFields; 