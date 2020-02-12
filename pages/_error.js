import React from 'react';
import Head from 'next/head';

import NotFound from '../src/components/404';

export default function store() {
  return (
    <>
      <Head>
        <title>Urban Store</title>
      </Head>
      <NotFound />
    </>
  );
}
