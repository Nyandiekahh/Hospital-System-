import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  FaBars,
  FaTachometerAlt,
  FaQuestionCircle,
  FaUserMd,
  FaCalendarAlt,
  FaFileMedical,
  FaFilePrescription,
  FaChartLine,
  FaCog,
  FaUser,
  FaUsers,
  FaClipboardList,
  FaMoneyBillWave,
  FaBookMedical,
  FaCommentDots,
  FaSignOutAlt,
  FaNewspaper,
  FaLifeRing,
  FaBell,
  FaSearch,
  FaComments,
  FaUserShield
} from 'react-icons/fa';
import '../styles/Sidebar.css';
import { useAuth } from '../AuthContext';

const Sidebar = ({ role }) => {
  const [isMinimized, setIsMinimized] = useState(false);
  const navigate = useNavigate();
  const { logout } = useAuth();

  const toggleSidebar = () => {
    setIsMinimized(!isMinimized);
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const commonItems = [
    { icon: <FaTachometerAlt />, label: 'Dashboard' },
    { icon: <FaNewspaper />, label: 'Health News' },
    { icon: <FaQuestionCircle />, label: 'FAQs' },
    { icon: <FaLifeRing />, label: 'Support/Help' },
    { icon: <FaUser />, label: 'Profile Settings' },
  ];

  const patientItems = [
    { icon: <FaFileMedical />, label: 'Medical History' },
    { icon: <FaCalendarAlt />, label: 'Appointments' },
    { icon: <FaUserMd />, label: 'Doctor\'s Availability' },
    { icon: <FaClipboardList />, label: 'Test Results' },
    { icon: <FaFilePrescription />, label: 'Prescriptions' },
    { icon: <FaBell />, label: 'Notifications' },
    { icon: <FaCommentDots />, label: 'Feedback' },
  ];

  const doctorItems = [
    { icon: <FaSearch />, label: 'Patient Search' },
    { icon: <FaFileMedical />, label: 'Patient Records' },
    { icon: <FaCalendarAlt />, label: 'Appointments' },
    { icon: <FaUserMd />, label: 'Availability Calendar' },
    { icon: <FaClipboardList />, label: 'Test Results' },
    { icon: <FaFilePrescription />, label: 'Medication Prescriptions' },
    { icon: <FaChartLine />, label: 'Reports' },
    { icon: <FaComments />, label: 'Collaboration' },
  ];

  const adminItems = [
    { icon: <FaUsers />, label: 'User Management' },
    { icon: <FaUserShield />, label: 'Role Management' },
    { icon: <FaCalendarAlt />, label: 'Appointment Management' },
    { icon: <FaUserMd />, label: 'Doctor Availability' },
    { icon: <FaChartLine />, label: 'Reports and Analytics' },
    { icon: <FaCog />, label: 'System Settings' },
    { icon: <FaClipboardList />, label: 'Audit Logs' },
    { icon: <FaMoneyBillWave />, label: 'Billing and Invoicing' },
    { icon: <FaBookMedical />, label: 'Health Resources Management' },
    { icon: <FaCommentDots />, label: 'Feedback and Surveys' },
  ];

  let sidebarItems = [];
  switch (role) {
    case 'patient':
      sidebarItems = [...commonItems, ...patientItems];
      break;
    case 'doctor':
      sidebarItems = [...commonItems, ...doctorItems];
      break;
    case 'admin':
      sidebarItems = [...commonItems, ...adminItems];
      break;
    default:
      sidebarItems = commonItems;
  }

  return (
    <div className={`sidebar ${isMinimized ? 'minimized' : ''}`}>
      <div className="sidebar-toggle" onClick={toggleSidebar}>
        <FaBars />
      </div>
      <div className="sidebar-content">
        {sidebarItems.map((item, index) => (
          <div className="sidebar-item" key={index}>
            {item.icon}
            {!isMinimized && <span>{item.label}</span>}
          </div>
        ))}
      </div>
      <div className="sidebar-footer">
        <div className="sidebar-item" onClick={handleLogout}>
          <FaSignOutAlt />
          {!isMinimized && <span>Logout</span>}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
