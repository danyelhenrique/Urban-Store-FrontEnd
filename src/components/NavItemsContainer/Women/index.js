import React from 'react';
import UlContainer from '../index';

import { Li, Image } from './styles';
import NavItems from '../../NavItems';

export default function Women() {
  return (
    <UlContainer>
      <Li default>
        <NavItems />
      </Li>

      <Li double>
        <NavItems title="Women Clothing" />
        <NavItems title="Women Shoes & Accessories" />
      </Li>

      <Li double>
        <NavItems title="Women Clothing" />
        <Image background="/nav/navgation/woman.jpg" />
      </Li>
    </UlContainer>
  );
}
