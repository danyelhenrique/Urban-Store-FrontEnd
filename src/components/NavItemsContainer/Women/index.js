import React from 'react';
import UlContainer from '../index';

import { Ul, Image } from './styles';
import NavItems from '../../NavItems';

export default function Women() {
  return (
    <UlContainer>
      <Ul default>
        <NavItems />
      </Ul>

      <Ul double>
        <NavItems title="Women Clothing" />
        <NavItems title="Women Shoes & Accessories" />
      </Ul>

      <Ul double>
        <NavItems title="Women Clothing" />
        <Image background="/nav/navgation/woman.jpg" />
      </Ul>
    </UlContainer>
  );
}
