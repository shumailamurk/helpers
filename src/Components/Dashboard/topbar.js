import React, { useState, useEffect } from 'react';
import { MenuOutlined, SearchOutlined, DownOutlined, StarFilled } from '@ant-design/icons';

const Topbar = ({ onOpenPanel }) => {
  const [user, setUser] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users/1')
      .then(res => res.json())
      .then(data => setUser({ name: data.name, email: data.email }))
      .catch(err => setUser({ name: 'User', email: 'user@email.com' }));
  }, []);

  return (
    <div className="w-full flex items-center bg-white px-4 py-4 min-h-[70px] shadow-md">
      {/* Left: Star icon and Profile group */}
      <div className="flex items-center gap-7 ml-72">
        <StarFilled className="text-yellow-400 text-xl" />
        {user && (
          <div className="flex items-center gap-1 relative ml-1">
            <div className="h-7 w-7 rounded-full flex items-center justify-center text-xs font-bold" style={{ backgroundColor: '#BDBDBD', color: '#fff' }}>
              {user.name[0].toUpperCase()}
            </div>
            <span className="text-black text-xs font-medium">{user.name}</span>
            <DownOutlined className="text-black text-xs cursor-pointer" onClick={() => setDropdownOpen(!dropdownOpen)} />
            {dropdownOpen && (
              <div className="absolute left-0 top-10 bg-white shadow-lg rounded-lg p-3 w-52 z-50">
                <button className="block w-full text-left px-6 py-3 text-xs text-black hover:bg-gray-100" onClick={() => alert('Change Password')}>Change Password</button>
                <button className="block w-full text-left px-6 py-3 text-xs text-black hover:bg-gray-100" onClick={() => alert('Logout')}>Logout</button>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Spacer */}
      <div className="flex-1"></div>

      {/* Right: Search, Hamburger */}
      <div className="flex items-center gap-32">
        {/* Divider */}
        <div className="h-6 border-l border-gray-300"></div>

        {/* Search Icon and Box */}
        <div className="relative">
          <button 
            className="p-2 rounded-full hover:bg-gray-100"
            onClick={() => setSearchOpen(!searchOpen)}
          >
            <SearchOutlined className="text-black text-base" />
          </button>
          {searchOpen && (
            <div className={`absolute right-12 top-0 z-50 transition-all duration-300 ease-in-out ${searchOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'}`}>
              <input
                type="text"
                placeholder="Search..."
                className="w-40 p-3 rounded-lg border border-gray-300 bg-white shadow-sm text-sm focus:outline-none"
                autoFocus
              />
            </div>
          )}
        </div>

        {/* Divider */}
        <div className="h-6 border-l border-gray-300"></div>

        {/* Hamburger Icon */}
        <button className="p-2 rounded-full hover:bg-gray-100" onClick={onOpenPanel}>
          <MenuOutlined className="text-black text-base" />
        </button>
      </div>
    </div>
  );
};

export default Topbar;