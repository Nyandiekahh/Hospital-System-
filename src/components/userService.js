// src/components/userService.js

const USERS_KEY = 'users';

export const addUserToFile = (userType, userData) => {
  let users = JSON.parse(localStorage.getItem(USERS_KEY)) || [];
  users.push({ ...userData, type: userType, id: Date.now() });
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
};

export const getUsersFromFile = () => {
  return JSON.parse(localStorage.getItem(USERS_KEY)) || [];
};

export const deleteUserFromFile = (userId) => {
  let users = JSON.parse(localStorage.getItem(USERS_KEY)) || [];
  users = users.filter(user => user.id !== userId);
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
};
