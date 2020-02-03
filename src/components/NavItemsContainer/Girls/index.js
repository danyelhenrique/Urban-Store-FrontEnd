import React from 'react';
import UlContainer from '../index';

import { Ul, Image } from './styles';
import NavItems from '../../NavItems';

export default function Girls() {
  return (
    <UlContainer>
      <Ul default>
        <NavItems />
      </Ul>

      <Ul double>
        <NavItems title="Girls Clothing" />
        <NavItems title="Girls Shoes & Accessories" />
      </Ul>

      <Ul double lastChild>
        <NavItems title="Clothing" />
        <Image background="/nav/navgation/girl.jpg" />
      </Ul>
    </UlContainer>
  );
}
