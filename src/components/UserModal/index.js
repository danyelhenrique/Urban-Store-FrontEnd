import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { hidden } from '../../../utils/hiddenOnModalOpen';
import { sucess } from '../../toasty';

import {
  ContainerModal,
  MyAccount,
  UserData,
  UserName,
  Button,
  Avatar
} from './styles';

import Icon from '../Icon';
import Modal from '../Modal';

import { userModal } from '../../store/modules/modal/actions';
import { userSigOut } from '../../store/modules/user/actions';

export default function UserModal() {
  const router = useRouter();

  const isActive = useSelector(state => state.modal.isUserModalOpen);
  const { name, avatar_url } = useSelector(state => state.user);

  const dispatch = useDispatch();

  function handleCloseModal() {
    dispatch(userModal());

    hidden(false);
  }

  function accontSetting() {
    router.push('/me', '/me');

    handleCloseModal();
  }

  function handleSigOut(e) {
    e.preventDefault();

    dispatch(userSigOut({ isValid: false }));

    sucess('Sing Out Sucess.');

    handleCloseModal();
  }

  function anotherAccount() {
    router.push('/store/signin', '/store/signin');
    handleCloseModal();
  }

  return (
    <ContainerModal isActive={isActive}>
      <Modal onclick={handleCloseModal} isActive={isActive}>
        <MyAccount>
          <h6>MY ACCOUNT</h6>
          <Icon background="/nav/close.png">
            <button type="button" onClick={handleCloseModal} />
          </Icon>
        </MyAccount>

        <UserData>
          <Avatar background={avatar_url} />
          <UserName>
            <span>Welcome back</span>
            <p>{name}</p>
          </UserName>

          <Button onClick={accontSetting}>Account Settings</Button>
          <Button onClick={handleSigOut}>Sign Out</Button>
          <Button onClick={anotherAccount}>Sign With Another Account</Button>
        </UserData>
      </Modal>
    </ContainerModal>
  );
}
