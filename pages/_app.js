import React, { Fragment } from "react";
import { ApolloProvider } from "@apollo/react-hooks";
import App from "next/app";
import Layout from "../src/components/Layout";
import withApolloClient from "../lib/with-apollo-client";

import Context from "../src/context";

class MyApp extends App {
  render() {
    const { Component, pageProps, apolloClient } = this.props;

    return (
      <Fragment>
        <Layout>
          <Context>
            <ApolloProvider client={apolloClient}>
              <Component {...pageProps} />
            </ApolloProvider>
          </Context>
        </Layout>
      </Fragment>
    );
  }
}

export default withApolloClient(MyApp);
