import React from 'react';
import { Layout, Select } from 'antd';
import logo from '../../assests/helper_logo_mini.png'

const { Header } = Layout;

const AppHeader = () => {
  return (
    <Header className="shadow-sm flex items-center h-16 sticky top-0 z-10 bg-white justify-between px-0">
      {/* Left: Logo + elpers */}
      <div className="flex items-center">
        <img
          src={logo}
          alt="logo"
          className="h-12 w-12 mt-2 ml-0"
        />
        <span
          className="text-3xl font-extrabold tracking-tight ml-0"
          style={{ letterSpacing: '-2px' }}
        >
          elpers
        </span>
      </div>
      {/* Right: Select (search bar) */}
      <div className="flex items-center">
        <Select
          defaultValue="Workwise Helpers"
          style={{
            width: 200,
            borderColor: 'var(--theme-color)',
            color: 'var(--theme-color)',
            boxShadow: 'none',
          }}
          dropdownStyle={{
            borderColor: 'var(--theme-color)',
          }}
          options={[
            { value: 'Workwise Helpers', label: 'Workwise Helpers' },
          ]}
        />
      </div>
    </Header>
  );
};

export default AppHeader; 