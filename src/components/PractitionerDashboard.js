import React from 'react';
import WelcomeSection from './WelcomeSection';
import PatientSearch from './PatientSearch';
import Appointments from './Appointments';
import DoctorAvailability from './DoctorAvailability';
import MedicalRecords from './MedicalRecords';
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
  "Appointment with patient John Doe at 10:00 AM",
  "Test results for patient Jane Smith are available",
  "New message from admin"
];

const PractitionerDashboard = () => {
  return (
    <div className="dashboard-container">
      <Sidebar role="practitioner" />
      <div className="main-content">
        <div className="card">
          <WelcomeSection name="Practitioner" />
        </div>
        <div className="card">
          <PatientSearch />
        </div>
        <div className="card">
          <Appointments /> {/* Updated component */}
        </div>
        <div className="card">
          <DoctorAvailability />
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

export default PractitionerDashboard;
