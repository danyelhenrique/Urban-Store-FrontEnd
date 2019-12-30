import React from 'react';
import Head from 'next/head';

import Main from '../../src/components/Main';
import Nav from '../../src/components/Nav';
import NavContext from '../../src/context/Navbar';

import Carrossel from '../../src/components/Carrossel';
import MainStore from '../../src/components/MainStore';
import Image from '../../src/components/Image';
import SiidebarStore from '../../src/components/SidebarStore';

export default function store() {
	return (
		<div>
			<Head>
				<title>Urban Store</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Main>
				<NavContext>
					<Nav />
				</NavContext>
				<SiidebarStore />
				<Image />
				<MainStore />
			</Main>
		</div>
	);
}
