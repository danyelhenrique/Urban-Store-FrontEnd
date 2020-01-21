import React, { useContext, useMemo, useState } from 'react';
import { useRouter } from 'next/router'
import Link from 'next/link';

import {warn} from '../../toasty'

import NavWomen from '../NavItemsContainer/Women'

import { Context } from '../../context';

import BagModal from '../BagModal';
import UserModal from '../UserModal'

import Icon from '../Icon'

import {
  Header ,Internalization, UserArea,IconsContainer, QntCart, Links,LinkGroup ,Input,Logo ,
} from './styles';

export default function LightNav() {
  const [state, dispatch] = useContext(Context);
  const [active , setActive] = useState(false)
  const [modalOpen , setModalOpen] = useState(false)

  const router = useRouter()

  const Favorites =() =>{
    warn("Service Unavailable.")
  }

  const Qnt = useMemo(()=> state.cart.length,[state.cart])
  
  const handleModal =  _ => {
    setModalOpen(!modalOpen)
  }

   const handleModalLinks =  _ => {
    //  if(modalOpen) return
     setActive(!active)
    
  }
  
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
        <LinkGroup
        //  onMouseOver={handleModal}
        //  onMouseOut={handleModal}
         >
          <a
          onMouseOver={_ => setActive(true)}
          // onMouseOut={handleModalLinks}
          >WOMEN + ACC</a>
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
        {/* {active && ( */}
        <NavWomen active={active} setActive={setActive}/>
        {/* )} */}

    </Header>
  );
}
