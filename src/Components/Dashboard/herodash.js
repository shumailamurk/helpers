import React from 'react';
import { PhoneOutlined, FileTextOutlined, ToolOutlined, FileDoneOutlined, DollarCircleOutlined } from '@ant-design/icons';

const cards = [
  {
    title: 'No of calls',
    count: 0,
    icon: <PhoneOutlined style={{ fontSize: 32, color: '#009688' }} />,
    bg: 'bg-teal-400 bg-opacity-50'
  },
  {
    title: 'No of surveys',
    count: 0,
    icon: <FileTextOutlined style={{ fontSize: 32, color: '#1E40AF' }} />,
    bg: 'bg-blue-400 bg-opacity-50'
  },
  {
    title: 'No of jobs',
    count: 0,
    icon: <ToolOutlined style={{ fontSize: 32, color: '#5B21B6' }} />,
    bg: 'bg-indigo-400 bg-opacity-50'
  },
  {
    title: 'Total Bill Issued',
    count: 0,
    icon: <FileDoneOutlined style={{ fontSize: 32, color: '#F59E42' }} />,
    bg: 'bg-orange-400 bg-opacity-50'
  },
  {
    title: 'Total Received Cash',
    count: 0,
    icon: <DollarCircleOutlined style={{ fontSize: 32, color: '#A21CAF' }} />,
    bg: 'bg-purple-400 bg-opacity-50'
  },
];

const StatCard = ({ title, count, icon, bg }) => (
  <div className={`rounded-lg w-40 h-48 flex flex-col items-center justify-center ${bg}`} style={{ backdropFilter: 'blur(2px)' }}>
    <div className="text-black text-base font-semibold mb-1 text-center">{title}</div>
    <div className="text-black text-lg font-bold mb-1">{count}</div>
    <div className="shadow rounded bg-white bg-opacity-60 flex items-center justify-center p-2">{icon}</div>
  </div>
);

const HeroDash = ({ userName }) => (
  <div className="w-full mt-24 flex flex-col ml-[250px]">
    <div className="w-full max-w-6xl flex justify-start">
      <div className="text-lg font-medium mb-8">Welcome {userName}</div>
    </div>
    <div className="w-full max-w-6xl flex justify-center">
      <div className="flex gap-8">
        {cards.map((card, i) => (
          <StatCard key={i} {...card} />
        ))}
      </div>
    </div>
  </div>
);

export default HeroDash;