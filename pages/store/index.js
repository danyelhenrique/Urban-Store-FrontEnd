import React from 'react';
import Head from 'next/head';
import { useInView } from 'react-intersection-observer';
import styled from 'styled-components';

import Main from '../../src/components/Main';
import Nav from '../../src/components/Nav';

import MainStore from '../../src/components/MainStore';
import Hero from '../../src/components/Hero';

export const Div = styled.div`
  width: 100%;
  height: 40px;
  background: red;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function store() {
  const [ref, inView] = useInView({
    threshold: 0
  });
  console.log('inView', inView);

  return (
    <>
      <Head>
        <title>Urban Store</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>
        <Nav />
        <Hero />
        <Div ref={ref} />
        <MainStore />
      </Main>
    </>
  );
}
