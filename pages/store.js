import React from 'react';
import Head from 'next/head'

import styled from 'styled-components';

const Div = styled.div`
padding-bottom: 900px;
height: 900px;
width: 100%;
background: #cecece;
/* position: sticky; */

h1 {
    color :#000;
}
`

import Main from '../src/components/Main';
import Nav from '../src/components/Nav';

export default function store() {
    return (
        <div >
            <Head>
                <title>Urban Store</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Main>
                <Nav />
                <Div >
                    <h1>OI</h1>
                    <h1>OI</h1>
                </Div>
            </Main>
        </div>
    );
}
