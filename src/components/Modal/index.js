import React from 'react';

import { Container, Fixed, Modal } from './styles';

export default function ModalContainer({ children, isBurguer, onclick }) {
  function handleClick() {
    if (onclick) onclick();
  }

  return (
    <Container isBurguer={isBurguer}>
      <Fixed onClick={handleClick} />
      <Modal>{children}</Modal>
    </Container>
  );
}
