import React from 'react';

import Input from '../InputItem';

import { InputContainer as InputItem } from './styles';
import ButtonContainer from '../ButtonContainer';

export default function InputContainer({ SingUp }) {
  return (
    <InputItem>
      <Input SingUp={SingUp} />
      <ButtonContainer />
    </InputItem>
  );
}
