import React, { useEffect, useContext } from 'react';
import { Context } from '../../context';

import LightNav from '../LightNav';
import DarkNav from '../DarkNav';

import { NavContainer } from './styles';

export default function Nav() {
  const [state, dispatch] = useContext(Context);
  const isScrollState = state && state.isScroll ? state.isScroll : state;

  useEffect(
    () => {
      window.onscroll = function () {
        scrollFunction();
      };

      return window.removeEventListener('scroll', scrollFunction);
    },
    [isScrollState],
  );

  function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
      dispatch({ type: '@IS_ISCROLL', payload: true });
    } else {
      dispatch({ type: '@IS_ISCROLL', payload: false });
    }
  }

  return <NavContainer scroll={state.isScroll}>{!state.isScroll ? <LightNav /> : <DarkNav />}</NavContainer>;
}
