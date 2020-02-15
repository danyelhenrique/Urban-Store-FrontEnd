import React, { useEffect } from 'react';
import Head from 'next/head';

import { useDispatch } from 'react-redux';

import ItemMore from '../../src/components/ItemMore';
import { product } from '../../src/store/modules/products/actions';

import client from '../../services/apollo';
import { productByName } from '../../src/graphql/gql/products';

function Slug({ prod }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(product(prod));
  }, [prod]);

  return (
    <>
      <Head>
        <title>Urban Bag</title>
      </Head>
      <ItemMore />
    </>
  );
}

Slug.getInitialProps = async ({ query }) => {
  try {
    const name = query.slug.split('_').join(' ');
    const prod = await client.request(productByName, { name });

    return { prod: prod.showProduct };
  } catch (err) {
    return { prod: {} };
  }
};

export default Slug;
