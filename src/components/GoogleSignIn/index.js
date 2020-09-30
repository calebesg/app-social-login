import React, { useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-community/google-signin';
import Icon from 'react-native-vector-icons/FontAwesome';

import { UserContext } from '../../contexts/userContext';

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

    auth()
      .signInWithCredential(credential)
      .then(({ user }) => {
        userDispatch({
          type: 'SIGN_IN',
          payload: {
            user: {
              avatar: user.photoURL,
              name: user.displayName,
              email: user.email
            },
            auth: true
          }
        });

        navigation.reset({
          routes: [{ name: 'Main' }]
        });
      })
      .catch(error => console.log('Authentication failure: ' + error));
  }

  return (
    <GoogleButton onPress={onGoogleButtonPress}>
      <Icon name="google" size={24} color="#CF2C1Fcc" />
      <GoogleButtonText>Google</GoogleButtonText>
    </GoogleButton>
  );
}

export default GoogleSignIn;
