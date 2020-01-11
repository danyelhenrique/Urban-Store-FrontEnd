import React, {useContext} from 'react';
import { useRouter } from 'next/router'

import { Context } from '../../context';


import { Container, Fixed ,Modal, MyAccount, StoreData ,UserData , Button , Avatar} from './styles';

import Icon from '../Icon'


export default function UserModal() {
  const [state, dispatch] = useContext(Context);
  const router = useRouter()


  const href= router.pathname
  const pushTo =  _ =>router.push("/store/signin", "/store/signin");

  const handleModal = () => {
    dispatch({ type: "@IS_BAG_OPEN" })
    
  }
  const handleClick = isSigIn => {
    if(isSigIn) {
      dispatch({ type: "@LAST_URL", payload: href });
      dispatch({ type: "  @SliderLoginPage" });
      pushTo()
      return 
    }

    dispatch({ type: "@LAST_URL", payload: href });
    pushTo()
  };

  const handleSignUp = e => {
    e.preventDefault();
    dispatch({ type: "@USER_SIGN_UP" });
    router.push("/store", "/store");
  };
    
  return (
    <Container >
      <Fixed onClick={handleModal}/>
      <Modal>
        <MyAccount>
          <h6>MY ACCOUNT</h6>
          <Icon background="/nav/close.png" >
            <button onClick={handleModal}></button>
          </Icon>
        </MyAccount>
        {!state.isLogin &&(
          <StoreData>
            <Button onClick={_ =>handleClick(true)}>Sign In</Button>
            <Button onClick={handleClick}>Create Account</Button>
            <Button>Gift Cart</Button>
        </StoreData>
        )}
        <UserData>
          <Avatar background="/nav/default_avatar.png"/>
          <Button>Account Settings</Button>
          <Button onClick={handleSignUp}>Sign Out</Button>
          <Button>Sign With Another Account </Button>
        </UserData>
      </Modal>
    </Container>
  );
}
