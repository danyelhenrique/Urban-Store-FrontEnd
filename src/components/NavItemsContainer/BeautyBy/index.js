import React from 'react';

import LazyLoad from 'react-lazyload';

import UlContainer from '../index';

import { Ul, Picture } from './styles';
import NavItems from '../../NavItems';

export default function BeautyBy() {
  return (
    <UlContainer>
      <Ul default>
        <NavItems />
      </Ul>

      <Ul double>
        <NavItems title="Clothing girls" />
        <NavItems title="Shoes & Accessories" />
      </Ul>

      <Ul double lastChild>
        <NavItems title="Clothing" />
        <LazyLoad height="100%">
          <Picture>
            <source srcSet="/nav/navgation/beauty-by.webp" type="image/webp" />
            <img src="/nav/navgation/beauty-by.jpg" alt="beaity by" />
          </Picture>
        </LazyLoad>
      </Ul>
    </UlContainer>
  );
}
