import React, { useContext } from 'react';
import { Context } from '../../context';

import LightNav from '../LightNav';
import DarkNav from '../DarkNav';

import { NavContainer } from './styles';

export default function Nav() {
  const [state, ] = useContext(Context);
  

  return <NavContainer scroll={state.isScroll}>{!state.isScroll ? <LightNav /> : <DarkNav />}</NavContainer>;
}
