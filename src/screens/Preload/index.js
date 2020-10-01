import React, { useEffect, useContext } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { UserContext } from '../../contexts/userContext';
import authenticate from '../../utils/authenticate';

import { Container, Logo } from './styles';
import LoadingIcon from '../../components/LoadingIcon';

function Preload() {
  const { dispatch: userDispatch } = useContext(UserContext);

  const navigation = useNavigation();
  
  useEffect(() => {
    async function exitAuthentication() {
      const data = await AsyncStorage.getItem('@auth');

      console.log(data);

      if (!data) {
        return navigation.reset({
          routes: [{ name: 'SignIn' }]
        });
      }

      const credential = JSON.parse(data);

      authenticate(credential, userDispatch, navigation);
    }

    exitAuthentication();
  }, []);

  return (
    <>
      <StatusBar 
        backgroundColor="transparent" 
        barStyle="light-content" 
        translucent={true} 
      />
      <Container>
        <Logo>Social login</Logo>
        <LoadingIcon />
      </Container>
    </>
  );
}

export default Preload;
