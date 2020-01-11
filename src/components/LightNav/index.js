import React, { useContext, useState } from 'react';
import {warn} from '../../toasty'

import Link from 'next/link';

import { Context } from '../../context';

import BagModal from '../BagModal';
import UserModal from '../UserModal'

import Icon from '../Icon'

import {
  Header ,Internalization, UserArea,IconsContainer,Links,LinkGroup ,Input,Logo ,
} from './styles';

export default function LightNav() {
  const [state, dispatch] = useContext(Context);

  const Favorites =() =>{
    // Favorites is not avalible
    warn("Service Unavailable.")
  }

  return (
    <Header>
      <Internalization>

      </Internalization>
      <UserArea>
        <Logo>
          <span>NEW LOGO HERE</span>
        </Logo>
        <IconsContainer>
          <Icon background="/nav/user.png" btn-no-cursor>
            <button onClick={() => dispatch({ type: "@IS_BAG_OPEN" })}></button>
          </Icon>
          <Icon background="/nav/favorite.png" >
            <button onClick={Favorites}></button>
          </Icon>
          <Icon background="/nav/bag.png"/>
          </IconsContainer>
      </UserArea>
      <Links>
        <LinkGroup>
          <a>WOMEN + ACC</a>
          <a>PLUS + CURVER</a>
          <a>WOMEN + ACC</a>
          <a>MEN</a>
          <a>GIRLS</a>
          <a>BEAUTY BY ...</a>
          <a>SALE</a>
        </LinkGroup>
        <Input>
          <input type="text" placeholder="Search Products"/>
          <Icon background="/nav/search.png"/>
        </Input>
      </Links>
      {state.isModalOpen &&(
        <UserModal
        />
      )}
    </Header>
  );
}
