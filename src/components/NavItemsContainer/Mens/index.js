import React from 'react';
import styled from 'styled-components';
import UlContainer from '../index';

import { Ul, Image } from './styles';
import NavItems from '../../NavItems';

export default function Mens() {
  return (
    <UlContainer>
      <Ul default>
        <NavItems />
      </Ul>

      <Ul double>
        <NavItems title="Best Sellers" />
        <NavItems title="Mens Shoes & Accessories" />
      </Ul>

      <Ul double>
        <NavItems title="Clothing" />
        <Image background="/nav/navgation/men.jpg" />
      </Ul>
    </UlContainer>
  );
}
