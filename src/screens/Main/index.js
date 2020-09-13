import React, { useContext } from 'react';

import { UserContext } from '../../store/UserContext';

import { 
  Container,
  Avatar, 
  UserName,
  UserEmail, 
  SignOutButton,
  SignOutButtonText 
} from './styles';

function Main() {
  const { user, auth } = useContext(UserContext);

  return (
    <Container>
      <Avatar source={{ uri: user.avatar }} />
      <UserName>{user.name}</UserName>
      <UserEmail>{user.email}</UserEmail>

      <SignOutButton onPress={() => {}}>
        <SignOutButtonText>Sign out</SignOutButtonText>
      </SignOutButton>
    </Container>
  );
}

export default Main;