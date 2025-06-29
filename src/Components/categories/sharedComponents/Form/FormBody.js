import React from 'react';
import { CloseOutlined } from '@ant-design/icons';
import FormFields from './FormFields';
import { useTheme } from '../../../../ThemeContext';

const FormBody = ({ cardData, onClose }) => {
  const { color } = useTheme();
  return (
    <div className="max-w-3xl w-full mx-auto px-4 md:px-8 overflow-hidden mt-2">
      <div className="bg-white rounded-tl-[3rem] p-4 flex items-center justify-between" style={{ borderTopLeftRadius: '3rem' }}>
        <h2
          className="text-xl font-bold mb-0"
          style={{ color, textAlign: 'left' }}
        >
          Edit Category
        </h2>
        <button
          onClick={onClose}
          style={{
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
            padding: 0,
            marginLeft: 16,
          }}
          aria-label="Close"
        >
          <CloseOutlined style={{ fontSize: 20, color: '#888' }} />
        </button>
      </div>
      <div className="bg-gray-50 p-4">
        <FormFields cardData={cardData} />
      </div>
    </div>
  );
};

export default FormBody; 