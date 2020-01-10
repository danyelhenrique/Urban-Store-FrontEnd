import React, {useContext, useMemo} from 'react';
import Head from 'next/head';
import localForage from '../../../config/localForage'
import { Context } from '../../../src/context';

import Main from '../../../src/components/Main';
import Nav from '../../../src/components/Nav';
import MainCart from '../../../src/components/MainCart';
import useLocalForage from '../../../src/hooks/useLocalForage'

const dbNameCart = '@URBARN-STORAGE-CART';

export default function Cart() {
  const [_, dispatch] = useContext(Context)
  const [data]= useLocalForage(dbNameCart, localForage)
  
  useMemo(()=>{
    dispatch({type: '@@INITIAL_CART' , payload: data})
  },[data])

  return (
    <div>
      <Head>
        <title>Cart</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>
        <Nav />
        <MainCart />
      </Main>
    </div>
  );
}
