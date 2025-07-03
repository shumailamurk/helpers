import React, { useState } from 'react';
import { Layout, Menu, Button, Dropdown, Typography, Select } from 'antd';
import {
  DashboardOutlined,
  AppstoreOutlined,
  KeyOutlined,
  ProfileOutlined,
  FileTextOutlined,
  PhoneOutlined,
  MessageOutlined,
  UserOutlined,
  TeamOutlined,
  UsergroupAddOutlined,
  CreditCardOutlined,
  DollarCircleOutlined,
  SlidersOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined
} from '@ant-design/icons';
import { Link, useLocation } from 'react-router-dom';
import { useTheme, themeColors } from '../../src/ThemeContext';
import logo from'../assests/helper_logo_mini.png';

const { Sider } = Layout;
const { Title } = Typography;

const menuItems = [
  {
    key: 'menu-label',
    type: 'group',
    label: <span style={{ color: '#888', fontSize: 12, letterSpacing: 1 }}>MENU</span>,
    children: [
      {
        key: '/dashboard',
        icon: <DashboardOutlined />,
        label: <Link to="/dashboard">Dashboard</Link>,
      },
      {
        key: '/categories',
        icon: <AppstoreOutlined />,
        label: <Link to="/categories">Categories</Link>,
      },
      {
        key: '/services',
        icon: <KeyOutlined />,
        label: <Link to="/services">Services</Link>,
      },
      {
        key: '/pricelist',
        icon: <ProfileOutlined />,
        label: <Link to="/pricelist">Price List</Link>,
      },
      {
        key: '/jobrequests',
        icon: <ProfileOutlined />,
        label: <Link to="/jobrequests">Job Requests</Link>,
      },
      {
        key: '/servicerequests',
        icon: <ProfileOutlined />,
        label: <Link to="/servicerequests">Service Requests</Link>,
      },
      {
        key: '/payments',
        icon: <FileTextOutlined />,
        label: <Link to="/payments">Payments</Link>,
      },
      {
        key: '/invoices',
        icon: <FileTextOutlined />,
        label: <Link to="/invoices">Invoices</Link>,
      },
      {
        key: '/netamount',
        icon: <FileTextOutlined />,
        label: <Link to="/netamount">Net Amount</Link>,
      },
      {
        key: '/leadlogs',
        icon: <PhoneOutlined />,
        label: <Link to="/leadlogs">Lead Logs</Link>,
      },
      {
        key: '/chats',
        icon: <MessageOutlined />,
        label: <Link to="/chats">Chats</Link>,
      },
      {
        key: '/users',
        icon: <UserOutlined />,
        label: <Link to="/users">Users</Link>,
      },
      {
        key: '/workers',
        icon: <TeamOutlined />,
        label: <Link to="/workers">Workers</Link>,
      },
      {
        key: '/customers',
        icon: <UsergroupAddOutlined />,
        label: <Link to="/customers">Customers</Link>,
      },
      {
        key: '/advertisements',
        icon: <CreditCardOutlined />,
        label: <Link to="/advertisements">Advertisements</Link>,
      },
    ],
  },
  {
    key: 'admin-label',
    type: 'group',
    label: <span style={{ color: '#888', fontSize: 12, letterSpacing: 1 }}>ADMINISTRATION</span>,
    children: [
      {
        key: '/campaigns',
        icon: <DollarCircleOutlined />,
        label: <Link to="/campaigns">Campaigns</Link>,
      },
      {
        key: '/surveyforms',
        icon: <ProfileOutlined />,
        label: <Link to="/surveyforms">Survey Forms</Link>,
      },
      {
        key: '/twcharges',
        icon: <SlidersOutlined />,
        label: <Link to="/twcharges">TW Charges</Link>,
      },
      {
        key: '/skills',
        icon: <SlidersOutlined />,
        label: <Link to="/skills">Skills</Link>,
      },
      {
        key: '/areas',
        icon: <SlidersOutlined />,
        label: <Link to="/areas">Areas</Link>,
      },
      {
        key: '/company',
        icon: <SlidersOutlined />,
        label: <Link to="/company">Company</Link>,
      },
      {
        key: '/version',
        icon: <SlidersOutlined />,
        label: <Link to="/version">Version</Link>,
      },
      {
        key: '/invoicemessage',
        icon: <SlidersOutlined />,
        label: <Link to="/invoicemessage">Invoice Message</Link>,
      },
    ],
  },
];

const AppSidebar = () => {
  const location = useLocation();
  const selectedKeys = [location.pathname];
  const [collapsed, setCollapsed] = useState(false);
  const { color, setColor } = useTheme();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <Sider
      width={240}
      collapsedWidth={60}
      collapsed={collapsed}
      onCollapse={setCollapsed}
      style={{ minHeight: '100vh', background: '#fff', boxShadow: '2px 0 8px rgba(0,0,0,0.08)' }}
    >
      <div className={`flex items-center w-full ${collapsed ? 'justify-center pt-6 pb-2' : 'justify-start pt-6 pb-2 pl-6 pr-4'} mb-2`}>
        <img src={logo} alt="logo" className={`h-10 w-10 ${collapsed ? '' : ''}`} />
        {!collapsed && (
          <span className="text-2xl font-extrabold tracking-tight ml-0.5" style={{ letterSpacing: '-2px' }}>
            elpers
          </span>
        )}
      </div>
      <div
        className={`flex items-center w-full ${collapsed ? 'justify-center pt-2 pb-2' : 'justify-between pt-2 pb-2 pl-6 pr-4'}`}
      >
        <Button
          type="text"
          icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          onClick={() => setCollapsed(!collapsed)}
          style={{ fontSize: 20 }}
        />
      </div>
      {!collapsed && (
        <div className="pl-6 mb-4">
          <span className="text-xs text-gray-400 uppercase tracking-wider">Theme</span>
        </div>
      )}
      <div style={{ padding: collapsed ? '0 0 16px 0' : '0 24px 16px 24px', display: 'flex', justifyContent: collapsed ? 'center' : 'flex-start' }} className="mb-8 mt-4">
        {!collapsed ? (
          <Select
            value={color}
            onChange={setColor}
            style={{ width: '100%' }}
            options={themeColors.map(c => ({
              label: (
                <span style={{ display: 'flex', alignItems: 'center' }}>
                  <span style={{ display: 'inline-block', width: 16, height: 16, borderRadius: '50%', background: c.value, marginRight: 8, border: '1px solid #e5e7eb' }} />
                  {c.label}
                </span>
              ),
              value: c.value,
            }))}
          />
        ) : (
          <Dropdown
            trigger={['click']}
            open={dropdownOpen}
            onOpenChange={setDropdownOpen}
            overlay={
              <div style={{ padding: 8, background: '#fff', borderRadius: 8, boxShadow: '0 2px 8px rgba(0,0,0,0.15)' }}>
                <Select
                  value={color}
                  onChange={value => {
                    setColor(value);
                    setDropdownOpen(false);
                  }}
                  style={{ width: 120 }}
                  dropdownStyle={{ minWidth: 120 }}
                  options={themeColors.map(c => ({
                    label: (
                      <span style={{ display: 'flex', alignItems: 'center' }}>
                        <span style={{ display: 'inline-block', width: 16, height: 16, borderRadius: '50%', background: c.value, marginRight: 8, border: '1px solid #e5e7eb' }} />
                        {c.label}
                      </span>
                    ),
                    value: c.value,
                  }))}
                />
              </div>
            }
            placement="right"
            arrow
          >
            <Button
              type="text"
              style={{ padding: 0, height: 32, width: 32, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
              <span style={{ display: 'inline-block', width: 20, height: 20, borderRadius: '50%', background: color, border: '1px solid #e5e7eb' }} />
            </Button>
          </Dropdown>
        )}
      </div>
      <Menu
        mode="inline"
        selectedKeys={selectedKeys}
        defaultOpenKeys={['menu-label', 'admin-label']}
        style={{ borderRight: 0, background: '#fff' }}
        items={menuItems}
        theme="light"
      />
    </Sider>
  );
};

export default AppSidebar; 