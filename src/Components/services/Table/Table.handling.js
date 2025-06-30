import React from 'react';
import { Table, Input, Tag } from 'antd';
import { useTheme } from '../../../ThemeContext';
import { useTableData } from './Table.logic';
import { SearchOutlined } from '@ant-design/icons';
import { fetchCategories } from '../../../Components/categories/sharedComponents/categoryDataService';

const { Search } = Input;

const WhiteSortIcon = () => (
  <svg width="1.5em" height="1.5em" fill="white" viewBox="0 0 1024 1024">
    <path d="M512 128l320 320H192zM512 896l-320-320h640z" />
  </svg>
);

const TableHandling = () => {
  const { color } = useTheme();
  const { dataSource, searchText, setSearchText } = useTableData();

  const columns = [
    {
      title: <span className="text-white font-semibold text-xs uppercase tracking-wide">Index No</span>,
      dataIndex: 'indexNo',
      key: 'indexNo',
      width: 90,
      sorter: (a, b) => a.indexNo - b.indexNo,
      sortIcon: () => <WhiteSortIcon />,
    },
    {
      title: <span className="text-white font-semibold text-xs uppercase tracking-wide">Service Name</span>,
      dataIndex: 'serviceName',
      key: 'serviceName',
      width: 180,
    },
    {
      title: <span className="text-white font-semibold text-xs uppercase tracking-wide">Sub Category</span>,
      dataIndex: 'subCategory',
      key: 'subCategory',
      width: 160,
    },
    {
      title: <span className="text-white font-semibold text-xs uppercase tracking-wide">Category</span>,
      dataIndex: 'category',
      key: 'category',
      width: 140,
    },
    {
      title: <span className="text-white font-semibold text-xs uppercase tracking-wide">Survey Required</span>,
      dataIndex: 'surveyRequired',
      key: 'surveyRequired',
      width: 140,
    },
    {
      title: <span className="text-white font-semibold text-xs uppercase tracking-wide">Description</span>,
      dataIndex: 'description',
      key: 'description',
      width: 220,
    },
    {
      title: <span className="text-white font-semibold text-xs uppercase tracking-wide">Status</span>,
      dataIndex: 'status',
      key: 'status',
      width: 120,
      render: (text) => {
        let style = {};
        let displayText = text;

        if (text === 'Available' || text === 'Approved') {
          style = {
            background: '#B7F5C5',
            color: '#389e5f',
            borderRadius: 6,
            fontWeight: 500,
            padding: '2px 16px',
            fontSize: 15,
            border: 'none',
            display: 'inline-block',
          };
        } else if (text === 'Admitted') {
          style = {
            background: '#C7D8F6',
            color: '#3b5998',
            borderRadius: 6,
            fontWeight: 500,
            padding: '2px 16px',
            fontSize: 15,
            border: 'none',
            display: 'inline-block',
          };
        } else if (text === 'Discharged') {
          style = {
            background: '#B7F5C5',
            color: '#389e5f',
            borderRadius: 6,
            fontWeight: 500,
            padding: '2px 16px',
            fontSize: 15,
            border: 'none',
            display: 'inline-block',
          };
        } else if (text === 'Under Treatment') {
          style = {
            background: '#FFF7CC',
            color: '#b59b2a',
            borderRadius: 6,
            fontWeight: 500,
            padding: '2px 16px',
            fontSize: 15,
            border: 'none',
            display: 'inline-block',
          };
        }

        return <span style={style}>{displayText}</span>;
      },
    },
  ];

  return (
    <div className="p-4 bg-white rounded-xl shadow-md">
      <h2 className="text-2xl font-bold mb-4" style={{ color }}>Services</h2>
      <div className="mb-4 flex justify-start">
        <Input
          placeholder="Search"
          prefix={<SearchOutlined style={{ color: '#7b8794', fontSize: 16 }} />}
          style={{
            width: 200,
            height: 36,
            background: '#f3f3f3',
            borderRadius: 10,
            border: '2px solid #d1d5db',
            fontSize: 16,
            color: '#9ca3af',
            fontWeight: 400,
            paddingLeft: 12
          }}
          size="large"
          value={searchText}
          onChange={e => setSearchText(e.target.value)}
        />
      </div>
      <Table
        dataSource={dataSource}
        columns={columns}
        pagination={{ pageSize: 10 }}
        bordered
        scroll={{ x: 'max-content' }}
        rowClassName={(record, index) => index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
        style={{ background: 'white', borderRadius: '1rem' }}
        components={{
          header: {
            cell: (props) => (
              <th
                {...props}
                style={{ 
                  backgroundColor: color,
                  border: 'none',
                  borderRight: '2px solid white',
                  padding: '4px 12px',
                  fontSize: '8px',
                  fontWeight: 'normal',
                  textTransform: 'uppercase',
                  color: 'white',
                  ...(props.className?.includes('first') && { borderTopLeftRadius: '8px' }),
                  ...(props.className?.includes('last') && { borderTopRightRadius: '8px', borderRight: 'none' })
                }}
                className={`
                  ${props.className || ''}
                `}
              >
                {props.children}
              </th>
            ),
            row: (props) => (
              <tr
                {...props}
                style={{ backgroundColor: color }}
                className={`${props.className || ''}`}
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