import React from 'react';
import UlContainer from '../index';

import { Li, Image } from './styles';
import NavItems from '../../NavItems';

export default function Girls() {
  return (
    <UlContainer>
      <Li default>
        <NavItems />
      </Li>

      <Li double>
        <NavItems title="Girls Clothing" />
        <NavItems title="Girls Shoes & Accessories" />
      </Li>

      <Li double>
        <NavItems title="Clothing" />
        <Image background="/nav/navgation/girl.jpg" />
      </Li>
    </UlContainer>
  );
}
