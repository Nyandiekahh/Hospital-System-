import React, { useState, useEffect } from 'react';
import UserForms from './UserForms';
import UserList from './UserList';
import { addUserToFile, getUsersFromFile, deleteUserFromFile } from './userService';

const UserManagement = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const allUsers = getUsersFromFile();
    setUsers(allUsers);
  }, []);

  const addUser = (userType, userData) => {
    addUserToFile(userType, userData);
    setUsers([...users, { ...userData, type: userType }]);
  };

  const editUser = (index) => {
    // Implement edit user functionality
  };

  const deleteUser = (index) => {
    const user = users[index];
    if (user.type === 'doctor') {
      deleteUserFromFile(user.id);
      const updatedUsers = users.filter((_, i) => i !== index);
      setUsers(updatedUsers);
    } else {
      alert('Patients cannot be deleted.');
    }
  };

  return (
    <div>
      <h2>User Management</h2>
      <UserForms addUser={addUser} />
      <UserList users={users} editUser={editUser} deleteUser={deleteUser} />
    </div>
  );
};

export default UserManagement;
