import React from 'react';

import LazyLoad from 'react-lazyload';

import UlContainer from '../index';

import { Ul, Picture } from './styles';
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
        <LazyLoad height="100%">
          <Picture>
            <source srcSet="/nav/navgation/girl.webp" type="image/webp" />
            <img src="/nav/navgation/girl.jpg" alt="girls" />
          </Picture>
        </LazyLoad>
      </Ul>
    </UlContainer>
  );
}
