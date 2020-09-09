import React from 'react';

import { Container } from './styles';

function SocialButton({ Icon, ...attrs }) {
  return (
    <Container {...attrs}>
      {Icon}
    </Container>
  );
}

export default SocialButton;
