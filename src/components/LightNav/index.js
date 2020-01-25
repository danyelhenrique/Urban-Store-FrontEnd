import React, { useMemo } from 'react';
// import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';
import {
  userModal as uModal,
  bagModal as bModal
} from '../../store/modules/modal/actions';

import { warn } from '../../toasty';

import NavWomen from '../NavItemsContainer/Women';
import NavPlus from '../NavItemsContainer/PlusAndCurver';
import Mens from '../NavItemsContainer/Mens';
import Girls from '../NavItemsContainer/Girls';
import BeautyBy from '../NavItemsContainer/BeautyBy';
import Sale from '../NavItemsContainer/Sale';

import BagModal from '../BagModal';
import UserModal from '../UserModal';

import Icon from '../Icon';

import {
  Header,
  Internalization,
  UserArea,
  IconsContainer,
  QntCart,
  Links,
  LinkGroup,
  Link,
  Input,
  Logo
} from './styles';

export default function LightNav() {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  function Favorites() {
    warn('Service Unavailable.');
  }

  const Qnt = useMemo(() => cart.length, [cart]);

  return (
    <>
      <Header>
        <Internalization />

        <UserArea>
          <Logo>
            <span>NEW LOGO HERE</span>
          </Logo>

          <IconsContainer>
            <Icon background="/nav/user.png" btn-no-cursor>
              <button type="button" onClick={() => dispatch(uModal())} />
            </Icon>
            <Icon background="/nav/favorite.png">
              <button type="button" onClick={Favorites} />
            </Icon>
            <Icon background="/nav/bag.png">
              <button type="button" onClick={() => dispatch(bModal())} />
            </Icon>
            <QntCart>{Qnt}</QntCart>
          </IconsContainer>
        </UserArea>

        <UserModal />
        <BagModal />
      </Header>
      <LinkGroup>
        <Links>
          <Link>
            <button type="button">
              WOMEN + ACC
              <NavWomen />
            </button>
          </Link>
          <Link>
            <button type="button">
              PLUS + CURVER
              <NavPlus />
            </button>
          </Link>
          <Link>
            <button type="button">
              MEN
              <Mens />
            </button>
          </Link>
          <Link>
            <button type="button">
              GIRLS
              <Girls />
            </button>
          </Link>
          <Link>
            <button type="button">
              BEAUTY BY ...
              <BeautyBy />
            </button>
          </Link>
          <Link>
            <button type="button">
              SALE
              <Sale />
            </button>
          </Link>
        </Links>

        <Input>
          <input type="text" placeholder="Search Products" />
          <Icon background="/nav/search.png" />
        </Input>
      </LinkGroup>
    </>
  );
}
