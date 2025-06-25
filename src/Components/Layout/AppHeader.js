import React from 'react';
import { Layout, Select } from 'antd';
import logo from '../../assests/helper_logo_mini.png'

const { Header } = Layout;

const AppHeader = () => {
  return (
    <Header className="shadow-sm flex items-center h-16 sticky top-0 z-10 bg-white justify-start px-0">
      {/* Left: Logo + elpers + Select */}
      <div className="flex items-center w-full">
        <img
          src={logo}
          alt="logo"
          className="h-10 w-10"
        />
        <span className="ml-0.5 text-2xl font-bold tracking-tight" style={{ letterSpacing: '-2px' }}>
          elpers
        </span>
        <Select
          defaultValue="Workwise Helpers"
          style={{
            width: 200,
            marginLeft: 24,
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