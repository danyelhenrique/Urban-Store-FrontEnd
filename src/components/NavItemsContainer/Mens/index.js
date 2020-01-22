import React from 'react';
import styled from 'styled-components';
import UlContainer from '../index';

import { Li, Image } from './styles';
import NavItems from '../../NavItems';

export default function Mens() {
  return (
    <UlContainer>
      <Li default>
        <NavItems />
      </Li>

      <Li double>
        <NavItems title="Best Sellers" />
        <NavItems title="Mens Shoes & Accessories" />
      </Li>

      <Li double>
        <NavItems title="Clothing" />
        <Image background="/nav/navgation/men.jpg" />
      </Li>
    </UlContainer>
  );
}
