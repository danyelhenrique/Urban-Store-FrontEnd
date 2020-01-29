import React from 'react';
import Head from 'next/head';

import Main from '../../src/components/Main';
import Nav from '../../src/components/Nav';

import MainStore from '../../src/components/MainStore';
import Hero from '../../src/components/Hero';

export default function store() {
  return (
    <>
      <Head>
        <title>Urban Store</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>
        <Nav />
        <Hero />
        <MainStore />
      </Main>
    </>
  );
}
