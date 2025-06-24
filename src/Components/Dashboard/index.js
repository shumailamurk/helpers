import React, { useState, useEffect } from 'react'
import HeroDash from './herodash';

export const Dashboard = () => {
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users/1')
      .then(res => res.json())
      .then(data => setUser({ name: data.name, email: data.email }))
      .catch(err => setUser({ name: 'User', email: 'user@email.com' }));
  }, []);

  return (
    <div>
      <HeroDash userName={user?.name || ''} />
      {/* Baaki sections */}
    </div>
  )
}
