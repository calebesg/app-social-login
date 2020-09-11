import React from 'react';

import { Container, Input, ButtonHidden } from './styles';

function InputSign({ Icon, visibility, toggleVisibility, ...attrs }) {
  return (
    <Container>
      <Input {...attrs} />
      <ButtonHidden onPress={() => toggleVisibility(!visibility)}>
        {Icon}
      </ButtonHidden>
    </Container>
  );
}

export default InputSign;
