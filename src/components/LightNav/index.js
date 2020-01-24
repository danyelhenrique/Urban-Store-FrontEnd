import React, { useContext, useMemo } from 'react';
// import Link from 'next/link';
import { useSelector } from 'react-redux';

import { warn } from '../../toasty';

import NavWomen from '../NavItemsContainer/Women';
import NavPlus from '../NavItemsContainer/PlusAndCurver';
import Mens from '../NavItemsContainer/Mens';
import Girls from '../NavItemsContainer/Girls';
import BeautyBy from '../NavItemsContainer/BeautyBy';
import Sale from '../NavItemsContainer/Sale';

import { Context } from '../../context';

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
  const [state, dispatch] = useContext(Context);
  const todo = useSelector(stado => stado.modal);
  console.log('AUI todo', todo);

  function Favorites() {
    warn('Service Unavailable.');
  }

  const Qnt = useMemo(() => state.cart.length, [state.cart]);

  return (
    <>
      <Header onMouseEnter={_ => dispatch({ type: '@CLOSE_ALL_NAV' })}>
        <Internalization />

        <UserArea>
          <Logo>
            <span>NEW LOGO HERE</span>
          </Logo>

          <IconsContainer>
            <Icon background="/nav/user.png" btn-no-cursor>
              <button
                onClick={() => dispatch({ type: '@IS_USER_MODAL_OPEN' })}
              />
            </Icon>
            <Icon background="/nav/favorite.png">
              <button onClick={Favorites} />
            </Icon>
            <Icon background="/nav/bag.png">
              <button onClick={() => dispatch({ type: '@IS_BAG_OPEN' })} />
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
