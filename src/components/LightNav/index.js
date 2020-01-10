import React, { useContext } from 'react';
import { useRouter } from 'next/router'
import {warn} from '../../toasty'

import Link from 'next/link';

import { Context } from '../../context';

import BagModal from '../BagModal';

import {
  Nav, UserArea, Button, Bag, List, Ul,
} from './styles';

export default function LightNav() {
  const [state, dispatch] = useContext(Context);
  const router = useRouter()

  const handleSignUp = e => {
    e.preventDefault();
    dispatch({ type: "@USER_SIGN_UP" });
    router.push("/store", "/store");
  };


  const handleSignIn = e => {
    const href= router.pathname
    e.preventDefault();
    dispatch({ type: "@LAST_URL", payload: href });
    router.push("/store/signin", "/store/signin");
  };
  const Favorites =() =>{
    // Favorites is not avalible
    warn("Service Unavailable.")
  }

  return (
    <Nav>
      <div>
        <div>
          <img src="/logo.png" alt="logo" />
        </div>
        <UserArea>
          {!state.isLogin ?(
          <button type="button" onClick={e => handleSignIn(e)}>
          <a>
            <img src="/nav/profile.png" alt="" />
            <span>Signin</span>
          </a>
          </button>
          ): (
            <button type="button" onClick={e => handleSignUp(e)}>
              <a>
                <img src="/nav/profile.png" alt="" />
                <span>Sign Up</span>
              </a>
            </button>
          )}
         
          <button onClick={Favorites}>
            <img src="/nav/favorites.png" alt="" />
            <img src="/nav/bag-scroll-nav.png" alt="" />
            <span>Favorites</span>
          </button>
          <Bag>
            <Button onClick={() => dispatch({ type: "@IS_BAG_OPEN" })}>
              <img src="/nav/bag.png" alt="" />
            </Button>
            <Link href="/store/cart" as="/store/cart">
              <a>Shopping Cart</a>
            </Link>
            {state.isModalOpen && <BagModal />}
          </Bag>
        </UserArea>
      </div>
      <List>
        <span>Clothes for all types of styles</span>
        <Ul>
          <li>
            <Link href="/store">
              <a>Men's</a>
            </Link>
            <Link href="/store">
              <a>Women's</a>
            </Link>
            <Link href="/store">
              <a>Baby</a>
            </Link>
            <Link href="/store">
              <a>Girls</a>
            </Link>
            <Link href="/store">
              <a>Boys</a>
            </Link>
            <Link href="/store">
              <a>H&M</a>
            </Link>
            <Link href="/store">
              <a>News</a>
            </Link>
          </li>
        </Ul>
      </List>
    </Nav>
  );
}
