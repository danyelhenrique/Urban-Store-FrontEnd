import React, { useEffect } from 'react';
import Head from 'next/head';

import { useDispatch } from 'react-redux';

import client from '../../services/apollo';

import { products } from '../../src/store/modules/products/actions';

import { products as prodQeury } from '../../src/graphql/gql/products';

import MainStore from '../../src/components/MainStore';
import Hero from '../../src/components/Hero';

function Store({ data }) {
  const dispatch = useDispatch();

  useEffect(() => {
    if (data) {
      dispatch(products(data));
    }
  }, [data]);

  return (
    <>
      <Head>
        <title>Urban Store</title>
      </Head>
      <Hero />
      <MainStore />
    </>
  );
}

Store.getInitialProps = async () => {
  try {
    const data = await client.request(prodQeury, { page: 1 });
    const { indexProduct } = data;
    return { data: indexProduct };
  } catch (error) {
    return { data: [] };
  }
};

export default Store;
