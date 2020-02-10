import React from 'react';

import { InputItem as Item, Input } from './styles';

export default function InputItem({ SingUp }) {
  return (
    <Item>
      {SingUp && (
        <Input autoComplete="off" type="name" name="name" placeholder="Name" />
      )}
      <Input
        autoComplete="off"
        type="email"
        name="email"
        placeholder="E-mail"
      />
      <Input
        autoComplete="off"
        type="password"
        name="password"
        placeholder="password"
      />
      {SingUp && (
        <Input
          autoComplete="off"
          type="passsword"
          name="confirmPassword"
          placeholder="confirm password"
        />
      )}
    </Item>
  );
}
