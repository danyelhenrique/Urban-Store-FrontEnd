import React from 'react';
import Head from 'next/head';

import Main from '../../../src/components/Main';
import Nav from '../../../src/components/Nav';
import MainCart from '../../../src/components/MainCart';

export default function cart() {
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
