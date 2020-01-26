import React, { useMemo } from 'react';
// import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';
import {
  userModal as uModal,
  bagModal as bModal
} from '../../../store/modules/modal/actions';

import { warn } from '../../../toasty';

import LinkGroup from '../LinkGroup';

import BagModal from '../../BagModal';
import UserModal from '../../UserModal';

import Icon from '../../Icon';

import IconsNavContainer from '../IconsNavContainer';

import { Header, Internalization, UserArea, Logo } from './styles';

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
          <IconsNavContainer />
          {/* <IconsContainer>
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
          </IconsContainer> */}
        </UserArea>

        <UserModal />
        <BagModal />
      </Header>
      <LinkGroup />
    </>
  );
}
