import React from 'react';
import LazyLoad from 'react-lazyload';

import UlContainer from '../index';

import { Ul, Picture } from './styles';
import NavItems from '../../NavItems';

export default function Sale() {
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
            <source srcSet="/nav/navgation/sale.webp" type="image/webp" />
            <img src="/nav/navgation/sale.jpg" alt="sale" />
          </Picture>
        </LazyLoad>
      </Ul>
    </UlContainer>
  );
}
