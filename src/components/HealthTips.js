import React from 'react';

const HealthTips = ({ tips }) => (
  <div>
    <h2>Health Tips and News Highlights</h2>
    {tips.map((tip, index) => (
      <p key={index}>
        {tip.tip} <a href={tip.link}>[Read more]</a>
      </p>
    ))}
  </div>
);

export default HealthTips;
