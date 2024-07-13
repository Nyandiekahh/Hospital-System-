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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addUser(userType, formData);
    setFormData({
      name: '',
      dateOfBirth: '',
      gender: '',
      hospitalOfBirth: '',
      medicalId: '',
      hospital: ''
    });
  };

  return (
    <div>
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
            <input
              type="date"
              name="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={handleChange}
              placeholder="Date of Birth"
              required
            />
            <input
              type="text"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              placeholder="Gender"
              required
            />
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
