/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Links from 'next/link';

import { Li, Link } from './styles';

export default function NavItems({ title }) {
  return (
    <Li>
      <h4>{title || ''}</h4>
      <Links href="/store">
        <Link>Best Sellers</Link>
      </Links>
      <Links href="/store">
        <Link>Back in Stock</Link>
      </Links>
      <Links href="/store">
        <Link>Basics Shop</Link>
      </Links>
      <Links href="/store">
        <Link>Brands We Love</Link>
      </Links>
      <Links href="/store">
        <Link>F21 x Collections</Link>
      </Links>
      <Links href="/store">
        <Link>Extended Sizes</Link>
      </Links>
      <Links href="/store">
        <Link>Gift Cards</Link>
      </Links>
      <Links href="/store">
        <Link>Special Offers</Link>
      </Links>
      <Links href="/store">
        <Link>The Outlet</Link>
      </Links>
      <Links href="/store">
        <Link>#F21xMe</Link>
      </Links>
      <Links href="/store">
        <Link>Sale</Link>
      </Links>
    </Li>
  );
}
