import React from 'react';
import { StatusBar } from 'react-native';

import { UserProvider } from './src/contexts/userContext';
import Routes from './src/routes';

function App() {
  return (
    <>
      <StatusBar 
        backgroundColor="transparent" 
        barStyle="dark-content" 
        translucent={true} 
      />

      <UserProvider>
        <Routes />
      </UserProvider>
    </>
  );
}

export default App;
