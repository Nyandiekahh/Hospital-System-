import React from 'react';
import { motion } from 'framer-motion';
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

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const PatientDashboard = () => {
  const location = useLocation();
  const loginId = location.state?.loginId;
  const patient = mockData.patients.find(p => p.loginId === loginId);
  const { healthTips } = mockData;

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
      <div className="main-content">
        <motion.div className="card" variants={cardVariants} initial="hidden" animate="visible">
          <WelcomeSection name={patient.name} upcomingAppointments={patient.upcomingAppointments} />
        </motion.div>
        <motion.div className="card" variants={cardVariants} initial="hidden" animate="visible">
          <HealthSummary lastCheckup={patient.lastCheckup} bloodPressure={patient.bloodPressure} weight={patient.weight} />
        </motion.div>
        <motion.div className="card" variants={cardVariants} initial="hidden" animate="visible">
          <QuickActions />
        </motion.div>
        <motion.div className="card" variants={cardVariants} initial="hidden" animate="visible">
          <HealthTips tips={healthTips} />
        </motion.div>
        <motion.div className="card" variants={cardVariants} initial="hidden" animate="visible">
          <RecentActivity activities={patient.recentActivities} />
        </motion.div>
        <motion.div className="card" variants={cardVariants} initial="hidden" animate="visible">
          <UpcomingAppointments appointments={patient.upcomingAppointmentsDetails} />
        </motion.div>
        <motion.div className="card" variants={cardVariants} initial="hidden" animate="visible">
          <MedicationSchedule schedule={patient.medicationSchedule} />
        </motion.div>
        <motion.div className="card" variants={cardVariants} initial="hidden" animate="visible">
          <Notifications notifications={patient.notifications} />
        </motion.div>
        <motion.div className="card" variants={cardVariants} initial="hidden" animate="visible">
          <HealthGoals goals={patient.healthGoals} />
        </motion.div>
        <motion.div className="card" variants={cardVariants} initial="hidden" animate="visible">
          <EmergencyInfo contact={patient.emergencyContact} hospital={patient.nearestHospital} />
        </motion.div>
      </div>
    </div>
  );
};

export default PatientDashboard;
