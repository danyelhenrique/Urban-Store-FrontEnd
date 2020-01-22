import React, { useContext } from 'react';
import { Context } from '../../context';

import { Container } from './styles';

export default function NavItems({ children }) {
  return <Container>{children}</Container>;
}
