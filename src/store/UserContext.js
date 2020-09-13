import React, { createContext } from 'react';

const authentication = {
  user: {
    avatar: 'https://avatars0.githubusercontent.com/u/36782514?s=460&u=272833a0e7a1b4b0153ced6a8364875f3b283115&v=4',
    name: 'Calebe SG',
    email: 'calebeguimaraes10@gmail.com'
  },
  auth: true
};

export const UserContext = createContext(authentication);

export function UserProvider({ children }) {
  return (
    <UserContext.Provider value={authentication}>
      {children}
    </UserContext.Provider>
  );
}
