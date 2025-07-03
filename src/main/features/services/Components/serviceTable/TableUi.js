import React from 'react';
import { Table, Input } from 'antd';
import './table.css';
import UseServiceTableLogic from './UseServiceTableLogic';
import columns from './ServiceTableColumns';

const TableUI = ({ data = [] }) => {
  const { searchText, setSearchText, filteredData } = UseServiceTableLogic(data);

  return (
    <div className="service-table-wrapper">
      <div className="table-searchbar-row">
        <Input.Search
          placeholder="Search by any field..."
          allowClear
          onChange={e => setSearchText(e.target.value)}
          style={{ width: 320, marginBottom: 16, float: 'right' }}
        />
      </div>
      <Table
        columns={columns}
        dataSource={filteredData}
        rowKey={(record, i) => i}
        pagination={{ pageSize: 10, position: ['bottomLeft'] }}
        className="service-table"
        scroll={false}
        size="middle"
       
      />
    </div>
  );
};

export default TableUI; 