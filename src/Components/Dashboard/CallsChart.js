import React, { useState } from 'react';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from 'recharts';

// Sample data for 30 days
const data = Array.from({ length: 30 }, (_, i) => ({
  day: (i + 1).toString().padStart(2, '0'),
  calls: 0,
}));

const CustomYAxisTick = (props) => {
  const { x, y, payload } = props;
  return (
    <text x={x} y={y} dy={4} textAnchor="end" fill="#fff" fontWeight={600} fontSize={12}>
      {payload.value}k
    </text>
  );
};

const CustomXAxisTick = (props) => {
  const { x, y, payload } = props;
  return (
    <text x={x} y={y + 10} textAnchor="middle" fill="#fff" fontWeight={600} fontSize={12}>
      {payload.value}
    </text>
  );
};

// Custom months label above X-axis
const MonthsLabels = () => (
  <g>
    <text x={320} y={50} fill="#222" fontSize={13} fontWeight={500}>APR</text>
    <text x={600} y={50} fill="#222" fontSize={13} fontWeight={500}>MAY</text>
    <text x={880} y={50} fill="#222" fontSize={13} fontWeight={500}>JUN</text>
  </g>
);

const tabs = [
  { label: 'TODAY', value: 'day' },
  { label: 'WEEK', value: 'week' },
  { label: 'MONTH', value: 'month' },
];

const CallsChart = () => {
  const [activeTab, setActiveTab] = useState('week');

  return (
    <div style={{
      width: '95%',
      borderRadius: 18,
      background: 'linear-gradient(90deg, #9b5e06 0%, #3b5998 100%)',
      padding: '32px 32px 24px 32px',
      margin: '40px auto 0 auto',
      minHeight: 300,
      color: '#222',
      maxWidth: 1100,
      boxSizing: 'border-box',
      boxShadow: '0 2px 8px rgba(0,0,0,0.07)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    }}>
      {/* Tabs */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        marginBottom: 18,
        marginLeft: 2,
      }}>
        {tabs.map((tab, idx) => (
          <button
            key={tab.value}
            onClick={() => setActiveTab(tab.value)}
            style={{
              background: activeTab === tab.value ? '#F59E42' : '#fff',
              color: activeTab === tab.value ? '#fff' : '#222',
              border: 'none',
              borderRadius: 16,
              padding: '6px 22px',
              fontWeight: 700,
              fontSize: 15,
              cursor: 'pointer',
              letterSpacing: 1,
              textTransform: 'uppercase',
              boxShadow: activeTab === tab.value ? '0 2px 8px rgba(0,0,0,0.07)' : 'none',
              transition: 'all 0.2s',
              marginLeft: idx === 0 ? 0 : -8, // overlap effect
              zIndex: tabs.length - idx,
              position: 'relative',
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>
      {/* Heading */}
      <div style={{ marginBottom: 18, marginLeft: 2 }}>
        <div style={{ fontSize: 28, fontWeight: 700, marginBottom: 4, color: '#222' }}>
          Number of calls
        </div>
        <div style={{ fontSize: 15, color: '#222', opacity: 0.7, fontWeight: 400 }}>
          Unique calls by month
        </div>
      </div>
      {/* Chart */}
      <div style={{ width: '100%', height: 160, position: 'relative' }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 40, right: 20, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="4 4" vertical={false} stroke="#fff" opacity={0.2} />
            <XAxis dataKey="day" tick={<CustomXAxisTick />} axisLine={false} tickLine={false} />
            <YAxis tick={<CustomYAxisTick />} axisLine={false} tickLine={false} />
            <Tooltip
              contentStyle={{ background: '#fff', borderRadius: 8, color: '#222' }}
              labelStyle={{ color: '#222', fontWeight: 500 }}
            />
            <Bar dataKey="calls" fill="#F59E42" barSize={12} />
            <MonthsLabels />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default CallsChart;
