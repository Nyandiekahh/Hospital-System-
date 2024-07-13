import React, { useState } from 'react';

const UserForms = ({ addUser }) => {
  const [userType, setUserType] = useState('patient');
  const [formData, setFormData] = useState({
    name: '',
    dateOfBirth: '',
    gender: '',
    hospitalOfBirth: '',
    medicalId: '',
    hospital: ''
  });
  const [successMessage, setSuccessMessage] = useState('');
  const [showTick, setShowTick] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await addUser(userType, formData);
    if (result) {
      setSuccessMessage(userType === 'doctor' ? 'Doctor added successfully!' : 'Patient added successfully!');
      setShowTick(true);
    } else {
      setSuccessMessage('Failed to add user.');
      setShowTick(true);
    }
    setTimeout(() => {
      setShowTick(false);
      setSuccessMessage('');
    }, 3000); // Hide tick and message after 3 seconds
    setFormData({
      name: '',
      dateOfBirth: '',
      gender: '',
      hospitalOfBirth: '',
      medicalId: '',
      hospital: ''
    });
  };

  // Get today's date in YYYY-MM-DD format
  const today = new Date().toISOString().split('T')[0];

  return (
    <div>
      <h2>User Management</h2>
      {showTick && <div className="success-tick">✔</div>}
      {successMessage && <div className="success-message">{successMessage}</div>}
      <select value={userType} onChange={(e) => setUserType(e.target.value)}>
        <option value="patient">Patient</option>
        <option value="doctor">Doctor</option>
      </select>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
          required
        />
        {userType === 'patient' && (
          <>
            <label htmlFor="dateOfBirth">Date of Birth</label>
            <input
              type="date"
              name="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={handleChange}
              max={today} // Prevent future dates
              required
            />
            <select name="gender" value={formData.gender} onChange={handleChange} required>
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
            <input
              type="text"
              name="hospitalOfBirth"
              value={formData.hospitalOfBirth}
              onChange={handleChange}
              placeholder="Hospital of Birth"
              required
            />
          </>
        )}
        {userType === 'doctor' && (
          <>
            <input
              type="text"
              name="medicalId"
              value={formData.medicalId}
              onChange={handleChange}
              placeholder="Medical ID"
              required
            />
            <input
              type="text"
              name="hospital"
              value={formData.hospital}
              onChange={handleChange}
              placeholder="Hospital"
              required
            />
          </>
        )}
        <button type="submit">Add User</button>
      </form>
    </div>
  );
};

export default UserForms;
