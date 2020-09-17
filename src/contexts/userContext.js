import React, { createContext, useReducer } from 'react';

import { initialState, reducer } from '../reducers/userReducer';

export const UserContext = createContext(initialState);

export function UserProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <UserContext.Provider value={{state, dispatch}}>
      {children}
    </UserContext.Provider>
  );
}
