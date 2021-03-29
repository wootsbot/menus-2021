import React from 'react';

import { Provider } from 'react-redux';
import Head from 'next/head';
import App from 'next/app';

import withReduxStore from 'utils/with-redux-store';

import 'fontsource-metropolis';
import '@typefaces-pack/typeface-inter';

class Srr extends App {
  render() {
    const { Component, pageProps, reduxStore } = this.props;
    return (
      <React.StrictMode>
        <Head>
          <title>Parrot</title>
        </Head>

        <Provider store={reduxStore}>
          <Component {...pageProps} />
        </Provider>
      </React.StrictMode>
    );
  }
}

export default withReduxStore(Srr);
