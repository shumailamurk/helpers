import React from 'react';
import { Column } from '@ant-design/charts';

const data = [
  { day: '01', calls: 0 },
  { day: '02', calls: 0 },
  // ... add more days as needed
  { day: '30', calls: 0 },
];

const config = {
  data,
  xField: 'day',
  yField: 'calls',
  color: '#F59E42',
  columnWidthRatio: 0.8,
  xAxis: {
    label: { autoHide: true, autoRotate: false },
  },
  yAxis: {
    label: { formatter: (v) => `${v}k` },
  },
  meta: {
    calls: { alias: 'Number of calls' },
    day: { alias: 'Day' },
  },
  height: 300,
  tooltip: { showMarkers: false },
  interactions: [{ type: 'active-region' }],
};

const CallsChart = () => <Column {...config} />;

export default CallsChart;
