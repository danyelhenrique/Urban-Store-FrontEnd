import React from 'react';
import Head from 'next/head';

import Main from '../../src/components/Main';
import ItemMore from '../../src/components/ItemMore';
import Nav from '../../src/components/Nav';


export default function store() {

  return (
    <div>
      <Head>
        <title>Urban Bag</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>
        <Nav />
        <ItemMore />
      </Main>
    </div>
  );
}
