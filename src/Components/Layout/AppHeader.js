import React from 'react';
import { Layout, Select } from 'antd';

const { Header } = Layout;

const AppHeader = () => {
  return (
    <Header className="shadow-sm flex items-center h-16 sticky top-0 z-10 bg-white justify-end px-0">
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