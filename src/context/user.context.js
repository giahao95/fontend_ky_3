import React, { useContext, useState } from 'react';

const UserContext = React.createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const getUserDB = async () => {
    const token = localStorage.getItem('accessToken');

    if (token) {
      const response = await fetch('http://localhost:5000/users/profile', {
        method: 'GET',
        headers: {
          authorization: `Bearer ${token}`,
        },
      });

      if (response.status === 200) {
        const userInfo = await response.json();
        setUser(userInfo);
      } else {
        localStorage.removeItem('accessToken');
        setUser(null);
      }
    }
  };

  const updateUserDB = async (name, email, password) => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      const response = await fetch('http://localhost:5000/users/profile', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ name, email, password }),
      });

      if (response.status === 200) {
        const userInfo = await response.json();
        setUser({ ...user, name: userInfo.name, email: userInfo.email });
      }
    }
  };

  return <UserContext.Provider value={{ user, setUser, getUserDB, updateUserDB }}>{children}</UserContext.Provider>;
};

export const useUserContext = () => {
  return useContext(UserContext);
};
