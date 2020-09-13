import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Preload from './screens/Preload';
import SignIn from './screens/SignIn';
import Main from './screens/Main';

const { Navigator, Screen } = createStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          headerShown: false,
          cardStyle: {
            backgroundColor: '#ffffff',
          }
        }}
      >
        <Screen name="Preload" component={Preload} />
        <Screen name="SignIn" component={SignIn} />
        <Screen name="Main" component={Main} />
      </Navigator>
    </NavigationContainer>
  );
}

export default Routes;
