import React from 'react';
import Sidebar from '../components/Sidebar';

const PractitionerLanding = () => {
  return (
    <div className="landing-page">
      <Sidebar role="practitioner" />
      <div className="main-content">
        <h1>Medical Practitioner Dashboard</h1>
        {/* Add practitioner-specific content here */}
      </div>
    </div>
  );
};

export default PractitionerLanding;
