import React from 'react';
import Head from 'next/head'



import Main from '../src/components/Main';
import Nav from '../src/components/Nav';
import Carrossel from '../src/components/Carrossel';
import MainStore from '../src/components/MainStore';
import Image from '../src/components/Image';
import SidebarStore from '../src/components/SidebarStore';



export default function store() {
    return (
        <div >
            <Head>
                <title>Urban Store</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Main>
                <Nav />
                <SidebarStore />
                <Image />
                <MainStore />
            </Main>
        </div>
    );
}
