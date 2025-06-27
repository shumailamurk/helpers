import React from 'react';
import { Table } from 'antd';
import { useTheme } from '../../../ThemeContext';

const columns = [
  {
    title: 'Index No',
    dataIndex: 'index',
    key: 'index',
    sorter: (a, b) => a.index - b.index,
    width: 90,
  },
  {
    title: 'Service Name',
    dataIndex: 'serviceName',
    key: 'serviceName',
    sorter: (a, b) => a.serviceName.localeCompare(b.serviceName),
  },
  {
    title: 'Sub Category',
    dataIndex: 'subCategory',
    key: 'subCategory',
    sorter: (a, b) => a.subCategory.localeCompare(b.subCategory),
  },
  {
    title: 'Category',
    dataIndex: 'category',
    key: 'category',
    sorter: (a, b) => a.category.localeCompare(b.category),
    render: (text) => <b>{text}</b>,
  },
  {
    title: 'Survey Required',
    dataIndex: 'surveyRequired',
    key: 'surveyRequired',
    sorter: (a, b) => a.surveyRequired.localeCompare(b.surveyRequired),
  },
  {
    title: 'Description',
    dataIndex: 'description',
    key: 'description',
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    sorter: (a, b) => a.status.localeCompare(b.status),
  },
];

// Generate 30 dummy rows for 3 pages
const data = Array.from({ length: 30 }).map((_, i) => {
  const idx = i + 1;
  return {
    key: idx,
    index: idx,
    serviceName: [
      'IPA Based Treatment',
      'Bed',
      'Window & Curtain',
      'Quickbook',
      'Repair',
      'Dismantling',
      'Deep Clean',
      'Fan',
      'Pipe Fix',
      'AC Service',
    ][i % 10],
    subCategory: [
      'IPA Based Treatment',
      'Bed',
      'Window & Curtain',
      'Quickbook',
      'Other',
      'Split Non - Inverter',
      'Deep Freezer Inverter',
      'Fan',
      'Pipe',
      'Standing Inverter',
    ][i % 10],
    category: [
      'Disinfection',
      'Carpentry',
      'Carpentry',
      'Carpentry',
      'Refrigerator',
      'Air Conditioner',
      'Refrigerator',
      'Electrical',
      'Plumbing',
      'Air Conditioner',
    ][i % 10],
    surveyRequired: 'No',
    description: `${[
      'Disinfection',
      'Carpentry',
      'Carpentry',
      'Carpentry',
      'Refrigerator',
      'Air Conditioner',
      'Refrigerator',
      'Electrical',
      'Plumbing',
      'Air Conditioner',
    ][i % 10]} - ${[
      'IPA Based',
      'Bed',
      'Window & Curtain',
      'Quick Book',
      'Other',
      'Split Non - Inverter',
      'Deep Freezer Inverter',
      'Fan',
      'Pipe',
      'Standing Inverter',
    ][i % 10]}`,
    status: 'Available',
  };
});

const CustomTable = () => {
  const { color } = useTheme();

  // Zebra striping and ultra-thin rows
  const rowClassName = (record, index) =>
    `${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} text-xs font-medium`;

  return (
    <div className="p-6">
      <h2 className="font-bold mb-6 text-2xl" style={{ color }}>Services</h2>
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <Table
          columns={columns.map(col => ({
            ...col,
            onHeaderCell: () => ({
              style: col.title ? { background: color, color: '#fff', fontWeight: 700, fontSize: 16, border: 'none' } : {},
            }),
            className: 'text-xs font-medium',
            onCell: () => ({ className: 'py-0', style: { paddingTop: 0, paddingBottom: 0, height: 20 } }),
          }))}
          dataSource={data}
          pagination={{ pageSize: 10, className: 'mt-4' }}
          bordered={false}
          rowClassName={rowClassName}
          scroll={{ x: 'max-content' }}
          locale={{
            emptyText: (
              <div className="py-8 text-gray-400 flex flex-col items-center">
                <span style={{ fontSize: 48 }}>📄</span>
                <div className="mt-2">No data</div>
              </div>
            ),
          }}
          style={{ borderRadius: 16 }}
        />
      </div>
    </div>
  );
};

export default CustomTable;