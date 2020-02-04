import React from 'react';
import Head from 'next/head';

import Main from '../../src/components/Main';
import Nav from '../../src/components/Nav';
import AccontSettings from '../../src/components/AccontSettings';

export default function Settings() {
  return (
    <>
      <Head>
        <title>Cart</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>
        <Nav />
        <AccontSettings />
      </Main>
    </>
  );
}
