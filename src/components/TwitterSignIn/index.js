import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

import TwitterButton, { TwitterButtonText } from './styles';

function TwitterSignIn() {
  return (
    <TwitterButton onPress={() => {}}>
      <Icon name="twitter" size={24} color="#1C9CEB" />
      <TwitterButtonText>Twitter</TwitterButtonText>
    </TwitterButton>
  );
}

export default TwitterSignIn;
