import React from 'react';

import LazyLoad from 'react-lazyload';

import UlContainer from '../index';

import { Ul, Picture } from './styles';
import NavItems from '../../NavItems';

export default function PlusAndCurver() {
  return (
    <UlContainer>
      <Ul default>
        <NavItems />
      </Ul>

      <Ul double>
        <NavItems title="Clothing" />
        <NavItems title="Shoes & Accessories teste" />
      </Ul>

      <Ul double lastChild>
        <NavItems title="Clothing" />
        <LazyLoad height="100%">
          <Picture>
            <source srcSet="/nav/navgation/plus.webp" type="image/webp" />
            <img src="/nav/navgation/plus.jpg" alt="plus and curver" />
          </Picture>
        </LazyLoad>
      </Ul>
    </UlContainer>
  );
}
