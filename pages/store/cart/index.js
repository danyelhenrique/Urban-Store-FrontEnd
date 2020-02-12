import React from 'react';
import Head from 'next/head';

import MainCart from '../../../src/components/MainCart';

export default function Cart() {
  return (
    <>
      <Head>
        <title>Cart</title>
      </Head>
      <MainCart />
    </>
  );
}
