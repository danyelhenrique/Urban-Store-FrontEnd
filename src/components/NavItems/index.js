/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';

import { Li } from './styles';

export default function NavItems({ title }) {
  return (
    <Li>
      <h4>{title || ''}</h4>
      <Link href="/store">
        <a>Best Sellers</a>
      </Link>
      <Link href="/store">
        <a>Back in Stock</a>
      </Link>
      <Link href="/store">
        <a>Basics Shop</a>
      </Link>
      <Link href="/store">
        <a>Brands We Love</a>
      </Link>
      <Link href="/store">
        <a>F21 x Collections</a>
      </Link>
      <Link href="/store">
        <a>Extended Sizes</a>
      </Link>
      <Link href="/store">
        <a>Gift Cards</a>
      </Link>
      <Link href="/store">
        <a>Special Offers</a>
      </Link>
      <Link href="/store">
        <a>The Outlet</a>
      </Link>
      <Link href="/store">
        <a>#F21xMe</a>
      </Link>
      <Link href="/store">
        <a>Sale</a>
      </Link>
    </Li>
  );
}
