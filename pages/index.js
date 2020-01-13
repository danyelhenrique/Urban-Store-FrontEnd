import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';

import HomeContainer from '../src/components/Home';
import SidebarHome from '../src/components/SidebarHome';

const Home = () => (
  <div>
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <HomeContainer>
      <Backgorund>
        <SidebarHome />
      </Backgorund>
    </HomeContainer>
  </div>
);

const Backgorund = styled.div`
  background: url('/background.jpg') no-repeat fixed;
  background-size: cover;
  object-fit: cover;
  height: 100%;
  width: 100%;
`;

export default Home;
