import React, { useContext } from 'react';
import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';
import { GoogleSignin } from '@react-native-community/google-signin';
import Icon from 'react-native-vector-icons/FontAwesome';

import { UserContext } from '../../contexts/userContext';

import authentication from '../../utils/authentication';

import GoogleButton, { GoogleButtonText } from './styles';

GoogleSignin.configure({
  webClientId: '14821454159-d2jno5kedipqjgcd438gh8ns9j1625m3.apps.googleusercontent.com',
});

function GoogleSignIn() {
  const { dispatch: userDispatch } = useContext(UserContext);

  const navigation = useNavigation();

  async function onGoogleButtonPress() {
    const { idToken } = await GoogleSignin.signIn();

    const credential = auth.GoogleAuthProvider.credential(idToken);

    authentication(credential, userDispatch, navigation);
  }

  return (
    <GoogleButton onPress={onGoogleButtonPress}>
      <Icon name="google" size={24} color="#ea4335" />
      <GoogleButtonText>Sign in with Google</GoogleButtonText>
    </GoogleButton>
  );
}

export default GoogleSignIn;
