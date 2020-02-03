import React from 'react';
import UlContainer from '../index';

import { Ul, Image } from './styles';
import NavItems from '../../NavItems';

export default function PlusAndCurver() {
  return (
    <UlContainer>
      <Ul default>
        <NavItems />
      </Ul>

      <Ul double>
        <NavItems title="Clothing" />
        <NavItems title="Shoes & Accessories teste" />
      </Ul>

      <Ul double lastChild>
        <NavItems title="Clothing" />
        <Image background="/nav/navgation/plus.jpg" />
      </Ul>
    </UlContainer>
  );
}
