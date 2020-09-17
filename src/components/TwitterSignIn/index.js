import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

import TwitterButton from './styles';

function TwitterSignIn() {
  return (
    <TwitterButton onPress={() => {}}>
      <Icon name="twitter" size={32} color="#1C9CEB" />
    </TwitterButton>
  );
}

export default TwitterSignIn;
