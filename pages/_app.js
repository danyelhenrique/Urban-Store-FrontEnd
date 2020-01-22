import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { ApolloProvider } from '@apollo/react-hooks';
import App from 'next/app';
import Layout from '../src/components/Layout';
import withApolloClient from '../lib/with-apollo-client';

import Context from '../src/context';

class MyApp extends App {
  render() {
    const { Component, pageProps, apolloClient } = this.props;

    return (
      <>
        <Layout>
          <Context>
            <ApolloProvider client={apolloClient}>
              <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnVisibilityChange
                draggable
                pauseOnHover
              />
              <Component {...pageProps} />
            </ApolloProvider>
          </Context>
        </Layout>
      </>
    );
  }
}

export default withApolloClient(MyApp);
