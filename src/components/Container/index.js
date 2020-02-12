/* eslint-disable react/jsx-fragments */
import React, { Fragment } from 'react';
import { useRouter } from 'next/router';

import Nav from '../Nav';

import { Main } from './styles';

function Container({ children }) {
  const router = useRouter();
  const rout = router.pathname;

  const checkIfNavRender = rout === '/' || rout === '/store/signin';

  return (
    <Fragment>
      {!checkIfNavRender && <Nav />}
      <Main isFull={checkIfNavRender}>{children}</Main>
    </Fragment>
  );
}

export default Container;
