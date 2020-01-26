import React from 'react';

import { Container, Offer, Logo, Nav, UserArea } from './styles';
import IconsNavContainer from '../IconsNavContainer';

import LinkGroup from '../LinkGroup';

import BagModal from '../../BagModal';
import UserModal from '../../UserModal';

export default function DarkNav() {
  return (
    <Container>
      <Offer />
      <UserArea>
        <Logo />
        <IconsNavContainer />
      </UserArea>
      <Nav>
        <LinkGroup isDarkNav />
      </Nav>
      <UserModal />
      <BagModal />
    </Container>
  );
}
