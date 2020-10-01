import React, { useContext } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { useNavigation } from '@react-navigation/native';

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

  async function signOut() {
    userDispatch({ type: 'SIGN_OUT' });

    await AsyncStorage.removeItem('@auth');

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
