import React from 'react';
import { useLocation } from 'react-router-dom';
import WelcomeSection from './WelcomeSection';
import MedicalRecords from './MedicalRecords';
import Appointments from './Appointments';
import TestResults from './TestResults';
import Prescriptions from './Prescriptions';
import SupportHelp from './SupportHelp';
import ProfileSettings from './ProfileSettings';
import HealthNews from './HealthNews';
import FAQs from './FAQs';
import Notifications from './Notifications';
import Feedback from './Feedback';
import Sidebar from './Sidebar';
import '../styles/App.css';

// Mock data for notifications
const mockNotifications = [
  "Your test results are available.",
  "Upcoming appointment in 2 days."
];

const PatientDashboard = () => {
  const location = useLocation();
  const { user } = location.state || { user: { name: 'Patient', personalizedMessage: 'Welcome!' } };

  return (
    <div className="dashboard-container">
      <Sidebar role="patient" />
      <div className="main-content">
        <div className="card">
          <WelcomeSection name={user.name} message={user.personalizedMessage} />
        </div>
        <div className="card">
          <Appointments />
        </div>
        <div className="card">
          <MedicalRecords />
        </div>
        <div className="card">
          <TestResults />
        </div>
        <div className="card">
          <Prescriptions />
        </div>
        <div className="card">
          <SupportHelp />
        </div>
        <div className="card">
          <ProfileSettings />
        </div>
        <div className="card">
          <HealthNews />
        </div>
        <div className="card">
          <FAQs />
        </div>
        <div className="card">
          <Notifications notifications={mockNotifications} />
        </div>
        <div className="card">
          <Feedback />
        </div>
      </div>
    </div>
  );
};

export default PatientDashboard;
