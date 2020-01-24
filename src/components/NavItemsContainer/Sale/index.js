import React from 'react';
import UlContainer from '../index';

import { Ul, Image } from './styles';
import NavItems from '../../NavItems';

export default function Sale() {
  return (
    <UlContainer>
      <Ul default>
        <NavItems />
      </Ul>

      <Ul double>
        <NavItems title="Clothing girls" />
        <NavItems title="Shoes & Accessories" />
      </Ul>

      <Ul double>
        <NavItems title="Clothing" />
        <Image background="/nav/navgation/girl.jpeg" />
      </Ul>
    </UlContainer>
  );
}
