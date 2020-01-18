import React,{useState , useEffect} from 'react';
import Head from 'next/head';
import styled from 'styled-components';

import HomeContainer from '../src/components/Home';
import SidebarHome from '../src/components/SidebarHome';

const Home = () => {
    const [load, setLoad] = useState(false)  
  
    useEffect(()=>{
      setLoad(true)
    },[])
  
  return(
  <>
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <HomeContainer>
      <SidebarHome load={load}/>
      <Backgorund load={load}/>
    </HomeContainer>
  </>
)}

const Backgorund = styled.div`
  background: url('/background.jpg') no-repeat;

  background-position: center;
  background-size: 100% 100%;

  /* background-size: cover; */
  object-fit: cover;
  width: calc(100% - 400px);

  height: 100%;

  position: absolute;
  top: 0;
  transform:translateX(${props => props.load ? "400px" : "0%"});
  transition: transform 5s ease;


`;

export default Home;
