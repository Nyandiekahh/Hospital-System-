import React from 'react';

const WelcomeSection = ({ name, message }) => {
  return (
    <div>
      <h1>Hi, {name}!</h1>
      <p>{message}</p>
    </div>
  );
};

export default WelcomeSection;
