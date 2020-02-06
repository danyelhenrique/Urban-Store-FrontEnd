/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import App from 'next/app';

import { ToastContainer } from 'react-toastify';
import { ApolloProvider } from '@apollo/react-hooks';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import Container from '../src/components/Container';
import Global from '../global/styles';
import withApolloClient from '../lib/with-apollo-client';

import { store, persistor } from '../src/store';

class MyApp extends App {
  render() {
    const { Component, pageProps, apolloClient } = this.props;

    return (
      <>
        <ApolloProvider client={apolloClient}>
          <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
              <Container>
                <Global />
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
              </Container>
            </PersistGate>
          </Provider>
        </ApolloProvider>
      </>
    );
  }
}

export default withApolloClient(MyApp);
