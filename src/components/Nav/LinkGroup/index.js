import React from 'react';

import NavWomen from '../../NavItemsContainer/Women';
import NavPlus from '../../NavItemsContainer/PlusAndCurver';
import Mens from '../../NavItemsContainer/Mens';
import Girls from '../../NavItemsContainer/Girls';
import BeautyBy from '../../NavItemsContainer/BeautyBy';
import Sale from '../../NavItemsContainer/Sale';

import Icon from '../../Icon';

import { Links, LinkGroup, Link, Border, Input } from './styles';

export default function LinkGroupA() {
  return (
    <LinkGroup>
      <Links>
        <Link>
          <button type="button">
            WOMEN + ACC
            <Border />
            <NavWomen />
          </button>
        </Link>
        <Link>
          <button type="button">
            PLUS + CURVER
            <Border />
            <NavPlus />
          </button>
        </Link>
        <Link>
          <button type="button">
            MEN
            <Border />
            <Mens />
          </button>
        </Link>
        <Link>
          <button type="button">
            GIRLS
            <Border />
            <Girls />
          </button>
        </Link>
        <Link>
          <button type="button">
            BEAUTY BY ...
            <Border />
            <BeautyBy />
          </button>
        </Link>
        <Link>
          <button type="button">
            SALE
            <Border />
            <Sale />
          </button>
        </Link>
      </Links>

      <Input>
        <input type="text" placeholder="Search Products" />
        <Icon background="/nav/search-light.png" />
      </Input>
    </LinkGroup>
  );
}
