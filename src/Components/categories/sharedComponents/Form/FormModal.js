import React, { useEffect, useState } from 'react';
import { Drawer } from 'antd';
import FormBody from './FormBody';

const FormModal = ({ visible, onClose, cardData }) => {
  const [drawerWidth, setDrawerWidth] = useState(600);

  useEffect(() => {
    const handleResize = () => {
      setDrawerWidth(window.innerWidth < 640 ? '100vw' : 600);
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Drawer
      open={visible}
      onClose={onClose}
      width={drawerWidth}
      placement="right"
      bodyStyle={{ padding: 0 }}
      closable={false}
      rootClassName="custom-rounded-drawer"
    >
      <FormBody cardData={cardData} onClose={onClose} />
    </Drawer>
  );
};

export default FormModal; 