import React from 'react';

const MedicationSchedule = ({ schedule }) => (
  <div>
    <h2>Medication Schedule</h2>
    <ul>
      {schedule.map((med, index) => (
        <li key={index}>{med.medication}, {med.dosage} at {med.time}</li>
      ))}
    </ul>
  </div>
);

export default MedicationSchedule;
