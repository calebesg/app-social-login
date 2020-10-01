import React, { useContext } from 'react';
import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';
import { GoogleSignin } from '@react-native-community/google-signin';

import { UserContext } from '../../contexts/userContext';
import authenticate from '../../utils/authenticate';

import GoogleIcon from '../../assets/icons/google.svg';

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

    authenticate(credential, userDispatch, navigation);
  }

  return (
    <GoogleButton onPress={onGoogleButtonPress}>
      <GoogleIcon width={24}  height={24} />
      <GoogleButtonText>Sign in with Google</GoogleButtonText>
    </GoogleButton>
  );
}

export default GoogleSignIn;
