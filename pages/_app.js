/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { ToastContainer } from 'react-toastify';
import { ApolloProvider } from '@apollo/react-hooks';
import App from 'next/app';
import { Provider } from 'react-redux';
import Layout from '../src/components/Layout';
import withApolloClient from '../lib/with-apollo-client';

import Hoc from '../lib/withLocalStorage';

import store from '../src/store';

import Context from '../src/context';

class MyApp extends App {
  render() {
    const { Component, pageProps, apolloClient } = this.props;

    return (
      <>
        <ApolloProvider client={apolloClient}>
          <Layout>
            <Provider store={store}>
              <Context>
                <Hoc />
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
              </Context>
            </Provider>
          </Layout>
        </ApolloProvider>
      </>
    );
  }
}

export default withApolloClient(MyApp);
