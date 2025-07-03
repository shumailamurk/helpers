import React from 'react'
import TableUI from './Components/serviceTable'
import { Typography } from 'antd';
import { useTheme } from '../../../ThemeContext';
import { useSelector } from 'react-redux';
import { selectServices } from './Action/serviceSlice';

const Services = () => {
  const { color } = useTheme();
  const data = useSelector(selectServices);
  return (
    <div style={{ marginTop: 32 }}>
      <Typography.Title level={3} style={{ color, marginBottom: 20, fontWeight: 700, fontSize: '1.15rem', lineHeight: 1.1 }}>
        Services
      </Typography.Title>
      <div style={{ marginTop: 12 }}>
        <TableUI data={data} />
      </div>
    </div>
  )
}

export default Services 