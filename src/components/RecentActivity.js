import React from 'react';

const RecentActivity = ({ activities }) => (
  <div>
    <h2>Recent Activity</h2>
    <ul>
      {activities.map((activity, index) => (
        <li key={index}>{activity.date} - {activity.activity}</li>
      ))}
    </ul>
  </div>
);

export default RecentActivity;
