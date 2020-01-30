/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useMemo } from 'react';
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';
import { hidden } from '../../../../utils/hiddenOnModalOpen';
import {
  userModal as uModal,
  bagModal as bModal
} from '../../../store/modules/modal/actions';

import { warn } from '../../../toasty';

import Icon from '../../Icon';

import { IconsContainer, QntCart } from './styles';

export default function IconsNavContainer() {
  const router = useRouter();
  const { cart } = useSelector(state => state.cart);
  const isUserLogin = useSelector(state => state.user.isValid);

  const dispatch = useDispatch();

  const Qnt = useMemo(() => cart.length, [cart]);

  function Favorites() {
    warn('Service Unavailable.');
  }

  function dispatchModal() {
    if (!isUserLogin) {
      router.push('/store/signin', '/store/signin');
      return;
    }
    dispatch(uModal());
    hidden(true);
  }

  return (
    <IconsContainer>
      <Icon background="/nav/user.png" btn-no-cursor>
        <button type="button" onClick={dispatchModal} />
      </Icon>
      <Icon background="/nav/favorite.png">
        <button type="button" onClick={Favorites} />
      </Icon>
      <Icon background="/nav/bag.png">
        <button type="button" onClick={() => dispatch(bModal())} />
      </Icon>
      <QntCart>{Qnt}</QntCart>
    </IconsContainer>
  );
}
