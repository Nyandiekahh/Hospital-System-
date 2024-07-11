import React from 'react';
import { FaHeartbeat, FaWeight } from 'react-icons/fa';

const HealthSummary = ({ lastCheckup, bloodPressure, weight }) => (
  <div>
    <h2>Health Summary</h2>
    <p>Last Check-up: {lastCheckup}</p>
    <p>Blood Pressure: <FaHeartbeat /> {bloodPressure}</p>
    <p>Weight: <FaWeight /> {weight} kg</p>
  </div>
);

export default HealthSummary;
