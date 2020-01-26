import React from 'react';

import LightNav from './LightNav';
import DarkNav from './DarkNav';

import { NavContainer } from './styles';

const visible = true;

export default function Nav() {
  return <NavContainer>{visible ? <DarkNav /> : <LightNav />}</NavContainer>;
}
