import React from 'react';
import GoogleMaps from './GoogleMaps';

const EmergencyInfo = ({ contact, apiKey }) => (
  <div>
    <h2>Emergency Information</h2>
    <p>In case of emergency, call: {contact}</p>
    <GoogleMaps apiKey={apiKey} />
  </div>
);

export default EmergencyInfo;
