import React from 'react';

import NavWomen from '../../NavItemsContainer/Women';
import NavPlus from '../../NavItemsContainer/PlusAndCurver';
import Mens from '../../NavItemsContainer/Mens';
import Girls from '../../NavItemsContainer/Girls';
import BeautyBy from '../../NavItemsContainer/BeautyBy';
import Sale from '../../NavItemsContainer/Sale';

import Icon from '../../Icon';

import { Links, LinkGroup, Link, Input } from './styles';

export default function LinkGroupA() {
  return (
    <LinkGroup>
      <Links>
        <Link>
          <button type="button">
            WOMEN + ACC
            <NavWomen />
          </button>
        </Link>
        <Link>
          <button type="button">
            PLUS + CURVER
            <NavPlus />
          </button>
        </Link>
        <Link>
          <button type="button">
            MEN
            <Mens />
          </button>
        </Link>
        <Link>
          <button type="button">
            GIRLS
            <Girls />
          </button>
        </Link>
        <Link>
          <button type="button">
            BEAUTY BY ...
            <BeautyBy />
          </button>
        </Link>
        <Link>
          <button type="button">
            SALE
            <Sale />
          </button>
        </Link>
      </Links>

      <Input>
        <input type="text" placeholder="Search Products" />
        <Icon background="/nav/search.png" />
      </Input>
    </LinkGroup>
  );
}
