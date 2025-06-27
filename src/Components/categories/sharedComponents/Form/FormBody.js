import React from 'react';
import FormFields from './FormFields';
import { useTheme } from '../../../../ThemeContext';

const FormBody = ({ cardData }) => {
  const { color } = useTheme();
  return (
    <div className="max-w-xl mx-auto overflow-hidden mt-8">
      <div className="bg-white rounded-tl-2xl p-4">
        <h2
          className="text-xl font-bold mb-2"
          style={{ color, textAlign: 'left' }}
        >
          Edit Category
        </h2>
      </div>
      <div className="bg-gray-50 p-4">
        <FormFields cardData={cardData} />
      </div>
    </div>
  );
};

export default FormBody; 