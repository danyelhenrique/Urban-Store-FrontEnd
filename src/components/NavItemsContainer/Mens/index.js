import React from 'react';

import LazyLoad from 'react-lazyload';

import UlContainer from '../index';

import { Ul, Picture } from './styles';
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

      <Ul double lastChild>
        <NavItems title="Clothing" />
        <LazyLoad height="100%">
          <Picture>
            <source srcSet="/nav/navgation/men.webp" type="image/webp" />
            <img src="/nav/navgation/men.jpg" alt="mens" />
          </Picture>
        </LazyLoad>
      </Ul>
    </UlContainer>
  );
}
