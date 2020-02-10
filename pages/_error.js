import React from 'react';
import Head from 'next/head';

import Main from '../src/components/Main';
import Nav from '../src/components/Nav';

import NotFound from '../src/components/404';

export default function store() {
  return (
    <>
      <Head>
        <title>Urban Store</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main store>
        <Nav />
        <NotFound />
      </Main>
    </>
  );
}