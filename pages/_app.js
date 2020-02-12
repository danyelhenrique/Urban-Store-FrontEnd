/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import App from 'next/app';
import Head from 'next/head';

import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import Container from '../src/components/Container';
import Global from '../global/styles';

import { store, persistor } from '../src/store';

class MyApp extends App {
  static async getInitialProps({ Component, ctx, router }) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    return {
      pageProps
    };
  }

  render() {
    const { Component, pageProps } = this.props;

    if (typeof window === 'undefined') {
      return (
        <>
          <Head>
            <title>Home</title>
            <link rel="icon" href="/favicon.ico" />
            <link rel="preconnect" href="https://images.pexels.com" />
            <link
              rel="preconnect"
              href="https://scontent.fgig4-1.fna.fbcdn.net"
            />
          </Head>
          <Provider store={store}>
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
          </Provider>
        </>
      );
    }
    return (
      <>
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
      </>
    );
  }
}

export default MyApp;
