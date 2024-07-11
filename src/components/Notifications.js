import React from 'react';

const Notifications = ({ notifications }) => (
  <div>
    <h2>Important Notifications</h2>
    <ul>
      {notifications.map((note, index) => (
        <li key={index}>{note.message}</li>
      ))}
    </ul>
  </div>
);

export default Notifications;
