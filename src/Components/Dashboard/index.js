import React, { useState } from 'react'
import Topbar from './topbar'
import RightPanel from './rightpanel'
import HeroDash from './herodash';



export const Dashboard = () => {
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  return (
    <div>
      <Topbar onOpenPanel={() => setIsPanelOpen(true)} />
      {isPanelOpen && <RightPanel onClose={() => setIsPanelOpen(false)} />}
        <HeroDash/>
      {/* Baaki sections */}
    </div>
  )
}
