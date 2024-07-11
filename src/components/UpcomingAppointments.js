import React from 'react';

const UpcomingAppointments = ({ appointments }) => (
  <div>
    <h2>Upcoming Appointments</h2>
    <ul>
      {appointments.map((appointment, index) => (
        <li key={index}>{appointment.date}, {appointment.time} - {appointment.doctor}</li>
      ))}
    </ul>
  </div>
);

export default UpcomingAppointments;
