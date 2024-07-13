const DOCTORS_URL = 'http://localhost:5000/doctors';
const PATIENTS_URL = 'http://localhost:5000/patients';

export const addUserToFile = async (userType, userData) => {
  const url = userType === 'doctor' ? DOCTORS_URL : PATIENTS_URL;
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ ...userData, id: Date.now() })
    });

    if (!response.ok) {
      throw new Error('Failed to add user');
    }

    return await response.json();
  } catch (error) {
    console.error('Error adding user:', error);
    throw error;
  }
};

export const getUsersFromFile = async () => {
  const doctorsResponse = await fetch(DOCTORS_URL);
  const patientsResponse = await fetch(PATIENTS_URL);

  const doctors = await doctorsResponse.json();
  const patients = await patientsResponse.json();

  return [...doctors, ...patients];
};

export const deleteUserFromFile = async (userType, userId) => {
  const url = userType === 'doctor' ? `${DOCTORS_URL}/${userId}` : `${PATIENTS_URL}/${userId}`;
  await fetch(url, {
    method: 'DELETE'
  });
};
