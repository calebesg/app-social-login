import React, { useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import { LoginManager, AccessToken } from 'react-native-fbsdk';

import { UserContext } from '../../contexts/userContext';
import authenticate from '../../utils/authenticate';

import FacebookIcon from '../../assets/icons/facebook.svg';

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

    authenticate(credential, userDispatch, navigation);
  }

  return (
    <FacebookButton onPress={onFacebookButtonPress}>
      <FacebookIcon width={24} height={24} />
      <FacebookButtonText>Sign in with Facebook</FacebookButtonText>
    </FacebookButton>
  );
}

export default FacebookSignIn;
