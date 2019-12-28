import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import App, { Container } from 'next/app';
import Layout from '../src/components/Layout';
import withApolloClient from '../lib/with-apollo-client';

// import { client } from '../services';

class MyApp extends App {
	render() {
		const { Component, pageProps, apolloClient } = this.props;

		return (
			<Container>
				<Layout>
					<ApolloProvider client={apolloClient}>
						<Component {...pageProps} />
					</ApolloProvider>
				</Layout>
			</Container>
		);
	}
}

export default withApolloClient(MyApp);
