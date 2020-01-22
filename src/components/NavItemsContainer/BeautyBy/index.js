import React from 'react';
import UlContainer from '../index';

import { Li, Image } from './styles';
import NavItems from '../../NavItems';

export default function BeautyBy() {
  return (
    <UlContainer>
      <Li default>
        <NavItems />
      </Li>

      <Li double>
        <NavItems title="Clothing girls" />
        <NavItems title="Shoes & Accessories" />
      </Li>

      <Li double>
        <NavItems title="Clothing" />
        <Image background="/nav/navgation/girl.jpeg" />
      </Li>
    </UlContainer>
  );
}
