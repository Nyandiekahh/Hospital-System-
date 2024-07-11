import React from 'react';

const HealthGoals = ({ goals }) => (
  <div>
    <h2>Health Goals and Progress</h2>
    <ul>
      {goals.map((goal, index) => (
        <li key={index}>{goal.goal}: {goal.current}/{goal.target}</li>
      ))}
    </ul>
  </div>
);

export default HealthGoals;
