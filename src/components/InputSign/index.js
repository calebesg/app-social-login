import React from 'react';

import { Container, Input } from './styles';

function InputSign({ Icon, ...attrs }) {
  return (
    <Container>
      <Input {...attrs} />
      {Icon}
    </Container>
  );
}

export default InputSign;
