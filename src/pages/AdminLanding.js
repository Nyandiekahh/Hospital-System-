import React from 'react';
import Sidebar from '../components/Sidebar';

const AdminLanding = () => {
  return (
    <div className="landing-page">
      <Sidebar role="admin" />
      <div className="main-content">
        <h1>Admin Dashboard</h1>
        {/* Add admin-specific content here */}
      </div>
    </div>
  );
};

export default AdminLanding;
