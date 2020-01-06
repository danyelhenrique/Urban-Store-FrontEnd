import React, { useContext } from 'react';

import Link from 'next/link';

import { Context } from '../../context';

import BagModal from '../BagModal';

import {
  Nav, UserArea, Button, Bag, List, Ul,
} from './styles';

export default function LightNav() {
  const [state, dispatch] = useContext(Context);

  return (
    <Nav>
      <div>
        <div>
          <img src="/logo.png" alt="logo" />
        </div>
        <UserArea>
          <Link href="/store/signin">
            <a>
              <img src="/nav/profile.png" alt="" />
              <span>Signin</span>
            </a>
          </Link>
          <Link href="/store/favorite">
            <a>
              <img src="/nav/favorites.png" alt="" />
              <img src="/nav/bag-scroll-nav.png" alt="" />
              <span>Favorites</span>
            </a>
          </Link>
          <Bag>
            <Button onClick={() => dispatch({ type: '@IS_BAG_OPEN' })}>
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
