import React, { useContext, useMemo } from 'react';
// import Link from 'next/link';

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
  Nav,
  LinkGroup,
  Link,
  Input,
  Logo,
} from './styles';

export default function LightNav() {
  const [state, dispatch] = useContext(Context);

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
      <Nav>
        <LinkGroup>
          <Link>
            <a>
              WOMEN + ACC
              <NavWomen />
            </a>
          </Link>
          <Link>
            <a>
              PLUS + CURVER
              <NavPlus />
            </a>
{' '}
          </Link>
          <Link>
            <a>
              MEN
              <Mens />
            </a>
{' '}
          </Link>
          <Link>
            <a>
              GIRLS
              <Girls />
            </a>
{' '}
          </Link>
          <Link>
            <a>
              BEAUTY BY ...
              <BeautyBy />
            </a>
{' '}
          </Link>
          <Link>
            <a>
              SALE
              <Sale />
            </a>
{' '}
          </Link>
        </LinkGroup>

        <Input>
          <input type="text" placeholder="Search Products" />
          <Icon background="/nav/search.png" />
        </Input>
      </Nav>
    </>
  );
}
