import React from 'react';
import App, { Container } from 'next/app';
import Layout from '../src/components/Layout';


class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Container>
    );
  }
}

export default MyApp;
