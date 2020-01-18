import React, { useContext, useMemo } from 'react';
import { useRouter } from 'next/router'
import Link from 'next/link';

import {warn} from '../../toasty'


import { Context } from '../../context';

import BagModal from '../BagModal';
import UserModal from '../UserModal'

import Icon from '../Icon'

import {
  Header ,Internalization, UserArea,IconsContainer, QntCart, Links,LinkGroup ,Input,Logo ,
} from './styles';

export default function LightNav() {
  const [state, dispatch] = useContext(Context);
  const router = useRouter()

  const Favorites =() =>{
    warn("Service Unavailable.")
  }

  const Qnt = useMemo(()=> state.cart.length,[state.cart])

  return (
    <Header>
      <Internalization>

      </Internalization>
      <UserArea>
        <Logo>
          <span>NEW LOGO HERE</span>
        </Logo>
        <IconsContainer>
          <Icon background="/nav/user.png" btn-no-cursor>
            <button onClick={() => dispatch({ type: "@IS_USER_MODAL_OPEN" })}></button>
          </Icon>
          <Icon background="/nav/favorite.png" >
            <button onClick={Favorites}></button>
          </Icon>
          <Icon background="/nav/bag.png">
            <button onClick={()=> dispatch({type: "@IS_BAG_OPEN"})}></button>
          </Icon>
          <QntCart>{Qnt}</QntCart>
          </IconsContainer>
      </UserArea>
      <Links>
        <LinkGroup>
          <a>WOMEN + ACC</a>
          <a>PLUS + CURVER</a>
          <a>WOMEN + ACC</a>
          <a>MEN</a>
          <a>GIRLS</a>
          <a>BEAUTY BY ...</a>
          <a>SALE</a>
        </LinkGroup>
        <Input>
          <input type="text" placeholder="Search Products"/>
          <Icon background="/nav/search.png"/>
        </Input>
      </Links>
        <UserModal/>
        <BagModal/>
    </Header>
  );
}
