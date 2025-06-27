import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppSidebar from './Components/Layout/AppSidebar';
import AppHeader from './Components/Layout/AppHeader';
import { ThemeProvider } from './ThemeContext';

import Services from './Components/services/services';
import Categories from './Components/categories/sharedComponents';

function Placeholder({ title }) {
  return (
    <div style={{ padding: 32 }}>
      <h2>{title}</h2>
      <p>This is the {title} page.</p>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div style={{ display: 'flex' }}>
          <AppSidebar />
          <div style={{ flex: 1 }}>
            <AppHeader />
            <Routes>
              <Route path="/dashboard" element={<Placeholder title="Dashboard" />} />
              <Route path="/categories" element={<Categories/>} />
              <Route path="/services" element={<Services/>} />
              <Route path="/pricelist" element={<Placeholder title="Price List" />} />
              <Route path="/jobrequests" element={<Placeholder title="Job Requests" />} />
              <Route path="/servicerequests" element={<Placeholder title="Service Requests" />} />
              <Route path="/payments" element={<Placeholder title="Payments" />} />
              <Route path="/invoices" element={<Placeholder title="Invoices" />} />
              <Route path="/netamount" element={<Placeholder title="Net Amount" />} />
              <Route path="/leadlogs" element={<Placeholder title="Lead Logs" />} />
              <Route path="/chats" element={<Placeholder title="Chats" />} />
              <Route path="/users" element={<Placeholder title="Users" />} />
              <Route path="/workers" element={<Placeholder title="Workers" />} />
              <Route path="/customers" element={<Placeholder title="Customers" />} />
              <Route path="/advertisements" element={<Placeholder title="Advertisements" />} />
              {/* Administration Section */}
              <Route path="/campaigns" element={<Placeholder title="Campaigns" />} />
              <Route path="/surveyforms" element={<Placeholder title="Survey Forms" />} />
              <Route path="/twcharges" element={<Placeholder title="TW Charges" />} />
              <Route path="/skills" element={<Placeholder title="Skills" />} />
              <Route path="/areas" element={<Placeholder title="Areas" />} />
              <Route path="/company" element={<Placeholder title="Company" />} />
              <Route path="/version" element={<Placeholder title="Version" />} />
              <Route path="/invoicemessage" element={<Placeholder title="Invoice Message" />} />
              {/* Default route */}
              <Route path="*" element={<Placeholder title="Dashboard" />} />
            </Routes>
          </div>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;