import React, { useContext } from 'react';
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';

import { UserContext } from '../../contexts/userContext';

import { 
  Container,
  Avatar, 
  UserName,
  UserEmail, 
  SignOutButton,
  SignOutButtonText 
} from './styles';

function Main() {
  const { state: userState, dispatch: userDispatch } = useContext(UserContext);

  const navigation = useNavigation();

  function signOut() {
    userDispatch({ type: 'SIGN_OUT' });

    navigation.reset({
      routes: [{ name: 'SignIn' }]
    });
  }

  return (
    <Container>
      <Avatar source={{ uri: userState.user.avatar }} />
      <UserName>{userState.user.name}</UserName>
      <UserEmail>{userState.user.email}</UserEmail>

      <SignOutButton onPress={signOut}>
        <SignOutButtonText>Sign out</SignOutButtonText>
      </SignOutButton>
    </Container>
  );
}

export default Main;
