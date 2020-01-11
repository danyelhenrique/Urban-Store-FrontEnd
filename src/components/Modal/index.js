import React from 'react';

import { Container, Fixed ,Modal} from './styles';

import Icon from '../Icon'

export default function ModalContainer({children , onclick}) {

    function handleClick(){
        if(onclick) return onclick()
        return
    }

  return (
    <Container >
      <Fixed onClick={handleClick}/>
      <Modal>
        {children}
      </Modal>
    </Container>
  );
}
