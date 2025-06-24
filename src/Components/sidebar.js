import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { SidebarData } from './SidebarData'
import { AdministrationData } from './SidebarData'
import { MenuOutlined } from '@ant-design/icons'
import '../Components/Sidebar.css'
import UserProfile from '../Components/userProfile'

function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users/1')
      .then(res => res.json())
      .then(data => setUser({ name: data.name, email: data.email }))
      .catch(err => console.error('User API error:', err));
  }, []);

  return (
    <div className={`fixed left-0 top-0 bg-white h-screen ${collapsed ? 'w-[68px]' : 'w-[280px]'} flex flex-col overflow-y-auto hide-scrollbar transition-all duration-300 shadow-lg`}>
      {/* Sidebar Header */}
      {collapsed ? (
        <div className="w-full bg-[#3F51B5] flex flex-col items-center py-4">
          <img src="/helper_logo_mini.png" alt="Logo" className="h-12 w-12 object-contain mb-2" />
          <MenuOutlined
            className="text-white text-lg cursor-pointer"
            onClick={() => setCollapsed(false)}
          />
        </div>
      ) : (
        <div className="w-full bg-[#3F51B5] flex flex-row items-center justify-between px-6 py-4">
          <div className="flex items-center pt-4 -mx-3">
            <img src="/helper_logo_mini.png" alt="Logo" className="h-16 w-16 object-contain" />
            <span className="text-white text-4xl font-bold hidden md:block">elpers</span>
          </div>
          <div className="flex items-center mt-7">
            <MenuOutlined
              className="text-white text-lg cursor-pointer"
              onClick={() => setCollapsed(true)}
            />
          </div>
        </div>
      )}
      {user && <UserProfile name={user.name} email={user.email} />}




      {/* MENU Heading */}
      <span className="uppercase text-gray-400 text-xs font-semibold px-4 mb-2 mt-4 tracking-widest">Menu</span>
  
  
  
  
  
      {/* Sidebar Links */}
      <div className="flex flex-col">
        {SidebarData.map((item, index) => (
          <Link
            to={item.link}
            key={index}
            className="w-full"
            style={{ textDecoration: 'none' }}
          >
            <div
              className={`flex flex-row items-center mb-2 cursor-pointer text-black w-full px-4 py-1.5 hover:bg-[#F09420] hover:text-white rounded transition-colors duration-200 ${collapsed ? 'justify-center' : ''}`}
            >
              <span className="mr-3 text-lg">{item.icon}</span>
              {!collapsed && <span className="text-[10px] font-medium">{item.title}</span>}
            </div>
          </Link>
        ))}
      </div>
      {/* ADMINISTRATION Heading */}
      <span className="uppercase text-gray-400 text-xs font-semibold px-4 mb-2 mt-6 tracking-widest">Administration</span>
      <div className="flex flex-col">
        {AdministrationData.map((item, index) => (
          <Link
            to={item.link}
            key={index}
            className="w-full"
            style={{ textDecoration: 'none' }}
          >
            <div
              className={`flex flex-row items-center mb-2 cursor-pointer text-black w-full px-4 py-1.5 hover:bg-[#F09420] hover:text-white rounded transition-colors duration-200 ${collapsed ? 'justify-center' : ''}`}
            >
              <span className="mr-3 text-lg">{item.icon}</span>
              {!collapsed && <span className="text-[10px] font-medium">{item.title}</span>}
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Sidebar