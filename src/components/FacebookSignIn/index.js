import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

import FacebookButton from './styles';

function FacebookSignIn() {
  return (
    <FacebookButton onPress={() => {}}>
      <Icon name="facebook" size={32} color="#395693" />
    </FacebookButton>
  );
}

export default FacebookSignIn;
