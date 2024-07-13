import React from 'react';

const UserList = ({ users, editUser, deleteUser }) => {
  return (
    <div>
      <h2>User List</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.name}</td>
              <td>{user.type}</td>
              <td>
                <button onClick={() => editUser(index)}>Edit</button>
                {user.type === 'doctor' && <button onClick={() => deleteUser(index)}>Delete</button>}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
