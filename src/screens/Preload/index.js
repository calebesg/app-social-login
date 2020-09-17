import React, { useEffect, useContext } from 'react';
import { StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Container, Logo } from './styles';
import LoadingIcon from '../../components/LoadingIcon';

function Preload() {
  const navigation = useNavigation();
  
  useEffect(() => {
    setTimeout(() => {
      navigation.reset({
        routes: [{ name: 'SignIn' }]
      });
    }, 2000);
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
