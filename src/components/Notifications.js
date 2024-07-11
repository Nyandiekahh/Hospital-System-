import React from 'react';

const Notifications = ({ notifications = [] }) => (
  <div>
    <h2>Notifications</h2>
    <ul>
      {notifications.length > 0 ? (
        notifications.map((notification, idx) => (
          <li key={idx}>{notification}</li>
        ))
      ) : (
        <li>No notifications available</li>
      )}
    </ul>
  </div>
);

export default Notifications;
