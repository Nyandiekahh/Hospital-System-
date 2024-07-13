import React, { useState } from 'react';
import WelcomeSection from './WelcomeSection';
import HealthNews from './HealthNews';
import FAQs from './FAQs';
import SupportHelp from './SupportHelp';
import ProfileSettings from './ProfileSettings';
import UserManagement from './UserManagement';
import RoleManagement from './RoleManagement';
import AppointmentManagement from './AppointmentManagement';
import DoctorAvailability from './DoctorAvailability';
import ReportsAnalytics from './ReportsAnalytics';
import SystemSettings from './SystemSettings';
import AuditLogs from './AuditLogs';
import BillingInvoicing from './BillingInvoicing';
import HealthResourcesManagement from './HealthResourcesManagement';
import FeedbackSurveys from './FeedbackSurveys';
import Sidebar from './Sidebar';
import '../styles/App.css';
import '../styles/Modal.css';

const AdminDashboard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="dashboard-container">
      <Sidebar role="admin" />
      <div className="main-content">
        <div className="card">
          <WelcomeSection name="Admin" />
        </div>
        <div className="card">
          <h2>Add New User</h2>
          <p>Click the button below to add a new user to the system. You can add medical practitioners and patients.</p>
          <button className="open-modal-button" onClick={handleOpenModal}>Add New User</button>
        </div>
        {isModalOpen && (
          <div className="modal">
            <div className="modal-content">
              <span className="close-button" onClick={handleCloseModal}>&times;</span>
              <UserManagement />
            </div>
          </div>
        )}
        <div className="card">
          <HealthNews />
        </div>
        <div className="card">
          <FAQs />
        </div>
        <div className="card">
          <SupportHelp />
        </div>
        <div className="card">
          <ProfileSettings />
        </div>
        <div className="card">
          <RoleManagement />
        </div>
        <div className="card">
          <AppointmentManagement />
        </div>
        <div className="card">
          <DoctorAvailability />
        </div>
        <div className="card">
          <ReportsAnalytics />
        </div>
        <div className="card">
          <SystemSettings />
        </div>
        <div className="card">
          <AuditLogs />
        </div>
        <div className="card">
          <BillingInvoicing />
        </div>
        <div className="card">
          <HealthResourcesManagement />
        </div>
        <div className="card">
          <FeedbackSurveys />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
