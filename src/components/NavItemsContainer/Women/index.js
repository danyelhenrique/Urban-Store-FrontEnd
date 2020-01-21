import React,{useState} from 'react';
import NavContainer from '../index'

import styled from 'styled-components';

const Image = styled.div`
  height: 70%;
  width: 100%;
  background: url("${props => props.background && `${props.background}`}");
  background-size: cover;
  background-repeat: no-repeat;
`

import { Ul } from './styles';
import NavItems from '../../NavItems';


export default function Women({active , setActive}) {


  return (
    <NavContainer active={active} setActive={setActive}> 
        <Ul default>
            <NavItems />
        </Ul>

        <Ul double>
            <NavItems title="Clothing"/>
            <NavItems title="Shoes & Accessories"/>
        </Ul>

        <Ul double>
            <NavItems title="Clothing"/>
            <Image background="/nav/navgation/girl.jpeg"/>
        </Ul>

    </NavContainer>
  );
}
