import React from 'react';
import Head from 'next/head';

import { useRouter } from 'next/router';

// import { Container } from './styles';
import Main from '../../src/components/Main';
import ItemDetails from '../../src/components/ItemDetails';
import Nav from '../../src/components/Nav';

export default function store() {
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>Urban </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>
        <Nav />
        <ItemDetails />
      </Main>
    </div>
  );
}
