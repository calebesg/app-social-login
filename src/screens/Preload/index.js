import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Container, Logo, LoadingIcon } from './styles';

function Preload() {
  const navigation = useNavigation();
  
  useEffect(() => {
    setTimeout(() => {
      navigation.reset({
        routes: [{ name: 'SignIn' }]
      });
    }, 3000);
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
