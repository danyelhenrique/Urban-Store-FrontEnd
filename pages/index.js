import React from 'react'
import Head from 'next/head'

import styled from 'styled-components';

const H1 = styled.h1`
  color: #ddd;
`;


const Home = () => (
  <div>
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <H1 >Welcome to Next.js!</H1>

  </div>
)

export default Home
