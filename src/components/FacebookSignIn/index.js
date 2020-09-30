import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

import FacebookButton, { FacebookButtonText } from './styles';

function FacebookSignIn() {
  return (
    <FacebookButton onPress={() => {}}>
      <Icon name="facebook" size={24} color="#3b5998" />
      <FacebookButtonText>Sign in with Facebook</FacebookButtonText>
    </FacebookButton>
  );
}

export default FacebookSignIn;
