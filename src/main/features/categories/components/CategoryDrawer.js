import React from 'react';
import { Drawer } from 'antd';
import FormsUI from './forms/formsUI';

const CategoryDrawer = ({ open, onClose, selectedCard, formMode, parentCategoryId }) => (
  <Drawer
    title={null}
    placement="right"
    onClose={onClose}
    open={open}
    width={500}
    closable={false}
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

export default CategoryDrawer; 