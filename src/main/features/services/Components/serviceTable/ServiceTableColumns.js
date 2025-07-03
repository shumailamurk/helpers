import { Input } from 'antd';

const getColumnSearchProps = (dataIndex) => ({
  filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
    <div style={{ padding: 8 }}>
      <Input
        placeholder={`Search ${dataIndex}`}
        value={selectedKeys[0]}
        onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
        onPressEnter={confirm}
        style={{ marginBottom: 8, display: 'block' }}
      />
      <div style={{ display: 'flex', gap: 8 }}>
        <button onClick={confirm} style={{ width: 70 }}>Search</button>
        <button onClick={clearFilters} style={{ width: 70 }}>Reset</button>
      </div>
    </div>
  ),
  onFilter: (value, record) =>
    record[dataIndex]
      ? record[dataIndex].toString().toLowerCase().includes(value.toLowerCase())
      : '',
  filterSearch: true,
});

const columns = [
  {
    title: 'Index',
    dataIndex: 'index',
    key: 'index',
    width: 40,
    align: 'center',
    render: (text, record, i) => i + 1,
    sorter: (a, b) => a.index - b.index,
  },
  {
    title: 'Service Name',
    dataIndex: 'serviceName',
    key: 'serviceName',
    ...getColumnSearchProps('serviceName'),
    sorter: (a, b) => a.serviceName.localeCompare(b.serviceName),
    width: 120,
  },
  {
    title: 'Sub Category',
    dataIndex: 'subCategory',
    key: 'subCategory',
    ...getColumnSearchProps('subCategory'),
    sorter: (a, b) => a.subCategory.localeCompare(b.subCategory),
    width: 120,
  },
  {
    title: 'Category',
    dataIndex: 'category',
    key: 'category',
    ...getColumnSearchProps('category'),
    sorter: (a, b) => a.category.localeCompare(b.category),
    width: 100,
  },
  {
    title: 'Survey Required',
    dataIndex: 'surveyRequired',
    key: 'surveyRequired',
    ...getColumnSearchProps('surveyRequired'),
    sorter: (a, b) => a.surveyRequired.localeCompare(b.surveyRequired),
    width: 90,
  },
  {
    title: 'Description',
    dataIndex: 'description',
    key: 'description',
    ...getColumnSearchProps('description'),
    sorter: (a, b) => a.description.localeCompare(b.description),
    width: 160,
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    ...getColumnSearchProps('status'),
    sorter: (a, b) => a.status.localeCompare(b.status),
    width: 80,
  },
];

export default columns; 