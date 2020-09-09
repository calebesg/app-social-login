import React from 'react';
import { StatusBar } from 'react-native';

import Routes from './src/routes';

function App() {
  return (
    <>
      <StatusBar 
        backgroundColor="transparent" 
        barStyle="dark-content" 
        translucent={true} 
      />
      <Routes />
    </>
  );
}

export default App;
