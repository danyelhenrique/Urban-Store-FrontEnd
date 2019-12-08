import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';

import Main from '../src/components/Main';
import SidebarHome from '../src/components/SidebarHome';

const Home = () => (
  <div>
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Main>
      <Backgorund>
        <SidebarHome />
      </Backgorund>
    </Main>
  </div>
);

const Backgorund = styled.div`
  background: url('/background.jpg') no-repeat fixed;
  background-size: cover;
  /* background-size: 100% 100vh; */
  object-fit: cover;
  height: 100%;
  width: 100%;
`;

export default Home;
