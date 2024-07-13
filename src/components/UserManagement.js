import React from 'react';
import UserForms from './UserForms';
import { addUserToFile } from './userService';

const UserManagement = ({ closeModal }) => {
  const addUser = async (userType, userData) => {
    try {
      await addUserToFile(userType, userData);
      return true;
    } catch (error) {
      console.error('Error adding user:', error);
      return false;
    }
  };

  return (
    <div>
      <UserForms addUser={addUser} />
    </div>
  );
};

export default UserManagement;
