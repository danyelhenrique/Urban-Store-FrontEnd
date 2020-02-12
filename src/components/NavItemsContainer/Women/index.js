import React from 'react';
import LazyLoad from 'react-lazyload';

import UlContainer from '../index';

import { Ul, Picture } from './styles';
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

      <Ul double lastChild>
        <NavItems title="Women Clothing" />
        <LazyLoad height="100%">
          <Picture>
            <source srcSet="/nav/navgation/woman.webp" type="image/webp" />
            <img src="/nav/navgation/woman.jpg" alt="women" />
          </Picture>
        </LazyLoad>
      </Ul>
    </UlContainer>
  );
}
