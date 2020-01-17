import React, {useContext} from 'react';
import { useRouter } from 'next/router'

import { Context } from '../../context';


import { ContainerModal,MyAccount, UserData , Button , Avatar} from './styles';

import Icon from '../Icon'
import Modal from '../Modal'


export default function UserModal() {
  const [state, dispatch] = useContext(Context);
  const router = useRouter()
  const isActive = state.isUserModalOpen



  const href= router.pathname
  const pushTo =  _ =>router.push("/store/signin", "/store/signin");

  const handleModal = () => {
    dispatch({ type: "@IS_USER_MODAL_OPEN" })
  };


  const handleSignUp = e => {
    e.preventDefault();
    dispatch({ type: "@USER_SIGN_UP" });
    router.push(href, href);
  };
    
  return (
    <ContainerModal isActive={isActive}>
    <Modal onclick={handleModal}>
        <MyAccount>
          <h6>MY ACCOUNT</h6>
          <Icon background="/nav/close.png" >
            <button onClick={handleModal}></button>
          </Icon>
        </MyAccount>
      
        <UserData>
          <Avatar background="/nav/default_avatar.png"/>
          <Button>Account Settings</Button>
          <Button onClick={handleSignUp}>Sign Out</Button>
          <Button onClick={() =>router.push("/store/signin", "/store/signin")}>Sign With Another Account </Button>
        </UserData>
    </Modal>
    </ContainerModal>
  );
}
