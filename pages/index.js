import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import styled from 'styled-components';

import HomeContainer from '../src/components/Home';
import SidebarHome from '../src/components/SidebarHome';

const Home = () => {
  const [load, setLoad] = useState(false);

  useEffect(() => {
    setLoad(true);
  }, []);

  return (
    <>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeContainer>
        <SidebarHome load={load} />
        <Backgorund load={load} />
      </HomeContainer>
    </>
  );
};

const Backgorund = styled.div`
  background: url('/background.jpg') no-repeat;

  background-position: center;
  background-size: 100% 100%;

  object-fit: cover;
  width: calc(100% - 400px);

  height: 100%;

  position: absolute;
  top: 0;
  transform: translateX(${props => (props.load ? '400px' : '0%')});
  transition: transform 5s ease;

  @media (max-width: 900px) {
    width: calc(100% - 300px);

    transform: translateX(${props => (props.load ? '300px' : '0%')});
  }

  @media (max-width: 600px) {
    width: calc(100% - 200px);

    transform: translateX(${props => (props.load ? '200px' : '0%')});
  }
`;

export default Home;
