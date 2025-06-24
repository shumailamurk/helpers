import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import { Dashboard } from './Components/Dashboard/index';
import { Categories } from './Components/Categories/categories';
import { Service } from './Components/Services/services';
import { Pricelist } from './Components/Pricelist/pricelist';
import { JobRequest } from './Components/jobRequest/jobRequest';
import { Invoices } from './Components/Invoices/Invoices';
import { NetAmount } from './Components/NetAmount/netAmount';
import { LeadLogs } from './Components/LeadLogs/leadLogs';
import { Users } from './Components/Users/users';
import { Advertisements } from './Components/Advertisements/Advertisements';
import { Chats } from './Components/Chats/Chats';
import { Payments } from './Components/Payments/payments';
import { Workers } from './Components/Workers/workers';
import { Customers } from './Components/Customers/Customers';
import { ServiceRequest } from './Components/ServiceRequests/ServiceRequests';
import Sidebar from './Components/sidebar';
// import Sidebar from './components/sidebar';




function App() {
  return (
    <Router>
      <Sidebar/>
      <Routes>
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Categories" element={<Categories />} />
        <Route path="/Services" element={<Service/>} />
        <Route path="/Pricelist" element={<Pricelist />} />
        <Route path="/JobRequests" element={<JobRequest />} />
        <Route path="/ServiceRequest" element={<ServiceRequest/>} />
        <Route path="/Payments" element={<Payments />} />
        <Route path="/Invoices" element={<Invoices />} />
        <Route path="/NetAmount" element={<NetAmount />} />
        <Route path="/LeadLogs" element={<LeadLogs />} />
        <Route path="/Chats" element={<Chats/>} />
        <Route path="/Users" element={<Users />} />
        <Route path="/Workers" element={<Workers />} />
        <Route path="/Customers" element={<Customers/>} />
        <Route path="/Advertisements" element={<Advertisements />} />
      </Routes>
    </Router>
  );
}

export default App;
