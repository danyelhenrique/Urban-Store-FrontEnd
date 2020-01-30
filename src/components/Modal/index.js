import React from 'react';
import { hidden } from '../../../utils/hiddenOnModalOpen';

import { Container, Fixed, Modal } from './styles';

export default function ModalContainer({ children, onclick, isActive }) {
  function handleClick() {
    if (onclick) {
      onclick();
      // hidden(isActive);
    }
  }

  return (
    <Container>
      <Fixed onClick={handleClick} />
      <Modal>{children}</Modal>
    </Container>
  );
}
