import React from 'react'
import TableUI from './Components/serviceTable/TableUi'
import { Typography } from 'antd';
import { useTheme } from '../../../ThemeContext';
import { useSelector } from 'react-redux';
import { selectServices } from './Action/serviceSlice';
import { Drawer, Form, Input } from 'antd';

const Services = () => {
  const { color } = useTheme();
  const data = useSelector(selectServices);
  const [visible, setVisible] = React.useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <div style={{ marginTop: 32 }}>
      <Typography.Title level={3} style={{ color, marginBottom: 20, fontWeight: 700, fontSize: '1.15rem', lineHeight: 1.1 }}>
        Services
      </Typography.Title>
      <div style={{ marginTop: 12 }}>
        <TableUI data={data} />
      </div>
      <Drawer
        open={visible}
        onClose={onClose}
        width={600}
        bodyStyle={{ padding: 0, background: "#f7f7f7" }}
        headerStyle={{ display: "none" }}
      >
        <div className="bg-white rounded-xl shadow-lg p-8 m-6">
          <h2 className="text-lg font-bold text-black mb-4">Edit Category</h2>
          <Form layout="vertical" className="p-8">
            <Form.Item
              label={<span className="text-sm font-medium text-black">Name</span>}
              name="name"
            >
              <Input className="rounded-lg" />
            </Form.Item>
          </Form>
        </div>
      </Drawer>
    </div>
  )
}

export default Services 