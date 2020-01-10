import React, { useContext, useState } from 'react';
import { useRouter } from 'next/router'
import {warn} from '../../toasty'

import Link from 'next/link';

import { Context } from '../../context';

import BagModal from '../BagModal';
import UserModal from '../UserModal'

import {
  Header ,Internalization, UserArea,IconsContainer,Links,LinkGroup ,Input,Logo ,Icon
} from './styles';

export default function LightNav() {
  const [state, dispatch] = useContext(Context);
  const[modalOpen , setModalOpen]= useState(true);

  const router = useRouter()

  const handleSignUp = e => {
    e.preventDefault();
    dispatch({ type: "@USER_SIGN_UP" });
    router.push("/store", "/store");
  };


  const handleSignIn = e => {
    const href= router.pathname
    e.preventDefault();
    dispatch({ type: "@LAST_URL", payload: href });
    router.push("/store/signin", "/store/signin");
  };
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
          <Icon background="/nav/user.png"/>
          <Icon background="/nav/favorite.png"/>
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
      
    </Header>
  );
}
