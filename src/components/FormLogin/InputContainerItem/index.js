import React from 'react';

import { InputItem } from './styles';

export default function InputContainerItem({ isVisible, ...props }) {
  const { type, name, placeholder, onChange } = props;
  return (
    <InputItem isVisible={isVisible}>
      <input
        autoComplete="off"
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
      />
    </InputItem>
  );
}
