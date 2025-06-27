import React from 'react';
import { Drawer } from 'antd';
import FormBody from './FormBody';

const FormModal = ({ visible, onClose, cardData }) => {
  return (
    <Drawer
      open={visible}
      onClose={onClose}
      width={600}
      placement="right"
      bodyStyle={{ padding: 0 }}
      closable={false}
    >
      <FormBody cardData={cardData} />
    </Drawer>
  );
};

export default FormModal; 