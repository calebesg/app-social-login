import React, { useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import { LoginManager, AccessToken } from 'react-native-fbsdk';
import Icon from 'react-native-vector-icons/FontAwesome';

import { UserContext } from '../../contexts/userContext';

import FacebookButton, { FacebookButtonText } from './styles';

function FacebookSignIn() {
  const { dispatch: userDispatch } = useContext(UserContext);

  const navigation = useNavigation();

  async function onFacebookButtonPress() {
    const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);

    if (result.isCancelled) {
      throw 'User cancelled the login';
    }

    const data = await AccessToken.getCurrentAccessToken();

    if (!data) {
      throw 'Something went wrong obtaining access tokne';
    }

    const credential = auth.FacebookAuthProvider.credential(data.accessToken);

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
      .catch(error => console.log(error));
  }

  return (
    <FacebookButton onPress={onFacebookButtonPress}>
      <Icon name="facebook" size={24} color="#3b5998" />
      <FacebookButtonText>Sign in with Facebook</FacebookButtonText>
    </FacebookButton>
  );
}

export default FacebookSignIn;
