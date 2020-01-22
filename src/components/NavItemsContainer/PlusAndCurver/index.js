import React from 'react';
import UlContainer from '../index';

import { Li, Image } from './styles';
import NavItems from '../../NavItems';

export default function PlusAndCurver() {
  return (
    <UlContainer>
      <Li default>
        <NavItems />
      </Li>

      <Li double>
        <NavItems title="Clothing" />
        <NavItems title="Shoes & Accessories teste" />
      </Li>

      <Li double>
        <NavItems title="Clothing" />
        <Image background="/nav/navgation/plus.jpg" />
      </Li>
    </UlContainer>
  );
}
