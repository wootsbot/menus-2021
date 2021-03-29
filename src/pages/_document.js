import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

import { Global, css } from '@emotion/react';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const page = ctx.renderPage();
    // extract css to render in SSR
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps, ...page };
  }

  render() {
    return (
      <Html>
        <Global
          styles={css`
            ::selection {
              background-color: #000;
              color: #fff;
            }
            body,
            html {
              margin: 0;
              padding: 0;
              font-family: 'Inter';
            }
          `}
        />

        <Head>
          <meta name="theme-color" content="#000" />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
