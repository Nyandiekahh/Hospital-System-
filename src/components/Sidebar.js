import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaBars, FaTachometerAlt, FaQuestionCircle, FaExclamationTriangle, FaSignOutAlt } from 'react-icons/fa';
import { useAuth } from '../AuthContext';
import '../styles/Sidebar.css';

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

  return (
    <div className={`sidebar ${isMinimized ? 'minimized' : ''}`}>
      <div className="sidebar-toggle" onClick={toggleSidebar}>
        <FaBars />
      </div>
      <div className="sidebar-content">
        <div className="sidebar-item">
          <FaTachometerAlt />
          {!isMinimized && <span>Dashboard</span>}
        </div>
        <div className="sidebar-item">
          <FaQuestionCircle />
          {!isMinimized && <span>FAQs</span>}
        </div>
        <div className="sidebar-item">
          <FaExclamationTriangle />
          {!isMinimized && <span>Complaints</span>}
        </div>
        {/* Add other sidebar items here */}
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
