import React from 'react';

const EmergencyInfo = ({ contact, hospital }) => (
  <div>
    <h2>Emergency Information</h2>
    <p>In case of emergency, call: {contact}</p>
    <p>Nearest hospital: {hospital}</p>
  </div>
);

export default EmergencyInfo;
