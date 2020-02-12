import React, { useState, useEffect } from 'react';
import Head from 'next/head';

import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';
import client from '../../services/apollo';

import { invalidUser } from '../../src/store/modules/user/actions';

import Main from '../../src/components/Main';
import Nav from '../../src/components/Nav';
import AccontSettings from '../../src/components/AccontSettings';
// import Spinner from '../../src/components/Spinner';

import { Token } from '../../src/graphql/gql/auth';

export default function Settings() {
  const dispatch = useDispatch();
  const router = useRouter();

  const { token } = useSelector(state => state.user);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function ValidateToken() {
      const userToken = await client.request(Token, { token });

      if (!userToken.isValid) {
        dispatch(invalidUser({ isValid: false }));

        router.push('/store', '/store');

        setLoading(false);
        return;
      }

      setLoading(false);
    }
    ValidateToken();
  }, [token]);

  // useQuery(Token, {
  //   variables: { token },
  //   onCompleted: Tdata => {
  //     const { validateToken } = Tdata;

  //     if (!validateToken.isValid) {
  //       dispatch(invalidUser({ isValid: false }));
  //       return router.push('/store', '/store');
  //     }

  //     setLoading(false);
  //   },
  //   onError: () => router.push('/store', '/store')
  // });

  if (loading) return <h1> Load </h1>;
  // if (loading) return <Spinner active={loading} center />;

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
