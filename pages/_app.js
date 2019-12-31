import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import App, { Container } from 'next/app';
import Layout from '../src/components/Layout';
import withApolloClient from '../lib/with-apollo-client';

import NavContext from '../src/context/Navbar';

const isServer = typeof window === 'undefined';
!isServer ? require('../lib/reactotron') : null;
// import { client } from '../services';

class MyApp extends App {
	render() {
		const { Component, pageProps, apolloClient } = this.props;

		return (
			<Container>
				<Layout>
					<NavContext>
						<ApolloProvider client={apolloClient}>
							<Component {...pageProps} />
						</ApolloProvider>
					</NavContext>
				</Layout>
			</Container>
		);
	}
}

export default withApolloClient(MyApp);
