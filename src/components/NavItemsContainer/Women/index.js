import React from 'react';
import NavContainer from '../index'

import styled from 'styled-components';


const Carossel = styled.div`
  height: 90px;
  background: red;

`


import { Ul } from './styles';
import NavItems from '../../NavItems';



export default function Women() {
  return (
    <NavContainer>
        <Ul default>
            <NavItems />
        </Ul>

        <Ul double>
            <NavItems title="Clothing"/>
            <NavItems title="Shoes & Accessories"/>
        </Ul>

        <Ul double>
            <NavItems title="Clothing"/>
          <Carossel></Carossel>
        </Ul>

    </NavContainer>
  );
}
