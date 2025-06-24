import React, { useState } from 'react';
import Sidebar from './sidebar';
import Topbar from './Dashboard/topbar';
import RightPanel from './Dashboard/rightpanel';

const Layout = ({ children }) => {
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  return (
    <div className="flex h-screen">


      {/* Sidebar - fixed width */}
      <div className="w-64">
        <Sidebar />
      </div>


      
      {/* Main content area */}
      <div className="flex-1 flex flex-col min-w-0">
        <Topbar onOpenPanel={() => setIsPanelOpen(true)} />
        <div className="flex-1 overflow-y-auto px-2 py-2 mt-4 scrollbar-hide">
          {children}
        </div>
        {isPanelOpen && <RightPanel onClose={() => setIsPanelOpen(false)} />}
      </div>
    </div>
  );
};

export default Layout; 