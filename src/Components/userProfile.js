import React from 'react';

const UserProfile = ({ name, email }) => {
  console.log('User:', { name, email });

  return (
    <div className="flex flex-col items-center py-4 bg-white">
      <span className="font-semibold text-base mb-1">{name}</span>
      <span className="text-gray-400 text-xs mb-2">{email}</span>
      <div className="h-16 w-16 rounded-full" style={{ backgroundColor: '#1F2937' }}>
        <div className="flex items-center justify-center h-full w-full text-white text-2xl font-bold">
          {name[0].toUpperCase()}
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
