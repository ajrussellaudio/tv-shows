import App, { Container } from "next/app";
import Head from "next/head";
import { GlobalStyles } from "../styles/global";
// import React from "react";

export default class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }
  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <GlobalStyles />
        <Head>
          <title>Alan's TV Shows</title>
          <meta charSet="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        </Head>
        <Component {...pageProps} />
      </Container>
    );
  }
}
