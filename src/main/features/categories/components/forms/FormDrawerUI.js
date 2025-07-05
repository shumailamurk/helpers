import React from 'react';
import { Drawer } from 'antd';
import FormsUI from './formsUI';

const FormDrawerUI = ({ open, onClose, selectedCard, formMode, parentCategoryId }) => (
  <Drawer
    title={null}
    placement="right"
    onClose={onClose}
    open={open}
    width={700}
    closable={false}
    bodyStyle={{ background: '#fff', padding: 0 }}
    style={{ borderRadius: '18px 0 0 18px' }}
  >
    {selectedCard && (
      <FormsUI
        cardData={selectedCard}
        onClose={onClose}
        formMode={formMode}
        parentCategoryId={parentCategoryId}
      />
    )}
  </Drawer>
);

export default FormDrawerUI; 