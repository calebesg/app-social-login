import React from 'react';

import { Container } from './styles';

function SocialButton({ children }) {
  return (
    <Container onPress={() => {}}>
      {children}
    </Container>
  );
}

export default SocialButton;
