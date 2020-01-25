import React from 'react';

import { Container, Fixed, Modal } from './styles';

export default function ModalContainer({ children, onclick }) {
  function handleClick() {
    if (onclick) return onclick();
  }

  return (
    <Container>
      <Fixed onClick={handleClick} />
      <Modal>{children}</Modal>
    </Container>
  );
}
