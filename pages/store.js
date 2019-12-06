import React from 'react';
import Head from 'next/head'

import styled from 'styled-components';

import Main from '../src/components/Main';
import Nav from '../src/components/Nav';
import Carrossel from '../src/components/Carrossel';

export default function store() {
    return (
        <div >
            <Head>
                <title>Urban Store</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Main>
                <Nav />
                <Carrossel />
            </Main>
        </div>
    );
}
