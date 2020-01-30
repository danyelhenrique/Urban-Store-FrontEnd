import React from 'react';
import { useRouter } from 'next/router';
import { hidden } from '../../../utils/hiddenOnModalOpen';

import { useSelector, useDispatch } from 'react-redux';

import { ContainerModal, MyAccount, UserData, Button, Avatar } from './styles';

import Icon from '../Icon';
import Modal from '../Modal';

import { userModal } from '../../store/modules/modal/actions';

export default function UserModal() {
  const router = useRouter();

  const isActive = useSelector(state => state.modal.isUserModalOpen);
  const isUserLogin = useSelector(state => state.user.isValid);

  const dispatch = useDispatch();

  const href = router.pathname;

  const pushTo = () => router.push('/store/signin', '/store/signin');

  const handleModal = () => {
    dispatch(userModal());
  };

  const handleCloseModal = () => {
    dispatch(userModal());
    hidden(false);
  };

  const handleSignUp = e => {
    e.preventDefault();
    router.push(href, href);
  };
  console.log('isUserLogin', isUserLogin);

  if (!isUserLogin) {
    return (
      <ContainerModal isActive={isActive}>
        <Modal onclick={handleCloseModal} isActive={isActive}>
          <MyAccount>
            <h6>HELLO FRIEND</h6>
            <Icon background="/nav/close.png">
              <button type="button" onClick={handleModal} />
            </Icon>
          </MyAccount>

          <UserData>
            <Avatar background="/nav/default_avatar.png" />
            <Button
              onClick={() => router.push('/store/signin', '/store/signin')}
            >
              Sign In
            </Button>
          </UserData>
        </Modal>
      </ContainerModal>
    );
  }

  return (
    <ContainerModal isActive={isActive}>
      <Modal onclick={handleCloseModal} isActive={isActive}>
        <MyAccount>
          <h6>MY ACCOUNT</h6>
          <Icon background="/nav/close.png">
            <button type="button" onClick={handleModal} />
          </Icon>
        </MyAccount>

        <UserData>
          <Avatar background="/nav/default_avatar.png" />
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
