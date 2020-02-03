import React from 'react';
// import Link from 'next/link';

import LinkGroup from '../LinkGroup';

import BagModal from '../../BagModal';
import UserModal from '../../UserModal';

import IconsNavContainer from '../IconsNavContainer';

import { Header, Internalization, UserArea, Logo } from './styles';

export default function LightNav() {
  return (
    <>
      <Header>
        <Internalization />

        <UserArea>
          <Logo>
            <span>URBAN STORE</span>
          </Logo>
          <IconsNavContainer />
        </UserArea>

        <UserModal />
        <BagModal />
      </Header>
      <LinkGroup />
    </>
  );
}
