/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { ToastContainer } from 'react-toastify';
import { ApolloProvider } from '@apollo/react-hooks';
import App from 'next/app';
import { Provider } from 'react-redux';
import Container from '../src/components/Container';
import Global from '../global/styles';
import withApolloClient from '../lib/with-apollo-client';

import store from '../src/store';

import Context from '../src/context';

class MyApp extends App {
  render() {
    const { Component, pageProps, apolloClient } = this.props;

    return (
      <>
        <ApolloProvider client={apolloClient}>
          <Provider store={store}>
            <Container>
              <Global />
              <Context>
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
            </Container>
          </Provider>
        </ApolloProvider>
      </>
    );
  }
}

export default withApolloClient(MyApp);
