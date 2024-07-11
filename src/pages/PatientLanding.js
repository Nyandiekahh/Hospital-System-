import React from 'react';
import Sidebar from '../components/Sidebar';

const PatientLanding = () => {
  return (
    <div className="landing-page">
      <Sidebar role="patient" />
      <div className="main-content">
        <h1>Patient Dashboard</h1>
        {/* Add patient-specific content here */}
      </div>
    </div>
  );
};

export default PatientLanding;
