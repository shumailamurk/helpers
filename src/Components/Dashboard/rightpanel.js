import React, { useState } from 'react';

const dummyNotifications = [
  { user: 'Huzaifa Anwar', message: 'Requested for a service Quickbook - HPR-21-000057-1' },
  { user: 'Huzaifa Anwar', message: 'Requested for a service Door - HPR-21-000056-1' },
  { user: 'Saud Syed', message: 'Payment received 1005.00 - RCP-21-000023' },
  { user: 'Saud Syed', message: 'Worker completed job - HPR-21-000048-1' },
  { user: 'Saud Syed', message: 'Payment received 1000.00 - RCP-21-000022' },
  { user: 'Saud Syed', message: 'Worker completed job - HPR-21-000053-1' },
  { user: 'Saud Syed', message: 'Worker started job - HPR-21-000053-1' },
  { user: 'Saud Syed', message: 'Worker arrived at location - HPR-21-000053-1' },
  { user: 'Saud Syed', message: 'Worker on his way - HPR-21-000053-1' },
];

const getToday = () => {
  const d = new Date();
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  return {
    day: days[d.getDay()],
    date: d.getDate() + 'th ' + months[d.getMonth()],
  };
};

const RightPanel = ({ onClose }) => {
  const today = getToday();

  return (
    <div className={`fixed top-0 right-0 h-full w-[200px] bg-white shadow-2xl z-50 flex flex-col border-l border-gray-200
      transition-transform duration-300`}>
      <div className="flex items-center justify-between px-2 py-2 border-b border-gray-200">
        <div>
          <div className="text-xs text-gray-400">Today</div>
          <div className="text-base text-gray-500 font-medium mt-1">{today.day}</div>
          <div className="text-sm text-gray-400 mt-1">{today.date}</div>
        </div>
        <button onClick={onClose} className="text-gray-400 hover:text-black text-lg font-bold">&times;</button>
      </div>
      <div className="flex-1 overflow-y-auto px-2 py-2 mt-4">
        <div className="text-xs text-gray-400 mb-2">Notifications</div>
        {dummyNotifications.map((n, i) => (
          <div key={i} className="mb-4">
            <div className="font-semibold text-sm text-gray-800 ml-3">{n.user}</div>
            <div className="text-xs text-gray-500 mt-1 ml-3">{n.message}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RightPanel;

