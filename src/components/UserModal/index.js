import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { hidden } from '../../../utils/hiddenOnModalOpen';
import { sucess } from '../../toasty';

import { ContainerModal, MyAccount, UserData, Button, Avatar } from './styles';

import Icon from '../Icon';
import Modal from '../Modal';

import { userModal } from '../../store/modules/modal/actions';
import { userSigOut } from '../../store/modules/user/actions';

export default function UserModal() {
  const router = useRouter();

  const isActive = useSelector(state => state.modal.isUserModalOpen);
  const { name } = useSelector(state => state.user);

  const dispatch = useDispatch();

  const handleCloseModal = () => {
    dispatch(userModal());
    hidden(false);
  };

  const handleSignUp = e => {
    e.preventDefault();

    dispatch(userSigOut({ isValid: false }));

    sucess('Sing Out Sucess.');
  };

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
          <Avatar background="/nav/default_avatar.png" />
          <span>
            {' '}
            Welcome back
            {name}{' '}
          </span>

          <Button>Account Settings</Button>
          <Button onClick={handleSignUp}>Sign Out</Button>
          <Button onClick={() => router.push('/store/signin', '/store/signin')}>
            Sign With Another Account
          </Button>
        </UserData>
      </Modal>
    </ContainerModal>
  );
}
