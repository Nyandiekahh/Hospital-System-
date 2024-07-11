import React from 'react';
import { useLocation } from 'react-router-dom';
import WelcomeSection from './WelcomeSection';
import HealthSummary from './HealthSummary';
import QuickActions from './QuickActions';
import HealthTips from './HealthTips';
import RecentActivity from './RecentActivity';
import UpcomingAppointments from './UpcomingAppointments';
import MedicationSchedule from './MedicationSchedule';
import Notifications from './Notifications';
import HealthGoals from './HealthGoals';
import EmergencyInfo from './EmergencyInfo';
import Sidebar from './Sidebar';
import mockData from '../mockData';

const PatientDashboard = () => {
  const location = useLocation();
  const loginId = location.state?.loginId;
  const patient = mockData.patients.find(p => p.loginId === loginId);
  const { healthTips } = mockData;
  const apiKey = 'AIzaSyCPaptzr8MjnZLwkozVo7ebSE5s6SDlkKM'; // Your actual API key

  if (!patient) {
    return (
      <div className="dashboard-container">
        <Sidebar role="patient" />
        <div className="main-content">
          <div className="patient-dashboard">
            <h1>Patient not found</h1>
            <p>We could not find the patient data. Please check your login credentials and try again.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="dashboard-container">
      <Sidebar role="patient" />
      <div className="main-content fade-in-up">
        <div className="card">
          <WelcomeSection name={patient.name} upcomingAppointments={patient.upcomingAppointments} />
        </div>
        <div className="card">
          <HealthSummary lastCheckup={patient.lastCheckup} bloodPressure={patient.bloodPressure} weight={patient.weight} />
        </div>
        <div className="card">
          <QuickActions />
        </div>
        <div className="card">
          <HealthTips tips={healthTips} />
        </div>
        <div className="card">
          <RecentActivity activities={patient.recentActivities} />
        </div>
        <div className="card">
          <UpcomingAppointments appointments={patient.upcomingAppointmentsDetails} />
        </div>
        <div className="card">
          <MedicationSchedule schedule={patient.medicationSchedule} />
        </div>
        <div className="card">
          <Notifications notifications={patient.notifications} />
        </div>
        <div className="card">
          <HealthGoals goals={patient.healthGoals} />
        </div>
        <div className="card">
          <EmergencyInfo contact={patient.emergencyContact} apiKey={apiKey} />
        </div>
      </div>
    </div>
  );
};

export default PatientDashboard;
