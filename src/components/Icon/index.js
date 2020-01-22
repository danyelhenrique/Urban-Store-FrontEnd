import React from 'react';

import { Container } from './styles';

export default function Icon({ children, background, ...props }) {
  return (
    <Container background={background} {...props}>
      {children}
    </Container>
  );
}
