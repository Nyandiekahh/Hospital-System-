import React from 'react';
import { FaRegSmile } from 'react-icons/fa';

const WelcomeSection = ({ name, upcomingAppointments }) => (
  <div>
    <h1>Welcome, {name}! <FaRegSmile /></h1>
    <p>You have {upcomingAppointments} upcoming appointments this week.</p>
  </div>
);

export default WelcomeSection;
