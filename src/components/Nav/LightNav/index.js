/* eslint-disable object-curly-newline */
import React from 'react';

import LinkGroup from '../LinkGroup';

import BagModal from '../../BagModal';
import UserModal from '../../UserModal';

import Logo from '../../Logo';

import IconsNavContainer from '../IconsNavContainer';

import { Header, Internalization, UserArea } from './styles';

export default function LightNav() {
  return (
    <>
      <Header>
        <Internalization />
        <UserArea>
          <Logo />
          <IconsNavContainer />
        </UserArea>

        <UserModal />
        <BagModal />
      </Header>
      <LinkGroup />
    </>
  );
}
