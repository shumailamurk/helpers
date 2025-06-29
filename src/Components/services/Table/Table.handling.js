import React from 'react';
import { Table, Input } from 'antd';
import { useTheme } from '../../../ThemeContext';
import { useTableData } from './Table.logic';


const { Search } = Input;

const WhiteSortIcon = () => (
  <svg width="1em" height="1em" fill="white" viewBox="0 0 1024 1024">
    <path d="M512 128l320 320H192zM512 896l-320-320h640z" />
  </svg>
);

const TableHandling = () => {
  const { color } = useTheme();
  const { dataSource, searchText, setSearchText } = useTableData();

  const columns = [
    {
      title: <span className="text-white font-semibold text-sm uppercase tracking-wide">Index No</span>,
      dataIndex: 'indexNo',
      key: 'indexNo',
      width: 90,
      sorter: (a, b) => a.indexNo - b.indexNo,
      sortIcon: () => <WhiteSortIcon />,
    },
    {
      title: <span className="text-white font-semibold text-sm uppercase tracking-wide">Service Name</span>,
      dataIndex: 'serviceName',
      key: 'serviceName',
      width: 180,
    },
    {
      title: <span className="text-white font-semibold text-sm uppercase tracking-wide">Sub Category</span>,
      dataIndex: 'subCategory',
      key: 'subCategory',
      width: 160,
    },
    {
      title: <span className="text-white font-semibold text-sm uppercase tracking-wide">Category</span>,
      dataIndex: 'category',
      key: 'category',
      width: 140,
    },
    {
      title: <span className="text-white font-semibold text-sm uppercase tracking-wide">Survey Required</span>,
      dataIndex: 'surveyRequired',
      key: 'surveyRequired',
      width: 140,
    },
    {
      title: <span className="text-white font-semibold text-sm uppercase tracking-wide">Description</span>,
      dataIndex: 'description',
      key: 'description',
      width: 220,
    },
    {
      title: <span className="text-white font-semibold text-sm uppercase tracking-wide">Status</span>,
      dataIndex: 'status',
      key: 'status',
      width: 100,
      render: (text) => <span className="text-green-600 font-semibold">{text}</span>,
    },
  ];

  const customTableHeader = {
    background: color,
    borderTopLeftRadius: '1rem',
    borderTopRightRadius: '1rem',
  };

  return (
    <div className="p-4 bg-white rounded-xl shadow-md">
      <h2 className="text-3xl font-bold mb-4" style={{ color }}>Services</h2>
      <div className="mb-2 flex justify-end">
        <Search
          placeholder="Search by Service, Sub Category, or Category"
          allowClear
          onChange={e => setSearchText(e.target.value)}
          style={{ width: 320 }}
          size="large"
        />
      </div>
      <Table
        dataSource={dataSource}
        columns={columns}
        pagination={{ pageSize: 10 }}
        bordered
        scroll={{ x: 'max-content' }}
        rowClassName={() => 'text-base'}
        style={{ background: 'white', borderRadius: '1rem' }}
        components={{
          header: {
            cell: (props) => (
              <th
                {...props}
                className={`
                  bg-teal-400 text-white text-[11px] font-normal font-montserrat
                  border-none border-r-2 border-white last:border-r-0
                  first:rounded-tl-lg last:rounded-tr-lg
                  px-2 py-1
                  uppercase
                  ${props.className || ''}
                `}
              >
                {props.children}
              </th>
            ),
            row: (props) => (
              <tr
                {...props}
                className={`bg-teal-400 ${props.className || ''}`}
              />
            ),
          },
        }}
        size="small"
      />
    </div>
  );
};

export default TableHandling; 