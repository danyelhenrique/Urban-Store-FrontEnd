import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { useQuery } from '@apollo/react-hooks';

import Head from 'next/head';

import Main from '../../src/components/Main';
import Nav from '../../src/components/Nav';
import AccontSettings from '../../src/components/AccontSettings';
import Spinner from '../../src/components/Spinner';

import { Token } from '../../src/graphql/gql/auth';

export default function Settings() {
  const [loading, setLoading] = useState(true);
  
  const { isValid, token } = useSelector(state => state.user);

  const router = useRouter();


  if (!isValid) return router.push('/store', '/store');

  useQuery(Token, {
    variables: { token },
    onCompleted: () => {
      setLoading(false);
    },
    onError: () => router.push('/store', '/store')
  });

  if (loading) return <Spinner active={loading} center />;

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
